const request = require('supertest'); 

const server = require('../api/server.js')

const db = require("../database/dbConfig.js")


// GET All Inmates
describe('Get all Inmates', function () {
    describe('/api/users/inmates', function () {
        it('should return status of 200', function () {

            return request(server)
                .get('/api/users/inmates')
                .then(res => {

                    expect(res.status).toBe(200)
                })
        })
    })
})

it('should return JSON body type', async () => {

    const res = await request(server).get('/api/users/inmates')


    expect(res.type).toMatch(/json/i);


})


// GET Inmates By ID 
describe('Get inmates by id', function () {
    describe('/api/users/inmates/1', function () {
        it('should return status of 200', function () {

            return request(server)
                .get('/api/users/inmates/1')
                .then(res => {

                    expect(res.status).toBe(200)
                })
        })
    })
})

it('should return JSON body type', async () => {

    const res = await request(server).get('/api/users/inmates/1')


    expect(res.type).toMatch(/json/i);


})



// PUT Inmate
describe('Update inmates by id', function () {
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

it('should return JSON body type', async () => {

    const res = await request(server).put('/api/users/inmates/1')


    expect(res.type).toMatch(/json/i);


})



// Delete Inmate
describe('Delete inmates by id', function () {
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

it('should return JSON body type', async () => {

    const res = await request(server).delete('/api/users/inmates/1')


    expect(res.type).toMatch(/json/i);


})
 //POST inmate
describe('POST inmate()', function () {

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

describe('POST register', function () {
    describe('post /', function () {
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


describe('POST register()', function () {

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

describe('POST register', function () {
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
