import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "./ui/card";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import { motion } from "framer-motion";
import img3 from "../images/neww.jpg";
import img5 from "../images/new.jpg";
import img6 from "../images/12.jpg";

export default function CarouselImage() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true }) 
  );
  const images = [img3, img5,img6,img3, img5,img6];
  const txt = "Makeup Artists";
  const texts = [
    `${txt}\nThat Unleash Your Inner Diva`,
    "Unlock your true radiance\nWith our expert makeup techniques",
    "Your canvas, our expertise –\n let's create something beautiful together",
    `${txt}\nThat Unleash Your Inner Diva`,
    "Unlock your true radiance\nWith our expert makeup techniques",
    "Your canvas, our expertise –\n let's create something beautiful together"  
  ];

  return (
    <Carousel plugins={[plugin.current]} className="w-full max-w-screen">
      <CarouselContent className="flex">
        {images.map((image, index) => (
          <CarouselItem key={index} className={`${index} flex-shrink-0 relative`}>
            <Card>
              <CardContent className="flex items-center justify-center">
                <img src={image} alt={`${index + 1}`} style={{ width: "100%", maxHeight: "500px", objectFit: "cover" }} />
                <div className="this absolute inset-0 flex items-start flex-col mx-8" style={{ top: "40%", left: "70px" }}>
                  {texts[index].split("\n").map((text, textIndex) => (
                    <motion.span
                      key={textIndex}
                      initial={{ opacity: 0, x: -100 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: textIndex * 0.1 }}
                      className="text-white text-xl font-bold"
                      style={{ fontSize: "40px" }}
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
