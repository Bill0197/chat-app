const express = require('express')
const socketIo = require('socket.io')
const http = require('http')
const app = express()
const server = http.createServer(app)
const io = socketIo(server)
const PORT = process.env.PORT || 4000
const router = require('./router')
const { addUser, removeUser, getUser, getUsersInRoom } = require('./users')

app.use(router)

io.on('connection', socket => {
  //
  socket.on('join', ({ name, room }, callback) => {
    const { user, error } = addUser({ name, room })

    if (error) return callback()

    socket.emit('message', {
      user: 'Admin',
      text: `${user.name}, welcome to the room!`,
    })

    socket.broadcast
      .to(user.room)
      .emit('message', { user: 'Admin', text: `${user.room} has joined!` })

    socket.join(user.room)

    callback()
  })

  socket.on('sendMessage', (message, callback) => {
    const user = getUser(socket.id)

    io.to(user.room).emit('message', { user: user.name, text: message })
    callback()
  })

  socket.on('disconnect', () => {
    console.log('user has left :(')
  })
})

server.listen(PORT, () => console.log(`Server has started on port ${PORT}`))
