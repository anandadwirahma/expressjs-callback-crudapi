module.exports = {
    getData(conn, callback) {
        conn.query('select * from user', (err, data) => {
            if (err) {
                callback(err, null);
            } else {
                callback(null, data);
            }
        })
    },
    saveData(data, conn , callback) {  
        conn.query(`INSERT INTO user(user, password, name, rule, phone, status)
                    VALUE(
                        "${data['user']}", 
                        "${data['password']}", 
                        "${data['name']}", 
                        "${data['rule']}", 
                        "${data['phone']}", 
                        "${data['status']}")
                    `, (err, data) => {
                        if (err) {
                            callback(err, null);
                        } else {
                            callback(null, 'Data Saved');
                        }
                    })
    },
    updateData(data, conn, callback) {
        conn.query(`UPDATE user SET
                        user     = "${data['user']}",
                        password = "${data['password']}",
                        name     = "${data['name']}",
                        rule     = "${data['rule']}",
                        phone    = "${data['phone']}",
                        status   = "${data['status']}"
                    WHERE id = "${data['id']}"
                `, (err, data) => {
                    if (err) {
                        callback(err, null)
                    } else {
                        callback(null, 'Data Updated')
                    }
                })
    },
    deleteData(data, conn, callback) {
        conn.query(`DELETE FROM user WHERE id = "${data['id']}"`, (err, data) => {
            if (err) {
                callback(err, null)
            } else {
                callback(null, 'Data Deleted')
            }
        })
    }
}