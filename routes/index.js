var express = require('express');
var i18n = require("../services/i18n");
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(req.headers['accept-language']);
  res.render('index', { messages:  i18n.prepareForIndex(req)});
});

module.exports = router;
