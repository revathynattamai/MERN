const mongoose = require('mongoose');
const mongooseProduct = require('./productModel');
const Rudhurl = 'mongodb+srv://rudh:wXjbQv1eeMw7P38w@merncluster-bjxon.mongodb.net/products_test?retryWrites=true&w=majority';

mongoose.connect(Rudhurl)
    .then(() => console.log("Connected to DB"))
    .catch((err) => console.log("Failed" + err))

const createProducts = async (req, res, next) => {
    const newProduct = new mongooseProduct({ name: req.body.name });
    const result = await newProduct.save();
    res.json(result);
}

const getProducts = async (req, res, next) => {
    const result =  await mongooseProduct.find();
    res.json(result);
}
exports.createProducts = createProducts;
exports.getProducts = getProducts;