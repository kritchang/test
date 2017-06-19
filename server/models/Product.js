const mongoose = require('mongoose')
mongoose.Promise = require('bluebird')

const Schema = mongoose.Schema

const productSchema = new Schema({
  SKU: String,
  productName: String,
  productDestc: String,
  productBarcode: String,
  productCategory: String,
  productWeight: Number,
  salesPrice: Number,
  expireDate: { type: Date, default: Date.now },
  productImage: String
})

const Product = mongoose.model('Product', productSchema)

module.exports = Product
