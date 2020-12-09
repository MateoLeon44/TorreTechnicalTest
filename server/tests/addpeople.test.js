const dbconfigs = require('../config/db');
const { MongoClient, ObjectID } = require('mongodb');
const { person, job, best_fit } = require('./dummydata/dummy');
const matches = require('../controllers/people');

describe('insert', () => {
    let db;
    let connection;

    function cleanUpDatabase(database) {
        database.cleanUp();
    }

    beforeAll(async () => {
        connection = await MongoClient.connect(dbconfigs.database, {
            useNewUrlParser: true,
        });
        db = await connection.db(dbconfigs.name);
    });

    afterAll(async () => {
        await connection.close();
        await db.close();
        cleanUpDatabase(db);
    });

    it('should insert a doc into people collection', async () => {
        const people = db.collection('people');


        let id = ObjectID();
        const mockUser = person;
        mockUser._id = id;
        await people.insertOne(mockUser);
        const insertedUser = await people.findOne({ _id: id });

        expect(insertedUser).toEqual(mockUser);
    });

    it('should find the best match', async () => {
        const mock_job = job;
        const filters = ['TypeScript'];
        const peopleArray = await matches.searchBestFits(filters);

        const bestFit = await matches.findBestFit(mock_job, peopleArray);
        console.log(bestFit);
/*         expect(best_fit).toEqual(bestFit);
 */    });


})