const express = require("express");
const router = express.Router();
const createError = require("http-errors");

const { schemaProduct } = require("../halpers/validateSchemaProduct");
const db = require("../config/db");

router.get("/product-v1", async (req, res, next) => {
    try {
        //get Product     
    } catch (error) {
        next(error);
    };
});

router.post("/input-product-v1", async (req, res, next) => {
    try {
        const product = await schemaProduct.validateAsync(req.body);
        const newProduct = await db.insertProductDb(product.id, product.product_name, product.price, product.quantity, product.category);
        console.log(newProduct);
    } catch (error) {
        if (error.isJoi === true) error.status = 422;
        next(error);
    }
});

router.put("/update-product-v1", async (req, res, next) => {
    try {
        //update Product
    } catch (error) {
        next(error)
    };
});

router.delete("/delete-product-v1", async (req, res, next) => {
    try {
        //delete Product        
    } catch (error) {
        next(error)
    }
})

module.exports = router;