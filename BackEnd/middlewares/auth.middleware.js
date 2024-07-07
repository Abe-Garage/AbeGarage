// auth.middleware.js
module.exports = {
    verifyToken: function (req, res, next) {
    // Token verification logic
    next();
    },
    isAdmin: function (req, res, next) {
    // Admin check logic
    next();
    },
    isAdmin_Manager: function (req, res, next) {
    // Admin/Manager check logic
    next();
    },
};
