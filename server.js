const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const port = process.env.PORT || 3000

mongoose.connect('mongodb://localhost:27017/ideas-hub', {
  useNewUrlParser: true,
})

app.use(cors())

app.use(express.json())

app.use('/ideas', require('./routes/ideas'))

app.listen(port, () => {
  console.log('Server ready on port ' + port)
})
