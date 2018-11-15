var { getData, saveData } = require('../models/m_users')

module.exports = {

    index(req, res) {
        req.getConnection((err, conn) => {
            getData(conn, (data) => {
                res.json(data);
            })
        });
    },
    save(req, res) {
        req.getConnection((err, conn) => {
            saveData(req.body, conn, (err, result) => {
                if(err){
                    res.send(err)
                } else {
                    res.send(result)
                }
            })
        });
    },
    update(req, res) {

    }

}