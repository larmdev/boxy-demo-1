const express = require('express');
const router = express.Router();
const { VerifyToken } = require('../../middleware/auth.middleware.js');

const postSignUpServices = require('../../service/post.signup.service.js');

router.get('/', VerifyToken, async (req, res) => {
    const accountId = req.context.accountId;
    const size = req.query.size || 20;
    const page = req.query.page;
    const keyword = req.query.keyword;
    const result = await postSignUpServices.getPostSignUp(accountId, size, page, keyword);
    return res.json(result);
});

router.put('/:postId', VerifyToken, async (req, res) => {
    const accountId = req.context.accountId;
    const postId = req.params.postId;
    const result = await postSignUpServices.createPostSignUp(accountId, postId);
    return res.json(result);
});

// cancel and delete postSignUp
router.delete('/:postId', VerifyToken, async (req, res) => {
    const accountId = req.context.accountId;
    const postId = req.params.postId;
    const result = await postSignUpServices.updatePostSignUp(accountId, postId);
    return res.json(result);
});

module.exports = router