import { ScrollArea } from "@/components/ui/scroll-area";
import Sidebar from "./_components/Sidebar";
import { FilterProvider } from "./FilterContext"; // Import the FilterProvider

export default function RootLayout({ children }) {
  return (
    <FilterProvider>
      <main className="flex flex-col bg-[#e4d9ff26]">
        <div className="flex">
          <div className="w-[300px] h-[calc(100vh_-_60px)] fixed left-0 top-[60px] bg-white z-10">
            <Sidebar />
          </div>
          <ScrollArea className="flex-grow p-[20px] pl-[320px] mt-[60px]">{children}</ScrollArea>
        </div>
      </main>
    </FilterProvider>
  );
}
