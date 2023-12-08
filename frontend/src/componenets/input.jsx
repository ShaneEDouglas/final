import React , { useState } from 'react'
import Send from '../images/send-button.png'



const Input = ( { onSendMessage }) => {

  const [inputValue, setInputValue] = useState('');


  const handleinputchange = (e) => {

    setInputValue(e.target.value);

  };

  const handlesend = () => {

    if (inputValue.trim()){
      
      onSendMessage(inputValue);
      setInputValue('');

    }
  };



  return (
    <div className="input-container">
      <input className = "input-field" 
      
      type="text" 

      placeholder='Type a message or something...'

      value={inputValue}

      onChange={handleinputchange}


      
      
      />

      <button className="send-button" onClick={handlesend}> 
          <img src={Send} alt="Send" /> 
        </button>

      </div>
  )
}

export default Input