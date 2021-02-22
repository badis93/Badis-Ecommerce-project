const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
    {
        "title": String,
        "category": String,
        "images":[String,String,String,String],
        "brand": String,
        "price": Number,
        "cpu": String,
        "camera": String,
        "size": String,
        "weight": String,
        "display": String,
        "battery": String,
        "memory": String,
        "id": Number,
        "description": String
    }
);

module.exports = mongoose.model("product", productSchema );