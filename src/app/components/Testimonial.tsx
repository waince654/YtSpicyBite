"use client";

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// Modules
import { Autoplay, Pagination } from "swiper/modules";

// Icons
import { Quote, Star } from "lucide-react";

const Testimonial = () => {
  const testimonials = [
    { id: 1, name: "Emily Johnson", rating: 5, text: "The flavors at this restaurant are absolutely incredible! Every dish I've tried has been a delightful experience." },
    { id: 2, name: "Michael Chen", rating: 4, text: "Great food and excellent service. The staff was very attentive and knowledgeable about the menu." },
    { id: 3, name: "Sarah Thompson", rating: 5, text: "This place is a hidden gem! The attention to detail in both the food presentation and taste is remarkable." },
    { id: 4, name: "David Rodriguez", rating: 5, text: "I've been to many restaurants, but this one stands out. The ambiance, the service, and most importantly, the food are all top-notch." },
    { id: 5, name: "Lisa Patel", rating: 4, text: "A wonderful dining experience! The fusion of flavors in their signature dishes is truly unique and delightful." },
  ];

  return (
    <div className="py-10">
      <h1 className="text-center text-3xl lg:text-4xl font-bold">
        What Our Customers Say
      </h1>

      <div className="max-w-6xl mx-auto py-10 px-3">

        <Swiper
          modules={[Pagination, Autoplay]}
          loop={true}
          autoplay={{ delay: 5000 }}
          speed={600}
          slidesPerView={3}
          spaceBetween={30}
          breakpoints={{
            320: { slidesPerView: 1 },
            480: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          pagination={{ clickable: true }}
          className="mySwiper"
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="border border-gray-300 shadow-md shadow-orange-500 rounded-lg p-4">

                {/*  Rating */}
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={20}
                      fill={star <= item.rating ? "#EF4444" : "none"}
                      color={star <= item.rating ? "#EF4444" : "#555"}
                    />
                  ))}
                </div>

                {/* Text */}
                <p className="py-3">{item.text}</p>

                {/* Footer */}
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-semibold text-red-500 text-lg">
                      {item.name}
                    </h3>
                    <p className="text-sm mt-1">CEO, Webelite Builders</p>
                  </div>
                  <Quote className="text-red-400" />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Pagination container */}
        <div className="swiper-pagination mt-6"></div>

      </div>
    </div>
  );
};

export default Testimonial;
