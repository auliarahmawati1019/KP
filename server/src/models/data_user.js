const config = require('../db/config')
const sequelize = require('sequelize')
const { hash } = require('bcryptjs')


const data_user = config.define('data_user', {
    id: {
        autoIncrement: true,
        primaryKey: true,
        type: sequelize.INTEGER
    },
    username: { type: sequelize.STRING },
    email: { type: sequelize.STRING },
    password: { type: sequelize.STRING }
}) // , { tableName: 'data_users' }

data_user.dataRegister = async (res, data) => {
    const { username, email, password } = data
    
    await data_user.sync()
    const hased = await hash(password, 10)
    const isExist = await data_user.findOne({ where: { email } })

    if (!isExist) {
        const data = await data_user.create({
            username, email, password: hased
        })
        if (data) {
            res.status(200).json(data)
        } else {
            res.status(200).json({ message : "Something wrong!" })
        }
    } else {
        res.status(409).json({ message : "Email already used!" })
    }
}

module.exports = data_user