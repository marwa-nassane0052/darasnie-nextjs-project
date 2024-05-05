import { ScrollArea } from "@/components/ui/scroll-area";
import TutorsHeader from "./_components/tutorsHeader";
import Sidebar from "./_components/Sidebar";
export default function RootLayout({ children }) {
  return (
    <main className="flex flex-col bg-[#e4d9ff26]">
      <div className="fixed left-0 w-full top-0 bg-white z-10"><TutorsHeader /></div>
      <div className="flex">
        <div className="w-[300px] h-[calc(100vh_-_60px)] fixed left-0 top-[60px] bg-white z-10">
          <Sidebar />
        </div>
        <ScrollArea className="flex-grow p-[20px] pl-[320px] mt-[60px]">{children}</ScrollArea>
      </div>
    </main>
  );
}
