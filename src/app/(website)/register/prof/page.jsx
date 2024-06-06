"use client"
import { FiUpload } from 'react-icons/fi';
import { Input } from "@/components/ui/input";
import axios from "axios";

import { Label } from "@/components/ui/label";
import { singupProf } from "@/actions/client/auth"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,

} from "@/components/ui/select";

import { number, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from 'next/navigation';


const formSchema = z
  .object({
    name: z.string().min(2).max(50),
    familyname: z.string().min(2).max(50),
    email: z.string().email(),
    phone: z.coerce.number(),
    password: z.string().min(6).max(50),
    password2: z.string().min(6),
    Cv: z.string(),
    picture: z.string(),

  }).superRefine(({ password2, password }, ctx) => {
    if (password2 !== password) {
      ctx.addIssue({
        code: "custom",
        message: "The passwords did not match",
        path: ["password2"],
      });
    }
  });


export default function AddSessionDialog({ children }) {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      familyname: "",
      email: "",
      phone: null,
      password: "",
      password2: "",
      picture: "",
      Cv: ""

    }
  })

  const [isDisabled, setIsdisabled] = useState(true)
  const { toast } = useToast();
  const router = useRouter()

  async function onSubmit(values) {
    delete values.password2;

    const formData = new FormData();
    formData.append('name', form.getValues('name'));
    formData.append('familyname', values.familyname);
    formData.append('phone', values.phone);

    formData.append('password', values.password);
    formData.append('email', values.email);
     formData.append('picture', values.picture);

    const dataBody = JSON.stringify(formData)
    console.log(values)

    try {
      const res = singupProf(values)
      toast({
        title: "Sign up Successful",
        description: "Verifier votre email pour le lien de validation",
      });
      //router.push('/signin');

    } catch (err) {
      toast({
        title: "Sign up Failed",
        description: "Something went wrong",
        variant: "destructive",
      });
      console.log(err);
    }
  }

  return (

    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 mb-12" >
        <div className="block">
          <h1 className="text-4xl mt-[35px]">Signup</h1>
          <p className="text-[13px] text-[#A3A9AF] mt-[23px]">
            Entrez vos détails ci-dessous pour créer votre compte et commencer
          </p>
          <div >
            <div className="grid md:grid-cols-2 gap-x-16 gap-y-7 mt-[54px] text-sm">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel> Nom</FormLabel>
                    <FormControl>
                      <Input placeholder="John" id="module" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="familyname"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nom de famille</FormLabel>
                    <FormControl>
                      <Input placeholder="john..." id="tarif" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid md:grid-cols-2 gap-x-16 gap-y-7 mt-[54px] text-sm">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="jhon@gmail.com" id="email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                className="space-y-2"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Numero telephone</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="0668320660" id="phone_number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />


            </div>
            <div className="grid md:grid-cols-2 gap-x-16 gap-y-7 mt-[54px] text-sm">

              <FormField
                control={form.control}
                name="password"
                className="space-y-2"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel> mot de passe</FormLabel>
                    <FormControl>
                      <Input placeholder="Re-enter your password" type="password" id="studyDuration" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password2"
                className="space-y-2"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Confirmez le mot de passe</FormLabel>
                    <FormControl>
                      <Input placeholder="Re-enter your password" type="password" id="studentNumber" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />


            </div>
            <div className="grid md:grid-cols-2 gap-x-16 gap-y-7 mt-[54px] text-sm">


              <FormField
                control={form.control}
                name="Cv"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="file">Upload cv</FormLabel>
                    <FormControl>
                      <div className="relative border border-grey-300 rounded-lg w-full h-11">
                        <Input
                          type="file"
                          className="opacity-0 absolute top-0 left-0 w-full h-full cursor-pointer"
                          id="file"
                          {...field}
                        />
                        <label htmlFor="file" className="cursor-pointer block mt-3">
                          <span className="text-black flex items-center justify-center">
                            <FiUpload className="mr-2" /> Upload a file
                          </span>
                        </label>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />



              <FormField
                control={form.control}
                name="picture"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="image">Photo de Profile</FormLabel>
                    <FormControl>
                      <div className="relative border-dashed border-2 hover:border-[#6610F2] border-gray-300 rounded-lg h-24 w-28 bg-gray-100">
                        <Input
                          type="file"
                          className="opacity-0 absolute top-0 left-0 w-full h-full cursor-pointer"
                          id="image"
                          {...field}
                        />
                        <label htmlFor="file" className="cursor-pointer block mt-3">
                          <span className="text-black flex items-center justify-center ">
                            <FiUpload className=" w-9 h-9 items-center mt-4 text-gray-300" />
                          </span>
                        </label>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

            </div>




            <Button className="w-full md:col-start-2 lg:col-start-3">
              Sauvegarder
            </Button>
          </div>
        </div>
      </form>

    </Form>



  )
}
