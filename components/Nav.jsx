import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { DiCode } from 'react-icons/di';


export default function Nav() {

    const [color, setColor] = useState('transparent');
    const [textColor, setTextColor] = useState('white');
    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav);
      };
      
      useEffect(() => {
        const changeColor = () => {
          if (window.scrollY >= 90) {
            setColor('#ffffff');
            setTextColor('#000000');
          } else {
            setColor('transparent');
            setTextColor('#ffffff');
          }
        };
        window.addEventListener('scroll', changeColor);
      }, []);

    return (
    <div style={{ backgroundColor: `${color}` }}
    className='fixed left-0 top-0 w-full z-10 ease-in duration-300'>
      <div className='max-w-[1240px] m-auto flex justify-between items-center p-4'>
        <Link href="/">
        <h1 style={{ color: `${textColor}` }}
        className='text-4xl flex'> <DiCode /></h1>
        </Link>
        <ul style={{ color: `${textColor}` }}
        className='hidden sm:flex'>
            <li className='p-4'>
                <Link href="/">Home</Link>
            </li>
            <li className='p-4'>
                <Link href="/work">Projects</Link>
            </li>
            <li className='p-4'>
                <Link href="/">Hobby's</Link>
            </li>
            <li className='p-4'>
                <Link href="/contact">Contact</Link>
            </li>
        </ul>

        <div onClick={handleNav} style={{ color: `${textColor}` }} className='sm:hidden block z-10'>
            {nav ? <AiOutlineClose className='text-white' size={20} /> : <AiOutlineMenu size={20}/>}
        </div>

        <div className={
            nav ? 'sm:hidden absolute top-0 right-0 bottom-0 flex justify-center items-center w-60 h-screen bg-zinc-900 opacity-80 text-center ease-in duration-500 opacity-100' : 'sm:hidden absolute top-0 right-[-100%] bottom-0 flex justify-center items-center w-80 h-screen bg-black text-center ease-in duration-500'
          }>
        <ul>
            <li className='p-4 text-2xl hover:font-bold text-white'>
                <Link onClick={handleNav} href="/">Home</Link> 
            </li>
            <li className='p-4 text-2xl hover:font-bold text-white'>
                <Link onClick={handleNav} href="/work">Projects</Link>
            </li>
            <li className='p-4 text-2xl hover:font-bold text-white'>
                <Link onClick={handleNav} href="/">Hobby's</Link>
            </li>
            <li className='p-4 text-2xl hover:font-bold text-white'>
                <Link onClick={handleNav} href="/contact">Contact</Link>
            </li>
        </ul>
        </div>
      </div>
    </div>
  );
}


    