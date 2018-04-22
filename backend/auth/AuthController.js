const
    express = require('express'),
    router = express.Router(),
    checkSecretKey = require('../auth/CheckSecretKey'),
    
    User = require('../user/User'),
    Key = require('../key/Key'),
    jwt = require('jsonwebtoken'),
    bcrypt = require('bcryptjs'),
    
    checkAccessRights = require('./CheckAccessRights'),
    verifyToken = require('./VerifyToken');

const
    secretKey = process.env.SECRET_KEY,
    createUser = (name, email, password, read) => User.create({ name, email, password, read }),
    getHash = value => bcrypt.hashSync(value, 8),
    getToken = id => jwt.sign({ id }, secretKey, { expiresIn: 86400 }),
    register = async (req, res) => {
        const {
            secretId,
            body: {
                name,
                email,
                password,
            }
        } = req;
        try {
            const
                canRead = !!secretId,
                hash = getHash(password),
                { _id } = await createUser(name, email, hash, canRead),
                token = getToken(_id);
            
            await Key.findByIdAndUpdate(secretId, { used: true });
            res
                .status(200)
                .send({ auth: true, token });
        } catch (e) {
            console.log(e);
            return res
                .status(500)
                .send("There was a problem registering the user.")
        }
    },
    login = async (req, res) => {
        const {
            name,
            password,
        } = req.body;

        try {
            // const
            //     hash = getHash(password),
            //     doc = await User.

        } catch (e) {

        }
    },
    sign = async (req, res) => {
        try {
            console.log(req.userId);
            const doc = await User.findById(req.userId, { password: 0 });
            if (!doc) {
                return res.status(404).send("No user found.");
            }
            res.status(200).send(doc);
        } catch (e) {
            console.log(e);
            return res
                .status(500)
                .send("There was a problem finding the user.");
        }
        
    },
    signMiddleware =  (user, req, res, next) => {
        res.status(200).send(user);
    }
    
router
    .post('/login', login)
    .use(verifyToken)
    .get('/me', sign)
    .use(checkSecretKey)
    .post('/register', register);

module.exports = router;