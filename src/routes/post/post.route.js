const express = require('express')
const router = express.Router()
const { VerifyToken } = require('../../middleware/auth.middleware.js');

const postServices = require('../../service/post.service.js');

router.get('/public', async (req, res) => {
    const size = req.query.size || 20;
    const page = req.query.page;
    const result = await postServices.getPost(null, size, page);
    return res.json(result);
});

router.get('/', VerifyToken, async (req, res) => {
    const accountId = req.context.accountId;
    const size = req.query.size || 20;
    const page = req.query.page;
    const result = await postServices.getPost(accountId, size, page);
    return res.json(result);
});

router.post('/', VerifyToken, async (req, res) => {
    const accountId = req.context.accountId;
    const body = req.body;
    const result = await postServices.createPost(accountId, body);
    return res.json(result);
});

router.put('/', VerifyToken, async (req, res) => {
    const accountId = req.context.accountId;
    const postId = req.body.postId;
    const body = req.body;
    const result = await postServices.updatePost(accountId, postId, body);
    return res.json(result);
});

router.delete('/:postId', VerifyToken, async (req, res) => {
    const accountId = req.context.accountId;
    const postId = req.params.postId;
    const result = await postServices.deletePost(accountId, postId);
    return res.json(result);
});

module.exports = router