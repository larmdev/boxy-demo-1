const express = require('express')
const router = express.Router()
const { VerifyToken } = require('../../middleware/auth.middleware.js');
const multer = require('multer');

const upload = multer({ storage: multer.memoryStorage() })

const imageServices = require('../../service/image.service.js');

router.post('/images',
    upload.single('file'),
    async (req, res) => {
    const file = req.file;
    const result = await imageServices.uploadImage(file);
    return res.json(result);
});


module.exports = router