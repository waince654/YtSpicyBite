"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Lottie from "lottie-react";

const KeyFeatures = () => {
  const [animationData, setAnimationData] = useState<any>(null);

  useEffect(() => {
    // Public folder me rakhi JSON file
    fetch("/Chefcook.json")
      .then((res) => res.json())
      .then((data) => setAnimationData(data));
  }, []);

  return (
    <section className="bg-orange-50 py-20" id="about">
      <div className="flex flex-col lg:flex-row max-w-7xl mx-auto">

        {/* Left: Lottie Animation */}
        <div className="lg:w-1/2 flex items-center justify-center">
          {animationData && (
            <Lottie animationData={animationData} className="w-[500px]" />
          )}
        </div>

        {/* Right: Text Content */}
        <div className="lg:w-1/2 px-6 lg:px-0 flex flex-col space-y-3 lg:space-y-7 justify-center">
          <h2 className="text-red-600 font-semibold text-lg lg:text-xl">
            KEY FEATURES
          </h2>

          <h1 className="text-4xl lg:text-6xl font-bold">
            Enjoy a Seamless <span className="text-red-500">Ordering</span> Experience
          </h1>

          <p className="text-gray-700">
            From fast delivery to a wide selection of cuisines, we’ve got you covered!
          </p>

          <div className="flex gap-3 pt-4">
            <Image src="/playstore.png" alt="Playstore" width={120} height={40} />
            <Image src="/appstore.png" alt="Appstore" width={120} height={40} />
          </div>
        </div>

      </div>
    </section>
  );
};

export default KeyFeatures;
