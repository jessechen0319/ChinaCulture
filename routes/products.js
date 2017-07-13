var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/one', function(req, res, next) {
  res.render('products/product_1', { title: 'Express' });
});

module.exports = router;