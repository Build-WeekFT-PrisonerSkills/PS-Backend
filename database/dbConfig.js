const knex = require('knex');

const knexConfig = require('../knexfile.js');

const dbENV = process.DB_ENV || 'development';

module.exports = knex(knexConfig[dbENV]);
