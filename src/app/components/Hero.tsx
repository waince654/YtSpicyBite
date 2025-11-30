"use client";
import React from "react";
import Image from "next/image";
import pizza from "../assets/pizza.webp";
import playStore from "../assets/playstore.png";
import appStore from "../assets/appstore.png";
import star from "../assets/star.png";
import starOutline from "../assets/star-outline.png";
import time from "../assets/time.png";
import cabbage from "../assets/cabbage.png";
import tomatocut from "../assets/tomatocut.png";

const Hero = () => {
  return (
    <div className="bg-orange-50 h-[600px]">
      <div className="relative flex flex-col items-center justify-center p-5 lg:flex-row lg:max-w-7xl mx-auto">
        {/* Left Section */}
        <div className="relative z-20 lg:w-1/2 lg:space-y-6 lg:px-10">
          <div className="flex gap-2">
            <Image src={playStore} alt="playstore" width={112} height={40} />
            <Image src={appStore} alt="appstore" width={112} height={40} />
          </div>

          <h1 className="mt-4 font-bold text-4xl lg:mt-0 lg:text-6xl">
            <span className="text-red-500">Delicious</span> Meals Delivered to Your Doorsteps.
          </h1>
          <p className="my-3 text-sm text-gray-600">
            Discover a world of culinary delights with our food delivery service. Enjoy fast, reliable delivery and a wide selection of mouthwatering dishes.
          </p>

          <div className="flex gap-3">
            <button className="z-20 px-3 py-2 text-white bg-red-500 rounded-lg hover:bg-red-600 hover:scale-110 transition-all">
              Order Now
            </button>
            <button className="px-3 py-2 text-red-500 bg-white border border-red-500 rounded-lg hover:scale-110 transition-all">
              Contact Now
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="relative lg:w-1/2 w-[275px]">
          <Image src={pizza} alt="food" className="mx-auto spin" />
          
          <div className="absolute bottom-16 lg:right-14 flex items-center gap-1 px-4 py-2 text-lg bg-red-50 border border-red-200 rounded-full">
            <Image src={time} alt="time" width={48} height={48} />
            <p className="leading-4 text-sm font-semibold">
              Super Fast
              <br />
              Delivery
            </p>
          </div>

          <Image src={tomatocut} alt="tomato" className="absolute hidden lg:block lg:bottom-20 lg:left-4 lg:w-32 w-20" />

          <div className="absolute top-10 right-36 flex flex-col items-center px-4 py-2 text-lg border border-red-200 rounded-full bg-red-50">
            <p className="leading-4 text-sm font-semibold">Good Rating</p>
            <div className="flex">
              <Image src={star} width={15} height={15} alt="star" />
              <Image src={star} width={15} height={15} alt="star" />
              <Image src={star} width={15} height={15} alt="star" />
              <Image src={star} width={15} height={15} alt="star" />
              <Image src={starOutline} width={15} height={15} alt="star" />
            </div>
          </div>

          <div className="absolute top-32 left-44 flex flex-col items-center px-6 py-2 text-sm border border-red-200 rounded-full bg-red-50 lg:top-16 lg:left-24">
            <h1 className="text-xl font-bold text-red-500 lg:text-2xl">100+</h1>
            <p className="font-semibold">Restaurants</p>
          </div>

          <Image src={cabbage} alt="cabbage" className="absolute top-72 left-5 z-10 w-20 lg:top-[410px] lg:w-44" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
