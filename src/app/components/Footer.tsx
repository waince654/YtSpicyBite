"use client";

import React from "react";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-orange-50 text-gray-700">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-red-500">Quick Links</h3>
            <ul className="space-y-2">
              <li>Home</li>
              <li>Menu</li>
              <li>Reservations</li>
              <li>About Us</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-red-500">Contact Us</h3>
            <div className="flex gap-2">
              <MapPin className="text-red-500" />
              <div>
                <p>123 Restaurant Street</p>
                <p>City, State 12345</p>
              </div>
            </div>
            <div className="flex gap-2 items-center my-4">
              <Phone className="text-red-500" />
              <p>Phone: (123) 456-7890</p>
            </div>
            <div className="flex gap-2">
              <Mail className="text-red-500" />
              <p>Email: info@restaurant.com</p>
            </div>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-red-500">Opening Hours</h3>
            <p>Monday - Friday: 11am - 10pm</p>
            <p>Saturday - Sunday: 10am - 11pm</p>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-red-500">Follow Us</h3>
            <div className="flex space-x-4">
              <Image src="/facebook.png" alt="Facebook" width={24} height={24} />
              <Image src="/instagram.png" alt="Instagram" width={24} height={24} />
              <Image src="/twitter.png" alt="Twitter" width={24} height={24} />
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 border-t border-gray-300 pt-8 text-center">
          <p>
            &copy; {new Date().getFullYear()} Your <span className="text-red-500 font-semibold">Spicy</span>Bites. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
