var auth = require('basic-auth');
module.exports = function(req, res, next) {
  var credentials = auth(req)
  var user = auth(req);

  if (process.env.NODE_ENV === 'PROD') {
    if (!credentials || credentials.name !== process.env.USERNAME || credentials.pass !== process.env.PASSWORD) {
      res.set('WWW-Authenticate', 'Basic realm="example"');
      return res.status(401).send();
    }
    return next()
  } else {
    return next()
  }
}