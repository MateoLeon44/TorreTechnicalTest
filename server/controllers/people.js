const mu = require('../utils/database.js');
const dbconfigs = require('../config/db');
const torreRequests = require('./externalAPIs/torreAPI');
const matches = require('./helpers/matches');

const peopleController = () => {
    const people = {};

    people.requestPeople = () => {
        try {
            return torreRequests.searchForPeople();
        } catch (e) {
            throw e;
        }
    }

    people.addToDatabase = (people) => {
        return mu.connect().then((client) => {
            client
                .db(dbconfigs.name)
                .collection('people')
                .insertMany(people.results)
                .finally(() => client.close());
        },
            err => {
                throw err;
            });
    }


    people.searchFits = (job, filters) => {
        return mu.connect().then((client) =>
            client
                .db(dbconfigs.name)
                .collection('people')
                .find({
                    skills: { $elemMatch: { name: { $in: filters } } }
                })
                .toArray()
                .finally(() => client.close())
            , err => {
                throw err
            });
    }

    people.searchBestFits = (filters) => {
        let query = [];
        for (let index = 0; index < filters.length; index++) {
            const tempQuery = {
                $elemMatch: {
                    name: filters[index]
                }
            };
            query.push(tempQuery);
        }
        return mu.connect().then((client) =>
            client
                .db(dbconfigs.name)
                .collection('people')
                .aggregate([
                    {
                        $match: {
                            skills: { $all: query }
                        }
                    },
                    {
                        $sort: {
                            '_meta.ranker.rank': -1
                        }
                    },
                    {
                        $limit: 100
                    }
                ])
                .toArray()
                .finally(() => client.close())
            , err => { throw err });
    }

    people.findBestFit = async (jobJSON, peopleArray) => {
        try {
            const job = await torreRequests.findJob(jobJSON.id);
            return matchWithJob(job, peopleArray);
        } catch (e) {
            throw e;
        }

    }

    const matchWithJob = async (job, peopleArray) => {
        jobMinCompensation = matches.getCompensationJob(job)
        let personToReturn;
        for (let index = 0; index < peopleArray.length; index++) {
            try {
                const person = await torreRequests.findPerson(peopleArray[index].username);
                const salaryMatches = matches.compensationMatch(person, jobMinCompensation, job);
                if (matches.isAMatch(salaryMatches, person, job)) {
                    personToReturn = peopleArray[index];
                    break;
                }
            }
            catch (e) {
            }
        }
        if (personToReturn) {
            return personToReturn;
        }
        else {
            return peopleArray[0];
        }
    }

    return people;
}

module.exports = peopleController();


