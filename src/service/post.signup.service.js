const { readClient, writeClient } = require('../prisma/client.js');
const { Response } = require('../constants/response.js');
const { Status } = require('../constants/status.js');
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
                Post: true,
                ImagePostHistory: true
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

        const postLimit = await readClient.post.findFirst({
            where: { postId: postId }
        });

        if (postLimit == null) {
            return {
                code: Response.BadRequest.code,
                message: Response.BadRequest.message,
            }
        }

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

        const historyCount = await readClient.postHistory.count({
            where: { postId: postId }
        });

        if (postLimit.isLimit && postLimit.limit < historyCount) {
            return {
                code: Response.BadRequest.code,
                message: "เกินจำนวนที่สมัคร"
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

async function getPostSignUpHistoryById(postHistoryId) {
    
    try {
        const conditions = {
            postHistoryId: postHistoryId,
        };

        const posts = await readClient.postHistory.findFirst({
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
                Post: true,
                ImagePostHistory: true
            }
        })

        return {
            code: Response.Success.code,
            message: Response.Success.message,
            data: posts
        }

    } catch (error) {
        return error;
    }
}

async function sendPostSignUpHistoryById(dto) {
    
    try {
        const conditions = {
            postHistoryId: dto.postHistoryId,
        };

        const postHistory = await readClient.postHistory.findFirst({
            where: conditions,
        })

        if (!postHistory) {
            return {
                code: Response.BadRequest.code,
                message: Response.BadRequest.message,
            }
        }

        await readClient.postHistory.update({
            where: conditions,
            data: { 
                details: dto.details,
                status: Status.pending
            }
        })

        // create image post history

        const imagePayload = [];

        for(let i=0; i < dto.images.length; i++ ) {
            imagePayload.push({
                postHistoryId: dto.postHistoryId,
                imageUrl: dto.images[i]
            })
        }

        await readClient.imagePostHistory.createMany({
            data: imagePayload
        })

        return {
            code: Response.Success.code,
            message: Response.Success.message,
            data: posts
        }

    } catch (error) {
        return error;
    }
}

module.exports = {
    getPostSignUp,
    createPostSignUp,
    updatePostSignUp,
    getPostSignUpHistoryById,
    sendPostSignUpHistoryById
}