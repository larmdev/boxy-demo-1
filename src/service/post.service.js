const { readClient, writeClient } = require('../prisma/client.js');
const { Response } = require('../constants/response.js');
const { generateToken, sha512 } = require('../utils/crypto.utils.js');
const { signAccessToken } = require('../utils/jwt.utils.js');
const { randomUUID } = require('crypto');
const { type } = require('os');
const { NowBkk, FormatDateTime } = require('../constants/DateUtil.js');

async function getPost(accountId, postId, size, page, keyword) {
    
    try {
        const limit = +(size);
        const offset = +(limit * ((page || 1) - 1));
        
        const currentDateTime = NowBkk();

        const conditions = {};
        conditions.isDelete = false;

        if (accountId) {
            conditions.accountId = accountId;
        }
        else {
            conditions.startDate = {
                lte: currentDateTime
            }

            conditions.endDate = {
                gte: currentDateTime
            }
        }

        if (postId) {
            conditions.postId = postId;
        }

        if (keyword) {
            conditions.OR = [
                {
                 name: { contains: keyword },
                },
                {
                 detail: { contains: keyword }
                },
            ]
        }

        const posts = await readClient.post.findMany({
            where: conditions,
            include: {
                Image: {
                    select: {
                        imageUrl: true
                    }
                },
                _count: {
                    select: {
                        PostHistory: {
                            where: {
                                isActive: true
                            }
                        }
                    }
                }
            },
            skip: offset,
			take: limit,
            orderBy: {
                createdAt: 'desc'
            },
        })

        const count = await readClient.post.count({
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
        console.log('error', error)
        return error;
    }
}

async function createPost(accountId, dto) {
    try {

        const postId = randomUUID();

        const payload = {
            postId: postId,
            accountId: accountId,
            name: dto.name,
            detail: dto.detail,
            point: dto.point,
            startDateBkk: dto.startDateBkk,
            startTimeBkk: dto.startTimeBkk,
            endDateBkk: dto.endDateBkk,
            endTimeBkk: dto.endTimeBkk,
            type: dto.type,
            limit: dto.limit,
            isLimit: dto.isLimit
        };

        const startDate = FormatDateTime(payload.startDateBkk, payload.startTimeBkk);
        const endDate = FormatDateTime(payload.endDateBkk, payload.endTimeBkk);

        payload.startDate = startDate;
        payload.endDate = endDate;

        const imagePayload = [];

        for(let i=0; i < dto.images.length; i++ ) {
            imagePayload.push({
                postId: postId,
                imageUrl: dto.images[i]
            })
        }

        const created = await readClient.post.create({
            data: payload
        })

        const createImage = await readClient.image.createMany({
            data: imagePayload
        })

        return {
            code: Response.CreatedSuccess.code,
            message: Response.CreatedSuccess.message,
            postId: postId
        }
    } catch (error) {
        console.log('error', error)
        return error;
    }
}

async function updatePost(accountId, postId, dto) {
    try {

        const postExit = await readClient.post.findFirst({
            where: {
                accountId: accountId,
                postId: postId
            }
        });

        if (!postExit) {
            return {
                code: Response.BadRequest.code,
                message: Response.BadRequest.message,
            }
        }

        const payload = {
            name: dto.name,
            detail: dto.detail,
            point: dto.point,
            startDateBkk: dto.startDateBkk,
            startTimeBkk: dto.startTimeBkk,
            endDateBkk: dto.endDateBkk,
            endTimeBkk: dto.endTimeBkk,
            type: dto.type,
            limit: dto.limit,
            isLimit: dto.isLimit
        };

        const startDate = FormatDateTime(payload.startDateBkk, payload.startTimeBkk);
        const endDate = FormatDateTime(payload.endDateBkk, payload.endTimeBkk);

        payload.startDate = startDate;
        payload.endDate = endDate;

        const imagePayload = [];

        for(let i=0; i < dto.images.length; i++ ) {
            imagePayload.push({
                postId: postId,
                imageUrl: dto.images[i]
            })
        }

        await readClient.image.deleteMany({
            where: {
                postId: postId
            }
        })

        const created = await readClient.post.update({
            where: { postId: postId },
            data: payload
        })

        await readClient.image.createMany({
            data: imagePayload
        })

        return {
            code: Response.CreatedSuccess.code,
            message: Response.CreatedSuccess.message,
            postId: created.postId
        }
    } catch (error) {
        console.log('error', error)
        return error;
    }
}

async function deletePost(accountId, postId) {
    try {

        const postExit = await readClient.post.findFirst({
            where: {
                accountId: accountId,
                postId: postId
            }
        });

        if (!postExit) {
            return {
                code: Response.BadRequest.code,
                message: Response.BadRequest.message,
            }
        }

        const deleted = await readClient.post.update({
            where: { postId: postId },
            data: {
                isDelete: true
            }
        })

        return {
            code: Response.Success.code,
            message: Response.Success.message,
            postId: deleted.postId
        }
    } catch (error) {
        console.log('error', error)
        return error;
    }
}

module.exports = {
    getPost,
    createPost,
    updatePost,
    deletePost
}