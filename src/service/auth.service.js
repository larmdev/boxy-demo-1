const { readClient, writeClient } = require('../prisma/client.js');
const { Response } = require('../constants/response.js');
const { generateToken, sha512 } = require('../utils/crypto.utils.js');
const { signAccessToken } = require('../utils/jwt.utils.js');

async function signUp(dto) {
    try {
        const conditions = {};

        if (dto.username) {
            conditions.username = dto.username;
        } else {
            return {
                code: Response.BadRequest.code,
                message: Response.BadRequest.message,
                error: 'Username is not found!'
            }
        }

        const findItem = await readClient.account.findFirst({
            where: conditions
        });

        if (findItem) {
            return {
                code: Response.BadRequest.code,
                message: Response.BadRequest.message,
                error: 'Username is not found!'
            }
        }

        const { passwordSalt, passwordHash } = sha512(dto.password, generateToken(16));

        const payload = {
            username: dto.username,
            firstName: dto.firstName,
            lastName: dto.lastName,
            role: dto.role,
            passwordHash: passwordHash,
            passwordSalt: passwordSalt

        }

        const created = await writeClient.account.create({
            data: payload
        })

        return {
            code: Response.CreatedSuccess.code,
            message: Response.CreatedSuccess.message,
            accountId: created.accountId
        }
    } catch (error) {
        return error;
    }
}

async function signIn(dto) {
    try {
        const conditions = {};
        if (dto.username) {
            conditions.username = dto.username;
        } else {
            return {
                code: Response.Unauthorized.code,
                message: Response.Unauthorized.message,
                error: 'Username is not found!'
            }
        }

        const account = await readClient.account.findFirst({
            where: conditions
        });

        if (!account) {
            return {
                code: Response.Unauthorized.code,
                message: Response.Unauthorized.message,
                error: 'Username is not found!'
            }
        }

        const { passwordHash } = sha512(dto.password, account.passwordSalt);

        if (passwordHash !== account.passwordHash) {
            return {
                code: Response.Unauthorized.code,
                message: Response.Unauthorized.message,
                error: 'Password is not found!'
            }
        }

        const accessToken = await signAccessToken(account);

        return {
            code: Response.Success.code,
            message: Response.Success.message,
            accessToken: accessToken
        }
    } catch (error) {
        return error;
    }
}

module.exports = {
    signUp,
    signIn
}
