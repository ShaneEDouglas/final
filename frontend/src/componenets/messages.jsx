import React,  { useEffect, useRef } from 'react'
import Message from '../componenets/message'

const Messages = ( {messages}) => {

  const endofmessageref = useRef(null);

  useEffect(() => {
    endofmessageref.current.scrollIntoView({ behavior: "smooth" });
  }, [messages]);



  return (
    <div className="messages">

      {messages.map((message, index) => (
        <Message key={index} text={message.text} isUserMessage={message.isUserMessage} />
      ))}

      <div ref={endofmessageref}></div>
      </div>
  )
}

export default Messages