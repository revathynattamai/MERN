const express = require('express');
const bodyParser = require('body-parser');
const placeRoutes = require('./routes/places');
const mongoCtl = require('./mongoDB/mongo');
const mongooseCtl = require('./mongoDB/mongoose'); 
const app = express();
app.use(bodyParser.json()); //To access the request body if the call has request body data
// app.use((req, res, next) => {
// console.log("called");
// res.send("dfadfa");
// });
app.use('/api/places', placeRoutes);
//MongoDB
app.post('/products', mongoCtl.createProducts);
app.get('/products', mongoCtl.getProducts);
//Mongoose
app.post('/mproducts', mongooseCtl.createProducts);
app.get('/mproducts', mongooseCtl.getProducts);
app.listen(5000);