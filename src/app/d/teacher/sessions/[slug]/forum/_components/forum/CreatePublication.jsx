"use client";

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
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { createPost } from "@/actions/client/forume";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
  title: z.string(),
  text: z.any(),
  content: z.string().optional(),
});

export default function CreatePublication({ idF, fetchData }) {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      text: "",
      content: "",
    },
  });

  const [file, setFile] = useState(null);
  const { toast } = useToast();

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  async function onSubmit(e) {
    e.preventDefault();
    try {
      const values = form.getValues();
      const formData = new FormData();
      formData.append("title", values.title);
      formData.append("text", values.text);
      formData.append("content", file);

      await createPost(idF, formData);
      toast({
        title: "Publication créée",
        description: "Maintenant les utilisateurs peuvent commenter et vous aider",
      });
      fetchData();
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <Dialog>
      <DialogTrigger className="w-full gap-2 flex items-center justify-center border py-2 rounded hover:bg-gray-100">
        <FaPlus /> Cree une Publication
      </DialogTrigger>
      <DialogContent className="py-4">
        <DialogHeader>Cree une Publication</DialogHeader>
        <Form {...form}>
          <form className="space-y-5" onSubmit={onSubmit}>
            <div className="space-y-2">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Titre de publication</FormLabel>
                    <FormControl>
                      <Input
                        type="title"
                        placeholder="Titre de publication"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="space-y-2">
              <FormField
                control={form.control}
                name="text"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Contenu de la publication</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="Contenu de la publication"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="space-y-2 text-white  ">
              <input
                type="file"
                placeholder="ajouter fichier ou pdf"
                onChange={handleFileChange}
                
              ></input>
            </div>
            <Button className="w-full" type="submit">
              Sauvegarder
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
