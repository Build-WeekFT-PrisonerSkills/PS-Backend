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

