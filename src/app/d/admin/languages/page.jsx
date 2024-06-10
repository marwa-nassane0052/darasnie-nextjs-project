"use client"
import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";
import { FaPlus } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { useEffect,useState } from "react";
import { getAllLevel } from "@/actions/client/groups";
const languages = [
  {
    id: "1",
    label: "English",
    level: "A1",
    subject: "Grammaire",
  },
  {
    id: "2",
    label: "Francais",  
    level: "B2",
    subject: "Vocabulaire",
  },
];

export default function page() {

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        const responseData = await getAllLevel();
        setData(responseData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDataFromApi();
  }, []); 

  return (
    <div>
      <div className="flex gap-3 flex-wrap items-center justify-between mb-8">
        <h1 className="font-bold text-xl">Liste des langues</h1>
        <Link href="/d/admin/languages/new">
          <Button className="gap-2">
            <FaPlus /> Ajouter
          </Button>
        </Link>
      </div>
      <hr />
      <Table>
        <TableCaption>La liste des langues</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Langue</TableHead>
            <TableHead>Niveau</TableHead>
            <TableHead>Sujet</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.language}</TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.linguistic}</TableCell>
              <TableCell className="text-right flex justify-end gap-4">
                <Link href={`/d/admin/languages/${item.idLang}/submissions/${item.name}`}>
                  <Button variant="link" className="px-0">
                    Submissions
                  </Button>
                </Link>
                <Link href={`/d/admin/languages/${item.idLange}`}>
                  <Button>Modifier</Button>
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
