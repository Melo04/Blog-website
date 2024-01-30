import React from 'react'
import {TfiWrite} from 'react-icons/tfi';
import {FaLaptopCode} from 'react-icons/fa';
import { GiProgression } from "react-icons/gi";

export default function abt() {
  return (
    <div className="container my-24 px-6 mx-auto">
      <section className="mb-32 text-gray-800 text-center">
        <h2 className="text-3xl font-bold mb-20">Why Blogger?</h2>

        <div className="grid lg:gap-x-12 lg:grid-cols-3">
          <div className="mb-12 lg:mb-0">
            <div className="rounded-lg shadow-lg h-full block transition duration-300 ease-in-out hover:bg-gradient-to-br hover:from-indigo-600 hover:to-purple-400 transform hover:-translate-y-1 hover:scale-110 hover:text-white hover:cursor-pointer">
              <div className="flex justify-center items-center group-hover:scale-110">
                <div className="p-4 bg-blue-600 rounded-full shadow-lg inline-block -mt-8 hover:bg-white transition duration-300 ease-in-out">
                  <TfiWrite className="w-8 h-8 text-white hover:text-blue-600" />
                </div>
              </div>
              <div className="p-6">
                <h5 className="text-lg font-semibold mb-4">Content Creation</h5>
                <p>
                  Get high-quality and engaging content that resonates with your
                  target audience, crafted by our experienced content creators.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-12 lg:mb-0">
            <div className="rounded-lg shadow-lg h-full block bg-white transition duration-300 ease-in-out hover:bg-gradient-to-br hover:from-blue-600 hover:to-green-500 transform hover:-translate-y-1 hover:scale-110 hover:text-white hover:cursor-pointer">
              <div className="flex justify-center items-center group-hover:scale-110">
                <div className="p-4 bg-blue-600 rounded-full shadow-lg inline-block -mt-8 hover:bg-white transition duration-300 ease-in-out">
                  <FaLaptopCode className="w-8 h-8 text-white hover:text-blue-600" />
                </div>
              </div>
              <div className="p-6">
                <h5 className="text-lg font-semibold mb-4">
                  Cutting Edge Technology
                </h5>
                <p>
                  Stay ahead of the curve with access to the latest and most
                  advanced technological tools and solutions.
                </p>
              </div>
            </div>
          </div>

          <div className="">
            <div className="rounded-lg shadow-lg h-full block bg-white transition duration-300 ease-in-out hover:bg-gradient-to-br hover:from-red-600 hover:to-orange-300 transform hover:-translate-y-1 hover:scale-110 hover:text-white hover:cursor-pointer">
              <div className="flex justify-center items-center group-hover:scale-110">
                <div className="p-4 bg-blue-600 rounded-full shadow-lg inline-block -mt-8 hover:bg-white transition duration-300 ease-in-out">
                  <GiProgression className="w-8 h-8 text-white hover:text-blue-600" />
                </div>
              </div>
              <div className="p-6">
                <h5 className="text-lg font-semibold mb-4">
                  Latest Technology Trends
                </h5>
                <p>
                  Connect devices, collect and analyze data, and create smart,
                  connected solutions with our Internet of Things (IoT)
                  services, enabling you to harness the power of the
                  interconnected world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
