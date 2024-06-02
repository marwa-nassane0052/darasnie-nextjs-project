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
import { FaArrowRight, FaPlus } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { cookies } from "next/headers";

const languages = [
  {
    id: "1",
    language: "English",
    level: "A1",
    subject: "Grammaire",
  },
  {
    id: "2",
    language: "Francais",
    level: "B2",
    subject: "Vocabulaire",
  },
];

export default function page() {
  const studentLevel = [
    { language: "English", level: "a2" },
    { language: "Francais", level: "b1" },
  ];
  const cookieStore = cookies();
  const checkpoint = cookieStore.get("checkpoint")
    ? cookieStore.get("checkpoint").value
    : "/d/student/languages";
  return (
    <div>
      <div className="flex gap-3 flex-wrap items-center justify-between mb-8">
        <h1 className="font-bold text-xl">Liste des langues</h1>
        <div className="space-x-3">
          <Link href={checkpoint}>
            <Button
              className="gap-2"
              variant="outline"
              disabled={checkpoint == "/d/student/languages"}
            >
              Continue <FaArrowRight />
            </Button>
          </Link>
        </div>
      </div>
      <hr />
      <Table>
        <TableCaption>La liste des langues</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Langue</TableHead>
            <TableHead>Sujet</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {languages.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.language}</TableCell>
              <TableCell>{item.subject}</TableCell>
              <TableCell className="text-right flex justify-end gap-4">
                <Link href={`/d/student/languages/${item.id}`}>
                  <Button variant="link">Passer examen</Button>
                </Link>
                <Link
                  href={`/languages/${
                    item.id
                  }/0`}
                >
                  <Button>Learn</Button>
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
