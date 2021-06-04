import React from 'react'

export default function Input({ setMessage, message, sendMessage }) {
  return (
    <div>
      <form className="form">
        <input
          className="input"
          placeholder="Type a message..."
          onChange={e => setMessage(e.target.value)}
          value={message}
          onKeyPress={e => e.key === 'Enter' && sendMessage(e)}
        />
        <button className="sendButton" onClick={e => sendMessage(e)}>
          Send
        </button>
      </form>
    </div>
  )
}
