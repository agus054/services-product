const jwt = require("jsonwebtoken");

module.exports = {
    verifyToken: token => {
        return new Promise((resolve, reject) => {
            const key = "";
            jwt.verify(token, key, (err, result) => {
                if (err) reject(err);
                resolve(result);
            })
        });
    }
}