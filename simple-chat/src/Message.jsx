import React from 'react'
import { auth } from './firebase'

const Message = ({message}) => {
 
  const messageClass = message.uid === auth.currentUser.uid
  ? `send`
  : `received`


  return (
    <div>
        <div className={`message ${messageClass}`}>
            <p className='name'>{message.name}</p>
            <p >{message.text}</p>
        </div>
    </div>
  )
}

export default Message