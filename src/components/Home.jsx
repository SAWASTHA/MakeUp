/* eslint-disable react/jsx-pascal-case */
import React from 'react'
import Component  from './Info';
import Collage from './Collage';
import Course_Home from './Course_Home';
import CarouselImage from './Carousel';
import transition from '../transaction';
import DemoComponent from './demoComponent';


function Home() {
  return (
    <div>
        <CarouselImage/>
        <Collage/>
        <DemoComponent/>
        <Component/>
        <Course_Home/>
    </div>
  )
}

export default transition(Home);
