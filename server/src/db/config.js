require('dotenv').config({ path: '../../.env' })
const Sequelize = require('sequelize')

const NV = process.env
const config = new Sequelize(
    NV.DB_NAME, NV.DB_USER, NV.DB_PASSWORD, {
        host: NV.DB_HOST,
        dialect: 'postgres',
        omitNull: true,
        pool: {
            max: 5,
            min: 0,
            scuire: 300000,
            idle: 10000
        }
    }
)

module.exports = config
