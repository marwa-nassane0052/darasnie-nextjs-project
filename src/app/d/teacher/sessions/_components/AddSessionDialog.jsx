"use client"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
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
import { CreateSessionCem,CreateSessionLycee } from "@/actions/client/groups";
import { revalidatePath } from "next/cache";
const formSchema = z
  .object({
    moduleName: z.string().min(2).max(50),
    price:z.coerce.number(),
    sessionDuration:z.coerce.number(),
    sessionsNumberPerWeek:z.coerce.number(),
    studyDuration:z.coerce.number(),
    studentNumber:z.coerce.number(),
    level: z.string(),
    year: z.string(),
    speciality:z.string()
  })

export default function AddSessionDialog({  children, fetchData }) {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      moduleName:"math",
      price:null,
      sessionDuration:null,
      sessionsNumberPerWeek:null,
      studyDuration:null,
      studentNumber:null,
      level:"cem",
      year:"am_1",
      speciality:""

      
    },
  });
  const [isDisabled,setIsdisabled]=useState(true)
  const { toast } = useToast();
  const router=useRouter()
 
  async function onSubmit(values) {
    try {
      console.log(values)
      if (values.level === "cem") {
        await CreateSessionCem(values);
      } else {
        await CreateSessionLycee(values);
      }
      toast({
        title: "Session created",
        description: "You need to wait until the admin validates your session",
      });
      fetchData(); // Fetch the updated data
      revalidatePath("d/teacher/sessions");
    } catch (err) {
      console.log(err);
    }
  }
  
  return(
    <Dialog>
       <DialogTrigger asChild>{children}</DialogTrigger>
       <DialogContent className="sm:max-w-[925px]">
       <DialogHeader>
          <DialogTitle>Cree une session</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="gap-4 grid md:grid-cols-2 lg:grid-cols-3 items-end">
          <FormField
              control={form.control}
              name="moduleName"
              className="space-y-2"
              render={({ field }) => (
                <FormItem>
                  <FormLabel> Nom de module<span className="text-red-500">*</span></FormLabel>
                  <FormControl>
                  <Select name="moduleName" id="moduleName"  onValueChange={field.onChange} defaultValue={field.value}>
              <SelectTrigger>
                <SelectValue placeholder="moduleName" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Module name</SelectLabel>
                  <SelectItem value="math">Math</SelectItem>
                  <SelectItem value="physique">Physique</SelectItem>
                  <SelectItem value="science">Science</SelectItem>
                  <SelectItem value="philosophie">Philosophie</SelectItem>
                  <SelectItem value="francais">francais</SelectItem>
                  <SelectItem value="arabe">Arabe</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

          <FormField
              control={form.control}
              name="price"
              className="space-y-2"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tarif<span className="text-red-500">*</span></FormLabel>
                  <FormControl>
                    <Input placeholder="Tarif" id="tarif" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

        <FormField
              control={form.control}
              name="sessionDuration"
              className="space-y-2"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Durèe des séances<span className="text-red-500">*</span></FormLabel>
                  <FormControl>
                    <Input placeholder="Durèe des séances par heure"  id="duree" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

      <FormField
              control={form.control}
              name="sessionsNumberPerWeek"
              className="space-y-2"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nombre de seance par semain<span className="text-red-500">*</span></FormLabel>
                  <FormControl>
                    <Input placeholder="Nombre de seance par semain"  id="Nombre_de_<seance_par_semain" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
   
           

             <FormField
              control={form.control}
              name="studyDuration"
              className="space-y-2"
              render={({ field }) => (
                <FormItem>
                  <FormLabel> Durèe<span className="text-red-500">*</span></FormLabel>
                  <FormControl>
                    <Input placeholder="nombre de semaines d'étude"  id="studyDuration" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />   

             <FormField
              control={form.control}
              name="studentNumber"
              className="space-y-2"
              render={({ field }) => (
                <FormItem>
                  <FormLabel> Nombre maximal des etudiants<span className="text-red-500">*</span></FormLabel>
                  <FormControl>
                    <Input placeholder="Nombre maximal des etudiants"  id="studentNumber" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />    


           <FormField
              control={form.control}
              name="level"
              className="space-y-2"
              render={({ field }) => (
                <FormItem>
                  <FormLabel> Niveau<span className="text-red-500">*</span></FormLabel>
                  <FormControl>
                  <Select name="niveau" id="niveau"  onValueChange={field.onChange} defaultValue={field.value}>
              <SelectTrigger>
                <SelectValue placeholder="Niveau" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Niveau</SelectLabel>
                  <SelectItem value="cem">CEM</SelectItem>
                  <SelectItem value="Lycée">LYCEE</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />   

             <FormField
              control={form.control}
              name="year"
              className="space-y-2"
              render={({ field }) => (
                <FormItem>
                  <FormLabel> Niveau<span className="text-red-500">*</span></FormLabel>
                  <FormControl>
                  <Select name="year" id="year"  onValueChange={field.onChange} defaultValue={field.value}>
              <SelectTrigger>
                <SelectValue placeholder="Niveau" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Année</SelectLabel>
                  {form.getValues('level')==="cem"?(
                    <><SelectItem value="am_1">1</SelectItem><SelectItem value="am_2"> 2</SelectItem><SelectItem value="am_3"> 3</SelectItem><SelectItem value="am_4"> 4</SelectItem></>
                  ):(
                    <><SelectItem value="as_1">1</SelectItem><SelectItem value="as_2">2</SelectItem><SelectItem value="as_3"> 3</SelectItem></>
                  )}
                </SelectGroup>
              </SelectContent>
            </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />  
        

          <FormField
              control={form.control}
              name="speciality"
              className="space-y-2"
              render={({ field }) => (
                <FormItem>
                  <FormLabel> Niveau<span className="text-red-500">*</span></FormLabel>
                  <FormControl>
                  <Select name="year" id="year"  onValueChange={field.onChange} defaultValue={field.value}    disabled={form.getValues('level') === 'cem' ? true :false}>
              <SelectTrigger>
                <SelectValue placeholder="Spécialité" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Spécialité</SelectLabel>
                  {form.getValues('year')==="as_1"?(
                    <><SelectItem value="sciences expérimentales">sciences expérimentales</SelectItem><SelectItem value="Littérature et philosophie">Littérature et philosophie</SelectItem></>
                  ):(
                    <><SelectItem value="sciences expérimentales">sciences expérimentales</SelectItem><SelectItem value="Littérature et philosophie">Littérature et philosophie</SelectItem><SelectItem value="langue étrangère">langue étrangère</SelectItem><SelectItem value="mathématique">Mathématique</SelectItem> <SelectItem value="Technique Math">Technique Math
                    </SelectItem></>
                  )}
                   
                </SelectGroup>
              </SelectContent>
            </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />  

          


          <Button className="w-full md:col-start-2 lg:col-start-3">
            Sauvegarder
          </Button>
          </form>

        </Form>

       </DialogContent>
    </Dialog>

  )
}
 