const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const authenticate = require('../auth/authenticate-middleware.JS');


const authRouter = require('../auth/auth-router.js');
// const prisonRouter = require('../prisons/prisons-router.js')


const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/api/auth', authRouter);

server.use('/api/prison', prisonRouter);

module.exports = server;
