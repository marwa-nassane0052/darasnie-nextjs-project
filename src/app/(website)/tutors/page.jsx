"use client"
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import LoginUser from '@/app/(website)/tutors/_components/Sidebar'
import { useState,useEffect } from "react";
import { useFilter } from "./FilterContext"; // Import the context

const sessions = [
  {
    id: "1",
    image: "https://api.dicebear.com/8.x/lorelei/svg?seed=Harley&flip=true",
    niveau: "CEM",
    annee: "2eme annee",
    Specialite: "Science",
    Module: "Mathematique",
    prof:"yahiaoui Meriem",
    email:"m.yahiaoui@esi-sba.dz",
    tarif:2000,
  },

  {
    id: "2",
    image: "https://api.dicebear.com/8.x/lorelei/svg?seed=Harley&flip=true",
    niveau: "CEM",
    annee: "2eme annee",
    Specialite: "Science",
    Module: "Mathematique",
    prof:"yahiaoui Meriem",
    email:"m.yahiaoui@esi-sba.dz",
    tarif:2000,
  },

  
  {
    id: "3",
    image: "https://api.dicebear.com/8.x/lorelei/svg?seed=Harley&flip=true",
    niveau: "CEM",
    annee: "2eme annee",
    Specialite: "Science",
    Module: "Mathematique",
    prof:"yahiaoui Meriem",
    email:"m.yahiaoui@esi-sba.dz",
    tarif:2000,
  },
  
  {
    id: "4",
    image: "https://api.dicebear.com/8.x/lorelei/svg?seed=Harley&flip=true",
    niveau: "CEM",
    annee: "2eme annee",
    Specialite: "Science",
    Module: "Mathematique",
    prof:"yahiaoui Meriem",
    email:"m.yahiaoui@esi-sba.dz",
    tarif:2000,
  },
  
  
  // {
  //   id: "2",
  //   module: "Physique",
  //   niveau: "LYCEE",
  //   annee: "3eme annee",
  //   duree: "2 mois",
  //   tarif: "4500 DA",
  //   groupes: 3,
  // },
  // {
  //   id: "3",
  //   module: "Math",
  //   niveau: "CEM",
  //   annee: "2eme annee",
  //   duree: "2 mois",
  //   tarif: "2500 DA",
  //   groupes: 2,
  // },
];

export default function page() {
  const { filteredData } = useFilter(); // Use the context


  return (
    <div>
      <div className=" mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
    
        {filteredData?.map((session) => (
          <Card key={session._id} className="">
        <CardHeader className="flex">
  <CardTitle className="flex items-center">
    <Avatar className="h-[80px] w-[80px] inline-block">
      <AvatarImage src={session.image} alt="profile image" />
      <AvatarFallback>SC</AvatarFallback>
    </Avatar>
    <p className="inline-block mx-3 font-semibold	text-base	">{session.prof}</p>
    
  </CardTitle>
  <CardDescription className="">  
    {session.email}
  </CardDescription>
</CardHeader>

            <CardContent>
              <p>
                <strong>Niveau:</strong> <span>{session.niveau}</span>
              </p>
              <p>
                <strong>Annee:</strong> <span>{session.annee}</span>
              </p>
              <p>
                <strong>Specialite:</strong> <span>{session.Specialite}</span>
              </p>
              
              <p>
                <strong>Module:</strong> <span>{session.moduleName}</span>
              </p>
              
              <p>
                <strong>Tarif:</strong> <span>{session.tarif} da</span>
              </p>
            </CardContent>
            <CardFooter>
           
              <Button asChild className="ml-auto">
                <Link href={`/tutors/${session.id}`}>See more details</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}