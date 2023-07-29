const express = require('express');
const router = express.Router();

const authRoute = require('./auth/index.js');

router.use('/auth', authRoute);

module.exports = router