const { readClient, writeClient } = require('../prisma/client.js');
const { Response } = require('../constants/response.js');
const { generateToken, sha512 } = require('../utils/crypto.utils.js');
const { signAccessToken } = require('../utils/jwt.utils.js');
const { FirebaseApp } = require('../config/filebase.js');

async function uploadImage(file) {
    try {

        if (file.mimetype == 'image/png' || file.mimetype == 'image/png') {
            const imageUrl = await toFilebaseStorage(file);
            return {
                code: Response.CreatedSuccess.code,
                message: Response.CreatedSuccess.message,
                imageUrl: imageUrl
            }
        }

        return {
            code: Response.BadRequest.code,
            message: Response.BadRequest.message,
        }
    } catch (error) {
        return error;
    }
}

async function toFilebaseStorage(imagefile) {
    try {
        return new Promise(async (resolve, reject) => {
            try {
                const initIamgeName = Date.now() + "." + imagefile.originalname.split(".").pop();
                const bucket = FirebaseApp.storage().bucket();
                const file = bucket.file(initIamgeName);

                const stream = file.createWriteStream({
                    metadata: { contentType: 'image/png' || 'image/jpg' }
                })

                stream.on('error', (error) => {
                    reject(error)
                })

                stream.on('finish', async () => {
                    const result = await file.makePublic()
                    const imageUrl = `${process.env.PUBLIC_STORAGE_URL}/${result[0].bucket}/${initIamgeName}`
                    resolve(imageUrl);
                })
                stream.end(imagefile.buffer)

            } catch (error) {
                reject(error)
            }
        })
    } catch (error) {
        return error;
    }
}

module.exports = {
    uploadImage
}
