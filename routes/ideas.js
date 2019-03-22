const express = require('express')
const router = express.Router()
const uuidv1 = require('uuid/v1')
const Ideas = require('../models/Ideas')

router.get('/', (req, res) => {
  Ideas.find()
    .then(games => res.json(ideas))
    .catch(err => res.json(err))
})

router.post('/NewCardInputForm', (req, res) => {
  req.body.id = uuidv1()

  Ideas.create(req.body)
    .then(game => res.json(game))
    .catch(err => res.json(err))
})

module.exports = router
