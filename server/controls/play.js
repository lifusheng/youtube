

let sql = require('../sql/sql');
let conn = require('../sql/conn');

module.exports = {
    // 登录
    findPlayVideo (req, res) {
        const vid = req.body.vid;
            console.log('findPlayVideo')
        conn.connPool(sql.queryByVid, [vid], rows => {
            if (!rows.length) {
                res.json({code: 400, msg: '视频不存在'});
                return;
            }
            const data = {
                vid: rows[0].vid,
                name: rows[0].name,
                url: rows[0].url,
                count: rows[0].count,
                class: rows[0].class,
                uptime: rows[0].uptime
            };
            res.json({code: 200, data: data});
        })
    }


};