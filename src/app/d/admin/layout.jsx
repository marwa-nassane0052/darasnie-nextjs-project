import { ScrollArea } from "@/components/ui/scroll-area";
import Sidebar from "./_components/Sidebar";
import DashboardHeader from "./_components/DashboardHeader";
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";

export default function RootLayout({ children }) {
  return (
    <main className="flex">
      <Sidebar />
      <ScrollArea className="flex-grow flex flex-col h-screen bg-[#e4d9ff26]">
        <DashboardHeader />
        <div className="flex-grow p-8">{children}</div>
      </ScrollArea>
    </main>
  );
}
