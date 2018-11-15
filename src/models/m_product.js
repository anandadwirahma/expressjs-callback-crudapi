module.exports = {

    getData(conn, callback) {
        conn.query('select * from product', (err, data) => {
            if (err) {
                callback(err, null)
            } else {
                callback(null, data)
            }
        })
    },
    saveData(data, conn, callback) {
        conn.query(`INSERT INTO product (variant, description, url_img)
                    VALUES(
                        "${data['variant']}",
                        "${data['description']}",
                        "${data['url_img']}"
                    )`, (err, data) => {
                        if (err) {
                            callback(err, null)
                        } else {
                            callback(null, 'Data Saved')
                        }
                    })
    },
    updateData(data, conn, callback) {
        conn.query(`UPDATE product SET 
                        variant     = "${data['variant']}",
                        description = "${data['description']}",
                        url_img     =  "${data['url_img']}"
                    WHERE id = "${data['id']}"
                    `), (err, data) => {
                        if (err) {
                            callback(err, null)
                        } else {
                            callback(null, 'Data Updated')
                        }
                    }
    },
    deleteData(data, conn, callback) {
        conn.query(`DELETE FROM product where id = "${data['id']}"`, (err, data) => {
            if (err) {
                callback(err, null)
            } else {
                callback(null, 'Data Deleted')
            }
        })
    }

}