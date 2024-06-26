const { readClient, writeClient } = require('../prisma/client.js');
const { Response } = require('../constants/response.js');
const { generateToken, sha512 } = require('../utils/crypto.utils.js');
const { signAccessToken } = require('../utils/jwt.utils.js');

async function getPostSignUp(accountId, size, page, keyword) {
    
    try {
        const limit = +(size);
        const offset = +(limit * ((page || 1) - 1));
    
        const conditions = {};

        if (accountId) {
            conditions.accountId = accountId;
        }

        const posts = await readClient.postHistory.findMany({
            where: conditions,
            skip: offset,
			take: limit,
            orderBy: {
                createdAt: 'desc'
            },
            include: {
                Account: {
                    select: {
                        username: true,
                        firstName: true,
                        lastName: true,
                        email: true,
                        faculty: true,
                        branch: true
                    }
                },
                Post: true
            }
        })

        const count = await readClient.postHistory.count({
            where: conditions
        })

        return {
            code: Response.Success.code,
            message: Response.Success.message,
            total: count,
			lastPage: Math.ceil(count / limit),
			currPage: +page || 1,
			limit: limit,
            data: posts
        }
    } catch (error) {
        return error;
    }
}

async function createPostSignUp(accountId, postId) {
    try {

        const payload = {
            accountId: accountId,
            postId: postId,
            isCancel: false
        };

        const postExit = await readClient.postHistory.findFirst({
            where: payload
        })

        if (postExit) {
            return {
                code: Response.CreatedSuccess.code,
                message: Response.CreatedSuccess.message,
                postId: postExit.postId
            }
        }

        const created = await readClient.postHistory.create({
            data: payload
        })

        return {
            code: Response.CreatedSuccess.code,
            message: Response.CreatedSuccess.message,
            postId: created.postId
        }
    } catch (error) {
        return error;
    }
}

async function updatePostSignUp(accountId, postId) {
    try {

        const postSignUpExit = await readClient.postHistory.findFirst({
            where: {
                accountId: accountId,
                postId: postId
            }
        });

        if (!postSignUpExit) {
            return {
                code: Response.BadRequest.code,
                message: Response.BadRequest.message,
            }
        }

        const updated = await readClient.postHistory.update({
            where: { postHistoryId: postSignUpExit.postHistoryId },
            data: {
                isCancel: true
            }
        })

        return {
            code: Response.Success.code,
            message: Response.Success.message,
            postId: updated.postId
        }
    } catch (error) {
        console.log('error', error)
        return error;
    }
}

module.exports = {
    getPostSignUp,
    createPostSignUp,
    updatePostSignUp,
}