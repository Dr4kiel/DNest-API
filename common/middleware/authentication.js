const admin = require('../../config/admin.config');

const authentication = (req, res, next) => {
    const authheader = req.headers.authorization;

    if (!authheader) {
        res.setHeader('www-authenticate', 'Basic realm="DNest.fr", charset="UTF-8"');
        res.status(401).end();
    } else {
        const credentials = new Buffer.from(authheader.split(' ')[1], 'base64').toString();
        console.log(credentials)
        const [user, pwd] = credentials.split(':');
        if (pwd === admin.ADMIN_KEY && user === admin.ADMIN_USER) {
            next();
        } else {
            res.setHeader('www-authenticate', 'Basic realm="DNest.fr", charset="UTF-8"');
            res.status(401).end();
        }
    }
}

module.exports = authentication;