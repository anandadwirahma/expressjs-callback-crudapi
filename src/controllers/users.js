var { getData, saveData, updateData, deleteData } = require('../models/m_users')

module.exports = {

    index(req, res) {
        req.getConnection((err, conn) => {
            getData(conn, (err, result) => {
                if (err) {
                    res.json(err)
                } else {
                    res.json(result)
                }
            })
        })
    },
    save(req, res) {
        req.getConnection((err, conn) => {
            saveData(req.body, conn, (err, result) => {
                if (err) {
                    res.json(err)
                } else {
                    res.json(result)
                }
            })
        })
    },
    update(req, res) {
        req.getConnection((err, conn) => {
            updateData(req.body, conn, (err, result) => {
                if (err) {
                    res.json(err)
                } else {
                    res.json(result)
                }
            })
        })
    },
    c_delete(req, res) {
        req.getConnection((err, conn) => {
            deleteData(req.body, conn, (err, result) => {
                if (err) {
                    res.json(err)
                } else {
                    res.json(result)
                }
            })
        })
    }
}