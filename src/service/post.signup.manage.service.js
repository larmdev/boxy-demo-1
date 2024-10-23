const { readClient, writeClient } = require('../prisma/client.js');
const { Response } = require('../constants/response.js');
const { Status } = require('../constants/status.js');
const { generateToken, sha512 } = require('../utils/crypto.utils.js');
const { signAccessToken } = require('../utils/jwt.utils.js');

async function getPostSignUpManage(postId, size, page, isActive, accountId) {
    
    try {
        const limit = +(size);
        const offset = +(limit * ((page || 1) - 1));
    
        const conditions = {};
        conditions.isCancel = false;

        if (postId) {
            conditions.postId = postId;
        }

        if (isActive != null) {
            conditions.isActive = isActive;
        }

        if (accountId != null) {
            conditions.Post = {
                accountId : accountId
            };  
        }

        const posts = await readClient.postHistory.findMany({
            where: conditions,
            skip: offset,
			take: limit,
            orderBy: {
                createdAt: 'asc'
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
        console.log('error', error);
        return error;
    }
}

async function approve(accountId, postHistoryId, isActive) {
    try {

        const postHistoryExit = await readClient.postHistory.findFirst({
            where: {
                postHistoryId: postHistoryId
            }
        });

        if (!postHistoryExit) {
            return {
                code: Response.BadRequest.code,
                message: Response.BadRequest.message,
            }
        }

        const updated = await readClient.postHistory.update({
            where: {
                postHistoryId: postHistoryId,
            },
            data: {
                isActive: isActive,
                status: Status.accept
            }
        })

        return {
            code: Response.CreatedSuccess.code,
            message: Response.CreatedSuccess.message,
            postId: updated.postId
        }
    } catch (error) {
        return error;
    }
}

module.exports = {
    getPostSignUpManage,
    approve,
}