"use client"

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { useState } from "react";
import { getAllStudentOfGroup } from "@/actions/client/groups";
import { useEffect } from "react";
import { getGroupContainerByid } from "@/actions/client/groups";
const students = [
  {
    id: "1",
    name: "Etudiant 1",
    phone: "05 55 55 55 55",
    email: "jerome@google.com",
    specialite: "CEM",
  },
  {
    id: "2",
    name: "Etudiant 2",
    phone: "05 55 55 55 55",
    email: "jerome@google.com",
    specialite: "CEM",
  },
  {
    id: "3",
    name: "Etudiant 3",
    phone: "05 55 55 55 55",
    email: "jerome@google.com",
    specialite: "CEM",
  },
];

export default function page({ params }) {
  const [data,setData]=useState([])
  const [session,setSession]=useState([])

  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        const responseData = await getAllStudentOfGroup(params.group_id);
        setData(responseData);
        const session=await getGroupContainerByid(params.slug)
        setSession(session)
      } catch (error) {
        console.error(error);
      }
    };

    fetchDataFromApi();
  }, []); 
  const decodedName = decodeURIComponent(params.name);

  return (
    <div>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/d/teacher/sessions">Sessions</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href={`/d/teacher/sessions/${params.slug}`}>
               {session?.moduleName} {session?.level} {session?.year}
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage> {decodedName}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <hr className="my-6" />
      <Table>
        <TableCaption>La liste des etudiants.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[200px]">Nom et prénom</TableHead>
            <TableHead>Numero de telephone</TableHead>
            <TableHead>Email</TableHead>
            <TableHead className="text-right">Etablissement</TableHead>
            <TableHead className="text-right">Annee</TableHead>
            <TableHead className="text-right">spécialité</TableHead>

          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((item) => (
            <TableRow key={item._id}>
              <TableCell className="font-medium">{item.name} {item.familyname}</TableCell>
              <TableCell>{item.phone}</TableCell>
              <TableCell>{item.email}</TableCell>
              <TableCell className="text-right">{item.level}</TableCell>
              <TableCell className="text-right">{item.year}</TableCell>
              {item.level !== "cem" && (
                <TableCell className="text-right">{item.major}</TableCell>
              )}

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
