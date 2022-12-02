import React from 'react'

const Message = ({message}) => {
  return (
    <div>
        <div className='message'>
            <p className='name'>maicol</p>
            <p >{message.text}</p>
        </div>
    </div>
  )
}

export default Message