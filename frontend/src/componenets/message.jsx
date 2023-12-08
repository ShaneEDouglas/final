import React from 'react'


const Message = ({text , isUserMessage }) => {
  return (
    <div className= {`Message ${isUserMessage ? 'owner' : ''}`}>


    <div className="messageContent">
        <p>{text}</p>
        {/* Add an image here if necessary */}
    </div>


     




      
        
      </div>
  )
}

export default Message