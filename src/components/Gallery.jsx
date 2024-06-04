import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Skeleton } from "./ui/skeleton";
import transition from "../transaction";

function Gallery() {
  const [activeTab, setActiveTab] = useState("all");
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const handleImageLoad = () => {
    setImagesLoaded(true);
  };
  return (
    <Tabs value={activeTab} onValueChange={setActiveTab}>
      <div className="flex items-center px-4 mt-3">
        <TabsList>
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="bridal">Bridal</TabsTrigger>
          <TabsTrigger value="party">Party</TabsTrigger>
          
        </TabsList>
      </div>

      <TabsContent value="all">
      <section className=" mx-auto px-2 py-8 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <div className="relative group overflow-hidden rounded-lg">
            <img
              alt="Bridal Makeup 1"
              className="w-full h-60 md:h-80 object-cover transition-transform duration-300 group-hover:scale-105"
              height="400"
              src="https://firebasestorage.googleapis.com/v0/b/medimate-6e21c.appspot.com/o/Classy-Engagement-Look-By-Tejaswini-Makeup-Artist.webp?alt=media&token=9834e842-c868-4a47-ab7f-80d247d53184"
              style={{
                aspectRatio: "600/400",
                objectFit: "cover",
              }}
              width="600"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent p-4 flex flex-col justify-end">
              <h3 className="text-white text-lg font-semibold">Romantic Glow</h3>
              <p className="text-gray-300 text-sm">Soft, dewy complexion with a touch of shimmer</p>
            </div>
          </div>
          <div className="relative group overflow-hidden rounded-lg">
            <img
              alt="Bridal Makeup 2"
              className="w-full h-60 md:h-80 object-cover transition-transform duration-300 group-hover:scale-105"
              height="400"
              src="https://firebasestorage.googleapis.com/v0/b/medimate-6e21c.appspot.com/o/Indian-Engagement-Makeup-Tejaswini-Pune.webp?alt=media&token=3c43d05a-a635-40e8-81e5-6739f6d76c75"
              style={{
                aspectRatio: "600/400",
                objectFit: "cover",
              }}
              width="600"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent p-4 flex flex-col justify-end">
              <h3 className="text-white text-lg font-semibold">Smoky Elegance</h3>
              <p className="text-gray-300 text-sm">Dramatic eye makeup with a bold lip</p>
            </div>
          </div>
          <div className="relative group overflow-hidden rounded-lg">
            <img
              alt="Bridal Makeup 3"
              className="w-full h-60 md:h-80 object-cover transition-transform duration-300 group-hover:scale-105"
              height="400"
              src="https://firebasestorage.googleapis.com/v0/b/medimate-6e21c.appspot.com/o/Bridal-Engagement-Look-Pune.webp?alt=media&token=7be16b9d-1167-4f12-b367-83c845ddeed0"
              style={{
                aspectRatio: "600/400",
                objectFit: "cover",
              }}
              width="600"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent p-4 flex flex-col justify-end">
              <h3 className="text-white text-lg font-semibold">Natural Radiance</h3>
              <p className="text-gray-300 text-sm">Flawless, luminous skin with a subtle glow</p>
            </div>
          </div>
          <div className="relative group overflow-hidden rounded-lg">
            <img
              alt="Bridal Makeup 4"
              className="w-full h-60 md:h-80 object-cover transition-transform duration-300 group-hover:scale-105"
              height="400"
              src="https://firebasestorage.googleapis.com/v0/b/medimate-6e21c.appspot.com/o/Pune-Engagement-Makeup-By-Tejaswini-Pune.webp?alt=media&token=1aab9976-9a31-4175-99a6-fa222ee10079"
              style={{
                aspectRatio: "600/400",
                objectFit: "cover",
              }}
              width="600"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent p-4 flex flex-col justify-end">
              <h3 className="text-white text-lg font-semibold">Timeless Elegance</h3>
              <p className="text-gray-300 text-sm">Classic red lip and winged eyeliner</p>
            </div>
          </div>
          <div className="relative group overflow-hidden rounded-lg">
            <img
              alt="Bridal Makeup 5"
              className="w-full h-60 md:h-80 object-cover transition-transform duration-300 group-hover:scale-105"
              height="400"
              src="https://firebasestorage.googleapis.com/v0/b/medimate-6e21c.appspot.com/o/Open-Hair-Engagement-Look-Pune-Mumbai.webp?alt=media&token=e9188e69-9fd6-4309-b2fb-2806751dc49d"
              style={{
                aspectRatio: "600/400",
                objectFit: "cover",
              }}
              width="600"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent p-4 flex flex-col justify-end">
              <h3 className="text-white text-lg font-semibold">Ethereal Glow</h3>
              <p className="text-gray-300 text-sm">Soft, dewy complexion with a hint of shimmer</p>
            </div>
          </div>
          <div className="relative group overflow-hidden rounded-lg">
            <img
              alt="Bridal Makeup 6"
              className="w-full h-60 md:h-80 object-cover transition-transform duration-300 group-hover:scale-105"
              height="400"
              src="https://firebasestorage.googleapis.com/v0/b/medimate-6e21c.appspot.com/o/Most-Desired-Engagement-Makeup-Look.webp?alt=media&token=fbeafb76-5597-4639-979e-73f44e833b18"
              style={{
                aspectRatio: "600/400",
                objectFit: "cover",
              }}
              width="600"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent p-4 flex flex-col justify-end">
              <h3 className="text-white text-lg font-semibold">Radiant Glamour</h3>
              <p className="text-gray-300 text-sm">Glowing skin with a bold, statement lip</p>
            </div>
          </div>
          
          <div className="relative group overflow-hidden rounded-lg">
            <img
              alt="Bridal Makeup 1"
              className="w-full h-60 md:h-80 object-cover transition-transform duration-300 group-hover:scale-105"
              height="400"
              src="https://firebasestorage.googleapis.com/v0/b/medimate-6e21c.appspot.com/o/party1.jpg?alt=media&token=747c7216-c2be-4332-bacd-eea95898e299"
              style={{
                aspectRatio: "600/400",
                objectFit: "cover",
              }}
              width="600"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent p-4 flex flex-col justify-end">
              <h3 className="text-white text-lg font-semibold">Romantic Glow</h3>
              <p className="text-gray-300 text-sm">Soft, dewy complexion with a touch of shimmer</p>
            </div>
          </div>
          <div className="relative group overflow-hidden rounded-lg">
            <img
              alt="Bridal Makeup 2"
              className="w-full h-60 md:h-80 object-cover transition-transform duration-300 group-hover:scale-105"
              height="400"
              src="https://firebasestorage.googleapis.com/v0/b/medimate-6e21c.appspot.com/o/party2.jpg?alt=media&token=b36afb17-3a84-4be7-b5e4-db955a6dea5d"
              style={{
                aspectRatio: "600/400",
                objectFit: "cover",
              }}
              width="600"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent p-4 flex flex-col justify-end">
              <h3 className="text-white text-lg font-semibold">Smoky Elegance</h3>
              <p className="text-gray-300 text-sm">Dramatic eye makeup with a bold lip</p>
            </div>
          </div>
          <div className="relative group overflow-hidden rounded-lg">
            <img
              alt="Bridal Makeup 3"
              className="w-full h-60 md:h-80 object-cover transition-transform duration-300 group-hover:scale-105"
              height="400"
              src="https://firebasestorage.googleapis.com/v0/b/medimate-6e21c.appspot.com/o/party3.jpg?alt=media&token=f16c1907-6743-4a4d-b187-c9cebed756ed"
              style={{
                aspectRatio: "600/400",
                objectFit: "cover",
              }}
              width="600"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent p-4 flex flex-col justify-end">
              <h3 className="text-white text-lg font-semibold">Natural Radiance</h3>
              <p className="text-gray-300 text-sm">Flawless, luminous skin with a subtle glow</p>
            </div>
          </div>
          <div className="relative group overflow-hidden rounded-lg">
            <img
              alt="Bridal Makeup 4"
              className="w-full h-60 md:h-80 object-cover transition-transform duration-300 group-hover:scale-105"
              height="400"
              src="https://firebasestorage.googleapis.com/v0/b/medimate-6e21c.appspot.com/o/party4.jpg?alt=media&token=9aa2c492-94b0-4622-b699-4e763b8ac236"
              style={{
                aspectRatio: "600/400",
                objectFit: "cover",
              }}
              width="600"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent p-4 flex flex-col justify-end">
              <h3 className="text-white text-lg font-semibold">Timeless Elegance</h3>
              <p className="text-gray-300 text-sm">Classic red lip and winged eyeliner</p>
            </div>
          </div>
          <div className="relative group overflow-hidden rounded-lg">
            <img
              alt="Bridal Makeup 5"
              className="w-full h-60 md:h-80 object-cover transition-transform duration-300 group-hover:scale-105"
              height="400"
              src="https://firebasestorage.googleapis.com/v0/b/medimate-6e21c.appspot.com/o/party5.jpg?alt=media&token=2e5deed1-7e7d-4c46-8269-2a5974521c36"
              style={{
                aspectRatio: "600/400",
                objectFit: "cover",
              }}
              width="600"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent p-4 flex flex-col justify-end">
              <h3 className="text-white text-lg font-semibold">Ethereal Glow</h3>
              <p className="text-gray-300 text-sm">Soft, dewy complexion with a hint of shimmer</p>
            </div>
          </div>
          <div className="relative group overflow-hidden rounded-lg">
            <img
              alt="Bridal Makeup 6"
              className="w-full h-60 md:h-80 object-cover transition-transform duration-300 group-hover:scale-105"
              height="400"
              src="https://firebasestorage.googleapis.com/v0/b/medimate-6e21c.appspot.com/o/party6.jpg?alt=media&token=753e80e7-f2a3-435b-b95a-21b8719f223b"
              style={{
                aspectRatio: "600/400",
                objectFit: "cover",
              }}
              width="600"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent p-4 flex flex-col justify-end">
              <h3 className="text-white text-lg font-semibold">Radiant Glamour</h3>
              <p className="text-gray-300 text-sm">Glowing skin with a bold, statement lip</p>
            </div>
          </div>
        </div>
      </section>

      
      </TabsContent>

      <TabsContent value="bridal">

      <section className="container mx-auto px-4 py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <div className="relative group overflow-hidden rounded-lg">
            <img
              alt="Bridal Makeup 1"
              className="w-full h-60 md:h-80 object-cover transition-transform duration-300 group-hover:scale-105"
              height="400"
              src="https://firebasestorage.googleapis.com/v0/b/medimate-6e21c.appspot.com/o/Classy-Engagement-Look-By-Tejaswini-Makeup-Artist.webp?alt=media&token=9834e842-c868-4a47-ab7f-80d247d53184"
              style={{
                aspectRatio: "600/400",
                objectFit: "cover",
              }}
              width="600"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent p-4 flex flex-col justify-end">
              <h3 className="text-white text-lg font-semibold">Romantic Glow</h3>
              <p className="text-gray-300 text-sm">Soft, dewy complexion with a touch of shimmer</p>
            </div>
          </div>
          <div className="relative group overflow-hidden rounded-lg">
            <img
              alt="Bridal Makeup 2"
              className="w-full h-60 md:h-80 object-cover transition-transform duration-300 group-hover:scale-105"
              height="400"
              src="https://firebasestorage.googleapis.com/v0/b/medimate-6e21c.appspot.com/o/Indian-Engagement-Makeup-Tejaswini-Pune.webp?alt=media&token=3c43d05a-a635-40e8-81e5-6739f6d76c75"
              style={{
                aspectRatio: "600/400",
                objectFit: "cover",
              }}
              width="600"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent p-4 flex flex-col justify-end">
              <h3 className="text-white text-lg font-semibold">Smoky Elegance</h3>
              <p className="text-gray-300 text-sm">Dramatic eye makeup with a bold lip</p>
            </div>
          </div>
          <div className="relative group overflow-hidden rounded-lg">
            <img
              alt="Bridal Makeup 3"
              className="w-full h-60 md:h-80 object-cover transition-transform duration-300 group-hover:scale-105"
              height="400"
              src="https://firebasestorage.googleapis.com/v0/b/medimate-6e21c.appspot.com/o/Bridal-Engagement-Look-Pune.webp?alt=media&token=7be16b9d-1167-4f12-b367-83c845ddeed0"
              style={{
                aspectRatio: "600/400",
                objectFit: "cover",
              }}
              width="600"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent p-4 flex flex-col justify-end">
              <h3 className="text-white text-lg font-semibold">Natural Radiance</h3>
              <p className="text-gray-300 text-sm">Flawless, luminous skin with a subtle glow</p>
            </div>
          </div>
          <div className="relative group overflow-hidden rounded-lg">
            <img
              alt="Bridal Makeup 4"
              className="w-full h-60 md:h-80 object-cover transition-transform duration-300 group-hover:scale-105"
              height="400"
              src="https://firebasestorage.googleapis.com/v0/b/medimate-6e21c.appspot.com/o/Pune-Engagement-Makeup-By-Tejaswini-Pune.webp?alt=media&token=1aab9976-9a31-4175-99a6-fa222ee10079"
              style={{
                aspectRatio: "600/400",
                objectFit: "cover",
              }}
              width="600"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent p-4 flex flex-col justify-end">
              <h3 className="text-white text-lg font-semibold">Timeless Elegance</h3>
              <p className="text-gray-300 text-sm">Classic red lip and winged eyeliner</p>
            </div>
          </div>
          <div className="relative group overflow-hidden rounded-lg">
            <img
              alt="Bridal Makeup 5"
              className="w-full h-60 md:h-80 object-cover transition-transform duration-300 group-hover:scale-105"
              height="400"
              src="https://firebasestorage.googleapis.com/v0/b/medimate-6e21c.appspot.com/o/Open-Hair-Engagement-Look-Pune-Mumbai.webp?alt=media&token=e9188e69-9fd6-4309-b2fb-2806751dc49d"
              style={{
                aspectRatio: "600/400",
                objectFit: "cover",
              }}
              width="600"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent p-4 flex flex-col justify-end">
              <h3 className="text-white text-lg font-semibold">Ethereal Glow</h3>
              <p className="text-gray-300 text-sm">Soft, dewy complexion with a hint of shimmer</p>
            </div>
          </div>
          <div className="relative group overflow-hidden rounded-lg">
            <img
              alt="Bridal Makeup 6"
              className="w-full h-60 md:h-80 object-cover transition-transform duration-300 group-hover:scale-105"
              height="400"
              src="https://firebasestorage.googleapis.com/v0/b/medimate-6e21c.appspot.com/o/Most-Desired-Engagement-Makeup-Look.webp?alt=media&token=fbeafb76-5597-4639-979e-73f44e833b18"
              style={{
                aspectRatio: "600/400",
                objectFit: "cover",
              }}
              width="600"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent p-4 flex flex-col justify-end">
              <h3 className="text-white text-lg font-semibold">Radiant Glamour</h3>
              <p className="text-gray-300 text-sm">Glowing skin with a bold, statement lip</p>
            </div>
          </div>
        </div>
      </section>
      
    
    </TabsContent>

      <TabsContent value="party">
      <section className="container mx-auto px-4 py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <div className="relative group overflow-hidden rounded-lg">
            <img
              alt="Bridal Makeup 1"
              className="w-full h-60 md:h-80 object-cover transition-transform duration-300 group-hover:scale-105"
              height="400"
              src="https://firebasestorage.googleapis.com/v0/b/medimate-6e21c.appspot.com/o/party1.jpg?alt=media&token=747c7216-c2be-4332-bacd-eea95898e299"
              style={{
                aspectRatio: "600/400",
                objectFit: "cover",
              }}
              width="600"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent p-4 flex flex-col justify-end">
              <h3 className="text-white text-lg font-semibold">Romantic Glow</h3>
              <p className="text-gray-300 text-sm">Soft, dewy complexion with a touch of shimmer</p>
            </div>
          </div>
          <div className="relative group overflow-hidden rounded-lg">
            <img
              alt="Bridal Makeup 2"
              className="w-full h-60 md:h-80 object-cover transition-transform duration-300 group-hover:scale-105"
              height="400"
              src="https://firebasestorage.googleapis.com/v0/b/medimate-6e21c.appspot.com/o/party2.jpg?alt=media&token=b36afb17-3a84-4be7-b5e4-db955a6dea5d"
              style={{
                aspectRatio: "600/400",
                objectFit: "cover",
              }}
              width="600"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent p-4 flex flex-col justify-end">
              <h3 className="text-white text-lg font-semibold">Smoky Elegance</h3>
              <p className="text-gray-300 text-sm">Dramatic eye makeup with a bold lip</p>
            </div>
          </div>
          <div className="relative group overflow-hidden rounded-lg">
            <img
              alt="Bridal Makeup 3"
              className="w-full h-60 md:h-80 object-cover transition-transform duration-300 group-hover:scale-105"
              height="400"
              src="https://firebasestorage.googleapis.com/v0/b/medimate-6e21c.appspot.com/o/party3.jpg?alt=media&token=f16c1907-6743-4a4d-b187-c9cebed756ed"
              style={{
                aspectRatio: "600/400",
                objectFit: "cover",
              }}
              width="600"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent p-4 flex flex-col justify-end">
              <h3 className="text-white text-lg font-semibold">Natural Radiance</h3>
              <p className="text-gray-300 text-sm">Flawless, luminous skin with a subtle glow</p>
            </div>
          </div>
          <div className="relative group overflow-hidden rounded-lg">
            <img
              alt="Bridal Makeup 4"
              className="w-full h-60 md:h-80 object-cover transition-transform duration-300 group-hover:scale-105"
              height="400"
              src="https://firebasestorage.googleapis.com/v0/b/medimate-6e21c.appspot.com/o/party4.jpg?alt=media&token=9aa2c492-94b0-4622-b699-4e763b8ac236"
              style={{
                aspectRatio: "600/400",
                objectFit: "cover",
              }}
              width="600"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent p-4 flex flex-col justify-end">
              <h3 className="text-white text-lg font-semibold">Timeless Elegance</h3>
              <p className="text-gray-300 text-sm">Classic red lip and winged eyeliner</p>
            </div>
          </div>
          <div className="relative group overflow-hidden rounded-lg">
            <img
              alt="Bridal Makeup 5"
              className="w-full h-60 md:h-80 object-cover transition-transform duration-300 group-hover:scale-105"
              height="400"
              src="https://firebasestorage.googleapis.com/v0/b/medimate-6e21c.appspot.com/o/party5.jpg?alt=media&token=2e5deed1-7e7d-4c46-8269-2a5974521c36"
              style={{
                aspectRatio: "600/400",
                objectFit: "cover",
              }}
              width="600"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent p-4 flex flex-col justify-end">
              <h3 className="text-white text-lg font-semibold">Ethereal Glow</h3>
              <p className="text-gray-300 text-sm">Soft, dewy complexion with a hint of shimmer</p>
            </div>
          </div>
          <div className="relative group overflow-hidden rounded-lg">
            <img
              alt="Bridal Makeup 6"
              className="w-full h-60 md:h-80 object-cover transition-transform duration-300 group-hover:scale-105"
              height="400"
              src="https://firebasestorage.googleapis.com/v0/b/medimate-6e21c.appspot.com/o/party6.jpg?alt=media&token=753e80e7-f2a3-435b-b95a-21b8719f223b"
              style={{
                aspectRatio: "600/400",
                objectFit: "cover",
              }}
              width="600"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent p-4 flex flex-col justify-end">
              <h3 className="text-white text-lg font-semibold">Radiant Glamour</h3>
              <p className="text-gray-300 text-sm">Glowing skin with a bold, statement lip</p>
            </div>
          </div>
        </div>
      </section>
      
      </TabsContent>
      
    </Tabs>
  );
}
export default transition(Gallery);