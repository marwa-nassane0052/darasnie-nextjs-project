import { ScrollArea } from "@/components/ui/scroll-area";
import Sidebar from "./_components/Sidebar";
export default function RootLayout({ children }) {
  return (
    <main className="flex flex-col bg-[#e4d9ff26]">
      <div className="flex">
        <div className="w-[300px] h-screen fixed left-0 top-0 pt-[60px] bg-white z-10 border-r">
          <Sidebar />
        </div>
        <ScrollArea className="flex-grow p-[20px] pl-[320px]">
          {children}
        </ScrollArea>
      </div>
    </main>
  );
}
