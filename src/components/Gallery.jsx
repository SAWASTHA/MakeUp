import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import transition from "../transaction";
import Collage from "./Collage";
import { GalleryCarousel } from "./GalleryCarousel";

function Gallery() {
  const [activeTab, setActiveTab] = useState("all");

  const bridalImages = [
    "https://firebasestorage.googleapis.com/v0/b/preetmakeup-4893b.appspot.com/o/c1.jpg?alt=media&token=61abd7ed-a887-4e97-a8aa-ca6a077dc46e",
    "https://firebasestorage.googleapis.com/v0/b/preetmakeup-4893b.appspot.com/o/cc4.jpg?alt=media&token=43ae79ea-1c62-4616-982f-76dc2226653b",
    "https://firebasestorage.googleapis.com/v0/b/preetmakeup-4893b.appspot.com/o/c5.jpg?alt=media&token=76a27e8d-3560-4c05-b965-f088df0db3ee",
    "https://firebasestorage.googleapis.com/v0/b/preetmakeup-4893b.appspot.com/o/c6.jpg?alt=media&token=345488d2-163a-4455-bce0-24fd7cd6c10d",
    "https://firebasestorage.googleapis.com/v0/b/preetmakeup-4893b.appspot.com/o/c3.jpg?alt=media&token=7836fc57-1e27-431d-b14e-370512c4f134",
    "https://firebasestorage.googleapis.com/v0/b/preetmakeup-4893b.appspot.com/o/collage1.jpg?alt=media&token=bb1943c4-659a-4511-9f8a-f9cb6e0a1749",
  ];
  const partyImages = [
    "https://firebasestorage.googleapis.com/v0/b/preetmakeup-4893b.appspot.com/o/party1.jpeg?alt=media&token=59095ade-eaa0-440d-92ff-c670ff8679ca",
    "https://firebasestorage.googleapis.com/v0/b/preetmakeup-4893b.appspot.com/o/party3.jpeg?alt=media&token=f56e1228-5da4-45aa-a2dc-325cea2fb0fa",
    "https://firebasestorage.googleapis.com/v0/b/preetmakeup-4893b.appspot.com/o/p5.jpg?alt=media&token=e172a67f-ecde-438d-ada8-60815e7ede64",
    "https://firebasestorage.googleapis.com/v0/b/preetmakeup-4893b.appspot.com/o/party2.jpeg?alt=media&token=dde68b9f-26ed-4a69-88b8-d8564e3114de",
    "https://firebasestorage.googleapis.com/v0/b/preetmakeup-4893b.appspot.com/o/cc1.jpg?alt=media&token=976526a8-bc63-4d1d-8719-680695ac8a09",
    "https://firebasestorage.googleapis.com/v0/b/preetmakeup-4893b.appspot.com/o/p6.jpg?alt=media&token=3ececd40-b5c7-4153-b2c5-bfcbacd61f69",
  ];
  return (
    <>
    {/* <GalleryCarousel/> */}
    <Tabs value={activeTab} onValueChange={setActiveTab}>
      <div className="flex items-center justify-end mt-3 pe-3">
        <TabsList>
          <TabsTrigger value="all" style={{ width: "80px" }}>
            All
          </TabsTrigger>
          <TabsTrigger value="bridal" style={{ width: "80px" }}>
            Bridal
          </TabsTrigger>
          <TabsTrigger value="party" style={{ width: "80px" }}>
            Party
          </TabsTrigger>
        </TabsList>
      </div>

      <TabsContent value="all" className="pb-5">
        <Collage images={partyImages} />
        <Collage images={bridalImages} />
      </TabsContent>

      <TabsContent value="bridal">
        <Collage images={bridalImages} />
      </TabsContent>

      <TabsContent value="party">
        <Collage images={partyImages} />
      </TabsContent>
    </Tabs>
    </>
  );
}
export default transition(Gallery);
