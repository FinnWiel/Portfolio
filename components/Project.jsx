import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AiFillGithub } from 'react-icons/ai'
import { TbWorld } from 'react-icons/tb'


const Project = ({ProjectTitle, ProjectText, ProjectIcon1, ProjectIcon2, ProjectIcon3, ProjectImg, ProjectGithub, ProjectLink}) => {
  return (
    <div>
        <div className="sm:px-20 p-5">
          <div className="bg-white rounded-lg shadow-2xl lg:flex">
            <img src={ProjectImg} alt="" class="lg:w-1/3 rounded-t-lg lg:rounded-l-lg border-2 border-gray-300" />
            <div className="p-6 flex-col">
              <div className='flex gap-4'>
              <h2 class="font-bold text-xl md:text-3xl mb-2">{ProjectTitle}</h2>
                <Link target="_blank" href={ProjectGithub}><AiFillGithub size={25} className='cursor-pointer sm:mt-2'/></Link>
                <Link target="_blank" href={ProjectLink}><TbWorld size={25} className='cursor-pointer sm:mt-2'/></Link>
              </div>
              <div>
                <p className='text-lg'>{ProjectText}</p>
              </div>
              <div className='flex justify-center gap-6 mt-20'>
              <div>
                {ProjectIcon1}
              </div>
              <div>
                {ProjectIcon2}
              </div> 
              <div>
                {ProjectIcon3}
              </div>     
              </div>   
            </div>
          </div>   
      </div> 
    </div>
  );
};

export default Project;