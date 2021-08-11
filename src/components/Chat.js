import React, { useState, useEffect } from 'react'
import { db } from '../firebase';
import SendMessage from './SendMessage';
import SignOut from './SignOut'

function Chat() {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    db.collection('messages').orderBy('createdAt').limit(50).onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => doc.data()))
    })
  }, []);
  return (
    <div>
      Chat
      <SignOut />
      {messages.map(({id, text, photoURL}) => (
        <div key={id}>
          <img src={photoURL} alt="" /> 
          <p>{text}</p> 
        </div>
      ))}
      <SendMessage />
    </div>
  )
}

export default Chat
