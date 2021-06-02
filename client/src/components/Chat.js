import React, { useState, useEffect } from 'react'
import queryString from 'querystring'
import io from 'socket.io-client'

export default function Chat({ location }) {
  useEffect(() => {
    const { room, name } = queryString.parse(location.search)
    console.log(room, name);
    console.log(location.search, 'location.search')
  }, [])

  return (
    <div>
      <h1>Chat</h1>
    </div>
  )
}
