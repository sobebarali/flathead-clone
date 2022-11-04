const jsonServer = require('json-server')
const app = jsonServer.create()
const path = require('path')
const express = require('express')
const cors = require("cors")
const middlewares = jsonServer.defaults()
const router = jsonServer.router('db.json')
const port = process.env.PORT || 3004

app.use('/db', middlewares, router,cors)
app.use(express.static(path.join(__dirname, 'build')))

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

app.listen(port)