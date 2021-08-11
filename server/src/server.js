const express = require('express')
require('dotenv/config')
const config = require('./db/config')
const route = require('./router/route')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())
const port = process.env.SERVER_PORT

app.use('/', route)

app.listen(port, () => {
    config.authenticate()
        .then(() => {
            console.log(`Database connected...`)
            console.log(`App running on port ${port}`)
        }).catch(err => console.log(`${err}`))
})
