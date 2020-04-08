const mongoClient = require('mongodb').MongoClient;
const Rudhurl = 'mongodb+srv://rudh:wXjbQv1eeMw7P38w@merncluster-bjxon.mongodb.net/products_test?retryWrites=true&w=majority';
const thickurl = 'mongodb+srv://thick:Dr5R8NsfvC5bb09f@merncluster-bjxon.mongodb.net/products_test?retryWrites=true&w=majority';
const client = new mongoClient(Rudhurl);

const createProducts = async (req, res, next) => {
    const { name, price } = req.body;
    const newProduct = { name, price};
    try {
    await client.connect();
    const db = client.db();
    const result = db.collection('prod1').insertOne(newProduct);
    } catch(err) {
        return res.send(err)
    }
    client.close();
    res.json(newProduct);
}

const getProducts = async (req, res, next) => {
    let result;
    try {
        await client.connect();
        const db = client.db();
        result = await db.collection('prod1').find().toArray();
        } catch(err) {
            return res.json(err)
        }
        client.close();
        res.json(result);
}

exports.createProducts = createProducts;
exports.getProducts = getProducts;