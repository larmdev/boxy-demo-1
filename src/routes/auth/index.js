const express = require('express')
const router = express.Router()
const { VerifyToken } = require('../../middleware/auth.middleware.js');

const authServices = require('../../service/auth.service.js');

router.get('/me', VerifyToken, async (req, res) => {
    const account = req.context.account;
    return res.json(account);
});

router.post('/signup', async (req, res) => {
    const body = req.body;
    const result = await authServices.signUp(body);
    return res.json(result);
});

router.post('/signin', async (req, res) => {
    const body = req.body;
    const result = await authServices.signIn(body);
    return res.json(result);
});

module.exports = router