const express = require('express');
const router = express.Router();
const HttpError = require('./HttpError');
const placesController = require('./placesCnt');

router.get('/', (req, res, next) => {
    // res.send("dfadfa");
    res.json({ message: "get" });
});

router.get('/initial', placesController.getInitial);

router.get('/:pid', placesController.getPlaceById);

module.exports = router;