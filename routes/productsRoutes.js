const express = require("express");
const route = express.Router();
const product = require("../models/productSchema");

route.post("/", (req, res) => {
    const newProduct = new product(req.body);
    newProduct.save((err,data) => {
        if(err) console.log(err);
        else res.send("prduct saved");
    })
})
route.get("/", (req, res) => {    
    product.find({}, (err,data) => {
        res.json(data)
    })
})
route.get("/:idProduct", (req, res) => {
    const idproduct = req.params.idProduct;
    product.findById(idproduct, (err,data) => {
        res.json(data)
    })
})
route.delete("/:idProduct", (req, res) => {
    const idproduct = req.params.idProduct;
    product.findByIdAndDelete(idproduct, (err,data) => {
        res.send(data)
    })
})
route.put("/:idProduct", (req, res) => {
    const idproduct = req.params.idProduct;
    const newdata = req.body;
    product.findByIdAndUpdate(idproduct,newdata,(err,data) => {
        if(err) console.log(err);
        else res.send("prduct updated");
    })
})
module.exports = route;