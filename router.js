const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.send('Server has started and is running!')
})

module.exports = router
