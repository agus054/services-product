const express = require("express");
const createErrors = require("http-errors");
require('dotenv').config();
require("./config/db").connectDb();

const app = express();
const PORT = process.env.PORT;
const routerProduct = require("./router/router");

app.use(express.json());
app.use("/", routerProduct);

app.use(async (req, res, next) => {
    next(createErrors.NotFound());
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.send({
        error: {
            status: error.status || 500,
            message: error.message
        }
    });
});

app.listen(PORT, () => console.log("Server Running Port " + PORT));

