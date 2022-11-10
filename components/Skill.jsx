import React from 'react'
import { DiJsBadge, DiHtml5, DiCss3 } from 'react-icons/di'
import { SiTailwindcss } from 'react-icons/si'
import Popup from '../components/Popup'
import { useState } from 'react';
import Link from 'next/link';

function Skill() {

    const [tailwindPopup, setTailwindPopup] = useState(false);
    const [jsPopup, setJsPopup] = useState(false);
    const [cssPopup, setCssPopup] = useState(false);
    const [htmlPopup, setHtmlPopup] = useState(false);

  return (
    <div>
        <div className='flex justify-center'>
            <h1 className='font-bold text-2xl sm:text-4xl mt-10 mb-10'>These are my Skills!</h1>
        </div>
        <div className='flex justify-center gap-0 items-center gap-5 flex-col p-10 lg:flex-row lg:gap-20'>
        <div onClick={() => setHtmlPopup(true)} className='flex flex-col w-60 h-60 items-center justify-center rounded-lg p-10 hover:scale-105 shadow-xl cursor-pointer'>
            <h1 className='font-bold text-2xl mb-4'>HTML 5</h1>
            <DiHtml5 size={100}/>
        </div>
        <div onClick={() => setCssPopup(true)} className='flex flex-col w-60 h-60 items-center justify-center rounded-lg hover:scale-105 shadow-xl cursor-pointer'>
            <h1 className='font-bold text-2xl mb-4'>CSS 3</h1>
            <DiCss3 size={100}/>
        </div>
        <div onClick={() => setJsPopup(true)} className='flex flex-col w-60 h-60 items-center justify-center rounded-lg hover:scale-105 shadow-xl cursor-pointer'>
            <h1 className='font-bold text-2xl mb-4'>JavaScript</h1>
            <DiJsBadge className='items-center' size={100}/>
        </div>
        <div onClick={() => setTailwindPopup(true)} className='flex flex-col w-60 h-60 items-center justify-center rounded-lg hover:scale-105 shadow-xl cursor-pointer'>
            <h1 className='font-bold text-2xl mb-4'>Tailwind</h1>
            <SiTailwindcss className='items-center' size={100}/>
        </div>
        </div>
        <Popup trigger={tailwindPopup} setTrigger={setTailwindPopup}>
            <h1 className="flex font-bold text-xl sm:text-4xl mb-5 gap-5">Tailwind <SiTailwindcss/></h1>
            <p className='text-sm sm:text-2xl'>Tailwind CSS makes it quicker to write and maintain the code of your application. By using this utility-first framework, you don't have to write custom CSS to style your application. Instead, you can use utility classes to control the padding, margin, color, font, shadow, and more of your application.</p>
            <Link target="_blank" href="https://tailwindcss.com/docs/installation" className='border-2 py-2 px-4 m-5 sm:mt-20'> Try it! </Link>
        </Popup>
        <Popup trigger={jsPopup} setTrigger={setJsPopup}>
            <h1 className="flex font-bold text-xl sm:text-4xl mb-5 gap-5">JavaScript <DiJsBadge/></h1>
            <p className='text-sm sm:text-2xl'>JavaScript is a scripting or programming language that allows you to implement complex features on web pages — every time a web page does more than just sit there and display static information for you to look at — displaying timely content updates, interactive maps, animated 2D/3D graphics, scrolling video jukeboxes, etc. — you can bet that JavaScript is probably involved.</p>
        </Popup> 
        <Popup trigger={cssPopup} setTrigger={setCssPopup}>
            <h1 className="flex font-bold text-xl sm:text-4xl mb-5 gap-5">CSS <DiCss3/></h1>
            <p className='text-md sm:text-2xl'>CSS (Cascading Style Sheets) allows you to create great-looking web pages, but how does it work under the hood? This article explains what CSS is with a simple syntax example and also covers some key terms about the language.</p>
        </Popup> 
        <Popup trigger={htmlPopup} setTrigger={setHtmlPopup}>
            <h1 className="flex font-bold text-xl sm:text-4xl mb-5 gap-5">HTML <DiHtml5/></h1>
            <p className='text-sm sm:text-2xl'>HTML stands for Hyper Text Markup Language. HTML is the standard markup language for creating Web pages. HTML describes the structure of a Web page. HTML consists of a series of elements. HTML elements tell the browser how to display the content.</p>
        </Popup>  
    </div>
  )
}

export default Skill
