"use client";
import React from "react";
import { Separator } from "@/components/ui/separator";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { useEffect ,useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";


import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useFormState, useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
  level: z.string(),
  year: z.string()
  
});

export default function Sidebar() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      level:"",
      year:""
    },
  });


  const [data, setData] = useState(null);
  const { watch, control } = form;
  const watchedItems = watch();


  useEffect(() => {
    // Check if all fields in watchedItems have values
    const allFieldsHaveValues = Object.values(watchedItems).every(field => field && field.length > 0);
    if (allFieldsHaveValues) {
      console.log(watchedItems);
    }
  }, [watchedItems]);

  const levels = [
    {
      id: "cem",
      label: "cem",
    },
    {
      id: "lycee",
      label: "lycee",
    },
   
  ]
  const years = [
    {
      id: "1",
      label: "am_1",
    },
    {
      id: "2",
      label: "am_2",
    },
    {
      id: "3",
      label: "am_3",
    },
    {
      id: "4",
      label: "am_4",
    },
    {
      id: "1s",
      label: "as_1",
    },
    {
      id: "2s",
      label:"as_2",
    },
    {
      id: "3s",
      label: "a_4",
    },
   
  ]  


  return (
    <ScrollArea className="border-r h-full  overflow-y-auto top-15 left-0">
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-4 flex justify-center">
          Filterage
        </h2>
        <Separator />
        <Form {...form}>
          <form>
             
        <Accordion type="single" collapsible>
          <AccordionItem value="Level">
            <AccordionTrigger>Niveau</AccordionTrigger>
            <AccordionContent>
              <div className="flex items-center space-x-2">
                    
              <FormField
          control={form.control}
          name="level"
          render={() => (
            <FormItem>
              <div className="mb-4">              
              </div>
              {levels.map((item) => (
                <FormField
                  key={item.id}
                  control={form.control}
                  name="level"
                  render={({ field }) => {
                    return (
                      <FormItem
                        key={item.id}
                        className="flex flex-row items-start space-x-3 space-y-0"
                      >
                        <FormControl>
                          <Checkbox
                            checked={field.value?.includes(item.id)}
                            onCheckedChange={(checked) => {
                              return checked
                                ? field.onChange([...field.value, item.id])
                                : field.onChange(
                                    field.value?.filter(
                                      (value) => value !== item.id
                                    )
                                  )
                            }}
                          />
                        </FormControl>
                        <FormLabel className="text-sm font-normal">
                          {item.label}
                        </FormLabel>
                      </FormItem>
                    )
                  }}
                />
              ))}
              <FormMessage />
            </FormItem>
          )}
        />          
              </div>
              <br />
             </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Separator />
    


        <Accordion type="single" collapsible>
          <AccordionItem value="Years">
            <AccordionTrigger value="Years">Annee</AccordionTrigger>
            <AccordionContent>
              <div className="flex items-center space-x-2">
              <FormField
          control={form.control}
          name="year"
          render={() => (
            <FormItem>
              <div className="mb-4">              
              </div>
              {years.map((item) => (
                <FormField
                  key={item.id}
                  control={form.control}
                  name="year"
                  render={({ field }) => {
                    return (
                      <FormItem
                        key={item.id}
                        className="flex flex-row items-start space-x-3 space-y-0"
                      >
                        <FormControl>
                          <Checkbox
                            checked={field.value?.includes(item.id)}
                            onCheckedChange={(checked) => {
                              return checked
                                ? field.onChange([...field.value, item.id])
                                : field.onChange(
                                    field.value?.filter(
                                      (value) => value !== item.id
                                    )
                                  )
                            }}
                          />
                        </FormControl>
                        <FormLabel className="text-sm font-normal">
                          {item.label}
                        </FormLabel>
                      </FormItem>
                    )
                  }}
                />
              ))}
              <FormMessage />
            </FormItem>
          )}
        />

            </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Separator />



          </form>
        </Form>










        <Accordion type="single" collapsible>
          <AccordionItem value="Speciality">
            <AccordionTrigger>Specialite</AccordionTrigger>
            <AccordionContent>
              <div className="flex items-center space-x-2">
                <Checkbox id="SCIENCE" />
                <label
                  htmlFor="SCIENCE"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Sciences expérimentales
                </label>
              </div>

              <br />
              <div className="flex items-center space-x-2">
                <Checkbox id="TM" />
                <label
                  htmlFor="TM"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Technique Math
                </label>
              </div>
              <br />
              <div className="flex items-center space-x-2">
                <Checkbox id="MAth" />
                <label
                  htmlFor="MAth"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  mathématique
                </label>
              </div>
              
              <br />
              <div className="flex items-center space-x-2">
                <Checkbox id="LANGUE" />
                <label
                  htmlFor="LANGUE"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                 langue étrangère
                </label>
              </div>
              
              <br />
              <div className="flex items-center space-x-2">
                <Checkbox id="LETTER" />
                <label
                  htmlFor="LETTER"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Littérature et philosophie
                </label>
              </div>
              
              <br />
              <div className="flex items-center space-x-2">
                <Checkbox id="GESTION" />
                <label
                  htmlFor="GESTION"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                 Gestion et économie
                </label>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Separator />

        <Accordion type="single" collapsible>
          <AccordionItem value="moduleName">
            <AccordionTrigger>Module</AccordionTrigger>
            <AccordionContent>
              <div className="flex items-center space-x-2">
                <Checkbox id="physique" />
                <label
                  htmlFor="physique"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Sciences physique
                </label>
              </div>

              <br />
              <div className="flex items-center space-x-2">
                <Checkbox id="Math" />
                <label
                  htmlFor="Math"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Mathematique
                </label>
              </div>
              <br />
              <div className="flex items-center space-x-2">
                <Checkbox id="science" />
                <label
                  htmlFor="science"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Sciences naturelle
                </label>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Separator />

        <Accordion type="single" collapsible>
      <AccordionItem value="price">
        <AccordionTrigger>Tarif</AccordionTrigger>
        <AccordionContent>
          <div className="flex items-center">
            <Slider
              className="flex w-full"
              defaultValue={[33]}
              max={100}
              step={1}
            />
            <div className="ml-2">0</div>
            <div className="ml-auto">100</div>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion></div>
    </ScrollArea>
  );
}