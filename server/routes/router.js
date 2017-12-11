
let express = require('express');

let user = require('../controls/user');
let api = require('../api');
// let upload = require('../utils/upload');

let router = express.Router();




// user
router.get(api.userList, user.fetchAll);

// router.post(api.userChangeRole, user.controlVisit, user.changeRole); // 更改权限
// router.post(api.goodsUploadImg, upload.single('avatar'),goods.uploadGoodsImg); // 图片上传


module.exports = router;