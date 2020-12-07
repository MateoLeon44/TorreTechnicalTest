const dbconfigs = require('../config/db');
const { MongoClient, ObjectID } = require('mongodb');

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
        console.log(dbconfigs.name);
        console.log(dbconfigs.database);
        const people = db.collection('people');


        let id = ObjectID();
        const mockUser = {
            _id: id, context: { "signaled": null }, "_meta": {
                "ranker": {
                    "@type": "and",
                    "rank": 1.0,
                    "score": null,
                    "and": [
                        {
                            "@type": "scorer",
                            "rank": 111.0,
                            "scorer": "weight",
                            "score": null,
                            "input": {
                                "criteria": null,
                                "person": {
                                    "weight": 3193.4502
                                }
                            }
                        },
                        {
                            "@type": "scorer",
                            "rank": 1.0,
                            "scorer": "completion",
                            "score": null,
                            "input": {
                                "criteria": null,
                                "person": {
                                    "completion": 1.0
                                }
                            }
                        },
                        {
                            "@type": "scorer",
                            "rank": 1.0,
                            "scorer": "grammar",
                            "score": null,
                            "input": {
                                "criteria": null,
                                "person": {
                                    "grammar": 1.0
                                }
                            }
                        }
                    ]
                },
                "filter": null
            },
            "compensations": {},
            "locationName": "Provincia di Bergamo, Italy",
            "name": "David Orban",
            "openTo": [
                "advising",
                "freelance-gigs",
                "hiring",
                "mentoring"
            ],
            "picture": "https://starrgate.s3.amazonaws.com:443/users/abb39aae447197a94d84f3708742dd7af2db184a/profile_VwukAly.jpg",
            "professionalHeadline": "Startup creation, fundraising and investment. Thriving in our jolting technological change.",
            "remoter": true,
            "skills": [
                {
                    "name": "Mergers and Acquisitions",
                    "weight": 0.0
                },
            ],
            "subjectId": "9237",
            "username": "davidorban",
            "verified": true,
            "weight": 3193.4502
        };
        await people.insertOne(mockUser);

        const insertedUser = await people.findOne({ _id: id });
        expect(insertedUser).toEqual(mockUser);
    });
})