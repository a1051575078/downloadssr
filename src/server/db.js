const mysql = require('mysql');
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '1',
    database: '1'
});
module.exports = {
    query:function(sql,callback){
        pool.getConnection((err, connection) => {
            if (err) {
                throw err;
            } else {
                connection.query(sql,(err, results) => {
                    if (err) {
                        throw err
                    } else {
                        callback(results)
                    }
                    connection.release()
                })
            }
        })
    }
};
