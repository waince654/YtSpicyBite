"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";

// Props type define karo
interface MenuItem {
  id: number;
  pizza: string | StaticImageData; // Agar public folder me hai to string, agar assets import to StaticImageData
  name: string;
  desc: string;
  rating?: number;
}

interface CardProps {
  menu: MenuItem;
}

const Card: React.FC<CardProps> = ({ menu }) => {
  return (
    <div className="rounded-lg flex flex-col items-center space-y-4 py-4 px-6 bg-orange-50 shadow-orange-500 shadow-md border border-red-500">
      
      <Image 
        src={menu.pizza} 
        alt={menu.name} 
        width={200} 
        height={200} 
        className="object-contain"
        priority
      />

      <h2 className="text-2xl font-semibold text-red-600">{menu.name}</h2>

      <p className="text-center text-gray-700">{menu.desc}</p>

      <button className="px-3 py-2 bg-red-500 text-white rounded-lg w-full hover:bg-red-600 transition">
        Order Now
      </button>
    </div>
  );
};

export default Card;
