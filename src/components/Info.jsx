import React, { useEffect, useRef, useState } from "react";
import '../App.css';
const RevealOnScroll = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const onWindScroll = () => {
      const element = ref.current;
      if (element) {
        const { top } = element.getBoundingClientRect();
        const isVisible = top < window.innerHeight;
        setIsVisible(isVisible);
      }
    };

    window.addEventListener("scroll", onWindScroll);
    return () => {
      window.removeEventListener("scroll", onWindScroll);
    };
  }, []);

  const classes = `transition-opacity duration-1000 ${
    isVisible ? "opacity-100" : "opacity-0"
  }`;

  return (
    <div ref={ref} className={classes}>
      {children}
    </div>
  );
};

export default function Component() {
  return (
    <div className="about">
    <section className="w-full py-5 md:py-24 lg:py-10 bg-gray-100 dark:bg-gray-800" style={{backgroundColor:"pink"}}>
      <div className="container px-4 md:px-6 grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
        <div className="flex justify-center animate-fade-in">
          <img
            alt="Makeup Artist"
            className="w-full max-w-[400px] lg:max-w-none aspect-[5/6] object-cover rounded-xl"
            height={600}
            src="https://i.postimg.cc/BZR8G5T6/2.jpg"
            width={500}
          />
        </div>
        <div className="space-y-4 lg:space-y-6 animate-fade-in-up delay-100">
          {/* <RevealOnScroll> */}
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Enhance your makeup skills with PreetMakeup
            </h2>
          {/* </RevealOnScroll> */}
          {/* <RevealOnScroll> */}
            <p className="text-gray-500 dark:text-gray-400 text-lg md:text-xl text-justify">
              Based in Maharashtra, Aurangabad, PreetMakeup offers professional
              makeup artist services and courses to elevate your makeup skills.
              Whether you're looking to enhance your personal makeup routine or
              pursue a career in makeup artistry, trust PreetMakeup for all your
              makeup needs  .
            </p>
          {/* </RevealOnScroll> */}
          
          {/* <RevealOnScroll> */}
            <p className="text-gray-500 dark:text-gray-400 text-lg md:text-xl text-justify">
              At PreetMakeup, we offer a range of professional makeup courses
              designed to help you master various makeup techniques. Whether you
              are a beginner looking to learn the basics or an experienced
              makeup artist aiming to refine your skills, our courses provide
              comprehensive knowledge and hands-on training.
            </p>
          {/* </RevealOnScroll> */}
          
        </div>
      </div>
    </section>
    </div>
  );
}
