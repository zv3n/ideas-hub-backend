const express = require('express')
const router = express.Router()
const uuidv1 = require('uuid/v1')
const Ideas = require('../models/Ideas')

router.get('/getall', (req, res) => {
  Ideas.find()
    .then(ideas => res.json(ideas))
    .catch(err => res.json(err))
})

router.get('/:id', (req, res) => {
  Ideas.findById(req.params.id)
    .then(idea => res.json(idea))
    .catch(err => res.json(err))
})

router.post('/create', (req, res) => {
  Ideas.create(req.body)
    .then(idea => res.json(idea))
    .catch(err => res.json(err))
})

router.delete('/:id', (req, res) => {
  Ideas.findByIdAndDelete(req.params.id)
    .then(idea => res.json(idea))
    .catch(err => res.json(err))
})

router.patch('/:id', (req, res) => {
  const id = req.params.id
  console.log('im here, id: ' + id)
  Ideas.findByIdAndUpdate(id, req.body, { new: true })
    .then(idea => {
      console.log(idea)
      res.json(idea)
    })
    .catch(err => res.json(err))
})

module.exports = router
