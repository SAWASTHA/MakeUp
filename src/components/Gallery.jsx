import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import transition from "../transaction";
import Collage from "./Collage";

function Gallery() {
  const [activeTab, setActiveTab] = useState("all");
  return (
    <Tabs value={activeTab} onValueChange={setActiveTab}>
      <div className="flex items-center justify-end mt-3 pe-3">
        <TabsList>
          <TabsTrigger value="all" style={{width:'80px'}}>All</TabsTrigger>
          <TabsTrigger value="bridal" style={{width:'80px'}}>Bridal</TabsTrigger>
          <TabsTrigger value="party"style={{width:'80px'}}>Party</TabsTrigger>
        </TabsList>
      </div>

      <TabsContent value="all" className="pb-5">
        <Collage/>
      </TabsContent>

      <TabsContent value="bridal">
      <Collage/>
      </TabsContent>

      <TabsContent value="party">
      <Collage/>
      </TabsContent>
    </Tabs>
  );
}
export default transition(Gallery);
