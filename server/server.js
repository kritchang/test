const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')

const config = require('./config').mongo

const app = express()
const PORT = 3002

const inventory = require('./route/inventory')

mongoose.connect(`mongodb://${config.host}:${config.port}/${config.database}`, (err) => {
  if (err) console.log('connect fail')
  else console.log('connect success')
})

app.use('/inventory', cors({ origin: 'http://localhost:3000' }))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/inventory', inventory)


app.listen(PORT, () => {
  console.log(`ex port ${PORT}`)
})
