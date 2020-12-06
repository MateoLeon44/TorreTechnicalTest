const mu = require('./database.js');
const https = require('https');
const dbconfigs = require('../config/db');
const { promise } = require('protractor');

const peopleController = () => {
    const people = {};

    people.requestPeople = () => {
        const url = `search.torre.co`;
        return new Promise((resolve, reject) => {
            https.request(
                {
                    hostname: url,
                    path: `/people/_search/?offset=0&size=5000&aggregate=false`,
                    method: 'POST'
                },
                res => {
                    data = ''
                    res.on('data', d => {
                        data += d;
                    })
                    res.on("end", () => {
                        try {
                            const json = JSON.parse(data);
                            if (json.results) {
                                resolve(json);
                            }
                            throw json.message;
                        }
                        catch (e) {
                            reject(e)
                        }

                    })

                }
            ).end()
        })

    }

    people.addToDatabase = (people) => {
        return mu.connect().then((client) => {
            client
                .db(dbconfigs.name)
                .collection('people')
                .insertMany(people.results)
                .finally(() => client.close());
        });
    }

    return people;
}

module.exports = peopleController();


