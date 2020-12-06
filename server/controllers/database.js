const { MongoClient } = require("mongodb");
const { database } = require('../config/db');

const uri = database;
const conn = MongoClient.connect(uri, { useUnifiedTopology: true });

module.exports = conn;