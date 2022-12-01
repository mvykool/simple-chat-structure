import { signOut } from 'firebase/auth'
import React from 'react'
import { auth } from './firebase'

const SignOut = () => {

  return (
    <div>
        <button onClick={() => auth.signOut()} type='button' className='signin'>Log out</button>
    </div>
  )
}

export default SignOut