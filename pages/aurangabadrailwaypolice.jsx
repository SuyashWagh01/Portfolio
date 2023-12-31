import Image from "next/image";
import React from "react";

import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import arp from "../public/assets/projects/arp.png";
const aurangabadrailwaypolice = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={arp}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Aurangabad Railway Police</h2>
          <h3>React JS / Tailwind / Node js </h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            Designed and developed the Aurangabad Railway Police website using
            React.js with Tailwind CSS for frontend and Node.js for backend.
            Created user-friendly interface, integrated key features, and
            collaborated with stakeholders. Enhanced community engagement and
            received positive feedback. Strengthened skills in React.js,
            Tailwind CSS, and Node.js through practical application.
          </p>
          {/* <a
            href="#"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8">Code</button>
          </a>
          <a
            href="#"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4">Demo</button>
          </a> */}
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> React JS
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Tailwind
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Javascript
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> AWS Cloud
              </p>
              
            
            </div>
          </div>
        </div>
        <Link href="/#projects">
        <button className="px-8 py-2 mt-4">Back</button>
        </Link>
      </div>
    </div>
  );
};

export default aurangabadrailwaypolice;
