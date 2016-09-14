var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('user/index', {
        title: 'index',
        index: 'index'
    });
});

module.exports = router;
