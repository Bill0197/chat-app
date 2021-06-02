const express = require('express')
const router = express.Router()

router.get('/api/test', (req, res) => {
  console.log('req ...', req)
  res.send('SENT')
})

module.exports = router
