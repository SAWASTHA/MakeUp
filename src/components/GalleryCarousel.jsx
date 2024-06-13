/* eslint-disable jsx-a11y/img-redundant-alt */
import * as React from "react";
import { Card, CardContent } from "../components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "../components/ui/carousel";

export function GalleryCarousel() {
  const partyImages = [
    "https://firebasestorage.googleapis.com/v0/b/preetmakeup-4893b.appspot.com/o/party1.jpeg?alt=media&token=59095ade-eaa0-440d-92ff-c670ff8679ca",
    "https://firebasestorage.googleapis.com/v0/b/preetmakeup-4893b.appspot.com/o/party3.jpeg?alt=media&token=f56e1228-5da4-45aa-a2dc-325cea2fb0fa",
    "https://firebasestorage.googleapis.com/v0/b/preetmakeup-4893b.appspot.com/o/p5.jpg?alt=media&token=e172a67f-ecde-438d-ada8-60815e7ede64",
    "https://firebasestorage.googleapis.com/v0/b/preetmakeup-4893b.appspot.com/o/party2.jpeg?alt=media&token=dde68b9f-26ed-4a69-88b8-d8564e3114de",
    "https://firebasestorage.googleapis.com/v0/b/preetmakeup-4893b.appspot.com/o/cc1.jpg?alt=media&token=976526a8-bc63-4d1d-8719-680695ac8a09",
  ];

  return (
    <div className="flex justify-center w-full">
      <Carousel
        opts={{
          align: "start",
        }}
        orientation="vertical"
        className="w-full"
      >
        <CarouselContent className="-mt-1 h-[500px]">
          {partyImages.map((image, index) => (
            <CarouselItem key={index} className="pt-1 h-full">
              <div className="p-1 h-full">
                <Card className="h-full">
                  <CardContent className="flex items-center justify-center h-full p-0">
                    <img
                      src={image}
                      alt={`Party Image ${index + 1}`}
                      className="object-cover w-full h-full"
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
