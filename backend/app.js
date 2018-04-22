const
    express = require('express'),
    // cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    app = express(),
    db = require('./db'),
    cors = require('cors'),
    UserController = require('./user/UserController'),
    AuthController = require('./auth/AuthController'),
    KeyController = require('./key/KeyController'),
    PostController = require('./post/PostController');
app
    // .use(cookieParser())
    .use(cors())
    .use(bodyParser.urlencoded({ extended: false }))
    .use(bodyParser.json({ limit: '1gb' }))
    .use('/users', UserController)
    .use('/keys', KeyController)
    .use('/api/auth', AuthController)   
    .use('/posts', PostController);

module.exports = app;
