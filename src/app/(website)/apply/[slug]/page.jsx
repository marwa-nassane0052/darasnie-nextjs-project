"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useFormState, useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import {FlipCard} from "@/components/FlipCard";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectValue, SelectContent,SelectItem } from "@/components/ui/select"; // Import the required components

const formSchema = z.object({
  email: z.string().email({ message: "Email invalide" }),
  address: z.string().min(1, { message: "Adresse est requise" }),
  wilaya: z.string().min(1, { message: "Wilaya est requise" }),
  postalCode: z.string().regex(/^\d{5}$/, { message: "Code postal invalide" }),
  account: z.string().min(1, {
    message: "Account number is required",
  }),
  expirationDate: z.string().regex(/^(0[1-9]|1[0-2])\/?([0-9]{2})$/, { message: "Date d'expiration invalide" }),
});

export default function page() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      address: "",
      wilaya: "",
      postalCode: "",
      account: "",
      expirationDate: "",
    },
  });
  const { toast } = useToast();

  async function apply(values) {
    let account = values.account;
    try {
      // To add: apply to backend
      toast({
        title: "Application Success",
        description: "Vous pouvez visiter votre dashboard",
      });
    } catch (error) {
      toast({
        title: "Application a echoue",
        description: "Il y avait un erreur pendant l'application",
      });
    }
  }
  return (
    <div className="flex justify-center items-center p-2 h-screen">
      <div className=" w-96">
      <Form {...form}>
        <form className="space-y-8 bg-white rounded-xl shadow px-2" onSubmit={form.handleSubmit(apply)}>
        <h2 className="text-lg font-medium">Informations de Facturation</h2>
        <div className="grid grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="exemple@domaine.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Adresse</FormLabel>
                  <FormControl>
                    <Input type="text" placeholder="123 Rue" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="wilaya"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Wilaya</FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange}>
                      <SelectTrigger>
                        <SelectValue placeholder="Sélectionner une wilaya" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="sba">Sidi Bel Abbès</SelectItem>
                        <SelectItem value="tiaret">Tiaret</SelectItem>
                        <SelectItem value="chlef">Chlef</SelectItem>
                        <SelectItem value="alger">Alger</SelectItem>
                        <SelectItem value="oran">Oran</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="postalCode"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Code Postal</FormLabel>
                  <FormControl>
                    <Input type="text" placeholder="12345" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
</div>
            <hr className="my-4" />

            {/* Card Info */}
            <h2 className="text-lg font-medium">Informations de la Carte</h2>
            <div className="grid grid-cols-2 gap-4">
        
          <FormField
            control={form.control}
            name="account"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Numero de compte</FormLabel>
                <FormControl>
                  <Input type="text" placeholder="BD0144FGR" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
              control={form.control}
              name="expirationDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Date d'expiration</FormLabel>
                  <FormControl>
                    <Input type="text" placeholder="MM/YY" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            </div>
          <SubmitButton />
        </form>
      </Form>
      </div>
      <div className="ml-12">
        <FlipCard />
      </div>
    </div>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button className="mt-4 w-full" aria-disabled={pending}>
      {pending ? "Loading" : "Appliquer"}
    </Button>
  );
}
