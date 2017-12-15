let sql = require('../sql/sql');
let moment = require('moment');
let bcrypt = require('bcryptjs');
let conn = require('../sql/conn');

function formatData(rows) {
    return rows.map(row => {
        let date = moment(row.create_time).format('YYYY-MM-DD');
        let obj = {};

        switch (row.role) {
            case 1:
                obj.role = '普通用户';
                break;
            case 10:
                obj.role = '管理员';
                break;
            case 100:
                obj.role = '超级管理员';
        }

        delete row.password;

        return Object.assign({}, row, {create_time: date}, obj);
    });
}

module.exports = {

    fetchAll (req, res) {
        conn.connPool(sql.queryAll, 't_user', rows => {
            // rows = formatData(rows);
            console.log(rows,'rows');
            res.json({code: 200, msg: 'ok', users: rows});
        });

    },
    uniqRnd(start, end){
        return Math.floor(Math.random() * (end - start) + start);
    },
    // 添加用户
    register (req, res) {
        const timestamp = (new Date()).valueOf();
        const userid=timestamp;
        // 密码加盐
        let name = req.body.name;
        let pass = req.body.pass;
        conn.connPool(sql.login, [name], rows => {
            if (rows.length) {
                res.json({code: 400, msg: '用户名已存在'});return;
            }
            bcrypt.genSalt(8, function(err, salt) {
                bcrypt.hash(pass, salt, function(err, hash) {
                    if (err) console.log(err);
                    const data  = {id: '', name: req.body.name,pwd:hash,userid:userid,subname:'',pic:'',regtime:timestamp,lasttime:''};
                    conn.connPool(sql.insertUserTb, data, rows => {
                        res.json({code: 200, msg: 'ok'});
                    });
                });
            });
        });
    },
    // 登录
    login (req, res) {
        let username = req.body.name;
        let pass = req.body.pass;

        conn.connPool(sql.login, [username], rows => {
            if (!rows.length) {
                res.json({code: 400, msg: '用户名不存在'});
                return;
            }
            let password = rows[0].pwd;
            bcrypt.compare(pass, rows[0].pwd, function(err, result) {
                if (result) {
                    let user = {
                        userid: rows[0].userid,
                        username: rows[0].name,
                        pic: rows[0].pic
                    };
                    req.session.login = user;
                    res.json({code: 200, msg: '登录成功', data: user});
                } else {
                    res.json({code: 400, msg: '密码错误'});
                }
            });
        });

    },
    // 删除用户
    deleteOne (req, res) {

        let id = req.body.id;

        conn.connPool(sql.del, ['user', id], rows => {
            res.json({code: 200, msg: 'done'});
        });

    },

    // 批量删除
    deleteMulti (req, res) {
        let id = req.body.id;

        conn.connPool('DELETE FROM user WHERE id IN ?', [[id]], rows => {
            res.json({code: 200, msg: 'done'});
        });

    },

    // 自动登录
    autoLogin (req, res) {
        let user = req.session.login;
        if (user) {
            res.json({code: 200, msg: '自动登录', user: user});

        } else {
            res.json({code: 400, msg: 'not found'});
        }
    },

    // 注销
    logout (req, res) {
        req.session.login = null;

        res.json({code: 200, msg: '注销'});
    },

    // 权限控制
    controlVisit (req, res, next) {
        if (req.session.login.role && req.session.login.role < 10) {
            res.json({code: 400, msg: '权限不够'});
            return;
        }
        next();
    },

    // 权限变更
    changeRole (req, res) {
        let role = req.session.login.role;
        let change_role = req.body.change_role;

        if (role !== 100 && change_role === 100) {
            res.json({code: 400, msg: '权限不够'});
            return;
        }

        let user_id = req.body.id;

        conn.connPool('UPDATE user SET role= ? WHERE id = ?', [change_role, user_id], rows => {
            console.log(rows);
            if (rows.affectedRows) {
                res.json({code: 200, msg: 'done'});
            }
        });
    },

};