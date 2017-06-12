const express = require('express')
const Stock = require('../models/Stock')

const inventory = express.Router()

inventory.use((req, res, next) => {
  console.log('hello')
  next()
})

inventory.route('/')
  .get((req, res) => {
    Stock.find({}, (err, docs) => {
      res.send(docs)
    })
  })
  .post((req, res) => {
    const newStock = Stock(req.body)
    newStock.save((err) => {
      if (err) res.send('insert error')
      else res.send('insert success')
    })
  })

inventory.route('/:id')
  .get((req, res) => {
    Stock.findById(req.params.id, (err, docs) => {
      res.send(docs)
    })
  })
  .put((req, res) => {
    Stock.findByIdAndUpdate(req.params.id, req.body, (err) => {
      if (err) res.send('update error')
      else res.send('update success')
    })
  })
  .delete((req, res) => {
    Stock.findByIdAndRemove(req.params.id, (err) => {
      if (err) res.send('delete error')
      else res.send('delete success')
    })
  })

module.exports = inventory
