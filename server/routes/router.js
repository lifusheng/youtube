
const express = require('express');

const user = require('../controls/user');
const play = require('../controls/play');
const upload = require('../controls/admin/upload');
const api = require('../api');
// let upload = require('../utils/upload');

const router = express.Router();


// user
router.get(api.userList, user.fetchAll);
router.post(api.userRegister, user.register);
router.post(api.userLogin, user.login);
router.post(api.userUploadPic, upload.userUploadPic);

// router.post(api.userChangeRole, user.controlVisit, user.changeRole); // 更改权限
// router.post(api.goodsUploadImg, upload.single('avatar'),goods.uploadGoodsImg); // 图片上传

//play
router.post(api.palyVideoUrl, play.findPlayVideo);





module.exports = router;