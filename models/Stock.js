const mongoose = require('mongoose')
mongoose.Promise = require('bluebird')

const Schema = mongoose.Schema

const stockSchema = new Schema({
  name: String,
  price: Number,
  quantity: Number
})

const Stock = mongoose.model('Stock', stockSchema)

module.exports = Stock
