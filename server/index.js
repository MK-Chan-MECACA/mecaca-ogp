const express = require('express')
const gmeta = require('gmeta')

const app = express()

const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.enable('trust proxy')

app.disable('x-powered-by')

app.post('/check/', async (req, res) => {
  const url = req.body.url

  try {
    const response = await gmeta(url)
    res.json(response)
  } catch (error) {
    res.json({ error: true })
  }
})

module.exports = app
