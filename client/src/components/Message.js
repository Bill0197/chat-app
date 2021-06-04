import React from 'react'

export default function Message({messsage:{text, user}, name}) {

  let isSentByCurrentUser  =false
  
  const trimmedName = name.trim().toLowerCase()

  if(user === trimmedName){
isSentByCurrentUser =true
  }

  return  isSentByCurrentUser ?
    <div className='messageContainer'>
      <p className='sendText'>{trimmedName}</p>
      <div className='messageBox' >
        <p className='messageText' >{text}</p>
      </div>
    </div>: 
  
}
