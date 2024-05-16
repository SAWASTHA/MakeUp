import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "./ui/card";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import { motion } from "framer-motion";
import { Skeleton } from "./ui/skeleton";

export default function CarouselImage() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  // Replace the local image imports with URLs from Collage component
  const images = [
    "https://firebasestorage.googleapis.com/v0/b/medimate-6e21c.appspot.com/o/new.jpg?alt=media&token=e3792b3d-443a-4c7d-bcdd-8a1e1acbb622",
    "https://firebasestorage.googleapis.com/v0/b/medimate-6e21c.appspot.com/o/neww.jpg?alt=media&token=475fa6e3-33fb-44c6-960a-91fff01eee4c",
    "https://firebasestorage.googleapis.com/v0/b/medimate-6e21c.appspot.com/o/12.jpg?alt=media&token=d669c449-ac7f-420a-ac48-5725050972c1"
   
  ];

  const txt = "Makeup Artists";
  const texts = [
    `${txt}\nThat Unleash Your Inner Diva`,
    "Unlock your true radiance\nWith our expert makeup techniques",
    "Your canvas, our expertise –\n let's create something beautiful together",
    `${txt}\nThat Unleash Your Inner Diva`,
    "Unlock your true radiance\nWith our expert makeup techniques",
    "Your canvas, our expertise –\n let's create something beautiful together"
  ];

  const [loadedImages, setLoadedImages] = React.useState(new Array(images.length).fill(false));

  const handleImageLoad = (index) => {
    const newLoadedImages = [...loadedImages];
    newLoadedImages[index] = true;
    setLoadedImages(newLoadedImages);
  };

  return (
    <Carousel plugins={[plugin.current]} className="w-full max-w-screen">
      <CarouselContent className="flex">
        {images.map((image, index) => (
          <CarouselItem key={index} className={`${index} flex-shrink-0 relative`}>
            <Card>
              <CardContent className="flex items-center justify-center relative">
                {!loadedImages[index] && (
                  <Skeleton className="h-[400px] w-[250px] w-100 shadow-1-strong rounded mb-4" />
                )}
                <img
                  src={image}
                  alt={`Carousel Image ${index + 1}`}
                  className={`carousel-image ${loadedImages[index] ? '' : 'hidden'}`}
                  onLoad={() => handleImageLoad(index)}
                />
                <div className="carousel-text-container">
                  {texts[index].split("\n").map((text, textIndex) => (
                    <motion.span
                      key={textIndex}
                      initial={{ opacity: 0, x: -100 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: textIndex * 0.1 }}
                      className="carousel-text"
                    >
                      {text}
                    </motion.span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
