const Sequelize = require('sequelize')
const config = require('../db/config')
const data_user = require('./data_user')


const models = {
    sequlize: config,
    Sequelize, data_user
}

module.exports = models