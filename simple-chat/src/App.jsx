import { useState } from 'react'
import NavBar from './NavBar'
import {auth} from './firebase'
import { useAuthState } from 'react-firebase-hooks/auth'

function App() {
  const [user] = useAuthState(auth)

  return (
    <div className='app'>
      <div className='chat-container'>
        <NavBar/>

        
      </div>  
    </div>
  )
}

export default App
