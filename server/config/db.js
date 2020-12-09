module.exports = {
    database: process.env.MONGODBURI || 'mongodb+srv://mateo:leon@cluster0.cvma7.mongodb.net/torre?retryWrites=true&w=majority',
    name: process.env.DBNAME || 'torre'
};
