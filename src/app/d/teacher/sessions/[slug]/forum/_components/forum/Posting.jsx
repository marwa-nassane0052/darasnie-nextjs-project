"use client"
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
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { addComment } from "@/actions/client/forume";

import { useEffect,useState } from "react";
import { getAllcommentOfPost } from "@/actions/client/forume";
const formSchema = z.object({
  content:z.string(),
});
export default function Posting({name,role,titre,text,createdAT,img,idP}) {
  const [data, setData] = useState([]);
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      content: "",//file
    },
  });
  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        const responseData = await getAllcommentOfPost(idP);
        setData(responseData);   
      } catch (error) {
        console.error(error);
      }
    };

    fetchDataFromApi();
  }, []); 


  async function onSubmit(e){
    e.preventDefault();
    try{
      const values=form.getValues()
      console.log(values)
      const res=addComment(idP,values)
      console.log(res)
    }catch(e){
      console.log(e)
    }
  }
  
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
            <p className="font-bold text-sm">{name}</p>
            <p className="text-xs text-gray-500  r"> {role}</p>
          </div>
        </div>
        <div>
          <p className="text-sm">{createdAT}</p>
        </div>
      </div>
      <div className="border p-4 flex items-center">
        <div className="flex gap-4">
          <div className="min-w-[100px] h-[114px] relative">
            <Image
              alt="post image"
              src={img}
              fill
            />
          </div>
          <div className="space-y-2">
            <p className="font-bold text-sm  t">
              {titre}
            </p>
            <p className="text-xs text-gray-500 ">
              {text}
            </p>
          </div>
        </div>
      </div>
     <Form {...form}>
     <form className="flex">
        <div className="flex justify-between items-center space gap-2">
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  type="text"
                  placeholder="Ajouter commontaire"
                  {...field}
                  
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
                <Button  onClick={onSubmit} >Commenter</Button>

        </div>
      
      </form>
     </Form>

      <Dialog>
        <DialogTrigger className="w-full gap-2 flex items-center justify-center border py-2 rounded hover:bg-gray-100">
          <MdOutlineInsertComment /> 11 personnes ont commentées cette
          publication.
        </DialogTrigger>
        <DialogContent className="py-4">
          <DialogHeader>Commentaires</DialogHeader>
          {data?.map((s)=>{
            return(
              <Comment
              author_full_name={s?.author_full_name}
              createdAt={s?.createdAT}
              content={s?.content}
              />
            )
          })}
          
          
        </DialogContent>
      </Dialog>
    </div>
  );
}

const Comment = ({ author_full_name, createdAt, content, image }) => {
  return (
    <div className="flex justify-between">
      <div className="flex items-center gap-4">
        <Avatar className="h-[42px] w-[42px]">
          <AvatarImage src={image} alt="profile image" />
          <AvatarFallback>SC</AvatarFallback>
        </Avatar>
        <div>
          <p className="font-bold text-sm">{author_full_name}</p>
          <p className="text-xs text-gray-500">{content}</p>
        </div>
      </div>
      <div>
        <p className="text-xs">{createdAt}</p>
      </div>
    </div>
  );
};
