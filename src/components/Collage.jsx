import React, { useState } from "react";
import { Skeleton } from "./ui/skeleton";
import {Link} from "react-router-dom";

export default function Collage() {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const handleImageLoad = () => {
    setImagesLoaded(true);
  };

  return (
    <div>
      <div className="row mx-2 my-2">
        <div className="col-lg-12 col-md-12 mb-4 flex justify-center items-center">
          <p className="font-bold sm:text-5xl mt-5">
            Take a look at my best works
          </p>

        </div>

        <div className="col-lg-4 col-md-12 mb-4">
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
        </div>

        <div className="col-lg-4 mb-4 mb-lg-0">
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
        </div>

        <div className="col-lg-4 mb-4 mb-lg-0">
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
        </div>
      </div>

      <div className="row mx-2 my-2">
        <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/preetmakeup-4893b.appspot.com/o/c1.jpg?alt=media&token=61abd7ed-a887-4e97-a8aa-ca6a077dc46e"
            className="w-100 shadow-1-strong rounded mb-4"
          
            onLoad={handleImageLoad}
          />

          <img
            src="https://firebasestorage.googleapis.com/v0/b/preetmakeup-4893b.appspot.com/o/c4.jpg?alt=media&token=e15c7aae-fb54-46a0-88ea-3562f73a25dc"
            className="w-100 shadow-1-strong rounded mb-4"
           
            onLoad={handleImageLoad}
          />
        </div>

        <div className="col-lg-4 mb-4 mb-lg-0">
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
        </div>

        <div className="col-lg-4 mb-4 mb-lg-0">
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
        </div>
      </div>
      <div className="flex justify-center mb-4">
      <div className="flex justify-center">
  {/* <Button size="lg" className="bg-transparent text-blue-500 hover:text-blue-700 font-bold py-3 px-6 rounded-full border border-blue-500 hover:border-blue-700">
    View More
  </Button> */}
  <Link className="bg-transparent text-blue-500 hover:text-blue-700 font-bold py-3 px-6 rounded-full border border-blue-500 hover:border-blue-700" to="/gallery"> View More</Link>
</div>

      </div>
    </div>
  );
}
