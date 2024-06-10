"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaListAlt, FaRegCalendarAlt } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { MdLogout, MdWindow } from "react-icons/md";
import { IoLanguage } from "react-icons/io5";
<<<<<<< HEAD
import Image from "next/image";
=======
import { handleLogout } from "@/actions/server/auth";

>>>>>>> 7d5fb1cedc122aefbd71e658baec31015eacd2b8
const MENU_ITEMS = [

  {
    label: "Mes Groupes",
    icon: <FaListAlt size={19} />,
    href: "/d/student",
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
    label: "Langues",
    icon: <IoLanguage size={19} />,
    href: "/d/student/languages",
  },
];

export default function Sidebar() {
  const pathname = usePathname();
  return (
    <aside className="hidden lg:flex px-5 h-screen border-r py-16 flex-col justify-between items-center">
      <div className="space-y-12">
      <div className="text-lg font-bold flex justify-center items-center">
          <Image src="/daresni.png" width={50} height={50} alt="Daresni Logo" />
        </div>
        <div className="grid gap-3">
          {MENU_ITEMS.map((item) => (
            <div key={item.href} className="w-full">
              <MenuItem
                icon={item.icon}
                active={
                  item.href == "/d/student"
                    ? pathname == item.href
                    : pathname.startsWith(item.href)
                }
                href={item.href}
              >
                {item.label}
              </MenuItem>
            </div>
          ))}
        </div>
      </div>
      <form action={handleLogout} className="w-full">
        <Button
          variant="ghost"
          className="flex-row-reverse w-full justify-center gap-3 text-red-500"
        >
          <MdLogout size={19} /> Deconnecter
        </Button>
      </form>
    </aside>
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
