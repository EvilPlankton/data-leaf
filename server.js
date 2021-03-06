process.env.NODE_ENV = process.env.NODE_ENV || 'development'

var config = require('./config/config')
var mongoose = require('./config/mongoose')
var express = require('./config/express')
var passport = require('./config/passport')

var db = mongoose() // eslint-disable-line no-unused-vars
var passport = passport() // eslint-disable-line no-redeclare
var app = express()

app.listen(config.port)

module.exports = app
console.log(process.env.NODE_ENV + ' server running at http://localhost:' + config.port)
