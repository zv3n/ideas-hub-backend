const express = require('express')
const router = express.Router()
const uuidv1 = require('uuid/v1')
const Ideas = require('../models/Ideas')

router.get('/getall', (req, res) => {
  Ideas.find()
    .then(ideas => res.json(ideas))
    .catch(err => res.json(err))
})

router.post('/create', (req, res) => {
  console.log(req.body)
  // req.body.id = uuidv1()

  Ideas.create(req.body)
    .then(idea => res.json(idea))
    .catch(err => res.json(err))
})

module.exports = router
