const mongoose = require('mongoose')

const IdeaSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  comment: {
    type: String,
  },
  image: {
    type: String,
  },
})

module.exports = mongoose.model('Ideas', IdeaSchema)
