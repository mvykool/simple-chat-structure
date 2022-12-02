import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import React, {useState} from 'react'
import {auth, db } from './firebase'

const SendMessage = ({scroll}) => {

const [input, setInput] = useState("")

const sendMessage = async (e) => {
    e.preventDefault()
    if(input === ""){
        alert("Please enter a valid message")
        return
    }
  
    const {uid, displayName } = auth.currentUser 
    await addDoc(collection(db, 'messages'), {
        text: input,
        name: displayName,
        uid,
        timestamp: serverTimestamp()
    })
   setInput("");
   scroll.current.scrollView({behavior: 'smooth'})
    
 }

  return (
    <form onSubmit={sendMessage} className='form'>
        <input
        onChange={(e) => setInput(e.target.value)}
        value={input}
        className='input' 
        type="text"
        placeholder='send message' />
        <button className='send-button' type='submit' >send</button>  
    </form>
  )
}

export default SendMessage