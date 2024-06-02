import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { FaPlus } from "react-icons/fa";

export default function CreatePublication() {
  return (
    <Dialog>
      <DialogTrigger className="w-full gap-2 flex items-center justify-center border py-2 rounded hover:bg-gray-100">
        <FaPlus /> Cree une Publication
      </DialogTrigger>
      <DialogContent className="py-4">
        <DialogHeader>Cree une Publication</DialogHeader>
        <form className="space-y-5">
          <div className="space-y-2">
            <Label htmlFor="title">Titre de publication</Label>
            <Input placeholder="Titre de publication" name="title" id="title" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="content">Contenu de la publication</Label>
            <Textarea
              placeholder="Contenu de publication"
              name="content"
              id="content"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="file">Ajouter un fichier (pdf,image)</Label>
            <Input type="file" placeholder="Importer" name="file" id="file" />
          </div>
          <Button className="w-full">Sauvegarder</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
