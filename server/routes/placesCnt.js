const uuid = require('uuid/v4');
const places = [
  { id: uuid(), name: "London" },
  { id: uuid(), name: "Scotland" }
]

const getPlaceByName = (req, res, next) => {
  let name = req.params.pid.toLowerCase();
  let user = places.filter(user => user.name.toLowerCase() === name);
  if (user.length >= 1) {
    res.status(200).json(user)
  } else {
    // const error =  new Error('Not Found');
    // error.code = '404';
    res.status(404).json('Not Found')
    // throw new HttpError('Not Found', 404);
  }
}
const addPlaceByName = (req, res, next) => {
  const { name } = req.body;
  const id = uuid();
  places.push({ id, name })
  res.json(places).status(201);
}

const deletePlaceByName = (req, res, next) => {
  const name = req.params.name;
  let index = places.findIndex(user => user.name.toLowerCase() === name.toLowerCase());
  if (index >= 0) {
    let RemainingPlaces = places.slice(0, index).concat(places.slice(index + 1, places.length));
    res.json({ RemainingPlaces });
  }
  res.json("Place not found. ").status(500);
}

const getInitial = (req, res, next) => {
  // res.send("dfadfa");
  res.json({ places });
}

exports.getPlaceByName = getPlaceByName;
exports.getInitial = getInitial;
exports.addPlaceByName = addPlaceByName;
exports.deletePlaceByName = deletePlaceByName;


