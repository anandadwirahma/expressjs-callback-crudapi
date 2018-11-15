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

/*
    ########## --- Notes --- ##########

    - Method for handling asynchronous => callback, promise, async await
    - Analogi callback => function yg ada di dalam parameter
    ex :
        getData(conn, (data) => {
            console.log(data);
        })

    - Bentukan parameter callback => 
    function (err, result) {

    }
        * detail :
        - result : parameter utama
        - error : additional

    - Bentukan raw function :
    
    Type 1 :
    --------
    (err, conn) => {

    }

    Type 2 :
    --------
    function(err, conn) {

    }
*/