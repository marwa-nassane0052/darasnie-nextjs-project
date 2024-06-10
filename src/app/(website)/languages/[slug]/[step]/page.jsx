import { ScrollArea } from "@/components/ui/scroll-area";
import React from "react";
import Sidebar from "../../_components/Sidebar";
import MarkdownContent from "../../_components/MarkdownContent";
import Buttons from "../../_components/Buttons";
import { AwardIcon } from "lucide-react";
import { getStepsContet } from "@/actions/client/groups";
import { getSTeps } from "@/actions/client/groups";
const DUMMY_DATA = {
  steps: [
    {
      id: "0",
      label: "Step 1",
    },
    {
      id: "1",
      label: "Step 2",
    },
    {
      id: "2",
      label: "Step 3",
    },
  ],
  current: {
    title: "Step 1",
    content: `
  ## Title 1
  Hello world!
  ## Title 2
    `,
  },
};

const getSteps = (steps, slug) => {
  return steps.map((step, index) => ({
    ...step,
    href: `/languages/${slug}/${index}`,
  }));
};

export default  async function page({ params }) {
  const data=await getStepsContet(params.slug,params.step)
  return (
    <main className="flex">
      <Sidebar
        items={getSteps(DUMMY_DATA.steps, params.slug)}
        active={params.step}
      />
      <ScrollArea className="flex-grow flex flex-col h-screen bg-[#e4d9ff26]">
        <div className="flex-grow p-8 container">
           <h1>{data?.title}</h1> 
           <p>{data?.content}</p> 


          <Buttons
            step={parseInt(params.step)}
            slug={params.slug}
            length={DUMMY_DATA.steps.length}
          />
        </div>
      </ScrollArea>
    </main>
  );
}
