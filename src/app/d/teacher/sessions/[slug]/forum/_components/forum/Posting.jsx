import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { MdOutlineInsertComment } from "react-icons/md";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function Posting() {
  return (
    <div className="bg-white rounded-xl p-5 space-y-4">
      <div className="flex justify-between">
        <div className="flex items-center gap-4">
          <Avatar className="h-[42px] w-[42px]">
            <AvatarImage
              src="https://api.dicebear.com/8.x/lorelei/svg?seed=Harley&flip=true"
              alt="profile image"
            />
            <AvatarFallback>SC</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-bold text-sm">Sarah Touahi</p>
            <p className="text-xs text-gray-500">Prof de math</p>
          </div>
        </div>
        <div>
          <p className="text-sm">2 jours</p>
        </div>
      </div>
      <div className="border p-4 flex items-center">
        <div className="flex gap-4">
          <div className="min-w-[100px] h-[114px] relative">
            <Image
              alt="post image"
              src="https://aclanthology.org/thumb/D17-1314.jpg"
              fill
            />
          </div>
          <div className="space-y-2">
            <p className="font-bold text-sm">
              corrige type d&apos;exercice de probabilite
            </p>
            <p className="text-xs text-gray-500">
              loremLoren ccnsmcn smcssc csbcshjcdn lmxsckscbsicshjksnlcks
              cnskcnjknsdnn nnnnnnnnnnnnnn nnnn nnnnmnskd,cmslkmlds.
            </p>
          </div>
        </div>
      </div>
      <form className="flex gap-2">
        <Input placeholder="Add a comment" /> <Button>Commenter</Button>
      </form>
      <Dialog>
        <DialogTrigger className="w-full gap-2 flex items-center justify-center border py-2 rounded hover:bg-gray-100">
          <MdOutlineInsertComment /> 11 personnes ont commentées cette
          publication.
        </DialogTrigger>
        <DialogContent className="py-4">
          <DialogHeader>Commentaires</DialogHeader>
          <Comment
            name="Sarah Touahi"
            date="13 Mars 2024"
            image="https://api.dicebear.com/8.x/lorelei/svg?seed=Harley&flip=true"
            text="Il y a un erreur dans la ligne 3"
          />
          <Comment
            name="Sarah Touahi"
            date="13 Mars 2024"
            image="https://api.dicebear.com/8.x/lorelei/svg?seed=Harley&flip=true"
            text="Il y a un erreur dans la ligne 3"
          />
        </DialogContent>
      </Dialog>
    </div>
  );
}

const Comment = ({ name, date, text, image }) => {
  return (
    <div className="flex justify-between">
      <div className="flex items-center gap-4">
        <Avatar className="h-[42px] w-[42px]">
          <AvatarImage src={image} alt="profile image" />
          <AvatarFallback>SC</AvatarFallback>
        </Avatar>
        <div>
          <p className="font-bold text-sm">{name}</p>
          <p className="text-xs text-gray-500">{text}</p>
        </div>
      </div>
      <div>
        <p className="text-xs">{date}</p>
      </div>
    </div>
  );
};
