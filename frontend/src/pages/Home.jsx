import React, { useState } from 'react'
import Topbar from '../componenets/topbar'
import Messages from '../componenets/messages'
import InputSection from '../componenets/input'


const Home = () => {

  const [messages, setMessages] = useState([]);

  const handleSendMessage = (messageText) => {
    const newMessage = {
      text: messageText,
      isUserMessage: true,
    };
    setMessages(messages => [...messages, newMessage]); // Using a function to update the state based on the previous state
  };





  return (
    <div className="home">
      <div className="home-content">
        
        <Topbar/>
        <Messages messages={messages}/>
        <InputSection onSendMessage= {handleSendMessage}/>
        
        </div>
      </div>
  )
}

export default Home