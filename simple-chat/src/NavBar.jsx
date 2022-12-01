import React from 'react'
import {auth} from './firebase'
import {useAuthState} from 'react-firebase-hooks/auth'
import SignIn from './SignIn'
import SignOut from './SignOut'


const NavBar = () => {

    const [user] = useAuthState(auth)
    console.log(user)

  return (
    <div className='navbar'>
        <h1>Chat app</h1>

    { user ? <SignOut/> : <SignIn/> }
    
    </div>
  )
}

export default NavBar