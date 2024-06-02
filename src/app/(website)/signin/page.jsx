"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useFormState, useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { authenticate } from "@/actions/server/auth";
import { signinUser } from "@/actions/client/auth";
import { GetUserType } from "@/actions/client/auth";
import { AwardIcon } from "lucide-react";
import { redirect } from "next/navigation";
const formSchema = z.object({
  email: z.string().email("email is not valid."),
  password: z.string().min(6, {
    message: "password must be at least 6 characters.",
  }),
});

export default function page() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const { toast } = useToast();

  const router=useRouter()

  async function LoginUser(){
    const values=form.getValues()
    try{
      signinUser(values)
      toast({
        title: "Signin user Successful",
        description: "Verifier votre email pour le lien de validation",
      });
     const type=await GetUserType()
     if(type==='student'){
      router.push('/d/student');
     }else if(type ==='prof'){
      router.push('/d/teacher');
     }else if(type==='admin'){
      router.push('/d/admin');

     }

    }catch(err){
      console.log(err)
    }
    
  }

  return (
    <Form {...form}>
      <form  className="space-y-8" onSubmit={form.handleSubmit(LoginUser)}>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="email@example.com"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <LoginButton />
        <div
          className="flex h-8 items-end space-x-1"
          aria-live="polite"
          aria-atomic="true"
        >
         
        </div>
      </form>
    </Form>
  );
}

function LoginButton() {
  const { pending } = useFormStatus();

  return (
    <Button className="mt-4 w-full" aria-disabled={pending} >
      {pending ? "Loading" : "Login"}
    </Button>
  );
}