import React from 'react'
import ScrollToBottom from 'react-scroll-to-bottom'

export default function Messages({ messages, message, name }) {
  return (
    <ScrollToBottom>
      {messages.map((msg, i) => (
        <div key={i}>
          <Message message={message} name={name} />
        </div>
      ))}
    </ScrollToBottom>
  )
}
