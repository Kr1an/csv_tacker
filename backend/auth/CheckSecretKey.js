const Key = require('../key/Key');

async function checkSecretKey(req, res, next) {
    const {
        secret,
    } = req.body;
    if (!secret) {
        return next();
    }
    try {
        const key = await Key.findOne({ value: secret, used: false });
        if (!key) {
            throw new Error();
        }
        req.secretId = key._id;
        next();

    } catch (e) {
        return res.status(403).send({ auth: false, message: 'Failed to authenticate token.' });
    }

    
}
module.exports = checkSecretKey;