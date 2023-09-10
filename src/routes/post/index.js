const express = require('express')
const router = express.Router()
const { VerifyToken } = require('../../middleware/auth.middleware.js');

const postRoute = require('./post.route.js');
const postSignUpRoute = require('./post.signup.route.js');
const postSignUpManageRoute = require('./post.signup.manage.route.js');


router.use('/', postRoute);
router.use('/signup', postSignUpRoute);
router.use('/manage', postSignUpManageRoute);


module.exports = router 