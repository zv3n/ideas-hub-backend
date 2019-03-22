const mongoose = require('mongoose')

const IdeaSchema = new mongoose.Schema({
  id: {
    type: mongoose.SchemaTypes.String,
  },
  title: {
    type: mongoose.SchemaTypes.String,
  },
  comment: {
    type: mongoose.SchemaTypes.String,
  },
})

module.exports = mongoose.model('Ideas', IdeaSchema)
