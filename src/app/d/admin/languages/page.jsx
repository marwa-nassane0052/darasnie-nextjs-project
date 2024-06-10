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
import { useRouter } from "next/navigation";
import { useEffect,useState } from "react";
import { getLevels } from "@/actions/client/language";

const languages = [
  {
    idLang: "2",
    language: "Francais",
    name: "B2",
    linguistic: "vocabulaire",
  },
];
 
export default function page() {

  const router=useRouter()
  const [languages, setLanguages] = useState([]);

  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        const responseData = await getLevels();
        setLanguages(responseData);
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
          {languages.map((item) => (
            <TableRow key={item.idLang}>
              <TableCell>{item.language}</TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.linguistic}</TableCell>
              <TableCell className="text-right flex justify-end gap-4">
                <Link href={`/d/admin/languages/${item.idLang}/${item.name}/submissions`}>
                  <Button variant="link" className="px-0">
                    Submissions
                  </Button>
                </Link>
                <Link href={
                   {
                    pathname :`/d/admin/languages/${item.idLang}`,
                    query : {
                      levelName : item.name,
                    }
                   }
                   }>
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
