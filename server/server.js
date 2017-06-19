const express = require('express')
const bodyParser = require('body-parser')
// const cookieParser = require('cookie-parser')
const mongoose = require('mongoose')
// const methodOverride = require('method-override')
const config = require('./config').mongo

const app = express()

const inventory = require('./route/inventory')

mongoose.connect(`mongodb://${config.host}:${config.port}/${config.database}`, (err) => {
  if (err) console.log('connect fail')
  else console.log('connect success')
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/inventory', inventory)


app.get('/', (req, res) => {
  res.sendfile('./views/public/index.html')
})

app.listen(3000, () => {
  console.log('ex port 3000')
})
