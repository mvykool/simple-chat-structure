import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import React, { useState, useEffect, useRef} from 'react'
import { db } from './firebase';
import Message from './Message'
import SendMessage from './SendMessage';

const Chat = () => {
 
    const [messages, setMessages] = useState([]);
    const scroll = useRef();

 
    useEffect(() => {
      const q  = query(collection(db, 'messages'), orderBy("timestamp"))
      const unsubcribe = onSnapshot(q, (querySnapshot) => {
        let messages = []
        querySnapshot.forEach((doc) => {
            messages.push({...doc.data(), id: doc.id})
        })
        setMessages(messages)
      })
      return () => unsubcribe()
    }, [])

  return (
  <>
    <div>
        {/**chat messange */}
        {messages && messages.map((message) => (
            <Message  key={message.id} message={message} />
        ))}
        
    </div>

    {/**send message */}
    <SendMessage/>
    <span ref={scroll}>

    </span>
  </>
  )
}

export default Chat