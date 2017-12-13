module.exports = {
    queryAll: 'SELECT * FROM ??',
    del: 'DELETE FROM ?? WHERE id=?',
    login: 'SELECT *  FROM t_user WHERE name=?',
    insertUserTb:'INSERT INTO t_user SET ?',
    queryByVid: 'SELECT * FROM t_video WHERE vid=?'
};