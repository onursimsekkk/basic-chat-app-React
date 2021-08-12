import React, { useState, useEffect, useRef } from 'react'
import { auth, db } from '../firebase';
import SendMessage from './SendMessage';
import SignOut from './SignOut'

function Chat() {
  const scroll = useRef();
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    db.collection('messages').orderBy('createdAt').limit(50).onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => doc.data()))
    })
  }, []);
  return (
    <div>
      <SignOut />
      <div className="messages">
      {messages.map(({id, text, photoURL, uid}) => (
        <div key={id}>
          <div className={`msg ${uid === auth.currentUser.uid ? "sent" : "received"}`}>
            <img src={photoURL} alt="" /> 
            <p>{text}</p> 
          </div>
        </div>
        
      ))}
      </div>
      <SendMessage scroll={scroll} />
      <div ref={scroll}></div>
    </div>
  )
}

export default Chat
