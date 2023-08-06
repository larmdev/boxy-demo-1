const express = require('express');
const router = express.Router();
const { VerifyToken } = require('../middleware/auth.middleware.js');

const authRoute = require('./auth/index.js');
const postRoute = require('./post/index.js');

router.use('/auth', authRoute);
router.use('/posts', postRoute);

module.exports = router