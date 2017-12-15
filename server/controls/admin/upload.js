


let sql = require('../../sql/sql');
let conn = require('../../sql/conn');
let nodeUpload = require('./multi_upload');
let formidable = require('formidable');
let path = require('path');
let fs = require('fs');

module.exports = {
    // 登录
    // userUploadPic(req, res){
    //     let form = new formidable.IncomingForm();
    //     let avatarName='';
    //     form.parse(req, function(err, fields, files) {
    //         if (err) {
    //             return res.json({
    //                 "code": 500,
    //                 "message": "内部服务器错误"
    //             })
    //         }
    //         // 获取后缀名
    //         let extname = path.extname(files.avatar.name)
    //         let oldpath = files.avatar.path;
    //         // let newpath = '../../../static/images/mini_logo' + extname;
    //         let newpath = './tmp/mini_logo' + extname;
    //          avatarName = 'mini_logo' + extname;
    //         // 更改名字和路径
    //         fs.rename(oldpath, newpath, function(err) {
    //             console.log(oldpath,newpath,'oldpath,newpath');
    //             if (err) {
    //                 return res.json({
    //                     "code": 401,
    //                     "msg": "图片上传失败"
    //                 })
    //                 console.log('图片上传失败')
    //             }else {
    //                 console.log('图片上传成功')
    //             }
    //         })
    //     })
    //     setTimeout(function () {
    //         // 更新数据库
    //         const data  = {pic:avatarName};
    //         console.log(avatarName,'avatarName');
    //         conn.connPool(sql.uploadUserInfo, [data,'1513061111042'],rows => {
    //             // rows = formatData(rows);
    //             console.log(rows,'rows');
    //             res.json({code: 200, msg: 'ok', users: rows});
    //         });
    //     },3000)
    //
    // },

    userUploadPic(req, res, next){
        nodeUpload(req,{uploadDir:'../static/images/mini_logo/'},function (err, fields) {
            if(err){res.json({code:401,msg:'上传失败'})}
            console.log(fields);
            res.json({code:200,msg:'上传成功'});
        });
    }

};