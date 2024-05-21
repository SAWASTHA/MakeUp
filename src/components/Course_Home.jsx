/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Skeleton } from './ui/skeleton';

export default function Component() {
  const [bgImageLoaded, setBgImageLoaded] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const img = new Image();
          img.src = 'https://firebasestorage.googleapis.com/v0/b/medimate-6e21c.appspot.com/o/2%202.png?alt=media&token=45b6d281-a908-439b-9901-a2291af89804';
          img.onload = () => {
            setBgImageLoaded(true);
          };
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full py-24 md:py-32 lg:py-40 bg-cover bg-center bg-no-repeat">
      {!bgImageLoaded && <Skeleton className="absolute inset-0 h-full w-full" />}
      {bgImageLoaded && (
        <img
          src="https://firebasestorage.googleapis.com/v0/b/medimate-6e21c.appspot.com/o/2%202.png?alt=media&token=45b6d281-a908-439b-9901-a2291af89804"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}
      <div className="absolute inset-0 bg-gray-900/70 dark:bg-gray-800/70" />
      <div className="relative container px-4 md:px-6 text-center space-y-6">
        <h6 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">
          Transform Your Look Today
        </h6>
        <p className="max-w-[600px] mx-auto text-gray-300 md:text-xl">
          Discover our comprehensive makeup courses and unlock your true potential. From beginner to advanced, we've got you covered.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row justify-center">
          <Link
            className="inline-flex h-10 items-center justify-center rounded-md bg-[#ff6b6b] px-8 text-sm font-medium text-white shadow transition-colors hover:bg-[#ff4d4d] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#ff6b6b] disabled:pointer-events-none disabled:opacity-50"
            to="#"
            aria-label="Enroll Now"
          >
            Enroll Now
          </Link>
          <Link
            className="inline-flex h-10 items-center justify-center rounded-md border border-[#ff6b6b] bg-transparent px-8 text-sm font-medium text-[#ff6b6b] shadow-sm transition-colors hover:bg-[#ff6b6b]/10 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#ff6b6b] disabled:pointer-events-none disabled:opacity-50"
            to="/contact"
            aria-label="Contact Us"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
