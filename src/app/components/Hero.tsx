"use client";

import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="bg-orange-50 py-20">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-10 px-6 lg:px-0">
        
        {/* Left: Text Content */}
        <div className="lg:w-1/2 flex flex-col gap-6">
          <h1 className="text-4xl lg:text-6xl font-bold text-red-500">
            Delicious Food <span className="text-orange-600">Delivered</span> Fast
          </h1>
          <p className="text-gray-700 text-base lg:text-lg">
            Order from a wide range of cuisines and get your food delivered
            hot and fresh, right to your doorstep.
          </p>

          <div className="flex gap-4 mt-4">
            <Image
              src="/playstore.png"
              width={120}
              height={40}
              alt="Playstore"
            />
            <Image
              src="/appstore.png"
              width={120}
              height={40}
              alt="Appstore"
            />
          </div>

          <div className="flex items-center gap-6 mt-6">
            <div className="flex items-center gap-2">
              <Image src="/star.png" width={24} height={24} alt="Star" />
              <Image src="/star.png" width={24} height={24} alt="Star" />
              <Image src="/star.png" width={24} height={24} alt="Star" />
              <Image src="/star.png" width={24} height={24} alt="Star" />
              <Image src="/star-outline.png" width={24} height={24} alt="Star" />
              <span className="text-gray-600 text-sm">(4.0 Rating)</span>
            </div>

            <div className="flex items-center gap-2">
              <Image src="/time.png" width={24} height={24} alt="Time" />
              <span className="text-gray-600 text-sm">30-40 min</span>
            </div>
          </div>
        </div>

        {/* Right: Hero Image */}
        <div className="lg:w-1/2 flex justify-center">
          <Image
            src="/pizza.webp"
            width={500}
            height={500}
            alt="Delicious Pizza"
            className="rounded-lg shadow-lg"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;
