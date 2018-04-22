var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var verifyToken = require('../auth/VerifyToken');
var checkAccessRights = require('../auth/CheckAccessRights');

var Post = require('./Post');

// CREATES A NEW POST from json array
router.post('/', function (req, res) {
    const {
        posts,
    } = req.body;
    console.log(posts);



    Post.create(posts, 
        function (err, post) {
            console.log(err);
            if (err) return res.status(500).send("There was a problem adding the information to the database.");
            res.status(200).send(post);
        });
});


router.use(verifyToken);
router.use(checkAccessRights);
// RETURNS ALL THE POSTS IN THE DATABASE
router.get('/', function (req, res) {
    console.log('testing;', req.access);
    if (!req.access || !req.access.read) {
        return res
            .status(403)
            .send({ auth: false, message: 'No access.' });
    }
    Post.find({}, function (err, posts) {
        if (err) return res.status(500).send("There was a problem finding the posts.");
        return res.status(200).send(posts);
    });
});

module.exports = router;