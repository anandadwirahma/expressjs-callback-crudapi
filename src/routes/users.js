var express = require('express');
var router = express.Router();
var { index, save } = require('../controllers/users')

/* Router for controller users. */
router.get('/', index)
router.post('/save', save)

module.exports = router;
