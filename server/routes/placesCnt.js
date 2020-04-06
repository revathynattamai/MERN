const getPlaceById = (req, res, next) => {
    let pid = req.params.pid;
    if(pid === "10") {
    res.json({ message: "pid " + pid });
    } else {
        // const error =  new Error('Not Found');
        // error.code = '404';
        res.status(404).json('Not Found')
        
        // throw new HttpError('Not Found', 404);
    }
}

const getInitial = (req, res, next) => {
    // res.send("dfadfa");
    res.json({ message: "initial Mock" });
}

exports.getPlaceById = getPlaceById;
exports.getInitial = getInitial;