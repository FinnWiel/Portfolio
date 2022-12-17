import Link from 'next/link';
import {BsFileArrowDown} from 'react-icons/bs'

const Hero = ({heading, message, link, linkcontent}) => {

  return (
    <div className='flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img'>
      {/* Overlay */}
      <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2] h-full' />
      <div className='p-5 text-white z-[2] mt-[-10rem] flex flex-col justify-center items-center'>
        <h2 className='sm:text-6xl lg:text-8xl mt-20 text-4xl font-bold'>{heading}</h2>
        <p className='py-5 text-xl'>{message}</p>
        <button className='px-8 py-2 border rounded-lg hover:border-zinc-300 hover:text-zinc-300'>
        <Link className='' href={link}>
        {linkcontent}
        </Link>
        </button>

        <div className='absolute bottom-10'>
          <BsFileArrowDown size={30}/>
        </div>
      </div>
    </div>
  );
};

export default Hero