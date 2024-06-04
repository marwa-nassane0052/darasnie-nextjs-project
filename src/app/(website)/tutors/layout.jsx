import { ScrollArea } from "@/components/ui/scroll-area";
<<<<<<< HEAD
import TutorsHeader from "./_components/TutorsHeader";
=======
>>>>>>> origin/main
import Sidebar from "./_components/Sidebar";
export default function RootLayout({ children }) {
  return (
    <main className="flex flex-col bg-[#e4d9ff26]">
<<<<<<< HEAD
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
=======
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
>>>>>>> origin/main
