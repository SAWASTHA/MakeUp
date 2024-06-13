/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";
import { Skeleton } from "./ui/skeleton";
import { useScroll, useTransform, motion } from "framer-motion";

export default function Collage(props) {
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const images = props.images;
  const { scrollYProgress } = useScroll();
  const colOneTranslate = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const colTwoTranslate = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const colThreeTranslate = useTransform(scrollYProgress, [0, 1], [0, -150]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 992px)");

    const handleMediaQueryChange = (event) => {
      setIsDesktop(event.matches);
    };

    mediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  const handleImageLoad = () => {
    setImagesLoaded(true);
  };

  return (
    <div style={{ overflow: "hidden" }}>
      <div className="row mx-2">
        <motion.div
          className="col-12 col-lg-4 mb-2"
          style={isDesktop ? { y: colOneTranslate } : {}}
        >
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
        <motion.div
          className="col-12 col-lg-4 mb-4 mb-lg-0"
          style={isDesktop ? { y: colTwoTranslate } : {}}
        >
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
        <motion.div
          className="col-12 col-lg-4"
          style={isDesktop ? { y: colThreeTranslate } : {}}
        >
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
        <motion.div
          className="col-12 col-lg-4 mb-2"
          style={isDesktop ? { y: colOneTranslate } : {}}
        >
          <img
            src={images[0]}
            className="w-100 shadow-1-strong rounded mb-4"
            onLoad={handleImageLoad}
          />
          <img
            src={images[1]}
            className="w-100 shadow-1-strong rounded mb-4"
            onLoad={handleImageLoad}
          />
        </motion.div>
        <motion.div
          className="col-12 col-lg-4"
          style={isDesktop ? { y: colTwoTranslate } : {}}
        >
          <img
            src={images[2]}
            className="w-100 shadow-1-strong rounded mb-4"
            onLoad={handleImageLoad}
          />
          <img
            src={images[3]}
            className="w-100 shadow-1-strong rounded mb-4"
            onLoad={handleImageLoad}
          />
        </motion.div>
        <motion.div
          className="col-12 col-lg-4"
          style={isDesktop ? { y: colThreeTranslate } : {}}
        >
          <img
            src={images[4]}
            className="w-100 shadow-1-strong rounded mb-4"
            onLoad={handleImageLoad}
          />
          <img
            src={images[5]}
            className="w-100 shadow-1-strong rounded "
            onLoad={handleImageLoad}
          />
        </motion.div>
      </div>
    </div>
  );
}