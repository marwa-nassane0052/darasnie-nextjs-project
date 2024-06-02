import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { IoIosSend } from "react-icons/io";

export default function Messenger() {
  return (
    <div className="space-y-3">
      <div className="bg-primary text-white px-4 py-3 rounded-xl w-10/12 ml-auto">
        <p className="text-sm">
          Bonjour madame, pouvez vous nous envoyer des exercices supllémentaires
          ?
        </p>
        <p className="text-xs ml-auto w-fit mt-1 text-gray-300">18:23</p>
      </div>
      <div className="bg-white px-4 py-3 rounded-xl w-fit">
        <p className="text-sm">bonjour</p>
        <p className="text-xs ml-auto w-fit mt-1 text-purple-700">18:23</p>
      </div>
      <div className="bg-white px-4 py-3 rounded-xl w-fit">
        <p className="text-sm">
          je vais publier une série des exercices , attendez une notif !! 😄
        </p>
        <p className="text-xs ml-auto w-fit mt-1 text-purple-700">18:23</p>
      </div>
      <form className="flex gap-2">
        <Input placeholder="Inserer un message" />{" "}
        <Button size="icon" variant="outline">
          <IoIosSend />
        </Button>
      </form>
    </div>
  );
}
