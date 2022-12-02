import { useState } from 'react'
import NavBar from './NavBar'
import {auth} from './firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import Chat from './Chat'

function App() {
  const [user] = useAuthState(auth)

  return (
    <div className='app'>
      <div className='chat-container'>
        <NavBar/>
        {/**chat */}
        {user ? <Chat/>  : null}
       
      </div>  
    </div>
  )
}

export default App
