import { useRef, useEffect } from "react";
import "../parallexScroll.css"
import { useTransform, useScroll, motion, useAnimation } from "framer-motion";
import React from "react";
import useDimension from "../useDimension";

export default function ParallexScroll() {
  const images = [
    "https://firebasestorage.googleapis.com/v0/b/preetmakeup-4893b.appspot.com/o/c1.jpg?alt=media&token=61abd7ed-a887-4e97-a8aa-ca6a077dc46e",
    "https://firebasestorage.googleapis.com/v0/b/preetmakeup-4893b.appspot.com/o/cc4.jpg?alt=media&token=43ae79ea-1c62-4616-982f-76dc2226653b",
    "https://firebasestorage.googleapis.com/v0/b/preetmakeup-4893b.appspot.com/o/c5.jpg?alt=media&token=76a27e8d-3560-4c05-b965-f088df0db3ee",
    "https://firebasestorage.googleapis.com/v0/b/preetmakeup-4893b.appspot.com/o/c6.jpg?alt=media&token=345488d2-163a-4455-bce0-24fd7cd6c10d",
    "https://firebasestorage.googleapis.com/v0/b/preetmakeup-4893b.appspot.com/o/c3.jpg?alt=media&token=7836fc57-1e27-431d-b14e-370512c4f134",
    "https://firebasestorage.googleapis.com/v0/b/preetmakeup-4893b.appspot.com/o/collage1.jpg?alt=media&token=bb1943c4-659a-4511-9f8a-f9cb6e0a1749",
    "https://firebasestorage.googleapis.com/v0/b/medimate-6e21c.appspot.com/o/Most-Desired-Engagement-Makeup-Look.webp?alt=media&token=fbeafb76-5597-4639-979e-73f44e833b18",
    "https://firebasestorage.googleapis.com/v0/b/medimate-6e21c.appspot.com/o/Open-Hair-Engagement-Look-Pune-Mumbai.webp?alt=media&token=e9188e69-9fd6-4309-b2fb-2806751dc49d",
    "https://firebasestorage.googleapis.com/v0/b/medimate-6e21c.appspot.com/o/Bridal-Engagement-Look-Pune.webp?alt=media&token=7be16b9d-1167-4f12-b367-83c845ddeed0",
    "https://firebasestorage.googleapis.com/v0/b/medimate-6e21c.appspot.com/o/Indian-Engagement-Makeup-Tejaswini-Pune.webp?alt=media&token=3c43d05a-a635-40e8-81e5-6739f6d76c75",
    "https://firebasestorage.googleapis.com/v0/b/medimate-6e21c.appspot.com/o/Classy-Engagement-Look-By-Tejaswini-Makeup-Artist.webp?alt=media&token=9834e842-c868-4a47-ab7f-80d247d53184",
    "https://firebasestorage.googleapis.com/v0/b/medimate-6e21c.appspot.com/o/party5.jpg?alt=media&token=2e5deed1-7e7d-4c46-8269-2a5974521c36"
  ];

  const container = useRef(null);
  const { height } = useDimension();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);

  const controls = useAnimation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start({ opacity: 1, transition: { duration: 1 } });
        } else {
          controls.start({ opacity: 0, transition: { duration: 1 } });
        }
      },
      { threshold: 0.1 }
    );

    if (container.current) {
      observer.observe(container.current);
    }

    return () => {
      if (container.current) {
        observer.unobserve(container.current);
      }
    };
  }, [controls]);

  return (
    <motion.div ref={container} className="scroll-container" animate={controls} initial={{ opacity: 0 }}>
      <motion.div className="gallery">
        <Column images={[images[0], images[1], images[2]]} y={y1} />
        <Column images={[images[3], images[4], images[5]]} y={y2} />
        <Column images={[images[6], images[7], images[8]]} y={y3} />
        <Column images={[images[9], images[10], images[11]]} y={y4} />
      </motion.div>
    </motion.div>
  );
}

const Column = ({ images, y }) => {
  return (
    <motion.div className="column" style={{ y }}>
      {images.map((src, index) => (
        <div key={index} className="imageContainer">
          <img src={src} alt="image" />
        </div>
      ))}
    </motion.div>
  );
};
