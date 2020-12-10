const people = require("../people");
const https = require('https');

const torreRequests = () => {
    const requests = {};
    const searchUrl = 'search.torre.co';
    const bioUrl = 'bio.torre.co';
    const coUrl = 'torre.co';

    const makeRequest = (hostname, path, method) => {
        return new Promise((resolve, reject) => {
            const req = https.request(
                {
                    hostname,
                    path,
                    method
                },
                (res) => {

                    data = ''
                    res.on('data', d => {
                        data += d
                    })
                    res.on("end", () => {
                        try {
                            const json = JSON.parse(data);
                            if (json.message) {
                                throw json.message

                            }
                            else if (json.results || json.id || json.person.publicId) {
                                resolve(json);
                            }
                            else if (typeof json === '') {
                                throw json;
                            }
                        }
                        catch (e) {
                            reject(e)
                        }

                    })

                }
            ).end()
            req.on('error', (e) => {
                reject(e)
            })
            req.end()
        })
    }

    requests.searchForPeople = () => {
        try {
            return makeRequest(searchUrl, '/people/_search/?offset=0&size=5000&aggregate=false', 'POST');
        } catch (e) {
            throw e;
        }

    }


    requests.findPerson = (username) => {
        try {
            return makeRequest(bioUrl, `/api/bios/${username}`, 'GET');
        } catch (e) {
            throw e;
        }

    }

    requests.findJob = (id) => {
        try {
            return makeRequest(coUrl, `/api/opportunities/${id}`, 'GET');
        } catch (e) {
            throw e;
        }

    }

    return requests;
}

module.exports = torreRequests();