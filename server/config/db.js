module.exports = {
    database: process.env.MONGODBURI || 'mongodb://localhost:27017',
    name: process.env.DBNAME || 'torre'
};
