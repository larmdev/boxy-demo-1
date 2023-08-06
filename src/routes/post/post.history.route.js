const express = require('express')
const router = express.Router()

const postServices = require('../../service/post.service.js');

router.get('/', async (req, res) => {
    // const account = req.context.account;
    return res.json({ message: 'history' });
});

module.exports = router