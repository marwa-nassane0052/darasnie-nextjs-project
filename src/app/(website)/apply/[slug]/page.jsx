"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useFormState, useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";
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

const formSchema = z.object({
  account: z.string().min(1, {
    message: "Account number is required",
  }),
});

export default function page() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      account: "",
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
    <div className="grid place-items-center p-6 min-h-[calc(100vh-70px)]">
      <Form {...form}>
        <form className="space-y-8 bg-white rounded-xl shadow p-6" onSubmit={form.handleSubmit(apply)}>
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
          <SubmitButton />
        </form>
      </Form>
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
