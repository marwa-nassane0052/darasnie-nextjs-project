import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import React from "react";
import { FaCheck } from "react-icons/fa";
import { LuTrash2 } from "react-icons/lu";

export default function page() {
  return (
    <div>
      <h1 className="font-bold text-xl">Details de Session</h1>
      <hr className="my-6" />
      <div className="border overflow-hidden max-w-[920px]">
        <div className="h-[180px] bg-[#E4D9FF]">
          <div className="mx-auto w-fit translate-y-1/2">
            <Avatar className="h-[200px] w-[200px] p-6 bg-slate-200">
              <AvatarImage
                src="https://api.dicebear.com/8.x/lorelei/svg?seed=Harley&flip=true"
                alt="profile image"
              />
              <AvatarFallback>SC</AvatarFallback>
            </Avatar>
          </div>
        </div>
        <div className="pt-[120px] py-8 px-4">
          <div className="text-center p-6">
            <p className="text-primary">Yahiaoui meriem</p>
            <p>m.yahiaoui@esi-sba.dz</p>
          </div>
          <div className="grid grid-cols-4 gap-8 w-fit mx-auto">
            <div className="text-center">
              <p className="text-lg">Module</p>
              <p>Math</p>
            </div>
            <div className="text-center">
              <p className="text-lg">Specialite</p>
              <p>TM</p>
            </div>
            <div className="text-center">
              <p className="text-lg">Tarif</p>
              <p>2000 DA</p>
            </div>
            <div className="text-center">
              <p className="text-lg">Annee</p>
              <p>2eme</p>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-8 w-fit mx-auto mt-6">
            <div className="text-center">
              <p className="text-lg">Durree</p>
              <p>2 mois</p>
            </div>
            <div className="text-center">
              <p className="text-lg">NB de seances</p>
              <p>2 seances</p>
            </div>
            <div className="text-center">
              <p className="text-lg">NB Max des etudiants</p>
              <p>20</p>
            </div>
            <div className="text-center">
              <p className="text-lg">Duree d&apos;une seance</p>
              <p>3 heures</p>
            </div>
          </div>
          <div className="space-x-3 mx-auto w-fit mt-8">
            <Button className="bg-green-500 gap-3 hover:bg-green-600">
              <FaCheck /> Accepter
            </Button>
            <Button className="bg-red-500 gap-3 hover:bg-red-600">
              <LuTrash2 /> Refuser
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
