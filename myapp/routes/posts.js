var express = require('express');
var router = express.Router();

function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) { return next(); }
  res.redirect('/login')
};

router.get('/1/posts', ensureAuthenticated);
router.get('/1/posts', function(req, res, next) {
	req.app.db.model.Post.find({}, function(err, posts){
		res.json(posts);
	});
});

router.get('/1/posts/:id', function(req, res, next) {
	req.app.db.model.Post.findById(req.params.id, function(err, post){
		res.json(post);
	});
});

router.post('/1/posts', function(req, res, next) {
	var model = req.app.db.model.Post;

	var obj = {
		title: 'July 22',
		content: 'hair'
	};

	var doc = new model(obj);

	doc.save( function(err, doc){
		res.send('Save ' + doc + ' successful');
	});
});

router.put('/1/posts/:id', function(req, res, next) {
	req.app.db.model.Post.findByIdAndUpdate(req.params.id, {
		title: req.query.title,
		content: req.query.content
	}, function(err, post){
		res.send('Update ' + post + ' successful');
	});
});

router.delete('/1/posts/:id', function(req, res, next) {
	req.app.db.model.Post.findByIdAndRemove(req.params.id, function(err, post){
		res.send('Delete ' + post +' successful');
	});
});

module.exports = router;