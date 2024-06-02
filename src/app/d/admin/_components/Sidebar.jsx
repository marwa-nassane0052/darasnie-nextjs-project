"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaListAlt } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { MdLogout, MdWindow } from "react-icons/md";
import { RiMoneyEuroBoxFill } from "react-icons/ri";
import { AwardIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { LogOut } from "@/actions/client/auth";
const MENU_ITEMS = [
  {
    label: "Dashboard",
    icon: <MdWindow size={19} />,
    href: "/d/admin",
  },
  {
    label: "Demande des sessions",
    icon: <FaListAlt size={19} />,
    href: "/d/admin/sessions",
  },
  {
    label: "Inscriptions",
    icon: <FaUsers size={19} />,
    href: "/d/admin/inscriptions",
  },
  {
    label: "Paiement",
    icon: <RiMoneyEuroBoxFill size={19} />,
    href: "/d/admin/paiement",
  },
];

export default function Sidebar() {
  const router=useRouter()
  async function handleLogout() {
    await LogOut(); 
    router.push('/signin');
  }

  const pathname = usePathname();
  return (
    <aside className="hidden lg:flex px-5 h-screen border-r py-16 flex-col justify-between items-center">
      <div className="space-y-12">
        <p className="text-lg font-bold text-center">LOGO</p>
        <div className="grid gap-3">
          {MENU_ITEMS.map((item) => (
            <div key={item.href} className="w-full">
              <MenuItem
                icon={item.icon}
                active={
                  item.href == "/d/admin"
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
      <div className="w-full">
        <Button
          variant="ghost"
          className="flex-row-reverse w-full justify-center gap-3 text-red-500"
          onClick={handleLogout}
        >
          <MdLogout size={19} /> Deconnecter
        </Button>
      </div>
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
