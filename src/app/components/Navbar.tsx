"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import chili from "../assets/chili-pepper.png";

function Header() {
  const [header, setHeader] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-30 mx-auto border-2 border-orange-200 bg-orange-100 transition-all ${
        header ? "py-4 shadow-lg" : "py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Mobile Nav */}
        <div className="flex md:hidden justify-between px-4">
          <div className="flex items-center gap-1">
            <Image src={chili} width={30} height={30} alt="chilli" />
            <h1 className="text-xl font-bold text-red-500">
              Spicy <span className="text-gray-800 font-semibold">Bites</span>
            </h1>
          </div>
          <button onClick={() => setMobileNavOpen((prev) => !prev)}>
            <Menu />
          </button>
        </div>

        {mobileNavOpen && (
          <ul
            onClick={() => setMobileNavOpen(false)}
            className="md:hidden flex flex-col gap-2 mt-2 p-4 text-center text-xl font-semibold bg-orange-100 rounded-lg"
          >
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="#menu">Menu</Link>
            </li>
            <li>
              <Link href="#about">About</Link>
            </li>
            <li>
              <Link href="#contact">Contact</Link>
            </li>
          </ul>
        )}

        {/* Desktop Nav */}
        <div className="hidden md:flex justify-between items-center px-10">
          <div className="flex items-center gap-1 font-semibold text-primary">
            <Image src={chili} width={40} height={40} alt="chilli" />
            <div className="text-xl font-bold text-red-500">
              Spicy <span className="text-gray-800 font-semibold">Bites</span>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <ul className="flex items-center gap-8 font-semibold text-black cursor-pointer">
              <li className="hover:text-red-500 transition-all">
                <Link href="/">Home</Link>
              </li>
              <li className="hover:text-red-500 transition-all">
                <Link href="#menu">Menu</Link>
              </li>
              <li className="hover:text-red-500 transition-all">
                <Link href="#about">About</Link>
              </li>
              <li className="hover:text-red-500 transition-all">
                <Link href="#contact">Contact</Link>
              </li>
              <button className="px-4 py-2 text-white bg-red-500 rounded-lg">
                Order Now
              </button>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
