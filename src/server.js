const express = require('express')

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
  res.status(200).json({ get : "OK"})
})

app.post('/', (req, res) => {
  const json = {}
  const name = Object.keys(req.body)
  json[name] = req.body.name
  res.status(200).json(json)
})

module.exports = app
