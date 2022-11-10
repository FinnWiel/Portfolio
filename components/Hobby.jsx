import React from 'react'
import { DiCode } from 'react-icons/di'
import { FaGamepad, FaUserFriends } from 'react-icons/fa'
import { BiPen } from 'react-icons/bi'
import Popup from '../components/Popup'
import { useState } from 'react';
import Link from 'next/link';

function Hobby() {

    const [tailwindPopup, setTailwindPopup] = useState(false);
    const [jsPopup, setJsPopup] = useState(false);
    const [cssPopup, setCssPopup] = useState(false);
    const [htmlPopup, setHtmlPopup] = useState(false);

  return (
    <div>
        <div className='flex justify-center'>
            <h1 className='font-bold text-2xl sm:text-4xl mt-10 mb-10'>This is what I do for fun!</h1>
        </div>
        <div className='flex justify-center gap-0 items-center gap-5 flex-col p-10 lg:flex-row lg:gap-20'>
        <div onClick={() => setHtmlPopup(true)} className='flex flex-col w-60 h-60 items-center justify-center rounded-lg p-10 shadow-xl'>
            <h1 className='font-bold text-2xl mb-4'>Coding</h1>
            <DiCode size={100}/>
        </div>
        <div onClick={() => setCssPopup(true)} className='flex flex-col w-60 h-60 items-center justify-center rounded-lg shadow-xl'>
            <h1 className='font-bold text-2xl mb-4'>Gaming</h1>
            <FaGamepad size={100}/>
        </div>
        <div onClick={() => setJsPopup(true)} className='flex flex-col w-60 h-60 items-center justify-center rounded-lg shadow-xl'>
            <h1 className='font-bold text-2xl mb-4'>Drawing</h1>
            <BiPen className='items-center' size={100}/>
        </div>
        <div onClick={() => setTailwindPopup(true)} className='flex flex-col w-60 h-60 items-center justify-center rounded-lg shadow-xl'>
            <h1 className='font-bold text-2xl mb-4'>Hanging out</h1>
            <FaUserFriends className='items-center' size={100}/>
        </div>
        </div> 
    </div>
  )
}

export default Hobby