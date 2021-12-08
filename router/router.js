const express = require("express");
const router = express.Router();
const createError = require("http-errors");

router.get("/product-v1", async (req, res, next) => {
    try {
        //get Product     
    } catch (error) {
        next(error);
    };
});

router.post("/input-product-v1", async (req, res, next) => {
    try {
        //input Product
    } catch (error) {
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