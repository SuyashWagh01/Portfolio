import React from 'react';
import Head from 'next/head';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const resume = () => {
  return (
    <>
      <Head>
        <title>Suyash | Resume</title>
        <meta
          name='description'
          content='I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences.'
        />
        <link rel='icon' href='#' />
      </Head>

      <div className='max-w-[940px] mx-auto p-2 pt-[120px]'>
        <h2 className='text-center'>Resume</h2>
        <div className='bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center'>
          <h2 className='text-center'>Suyash Wagh</h2>
          <div className='flex'>
            <a
              href='https://www.linkedin.com/in/suyash-wagh-417509188/'
              target='_blank'
              rel='noreferrer'
            >
              <FaLinkedinIn size={20} style={{ marginRight: '1rem' }} />
            </a>
            <a
              href='#'
              target='_blank'
              rel='noreferrer'
            >
              <FaGithub size={20} style={{ marginRight: '1rem' }} />
            </a>
          </div>
        </div>
        <div className='text-center py-4 text-xl font-bold uppercase tracking-wider'>
          <div className='hidden sm:block'>
            <p>
              Proven Team Member <span className='px-1'>|</span> Web Development{' '}
              <span className='px-1'>|</span> Complex Problem Solving
            </p>
          </div>
          <div className='block sm:hidden'>
            <p>Proven Leadership</p>
            <p className='py-2'>Web Development</p>
            <p>Complex Problem Solving</p>
          </div>
        </div>
        <p>
          Analytical, innovative, and motivated web development professional
          with experience in customer service, team player, and
          organizational effectiveness in fast-paced and challenging
          environments. Adept at developing strategies and driving streamlined
          operations. Diverse analytical skills, team collaboration, and
          relationship building. Consummate professional 
          with solid interpersonal abilities and complex problem-solving skills.
          Effective and proven track record of critical thinking, idea
          generation, and optimizing efficiencies.
        </p>

        {/* Skills */}
        <div className='text-center py-4'>
          <h5 className='text-center underline text-[18px] py-2'>Skills</h5>
          <p className='py-2'>
            <span className='font-bold'>Technical Skills</span>
            <span className='px-2'>|</span>Front-End Web Developer
            <span className='px-2'>|</span> HTML
            <span className='px-2'>|</span>CSS
            <span className='px-2'>|</span>Javascript
            <span className='px-2'>|</span>React
            <span className='px-2'>|</span>Next JS
            {/* <span className='px-2'>|</span>SQL
            <span className='px-2'>|</span>NoSQL
            <span className='px-2'>|</span>Redux */}
            <span className='px-2'>|</span>Tailwind
            <span className='px-2'>|</span> AWS Cloud
            <span className='px-2'>|</span> OOPS / DBMS
          </p>
          {/* <p className='py-2'>
            <span className='font-bold'>Amazon Web Services</span>
            <span className='px-2'>|</span>Amazon Web Services Cloud
            Practitioner
          </p> */}
        </div>

        <h5 className='text-center underline text-[18px] py-4'>
          Professional Experience
        </h5>
        {/* Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
            DREAMCARE DEVELOPERS 
            </span>
            <span className='px-2'>|</span>Pune, MH
          </p>
          <p className='py-1 italic'>Front End Web Developer  (May 2023 - Current)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Ensured comprehensive mobile responsive UI layouts with
              understanding of HTML, CSS, and JavaScript.
            </li>
            <li>
              Troubleshoot issues and concerns, configure operation and analytic
              plugins, and design changes as needed.
            </li>
            <li>
              Worked directly with a diverse client base to understand and
              implement multiple technologies and programs.
            </li>
            {/* <li>
              Platform migration managing DNS servers as well as MX records and
              ensuring a smooth migration process.
            </li> */}
          </ul>
        </div>


        {/* Personal Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
            DREAMCARE DEVELOPERS 
            </span>
            <span className='px-2'>|</span>Pune, MH
          </p>
          <p className='py-1 italic'>Front End Web Developer Intern (Jan 2023 - May 2023)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
            Proficient in HTML, CSS, and JavaScript for creating interactive and responsive web pages.
            </li>
            <li>
            Collaborated with design teams to implement visual concepts and enhance user experiences.
            </li>
            <li>
            Ensured cross-browser compatibility and optimized website performance for optimal user engagement.
            </li>
            <li>
            Strong problem-solving skills with a focus on debugging and delivering high-quality front-end projects.
            </li>
          </ul>
        </div>

        {/*  */}
        <h5 className='text-center underline text-[18px] py-4'>
          Education
        </h5>
      
        {/* Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold'>Vishwakarma University</span>
            <span className='px-2'>|</span>Pune , MH
          </p>
          <p className='py-1 italic'>Bachelor of Technology (2019 – 2023)</p>
          
        </div>
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold'>YCIS </span>
            <span className='px-2'>|</span>Satara , MH
          </p>
          <p className='py-1 italic'>Higher Secondary (2017 – 2019)</p>
          
        </div>
      </div>
    </>
  );
};

export default resume;
