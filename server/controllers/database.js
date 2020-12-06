const url = require('../config/db');
const { MongoClient } = require("mongodb");


const MongoUtils = () => {
    const MyMongoLib = this || {};
    const dbName = process.env.DBNAME || 'torre'
    

    MongoClient.connect(url.database, { useUnifiedTopology: true }).then((client) => {
        MyMongoLib.db = client.db(dbName);
    });

    MyMongoLib.connect = () => {
        const client = new MongoClient(url.database, { useUnifiedTopology: true });
        return client.connect();
    };



    return MyMongoLib;
}

module.exports = MongoUtils();