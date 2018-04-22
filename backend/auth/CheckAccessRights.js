const User = require('../user/User');

const checkAccessRights = async (req, res, next) => {
    const { userId } = req;
    if (!userId) {
        next();
    } else {

        req.access = {
            write: true,
            read: false,
        }
        console.log('before check access fetch');
        const doc = await User.findById(userId);
        console.log('after check access fetch');
        if (!doc) {
            return next();
        }
        console.log(doc);
        req.access.read = doc.read;
        next();
    }
}

module.exports = checkAccessRights;