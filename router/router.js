const express = require("express");
const router = express.Router();
const createError = require("http-errors");

const { schemaProduct } = require("../halpers/validateSchemaProduct");
const db = require("../config/db");

router.get("/product-v1", async (req, res, next) => {
    try {
        const products = await db.getProductDb();
        res.status(200).json({
            status: 0,
            message: "ok",
            data: products
        });
    } catch (error) {
        next(error);
    };
});

router.post("/input-product-v1", async (req, res, next) => {
    try {
        const product = await schemaProduct.validateAsync(req.body);
        const newProduct = await db.insertProductDb(product.id, product.product_name, product.price, product.quantity, product.category);
        if(newProduct.affectedRows != 1) throw createError.BadRequest('Failed Input Product Data')
        res.status(201).json({
            status: 0,
            message: "Success Input Product Data",
            data: await db.getProductDbById(product.id)
        });
    } catch (error) {
        if (error.isJoi === true) error.status = 422;
        next(error);
    }
});

router.put("/update-product-v1", async (req, res, next) => {
    
    try {
        const { productId, fildName, value } = req.body;
        const updateProduct = await db.updateProductDb(fildName, value, productId);
        if (updateProduct.affectedRows != 1) throw createError.BadRequest("Failed Update Product Data");
        res.status(201).json({
            status: 0,
            message: "Success Update Product Data",
            data: await db.getProductDbById(productId)
        });
    } catch (error) {
        next(error)
    };
});

router.delete("/delete-product", async (req, res, next) => {
    try {
        const { productId } = req.body;
        const product = await db.getProductDbById(productId);
        const deleteProduct = await db.deleteProductDb(productId);
        if (deleteProduct.affectedRows != 1) throw createError.BadRequest("Failed Delete Product");
        res.status(200).json({
            status: 0,
            message: `Success Delete Product white Product Id ${productId}`,
            data: product
        });
    } catch (error) {
        next(error);
    };
});

module.exports = router;