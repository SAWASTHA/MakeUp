/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useContext } from "react";
import { Skeleton } from "./ui/skeleton";
import { Link } from "react-router-dom";
import { useScroll, useTransform, motion } from "framer-motion";
import { DarkModeContext } from './context/DarkModeContext';

export default function Collage() {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const { scrollYProgress } = useScroll();
  const colOneTranslate = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const colTwoTranslate = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const colThreeTranslate = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const { isDarkMode } = useContext(DarkModeContext);

  const handleImageLoad = () => {
    setImagesLoaded(true);
  };

  return (
    <div style={{ overflow: "hidden" }}>
      <div className="row mx-2">
        <motion.div className="col-12 col-lg-4 mb-2" style={{ y: colOneTranslate }}>
          <div className="flex flex-col mb-2">
            {!imagesLoaded && (
              <Skeleton className="h-[355px] w-[250px] w-100 shadow-1-strong rounded mb-4" />
            )}
          </div>
          <div className="flex flex-col">
            {!imagesLoaded && (
              <Skeleton className="h-[355px] w-[250px] w-100 shadow-1-strong rounded mb-4" />
            )}
          </div>
        </motion.div>

        <motion.div className="col-12 col-lg-4 mb-4 mb-lg-0" style={{ y: colTwoTranslate }}>
          <div className="flex flex-col space-y-3 mb-2">
            {!imagesLoaded && (
              <Skeleton className="h-[400px] w-[250px] w-100 shadow-1-strong rounded mb-4" />
            )}
          </div>
          <div className="flex flex-col space-y-3">
            {!imagesLoaded && (
              <Skeleton className="h-[310px] w-[250px] w-100 shadow-1-strong rounded mb-4" />
            )}
          </div>
        </motion.div>

        <motion.div className="col-12 col-lg-4" style={{ y: colThreeTranslate }}>
          <div className="flex flex-col space-y-3 mb-2">
            {!imagesLoaded && (
              <Skeleton className="h-[355px] w-[250px] w-100 shadow-1-strong rounded mb-4" />
            )}
          </div>
          <div className="flex flex-col space-y-3">
            {!imagesLoaded && (
              <Skeleton className="h-[355px] w-[250px] w-100 shadow-1-strong rounded mb-4" />
            )}
          </div>
        </motion.div>
      </div>

      <div className="row mx-2">
        <h2 className="text-2xl font-bold tracking-tighter sm:text-4xl md:text-4xl text-center mb-5">
          Take a look at my work
        </h2>
        <motion.div className="col-12 col-lg-4 mb-2" style={{ y: colOneTranslate }}>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/preetmakeup-4893b.appspot.com/o/c1.jpg?alt=media&token=61abd7ed-a887-4e97-a8aa-ca6a077dc46e"
            className="w-100 shadow-1-strong rounded mb-4"
            onLoad={handleImageLoad}
          />
          <img
            src="https://firebasestorage.googleapis.com/v0/b/preetmakeup-4893b.appspot.com/o/cc4.jpg?alt=media&token=43ae79ea-1c62-4616-982f-76dc2226653b"
            className="w-100 shadow-1-strong rounded mb-4"
            onLoad={handleImageLoad}
          />
        </motion.div>

        <motion.div className="col-12 col-lg-4 undiv" style={{ y: colTwoTranslate }}>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/preetmakeup-4893b.appspot.com/o/c5.jpg?alt=media&token=76a27e8d-3560-4c05-b965-f088df0db3ee"
            className="w-100 shadow-1-strong rounded mb-4"
            onLoad={handleImageLoad}
          />
          <img
            src="https://firebasestorage.googleapis.com/v0/b/preetmakeup-4893b.appspot.com/o/c6.jpg?alt=media&token=345488d2-163a-4455-bce0-24fd7cd6c10d"
            className="w-100 shadow-1-strong rounded mb-4"
            onLoad={handleImageLoad}
          />
        </motion.div>

        <motion.div className="col-12 col-lg-4" style={{ y: colThreeTranslate }}>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/preetmakeup-4893b.appspot.com/o/c3.jpg?alt=media&token=7836fc57-1e27-431d-b14e-370512c4f134"
            className="w-100 shadow-1-strong rounded mb-4"
            onLoad={handleImageLoad}
          />
          <img
            src="https://firebasestorage.googleapis.com/v0/b/preetmakeup-4893b.appspot.com/o/collage1.jpg?alt=media&token=bb1943c4-659a-4511-9f8a-f9cb6e0a1749"
            className="w-100 shadow-1-strong rounded mb-4"
            onLoad={handleImageLoad}
          />
        </motion.div>
      </div>

      <div className="flex justify-end">
        <Link className="bg-transparent text-blue-500 font-bold px-3" to="/gallery">
          View More
        </Link>
      </div>
    </div>
  );
}