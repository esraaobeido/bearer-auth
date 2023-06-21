'use strict';
const {users} = require("../models/users.model");
async function bearer(req, res, next) {
    if (req.headers.authorization) {
        const bearerToken = req.headers.authorization.split(" ")[1];
        users.authenticateBearer(bearerToken)
            .then((data) => {
                req.user = data;
                next();
            })
            .catch(() => {
                res.status(403);
                res.send("Invalid Signin");
            })
    }
}

module.exports = bearer;