


const person = {
    "context": {
        "signaled": null
    },
    "_meta": {
        "ranker": {
            "@type": "and",
            "rank": 2.0,
            "score": null,
            "and": [
                {
                    "@type": "scorer",
                    "rank": 253.0,
                    "scorer": "weight",
                    "score": null,
                    "input": {
                        "criteria": null,
                        "person": {
                            "weight": 2214.1466
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
    "compensations": {
        "freelancer": {
            "amount": 899.0,
            "currency": "USD$",
            "periodicity": "hourly"
        }
    },
    "locationName": "Texas, United States",
    "name": "J. Andrés Tobacia",
    "openTo": [
        "advising",
        "freelance-gigs",
        "hiring",
        "mentoring"
    ],
    "picture": "https://starrgate.s3.amazonaws.com:443/users/3bc89aa4b986ab3c8814012552b187853c7acbf1/profile_YJdN5gU.jpeg",
    "professionalHeadline": "Founder at Anything Flows",
    "remoter": true,
    "skills": [
        {
            "name": "Trustworthy",
            "weight": 0.0
        }
    ],
    "subjectId": "328062",
    "username": "andresflows",
    "verified": true,
    "weight": 2214.1466
}


const job = {
    "id": "Owb4Pzro",
    "objective": "Freelance Thumbnail Specialist (TheGamer)",
    "type": "freelance-gigs",
    "organizations": [
        {
            "id": 553700,
            "name": "Valnet",
            "picture": "https://torre-media.s3-us-west-2.amazonaws.com/Valnet.png"
        }
    ],
    "locations": [
        "United States",
        "Canada"
    ],
    "remote": true,
    "external": false,
    "deadline": "2020-12-30T04:30:00.000Z",
    "status": "open",
    "compensation": {
        "data": {
            "code": "range",
            "currency": "USD$",
            "minAmount": 15.0,
            "maxAmount": 30.0,
            "periodicity": "hourly"
        },
        "visible": true
    },
    "skills": [
        {
            "name": "Thumbnail",
            "experience": "1-plus-year"
        },
        {
            "name": "Photoshop",
            "experience": "1-plus-year"
        },
        {
            "name": "Editing",
            "experience": "1-plus-year"
        }
    ],
    "members": [
        {
            "subjectId": "220890",
            "name": "Manuela vargas Jaramillo",
            "username": "Manuela.Vargas",
            "professionalHeadline": "Independent Recruiter",
            "picture": "https://starrgate.s3.amazonaws.com:443/users/412e0b4173afac862c445c7e81dbb553469a081a/profile_1ob72Mv.jpg",
            "member": true,
            "manager": true,
            "poster": true,
            "weight": 0.0
        },
        {
            "subjectId": null,
            "name": "Joe Alderson",
            "username": "d9534b94-efde-426b-826d-7d046a6421ee",
            "professionalHeadline": "Chief Operating Officer",
            "picture": "https://torre-media.s3-us-west-2.amazonaws.com/Joe+Alderson.jfif",
            "member": true,
            "manager": false,
            "poster": false,
            "weight": 0.0
        }
    ],
    "questions": [],
    "context": {
        "signaled": []
    },
    "_meta": {
        "rank": 1.0,
        "scorer": {
            "@type": "and",
            "score": 1.0,
            "and": [
                {
                    "@type": "concrete",
                    "id": "completion",
                    "input": {
                        "criteria": null,
                        "opportunity": {
                            "completion": 1.0
                        }
                    },
                    "score": 1.0
                }
            ]
        },
        "filter": null,
        "boosters": [
            "status",
            "internal"
        ]
    }
}


const best_fit = {
    _id: '5fcd479757232f235cfdd81d',
    context: { signaled: null },
    _meta: {
        ranker: { '@type': 'and', rank: 1203, score: null, and: [Array] },
        filter: null
    },
    compensations: {},
    locationName: 'Calabasas, CA, USA',
    name: 'Mohammed Abduallah Mohammed',
    openTo: ['advising', 'freelance-gigs', 'internships', 'mentoring'],
    picture: 'https://starrgate.s3.amazonaws.com:443/users/513941900162c10ad9918a6fb47f397f912d0657/profile_uL4i7uj.jpg',
    professionalHeadline: 'PMO Manager',
    remoter: true,
    skills: [
        { name: 'Time Management', weight: 0 },
        { name: 'Typing', weight: 0 },
        { name: 'TypeScript', weight: 0 },
        { name: 'Communication', weight: 0 },
        { name: 'Strategic Thinking', weight: 0 },
        { name: 'Management', weight: 0 },
        { name: 'Project Management', weight: 0 }
    ],
    subjectId: '34053',
    username: 'mohammedabduallah',
    verified: true,
    weight: 0
}
module.exports = { person, job, best_fit }