const express = require('express');
const router = express.Router();
const { VerifyToken } = require('../../middleware/auth.middleware.js');

const postSignUpManageServices = require('../../service/post.signup.manage.service.js');

router.get('/', VerifyToken, async (req, res) => {
    const postId = req.query.postId;
    const size = req.query.size || 20;
    const page = req.query.page;
    var accountId = null;
    if (req.context.account.role == "1") {
        accountId = req.context.accountId;
    }
    const isActive = req.query?.isActive?.toLowerCase() === 'true' ? true: req.query?.isActive?.toLowerCase() === 'false' ? false: null;
    const result = await postSignUpManageServices.getPostSignUpManage(postId, size, page, isActive, accountId);
    return res.json(result);
});


router.put('/:postHistoryId', VerifyToken, async (req, res) => {
    const accountId = req.context.accountId;
    const postHistoryId = req.params.postHistoryId;
    const isActive = req.query?.isActive?.toLowerCase() === 'false' ? false: true;
    const result = await postSignUpManageServices.approve(accountId, postHistoryId, isActive);
    return res.json(result);
});

router.post('/:postHistoryId', VerifyToken, async (req, res) => {
    const accountId = req.context.accountId;
    const postHistoryId = req.params.postHistoryId;
    const isActive = req.query?.isActive?.toLowerCase() === 'false' ? false: true;
    const result = await postSignUpManageServices.approve(accountId, postHistoryId, isActive);
    return res.json(result);
});

// 
router.get('/get-post-history-by-id/:postHistoryId', VerifyToken, async (req, res) => {
    const postId = req.query.postId;
    var accountId = null;
    if (req.context.account.role == "1") {
        accountId = req.context.accountId;
    }
    const result = await postSignUpManageServices.getPostSignUpManageById(postHistoryId);
    return res.json(result);
});

router.put('/update-post-history-by-id/:postHistoryId', VerifyToken, async (req, res) => {
    const postId = req.query.postId;
    var accountId = null;
    if (req.context.account.role == "1") {
        accountId = req.context.accountId;
    }
    const result = await postSignUpManageServices.UpdatePostSignUpManageById(postHistoryId);
    return res.json(result);
});

module.exports = router