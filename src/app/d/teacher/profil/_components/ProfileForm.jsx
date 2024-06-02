"use client";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useState, useEffect } from "react";
import { getProfInfo } from "@/actions/client/auth";

const formSchema = z
  .object({
    name: z.string().min(2).max(50),
    familyname: z.string().min(2).max(50),

    phone: z.string().min(10).max(10),
    email: z.string().email(),
    password: z.string().min(6).max(50),
    password2: z.string().min(6),
  })
  .superRefine(({ password2, password }, ctx) => {
    if (password2 !== password) {
      ctx.addIssue({
        code: "custom",
        message: "The passwords did not match",
        path: ["password2"],
      });
    }
  });

export default function ProfileForm() {

  

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name:"",
      familyname: "",
      email: "",
      phone: "",
      password: "",
      password2: "",
    },
  });

  async function onSubmit(values) {}

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="md:w-[600px]">
        <div className="flex justify-between items-center gap-6">
          <h2 className="font-bold text-xl">Modifier mes Informations</h2>
          <Button>Save</Button>
        </div>
        <hr className="my-4" />
        <div className="justify-content-start grid md:grid-cols-2 gap-8 text-sm">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Prenom<span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Input placeholder="John" {...field} />
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
                <FormLabel>
                  Nom<span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Input placeholder="Smith" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Numero de telephone<span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Input type="number" placeholder="0666223311" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Email<span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="user@example.com"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <h2 className="font-bold text-lg mt-8">Mot de Passe</h2>
        <hr className="my-4" />
        <div className="justify-content-start grid md:grid-cols-2 gap-8 text-sm">
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nouveau mot de passe</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Inserez votre mot de passe"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password2"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirmation</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Re-inserez votre mot de passe"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </form>
    </Form>
  );
}
