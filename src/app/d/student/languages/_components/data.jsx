"use client"; // This directive makes the component a Client Component

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
import { FaArrowRight } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { inscriptionDansLangue } from "@/actions/client/groups";

export default function TableComponent({ data, checkpoint }) {
  async function onSubmit(idL) {
    try {
      await inscriptionDansLangue(idL);
    } catch (err) {
      console.log(err);
    }
  }

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
          {data.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.language}</TableCell>
              <TableCell>{item.linguistic}</TableCell>
              <TableCell className="text-right flex justify-end gap-4">
                <Link href={`/d/student/languages/${item.idLang}`}>
                  <Button variant="link">Passer examen</Button>
                </Link>
                <Link href={`/languages/${
                    item.idLang
                  }/0`}>
                <Button onClick={() => onSubmit(item.idLang)}>Learn</Button>
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
