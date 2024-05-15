/* eslint-disable react/jsx-pascal-case */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react'
import Component  from './Info';
import Collage from './Collage';
import Course_Home from './Course_Home';
import CarouselImage from './Carousel';

function Home() {
  return (
    <div>
        <CarouselImage/>
        <Collage/>
        <Component/>
        // eslint-disable-next-line react/jsx-pascal-case
        <Course_Home/>
    </div>
  )
}

export default Home
