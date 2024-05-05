"use client";
import React from "react";
import { Separator } from "@/components/ui/separator";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Sidebar() {
  return (
    <ScrollArea className="border-r h-full  overflow-y-auto top-15 left-0">
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-4 flex justify-center">
          Filterage
        </h2>
        <Separator />

        <Accordion type="single" collapsible>
          <AccordionItem value="Level">
            <AccordionTrigger>Niveau</AccordionTrigger>
            <AccordionContent>
              <div className="flex items-center space-x-2">
                <Checkbox id="CEM" />
                <label
                  htmlFor="CEM"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >Cem
                </label>
              </div>

              <br />
              <div className="flex items-center space-x-2">
                <Checkbox id="LYCEE" />
                <label
                  htmlFor="LYCEE"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Lycée
                </label>
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
                <Checkbox id="AM_1" />
                <label
                  htmlFor="AM_1"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  1ere cem
                </label>
              </div>

              <br />
              <div className="flex items-center space-x-2">
                <Checkbox id="AM_2" />
                <label
                  htmlFor="AM_2"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  2eme cem
                </label>
              </div>
              <br />
              <div className="flex items-center space-x-2">
                <Checkbox id="AM_3" />
                <label
                  htmlFor="AM_3"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  3eme cem
                </label>
              </div>
              
              <br />
              <div className="flex items-center space-x-2">
                <Checkbox id="AM_4" />
                <label
                  htmlFor="AM_4"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                 4eme cem
                </label>
              </div>
              <br />
              <div className="flex items-center space-x-2">
                <Checkbox id="AS_1" />
                <label
                  htmlFor="AS_1"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  1ere lycee
                </label>
              </div>
              
              <br />
              <div className="flex items-center space-x-2">
                <Checkbox id="AS_2" />
                <label
                  htmlFor="AS_2"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  2emme lycee
                </label>
              </div>
              <br />
              <div className="flex items-center space-x-2">
                <Checkbox id="AS_3" />
                <label
                  htmlFor="AS_3"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  3eme lycee
                </label>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Separator />

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
