var express = require('express');
var router = express.Router();

router.get('/1/posts', function(req, res, next) {
	req.app.db.model.Post.find({}, function(err, posts){
		res.json(posts);
	});
});

module.exports = router;