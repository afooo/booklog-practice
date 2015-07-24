var express = require('express');
var passport = require('passport')
  , FacebookStrategy = require('passport-facebook').Strategy;
var router = express.Router();

/* GET FB auth */
router.get('/facebook', passport.authenticate('facebook'));

router.get('/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: '/login' }),
  function(req, res){
    console.log(req.user);
    res.redirect('/');
  });

module.exports = router;
