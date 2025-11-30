"use client";
import React from "react";
import Image from "next/image";
import swiggy from "../assets/swiggy.png";
import zomato from "../assets/zomato.png";
import magicpin from "../assets/magicpin.png";
import chowman from "../assets/Chowman-Logo.png";

const Partners = () => {
  const logos = [swiggy, zomato, magicpin, chowman];

  return (
    <div className="py-10 bg-white">
      <div className="text-center">
        <h1 className="mb-4 text-3xl font-bold text-red-500 lg:text-4xl">Our Partners</h1>
        <p className="text-sm lg:text-xl">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium beatae rerum accusantium.
        </p>

        <div
          style={{
            maskImage:
              "linear-gradient(to right, hsl(0 0% 0% / 0), hsl(0 0% 0% / 1) 10%, hsl(0 0% 0% / 1) 90%, hsl(0 0% 0% / 0))",
            WebkitMaskImage:
              "linear-gradient(to right, hsl(0 0% 0% / 0), hsl(0 0% 0% / 1) 10%, hsl(0 0% 0% / 1) 90%, hsl(0 0% 0% / 0))",
          }}
          className="mt-10 flex gap-4 overflow-hidden lg:max-w-6xl mx-auto py-2"
        >
          {[...logos, ...logos].map((logo, index) => (
            <div key={index} className="w-80 p-4 bg-white shadow-md shadow-orange-200">
              <Image src={logo} alt="Partner Logo" width={320} height={80} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;
