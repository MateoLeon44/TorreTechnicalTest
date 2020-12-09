

const person = {

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

}


module.exports = {
    person
}