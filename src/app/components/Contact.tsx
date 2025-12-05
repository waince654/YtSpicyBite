"use client";

import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";

const Contact = () => {
  const [animationData, setAnimationData] = useState<any>(null);

  useEffect(() => {
    fetch("/delivery.json")
      .then((res) => res.json())
      .then((data) => setAnimationData(data));
  }, []);

  return (
    <div id="contact" className="pb-20">
      <div className="mx-auto max-w-2xl text-center px-4 lg:px-0">
        <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-red-500">
          Contact Us
        </h2>
        <p className="mt-2 text-lg lg:text-xl leading-8 text-gray-600">
          Aute magna irure deserunt veniam aliqua magna enim voluptate.
        </p>
      </div>

      <div className="lg:grid lg:grid-cols-2 mt-10 lg:mt-0 gap-6">
        {/* Left: Lottie Animation */}
        <div className="flex justify-center items-center">
          {animationData && <Lottie animationData={animationData} className="w-300 h-100" />}
        </div>

        {/* Right: Contact Form */}
        <form
          action="#"
          className="lg:mx-auto mt-16 max-w-xl sm:mt-20 bg-orange-50 p-8 rounded-lg mx-4"
        >
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <label htmlFor="first-name" className="block text-sm font-semibold leading-6">
                First name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                className="mt-2.5 block w-full rounded-md border-0 px-3.5 py-2 text-red-500 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6"
              />
            </div>

            <div>
              <label htmlFor="last-name" className="block text-sm font-semibold leading-6">
                Last name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="last-name"
                id="last-name"
                autoComplete="family-name"
                className="mt-2.5 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6"
              />
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="email" className="block text-sm font-semibold leading-6">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                className="mt-2.5 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6"
              />
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="phone-number" className="block text-sm font-semibold leading-6">
                Phone number
              </label>
              <input
                type="tel"
                name="phone-number"
                id="phone-number"
                autoComplete="tel"
                className="mt-2.5 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6"
              />
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="message" className="block text-sm font-semibold leading-6">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="mt-2.5 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6"
                defaultValue={""}
              />
            </div>
          </div>

          <button
            type="submit"
            className="mt-10 w-full rounded-md bg-red-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500"
          >
            Let's talk
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
