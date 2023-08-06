const express = require('express')
const router = express.Router()
const { VerifyToken } = require('../../middleware/auth.middleware.js');

const postRoute = require('./post.route.js');
const postHistoryRoute = require('./post.history.route.js');

router.use('/', postRoute);
router.use('/historys', postHistoryRoute);

module.exports = router 