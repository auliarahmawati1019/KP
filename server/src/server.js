const express = require('express')
require('dotenv/config')
const config = require('./db/config')

const app = express()
app.use(express.json())
const port = process.env.SERVER_PORT


app.listen(port, () => {
    config.authenticate()
        .then(() => {
            console.log(`Database connected...`)
            console.log(`App running on port ${port}`)
        }).catch(err => console.log(`${err}`))
})
