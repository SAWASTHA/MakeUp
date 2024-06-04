import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "./ui/card";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import { motion, useInView } from "framer-motion";
import { Skeleton } from "./ui/skeleton";

export default function CarouselImage() {
  const plugin = React.useRef(Autoplay({ delay: 5000, stopOnInteraction: true }));

  const images = React.useMemo(() => [
    "https://firebasestorage.googleapis.com/v0/b/medimate-6e21c.appspot.com/o/new.jpg?alt=media&token=e3792b3d-443a-4c7d-bcdd-8a1e1acbb622",
    "https://img.freepik.com/free-photo/make-up-artist-woman-looking-mirror-applying-contouring_23-2148332531.jpg?t=st=1716307459~exp=1716311059~hmac=1aec59a66fa4af4b7922ccf637fd63eaa4085088f9c59852c93b654f868f4bb0&w=900",
    "https://firebasestorage.googleapis.com/v0/b/medimate-6e21c.appspot.com/o/carou2.jpg?alt=media&token=e4c9df66-2fdb-4385-90cb-116d36866198"
  ], []);

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
    setLoadedImages((prev) => {
      const newLoadedImages = [...prev];
      newLoadedImages[index] = true;
      return newLoadedImages;
    });
  };

  React.useEffect(() => {
    images.forEach((image, index) => {
      const img = new Image();
      img.src = image;
      img.onload = () => handleImageLoad(index);
    });
  }, [images]);

  return (
    <Carousel plugins={[plugin.current]} className="w-full max-w-screen">
      <CarouselContent className="flex">
        {images.map((image, index) => (
          <CarouselItem key={index} className="flex-shrink-0 relative w-full md:w-1/3">
            <Card>
              <CardContent className="flex items-center justify-center relative">
                {!loadedImages[index] && (
                  <div className="relative w-full h-[300px] md:h-[500px]">
                    <Skeleton className="absolute inset-0 w-full h-full shadow-1-strong rounded" />
                  </div>
                )}
                {loadedImages[index] && (
                  // eslint-disable-next-line jsx-a11y/img-redundant-alt
                  <img
                    src={image}
                    alt={`Carousel Image ${index + 1}`}
                    className="w-full h-[300px] md:h-[500px] object-cover shadow-1-strong rounded"
                  />
                )}
                <div className="carousel-text-container absolute inset-0 flex flex-col justify-center items-start p-4 md:p-8">
                  {texts[index].split("\n").map((text, textIndex) => (
                    <InViewAnimateText key={textIndex} text={text} delay={textIndex * 0.1} />
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

const InViewAnimateText = ({ text, delay }) => {
  const ref = React.useRef(null);
  const [animationKey, setAnimationKey] = React.useState(0);

  const inView = useInView(ref, { triggerOnce: false });

  React.useEffect(() => {
    if (inView) {
      setAnimationKey(prevKey => prevKey + 1);
    }
  }, [inView]);

  return (
    <motion.span
      key={animationKey}
      ref={ref}
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay }}
      className="carousel-text text-white text-left"
    >
      {text}
    </motion.span>
  );
};
