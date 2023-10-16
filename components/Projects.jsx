import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import ProjectItem from './ProjectItem';
import nmp from '../public/assets/projects/nmp.png';
import arp from '../public/assets/projects/arp.png';
import fly from '../public/assets/projects/fly.png';
import ad from '../public/assets/projects/ad.png';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Aurangabad Railway police'
            backgroundImg={arp}
            projectUrl='/aurangabadrailwaypolice'
            tech='React JS'
          />
          <ProjectItem
            title='Navi Mumbai Police'
            backgroundImg={nmp}
            projectUrl='/navimumbaipolice'
            tech='Next JS'

          />
          <ProjectItem
            title='Fly Sahyadri'
            backgroundImg={fly}
            projectUrl='/flysahyadri'
            tech='Next JS'

          />
          <ProjectItem
            title='Ultra Outdoor Advertising'
            backgroundImg={ad}
            projectUrl='/ultraoutdooradvertising'
            tech='React JS'

          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
