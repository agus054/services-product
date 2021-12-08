const { verifyToken } = require("./verifyToken");
const { dcryptUserId } = require("./decryptUserId");

module.exports = {
    getUsers: async (jwtToken)=> {
        const idToken = await verifyToken(jwtToken);
        const userId = dcryptUserId(idToken);
        return userId;
    }
}