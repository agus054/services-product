const mysql = require("mysql");
const db = mysql.createConnection({
    host: process.env.HOST_DB,
    user: process.env.USER_DB,
    password: process.env.PASS_DB,
    database: process.env.DB
});

module.exports = {
    connectDb: () => {
        db.connect(err => {
            err ? console.log(err.sqlMessage) : console.log("Connect to DB");
        })
    },
    insertProductDb: (id, product_name, price, quantity, category) => {
        return new Promise((resolve, reject) => {
            db.query(`INSERT INTO products (id, product_name, price, quantity, category) VALUE ('${id}', '${product_name}', '${price}', '${quantity}', '${category}')`, (err, result) => {
                if (err) reject(err.sqlMessage);
                resolve(result);
            });
        });
    },
    getProductDb: () => {
        return new Promise((resolve, reject) => {
            db.query(`SELECT * FROM products`, (err, result) => {
                if (err) reject(err.sqlMessage);
                resolve(result)
            });
        });
    }
}