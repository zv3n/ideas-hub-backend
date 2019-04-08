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
    default:
      'https://images.unsplash.com/photo-1531306728370-e2ebd9d7bb99?ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80',
  },
})

module.exports = mongoose.model('Ideas', IdeaSchema)
