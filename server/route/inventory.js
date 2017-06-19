const express = require('express')
const Product = require('../models/Product')

const inventory = express.Router()

inventory.use((req, res, next) => {
  console.log('hello')
  next()
})

inventory.route('/')
  .get((req, res) => {
    Product.find({}, (err, docs) => {
      res.send(docs)
    })
  })
  .post((req, res) => {
    const newProduct = Product(req.body)
    newProduct.save((err) => {
      if (err) res.send('insert error')
      else res.send('insert success')
    })
  })

inventory.route('/:id')
  .get((req, res) => {
    Product.findById(req.params.id, (err, docs) => {
      res.send(docs)
    })
  })
  .put((req, res) => {
    Product.findByIdAndUpdate(req.params.id, req.body, (err) => {
      if (err) res.send('update error')
      else res.send('update success')
    })
  })
  .delete((req, res) => {
    Product.findByIdAndRemove(req.params.id, (err) => {
      if (err) res.send('delete error')
      else res.send('delete success')
    })
  })

module.exports = inventory
