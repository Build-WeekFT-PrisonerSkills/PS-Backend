const request = require('supertest'); 

const server = require('../api/server.js')

const db = require("../database/dbConfig.js")


// Endpoint test 1 get all prisons
describe('ENDPOINT TEST 1.1 - GET / all prisons res.type', function () {
    describe('GET / all prisons res.type', function () {
        it('should respond with res.status of json', async function () {
            await request(server)
                .get('/api/users/')
                .then(res => {
                    expect(res.type).toMatch(/json/i)
                })
        });
    })
})

// Endpoint test 2 get prison by :id
describe('ENDPOINT TEST 2.1 -GET /:id get prison by id', function () {
    describe('GET /:id get a status code of 200', function () {
        it('should return a status of 200', async function () {
            await request(server)
                .get('/api/users/1')
                .then(res => {
                    expect(res.status).toBe(400)
                })
        })
    })
})

// Endpoint test 3
describe('ENDPOINT TEST 3.1 -GET /:id/inmates get all inmates by id', function () {
    describe('GET /:id get a status code of 200', function () {
        it('should return a status of 200', async function () {
            await request(server)
                .get('/api/users/1/inmates')
                .then(res => {
                    expect(res.status).toBe(200)
                })
        })
    })
})

// Endpoint test 4
describe('ENDPOINT TEST 4.1 - GET /inmates/:id get an inmates by id', function () {
    describe('GET /inmates/:id return a status code of 500', function () {
        it('should return a status of 500', async function () {
            await request(server)
                .get('/api/users/inmates/1')
                .then(res => {
                    expect(res.status).toBe(400)
                })
        })

        it('ENDPOINT TEST 4.2 -should respond with message of Inmate does not exist', async function () {
            await request(server)
                .get("/api/users/inmates/1")
                .send({inmateFirstName: "Jeep"})
                .then(res => {
                    expect(res.body).toEqual({ "message": "Inmate does not exist" });
                })
        });
    })
})

// Endpoint test 5
describe('ENDPOINT TEST 5.1 - POST register()', function () {

    beforeEach(async () => {
        await db('users').truncate();
    })

    it('should respond with status 200', async function () {
        await request(server)
            .post("/api/auth/register")
            .send({ email: "new", password: "pass" })
            .then(res => {
                expect(res.status).toBe(201)
            })
    });

})

describe('ENDPOINT TEST 5.2 -POST register', function () {
    describe('post /', function () {
        it('should return json formated response', function () {

            return request(server)
                .post('/api/auth/register')
                .send({ email: "new", password: "pass" })
                .then(res => {

                    expect(res.type).toMatch(/json/i);
                })
        })
    })
})

// Endpoint test 6
describe('ENDPOINT TEST 6.1 - POST login', function () {
    describe('post /login', function () {
        it('should return json formated response', function () {

            return request(server)
                .post('/api/auth/login')
                .send({ email: "new", password: "past" })
                .then(res => {

                    expect(res.body).toEqual({ "message": "Invalid Credentials" });
                })
        })

        it('should return status 200', function () {

            return request(server)
                .post('/api/auth/login')
                .send({ email: "new", password: "pass" })
                .then(res => {

                    expect(res.status).toBe(200);
                })
        })
    })
})

// Endpoint test 7
describe('ENDPOINT TEST 7.1 - POST prison', function () {
    describe('post /prison', function () {
        it('should return json formated response', function () {

            return request(server)
                .post('/api/users/prison')
                .send({ prisonName: "Lorton Jail"})
                .then(res => {

                    expect(res.type).toMatch(/json/i);
                })
        })
    })
})

// Endpoint test 8
describe('ENDPOINT TEST 8.1 - PUT prison', function () {
    describe('put /users/:id', function () {
        it('should return status 400', function () {

            return request(server)
                .put('/api/users/1')
                .then(res => {

                    expect(res.status).toBe(400);
                })
        })
    })
})

// Endpoint test 9
describe('ENDPOINT TEST 9.1 - DELETE prison', function () {
    describe('delete /:id', function () {
        it('should return json formated response', function () {

            return request(server)
                .delete('/api/users/1')
                .then(res => {

                    expect(res.status).toBe(400);
                })
        })
    })
})

// Endpoint test 10 POST inmate
describe('ENDPOINT TEST 10.1 - POST / inmates', function () {
    describe('post /inmates', function () {
        it('should return json formated response', function () {

            return request(server)
                .post('/api/users/inmates')
                .send({ inmateFirstName: "Jeep"})
                .then(res => {

                    expect(res.type).toMatch(/json/i);
                })
        })
    })
})

 describe('ENDPOINT TEST 10.2 - POST /inmates', function () {

    beforeEach(async () => {
        await db('users').truncate();
    })

    it('should respond with message of no credentials provided', async function () {
        await request(server)
            .post("/api/users/inmates")
            .send({inmateFirstName: "Jeep"})
            .then(res => {
                expect(res.body).toEqual({ "message": "No credentials provided" });
            })
    });
})

// Endpoint test 11 PUT Inmate
describe('ENDPOINT TEST 11.1 - Update inmates by id', function () {
    describe('/api/users/inmates/1', function () {
        it('should return message: No credentials provided', function () {

            return request(server)
                .put('/api/users/inmates/1')
                .then(res => {

                    expect(res.body).toEqual({ "message": "No credentials provided" });
                })
        })
    })
})

it('ENDPOINT TEST 11.2 - should return JSON body type', async () => {

    const res = await request(server).put('/api/users/inmates/1')

    expect(res.type).toMatch(/json/i);

})

// Endpoint test 12 DELETE Inmate
describe('ENDPOINT TEST 12.1 - Delete inmates by id', function () {
    describe('/api/users/inmates/1', function () {
        it('should return status of 200', function () {

            return request(server)
                .delete('/api/users/inmates/1')
                .then(res => {

                    expect(res.body).toEqual({ "message": "No credentials provided" });
                })
        })
    })
})

it('ENDPOINT TEST 12.2 - should return JSON body type', async () => {

    const res = await request(server).delete('/api/users/inmates/1')

    expect(res.type).toMatch(/json/i);

})



// describe('POST /prison returns a status 200', function () {
//     describe('POST /prison returns a status 200', function () {
//         it('should respond with a status 200', async function () {
//             await request(server)
//                 .post('/api/users/prison')
//                 .send({ prisonName: "prisonName", address: "acmeCity", phone: "123456789", city: "AcmeCity", state: "VA", zipcode: "22222"})
//                 .then(res => {
//                     expect(res.status).toBe(500);
//                 })
//         });
//     })
// })


