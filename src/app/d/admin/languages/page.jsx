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
            <TableRow key={item.id}>
              <TableCell>{item.label}</TableCell>
              <TableCell>{item.level}</TableCell>
              <TableCell>{item.subject}</TableCell>
              <TableCell className="text-right flex justify-end gap-4">
                <Link href={`/d/admin/languages/${item.id}/submissions`}>
                  <Button variant="link" className="px-0">
                    Submissions
                  </Button>
                </Link>
                <Link href={`/d/admin/languages/${item.id}`}>
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
