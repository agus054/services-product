const crypto = require("crypto");
const { Base64 } = require("js-base64");

const bufferKey = (str) => {
    let data = [];
    for (let i = 0; i < str.length; i++) {
        data.push(str.charCodeAt(i));
    };
    return data;
};

module.exports = {
    dcryptUserId: (id) => {
        const key = bufferKey(Base64.atob(""))
        let dc = crypto.createDecipher("aes-128-ecb", new Buffer.from(key));
        const decrypted = Buffer.concat([dc.update(id, 'hex'), dc.final()]).toString("utf-8");
        return decrypted;
    }
};