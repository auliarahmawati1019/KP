const express = require('express')
const router = express.Router()
const models = require('../models')

router
    .route('/register')
    .post(async (req, res) => {
        const data = req.body
        try {
            console.log(data)
            await models.data_user.dataRegister(res, data)
        } catch (err) {
            console.log(`${err}`)
        }
    })


module.exports = router