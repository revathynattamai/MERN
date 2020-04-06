const express = require('express');
const bodyParser = require('body-parser');
const placeRoutes = require('./routes/places');
const app = express();
// app.use((req, res, next) => {
// console.log("called");
// res.send("dfadfa");
// });
app.use('/api/places', placeRoutes);
app.listen(5000);