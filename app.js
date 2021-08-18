const express = require('express')
const app = express()
const postsRoute = require('./routes/posts')
app.use("/posts", postsRoute)
module.exports = app
