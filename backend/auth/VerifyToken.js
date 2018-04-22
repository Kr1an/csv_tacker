var jwt = require('jsonwebtoken');
var secretKey = process.env.SECRET_KEY;
function verifyToken(req, res, next) {
  var token = req.headers['x-access-token'];
  if (!token) {
    next();
  } else {

    
    jwt.verify(token, secretKey, function(err, decoded) {
      if (err) {
        next();
      } else {
        
        // if everything good, save to request for use in other routes
        req.userId = decoded.id;
        console.log(req.userId);
        console.log('verified');
        next();
      }
    });
  }
}
module.exports = verifyToken;