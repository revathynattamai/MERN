const express = require('express');
const router = express.Router();
const HttpError = require('./HttpError');
const placesController = require('./placesCnt');

router.get('/', (req, res, next) => {
    // res.send("dfadfa");
    res.json({ message: "sdfsdf" });
});

router.get('/initial', placesController.getInitial);

router.get('/:pid', placesController.getPlaceByName);

router.post('/add', placesController.addPlaceByName);

router.delete('/:name', placesController.deletePlaceByName)

module.exports = router;


/* Use express validator package to validate the req body inputs.
Check in the API and validationResult in the controller. 
throw new Error in giving error */