import React, { useState, useEffect } from 'react'
import queryString from 'querystring'
import io from 'socket.io-client'
import InfoBar from './InfoBar'
import Input from './Input'
import Messages from './Messages'

let socket

export default function Chat({ location }) {
  const ENDPOINT = 'http://localhost:4000/'

  socket = io(ENDPOINT)

  const [name, setName] = useState('')
  const [room, setRoom] = useState('')

  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([])

  useEffect(() => {
    const data = queryString.parse(location.search)

    setRoom(data.room)
    setName(data['?name'])

    socket.emit('join', { name: data['?name'], room: data.room }, () =>
      console.log('joined')
    )

    return () => {
      socket.emit('disconnect')
      socket.off()
    }
  }, [location.search, ENDPOINT])

  useEffect(() => {
    //
    socket.on('message', message => {
      setMessages([...messages, message])
    })
  }, [messages])

  const sendMessage = e => {
    e.preventDefault()

    if (message) {
      socket.emit('sendMessage', { message }, () => setMessage(''))
    }
  }
  console.log(message, 'message')
  console.log(messages, 'messages')

  return (
    <div>
      <div className="outerContainer">
        <div className="container">
          {/* <input
            onChange={e => setMessage(e.target.value)}
            value={message}
            onKeyPress={e => e.key === 'Enter' && sendMessage(e)}
          /> */}

          <InfoBar room={room} />
          <Messages messages={messages} message={message} name={name} />
          <Input
            message={message}
            sendMessage={sendMessage}
            setMessage={setMessage}
          />
        </div>
      </div>
    </div>
  )
}
