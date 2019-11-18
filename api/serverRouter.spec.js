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
        it('should return status of 200', function () {

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


