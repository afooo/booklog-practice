var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// respond with "Hello World!" on the homepage
router.get('/:user', function (req, res) {
  res.render('index', { title: 'Hello ' + req.params.user + '!' });
});

// accept POST request on the homepage
router.post('/', function (req, res) {
  res.send('Got a POST request');
});

// accept PUT request at /user
router.put('/', function (req, res) {
  res.send('Got a PUT request');
});

// accept DELETE request at /user
router.delete('/', function (req, res) {
  res.send('Got a DELETE request');
});

module.exports = router;
