import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const groups = [
  {
    id: "1",
    group: "Groupe 01",
    date: "13 Mars 2024",
    module: "MATH",
    tarif: "2500 DA",
  },
  {
    id: "1",
    group: "Groupe 01",
    date: "13 Mars 2024",
    module: "MATH",
    tarif: "2500 DA",
  },
  {
    id: "1",
    group: "Groupe 01",
    date: "13 Mars 2024",
    module: "MATH",
    tarif: "2500 DA",
  },
];

export default function page() {
  return (
    <div>
      <h1 className="font-bold text-xl mb-8">Mes Groupes</h1>
      <hr />
      <Table>
        <TableCaption>La liste des groupes.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[150px]">Groupe</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Module</TableHead>
            <TableHead>Tarifs</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {groups.map((item) => (
            <TableRow key={item.id}>
              <TableCell className="font-medium">{item.group}</TableCell>
              <TableCell>{new Date(item.date).toDateString()}</TableCell>
              <TableCell>{item.module}</TableCell>
              <TableCell>{item.tarif}</TableCell>
              <TableCell className="text-right space-x-2">
                <Button variant="link" asChild>
                  <Link href={`/d/student/groups/${item.id}/forum`}>Forum</Link>
                </Button>
                <Button variant="link" asChild>
                  <Link href={`/d/student/groups/${item.id}/documents`}>
                    Documents
                  </Link>
                </Button>
                <Button>Joindre les cours</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
