module.exports = {
    queryAll: 'SELECT * FROM ??',
    del: 'DELETE FROM ?? WHERE id=?',
    login: 'SELECT *  FROM t_user WHERE name=?',
    insertUserTb:'INSERT INTO t_user SET ?',
    uploadUserInfo:'INSERT INTO t_user SET ? WHERE userid=? ',
    queryByVid: 'SELECT * FROM t_video WHERE vid=?'
};