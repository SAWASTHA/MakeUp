import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import image from '../images/group.png';
import { useScroll, useTransform, motion, useInView } from 'framer-motion';

export default function Component() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container.current,
    offset: ['start end', 'end start'],
  });

  const backgroundTransform = useTransform(
    scrollYProgress,
    [0, 1],
    ['scale(1.2)', 'scale(1)']
  );
  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 1]);
  const contentTransform = useTransform(scrollYProgress, [0, 1], ['translateY(0)', 'translateY(-50%)']);

  const contentRef = useRef(null);
  const isInView = useInView(contentRef);

  return (
    <section ref={container} className="relative w-full py-24  overflow-hidden">
      <motion.div
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          height: '600px',
          transform: backgroundTransform,
          opacity: backgroundOpacity,
        }}
        className="absolute inset-0"
      />
      <div className="absolute inset-0 bg-gray-900/65 dark:bg-gray-800/70" />
      <motion.div
        ref={contentRef}
        style={{ transform: contentTransform }}
        className="relative container px-4 md:px-6 text-center space-y-6 mt-5"
      >
        <motion.h6
          initial={{ x: '-100vw' }}
          animate={isInView ? { x: 0, transition: { duration: 1, ease: 'easeInOut' } } : {}}
          className="text-3xl font-bold text-white sm:text-4xl md:text-5xl"
        >
          Transform Your Look Today
        </motion.h6>
        <motion.p
          initial={{ x: '-100vw' }}
          animate={isInView ? { x: 0, transition: { duration: 1, ease: 'easeInOut', delay: 0.2 } } : {}}
          className="max-w-[600px] mx-auto text-gray-300 md:text-xl"
        >
          Discover our comprehensive makeup courses and unlock your true potential. From beginner to advanced, we've got
          you covered.
        </motion.p>
        <motion.div
          initial={{ x: '-100vw' }}
          animate={isInView ? { x: 0, transition: { duration: 1, ease: 'easeInOut', delay: 0.4 } } : {}}
          className="flex flex-col gap-4 sm:flex-row justify-center"
        >
          <Link
            className="inline-flex h-10 items-center justify-center rounded-md bg-white px-8 text-sm font-medium text-black shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#ff6b6b] disabled:pointer-events-none disabled:opacity-50"
            to="/course"
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
        </motion.div>
      </motion.div>
    </section>
  );
}