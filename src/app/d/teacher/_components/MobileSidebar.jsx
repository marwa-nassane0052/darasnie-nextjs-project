"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaListAlt, FaRegCalendarAlt } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { MdLogout, MdWindow } from "react-icons/md";
import { RiMoneyEuroBoxFill } from "react-icons/ri";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { HiMenu } from "react-icons/hi";

const MENU_ITEMS = [
  {
    label: "Dashboard",
    icon: <MdWindow size={19} />,
    href: "/d/teacher",
  },
  {
    label: "Mes sessions",
    icon: <FaListAlt size={19} />,
    href: "/d/teacher/sessions",
  },
  {
    label: "Emploi du temps",
    icon: <FaRegCalendarAlt size={19} />,
    href: "/d/teacher/calendar",
  },
  {
    label: "Mon profil",
    icon: <FaUser size={19} />,
    href: "/d/teacher/profil",
  },
  {
    label: "Paiement",
    icon: <RiMoneyEuroBoxFill size={19} />,
    href: "/d/teacher/paiement",
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
          <div className="w-full">
            <Button
              variant="ghost"
              className="flex-row-reverse w-full justify-center gap-3"
            >
              <MdLogout size={19} /> Deconnecter
            </Button>
          </div>
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
