import React from 'react'
import {auth} from './firebase'
import {useAuthState} from 'react-firebase-hooks/auth'
import { GoogleAuthProvider, signInWithRedirect } from 'firebase/auth'


const SignIn = () => {

    //onclick function to access with google

   const googleSignIn = () => {
    const provider = new GoogleAuthProvider()
    signInWithRedirect(auth, provider)
   }
    
  return (
    <div>
        <button onClick={googleSignIn} type='button' className='signin'>Sign In</button>
    </div>
  )
}

export default SignIn