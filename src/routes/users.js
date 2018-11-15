var express = require('express');
var router = express.Router();
var { index, save, update, c_delete } = require('../controllers/users')

/* Router for controller users. */
router.get('/', index)
router.post('/save', save)
router.post('/update', update)
router.post('/delete', c_delete)

module.exports = router;