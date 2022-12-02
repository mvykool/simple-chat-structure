import React from 'react'

const SendMessage = () => {
  return (
    <form className='form'>
        <input className='input' type="text" placeholder='send message' />
        <button className='send-button' type='submit' >send</button>  
    </form>
  )
}

export default SendMessage