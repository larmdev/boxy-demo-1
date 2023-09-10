const express = require('express');
const router = express.Router();
const { VerifyToken } = require('../../middleware/auth.middleware.js');

const postSignUpManageServices = require('../../service/post.signup.manage.service.js');

router.get('/', VerifyToken, async (req, res) => {
    const postId = req.query.postId;
    const size = req.query.size || 20;
    const page = req.query.page;
    const result = await postSignUpManageServices.getPostSignUpManage(postId, size, page);
    return res.json(result);
});

router.put('/:postHistoryId', VerifyToken, async (req, res) => {
    const accountId = req.context.accountId;
    const postHistoryId = req.params.postHistoryId;
    const isActive = req.query?.isActive?.toLowerCase() === 'false' ? false: true;
    const result = await postSignUpManageServices.approve(accountId, postHistoryId, isActive);
    return res.json(result);
});


module.exports = router