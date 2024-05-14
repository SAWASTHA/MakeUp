import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; // Ensure this points to the correct path for your CSS file

export default function Component() {
  return (
    <section className="relative w-full py-24 md:py-32 lg:py-40 bg-[url('https://i.postimg.cc/8c0TVpkc/14.jpg')] bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-gray-900/70 dark:bg-gray-800/70" />
      <div className="relative container px-4 md:px-6 text-center space-y-6">
        <h6 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl playfair-font">
          Transform Your Look Today
        </h6>
        
        <p className="max-w-[600px] mx-auto text-gray-300 md:text-xl">
          Discover our comprehensive makeup courses and unlock your true potential. From beginner to advanced, we've got you covered.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row justify-center">
          <Link
            className="inline-flex h-10 items-center justify-center rounded-md bg-[#ff6b6b] px-8 text-sm font-medium text-white shadow transition-colors hover:bg-[#ff4d4d] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#ff6b6b] disabled:pointer-events-none disabled:opacity-50"
            to="#"
          >
            Enroll Now
          </Link>
          <Link
            className="inline-flex h-10 items-center justify-center rounded-md border border-[#ff6b6b] bg-transparent px-8 text-sm font-medium text-[#ff6b6b] shadow-sm transition-colors hover:bg-[#ff6b6b]/10 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#ff6b6b] disabled:pointer-events-none disabled:opacity-50"
            to="#"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
