
module.exports = async (req, res, proceed) => {
    if (req.headers.authorization) {
        const authName = req.headers.authorization.split(' ')[0];
        if (authName == 'Token' || authName === 'Bearer') {
            try {
                // Store token in locals for future access
                res.locals.token = require('jsonwebtoken').verify(req.headers.authorization.split(' ')[1], "mysecret");
                return proceed();
            } catch {
                return res.forbidden();
            }
        }
    }
    return res.forbidden();
};