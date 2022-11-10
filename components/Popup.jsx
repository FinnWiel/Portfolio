import React from 'react'
import { AiOutlineClose } from 'react-icons/ai';
import { useState } from 'react';

function Popup(props, {title, popupText}) {
  return (props.trigger) ? (


    <div className='flex justify-center items-center fixed top-0 left-0 w-full h-screen z-50 opacity-80 text-white'>
      <div className='flex  items-center flex-col relative p-16 w-full max-w-[640px] h-[60%] rounded-lg m-5 bg-black'>
        <button onClick={() => props.setTrigger(false)} className='absolute top-5 right-5 text-white'><AiOutlineClose size={30}/></button>
        { props.children }
      </div>
    </div>
  ) : "";
}

export default Popup
