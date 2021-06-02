const express = require('express')
const socketIo = require('socket.io')
const http = require('http')

const app = express()
const server = http.createServer(app)
const io = socketIo(server)
const PORT = process.env.PORT || 4000
const router = require('./router')
app.use(router)

io.on('connection', socket => {
  console.log('we have a new connection')

  socket.on('disconnect', () => {
    console.log('user has left :(')
  })
})

server.listen(PORT, () => console.log(`Server has started on port ${PORT}`))
