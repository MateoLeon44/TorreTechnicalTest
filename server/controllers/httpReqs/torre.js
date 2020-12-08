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
                            if (json.results || json.id || json.person.publicId) {
                                resolve(json);
                            }
                            else if (json.message) {
                                throw json.message
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
                console.log(e);
                reject(e)
            })
            req.end()
        })
    }

    requests.searchForPeople = () => {
        return makeRequest(searchUrl, '/people/_search/?offset=0&size=5000&aggregate=false', 'POST');
    }


    requests.findPerson = (username) => {
        return makeRequest(bioUrl, `/api/bios/${username}`, 'GET');
    }

    requests.findJob = (id) => {
        return makeRequest(coUrl, `/api/opportunities/${id}`, 'GET');
    }

    return requests;
}

module.exports = torreRequests();