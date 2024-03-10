const express = require('express');
const router = express.Router();
const { VerifyToken } = require('../middleware/auth.middleware.js');

const authRoute = require('./auth/index.js');
const postRoute = require('./post/index.js');
const fileRoute = require('./file/index.js');

router.use('/auth', authRoute);
router.use('/posts', postRoute);
router.use('/file', fileRoute);

module.exports = router