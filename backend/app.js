const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const errorMiddleware = require('./middlewears/errors')

app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))

//Import all routes
const products = require('./routes/product')

app.use('/api/v1', products)

//middlewear to handle error
app.use(errorMiddleware)

module.exports = app
