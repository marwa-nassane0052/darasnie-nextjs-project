"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaListAlt, FaRegCalendarAlt } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { MdForum, MdLogout, MdWindow } from "react-icons/md";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { HiMenu } from "react-icons/hi";
import { IoDocuments } from "react-icons/io5";
import { handleLogout } from "@/actions/server/auth";

const MENU_ITEMS = [
  {
    label: "Dashboard",
    icon: <MdWindow size={19} />,
    href: "/d/student",
  },
  {
    label: "Mes Groupes",
    icon: <FaListAlt size={19} />,
    href: "/d/student/groups",
  },
  {
    label: "Mes Documents",
    icon: <IoDocuments size={19} />,
    href: "/d/student/documents",
  },
  {
    label: "Emploi du temps",
    icon: <FaRegCalendarAlt size={19} />,
    href: "/d/student/calendar",
  },
  {
    label: "Mon Profil",
    icon: <FaUser size={19} />,
    href: "/d/student/profil",
  },
  {
    label: " Messagerie et forum",
    icon: <MdForum size={19} />,
    href: "/forum",
  },
];

export default function MobileSidebar() {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost">
          <HiMenu />
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <aside className="min-h-screen py-16 flex flex-col justify-between items-center">
          <div className="space-y-12">
            <p className="text-lg font-bold text-center">LOGO</p>
            <div className="grid gap-3">
              {MENU_ITEMS.map((item) => (
                <div key={item.href} className="w-full">
                  <SheetTrigger asChild>
                    <MenuItem
                      icon={item.icon}
                      active={pathname == item.href}
                      href={item.href}
                    >
                      {item.label}
                    </MenuItem>
                  </SheetTrigger>
                </div>
              ))}
            </div>
          </div>
          <form action={handleLogout} className="w-full">
            <Button
              variant="ghost"
              className="flex-row-reverse w-full justify-center gap-3"
            >
              <MdLogout size={19} /> Deconnecter
            </Button>
          </form>
        </aside>
      </SheetContent>
    </Sheet>
  );
}

const MenuItem = ({ children, icon, href, active }) => {
  return (
    <Button
      className="justify-start w-full"
      variant={active ? "" : "ghost"}
      asChild
    >
      <Link href={href} className="flex gap-3 items-center">
        {icon} <span>{children}</span>
      </Link>
    </Button>
  );
};