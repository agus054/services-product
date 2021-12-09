const joi = require("@hapi/joi");


const schemaProduct = joi.object({
    id: joi.string().min(3).uppercase().required(),
    product_name: joi.string().lowercase().required(),
    price: joi.number().required(),
    quantity: joi.number().required(),
    category: joi.string().required()
});

module.exports.schemaProduct = schemaProduct;