module.exports = {
    queryAll: 'SELECT * FROM ??',
    queryById: 'SELECT * FROM ?? WHERE id=?',
    queryByName: 'SELECT * FROM ?? WHERE id=?',
    del: 'DELETE FROM ?? WHERE id=?',
    login: 'SELECT *  FROM t_user WHERE name=?',
    insertUserTb:'INSERT INTO t_user SET ?'
};