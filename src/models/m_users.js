module.exports = {
    getData(conn, callback) {
        conn.query('select * from user', (data) => {
            // === handling query error ===
            // if (err) {
            //     callback(err);
            // } else {
            callback(data);
            // }
        })
    },
    saveData(data, conn , callback) {  
        conn.query(`INSERT INTO userkk(user, password, name, rule, phone, status)
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
                            callback(null, 'Save Sucess');
                        }
                    })
    }
}