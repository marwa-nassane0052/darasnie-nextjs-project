import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";
import { FaPlus } from "react-icons/fa";

export default function ProfileFiles() {
  return (
    <form className="px-16 space-y-12 flex flex-col items-center">
      <div className="flex flex-col gap-3 bg-slate-100 p-6 rounded-xl">
        <Avatar className="h-[150px] w-[150px]">
          <AvatarImage
            src="https://api.dicebear.com/8.x/lorelei/svg?seed=Harley&flip=true"
            alt="profile image"
          />
          <AvatarFallback>SC</AvatarFallback>
        </Avatar>
        <div>
          <Button type="button" asChild>
            <Label htmlFor="image" className="cursor-pointer">
              Changer la Photo
            </Label>
          </Button>
          <Input type="file" name="image" id="image" className="hidden" />
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <Label
          htmlFor="documents"
          className="p-8 rounded-xl border-2 border-dashed grid gap-2 place-items-center cursor-pointer"
        >
          <FaPlus /> <span>Importer les Fichiers</span>
        </Label>
        <Input type="file" name="documents" id="documents" className="hidden" />
      </div>
    </form>
  );
}
