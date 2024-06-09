
import { Button } from "@/components/ui/button";
import Link from "next/link";
import daresni from "../../../public/daresni.png";
import Image from "next/image";

export default function RootLayout({ children }) {

  return (
    <div>
      <div className="min-h-screen">
        <nav className="py-4 px-14 border-b-2 relative z-50 bg-white">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 items-center">
            <Link href={"/"}>
            <div className="flex justify-start  md:col-span-1">
             <Image src="/daresni.png" width="50" height="50"></Image>
            </div>
            </Link>
            <div className="flex justify-center items-center text-sm  md:justify-start space-x-8 font-bold md:col-span-1 ">
              <Link className="hover:text-indigo-800" href="/tutors">
                Nos profs
              </Link>
              
              <Link href={"/register/prof"} className="hover:text-indigo-800">
                Devenez un prof
              </Link>
              <Link href={"/about"} className="hover:text-indigo-800" >
                À propos de nous
              </Link>
            </div>
            <div className="flex justify-end space-x-12 md:col-span-1">
              <Link href="/signin">
                <Button className="bg-neutral-1 text-ag-body/regular hover:bg-slate-300 border border-purple-added rou ml-2 md:ml-96 md:mt-0 mt-2 w-28 h-8 rounded-3xl button-shrink">
                  Se connecter
                </Button>
              </Link>
            </div>
          </div>
        </nav>
        {children}
      </div>
    </div>
  );
}
