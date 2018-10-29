var express = require('express');
var router = express.Router();

/* GET popup page. */
router.get('/', function(req, res, next) {
    res.render('popup');
});

module.exports = router;