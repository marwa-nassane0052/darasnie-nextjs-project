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
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { FaLink } from "react-icons/fa";

const submissions = [
  {
    id: "1",
    image: "https://api.dicebear.com/8.x/lorelei/svg?seed=Harley&flip=true",
    name: "Meriem",
    familyname: "Yahiaoui",
    email: "m.yahiaoui@esi-sba.dz",
    level: "A2",
    subject: "Anglais",
    submission:
      "https://www.sbs.ox.ac.uk/sites/default/files/2019-01/cv-template.pdf",
  },
  {
    id: "2",
    image: "https://api.dicebear.com/8.x/lorelei/svg?seed=Meriem&flip=true",
    name: "Meriem",
    familyname: "Yahiaoui",
    email: "m.yahiaoui@esi-sba.dz",
    level: "B1",
    subject: "Anglais",
    submission:
      "https://www.sbs.ox.ac.uk/sites/default/files/2019-01/cv-template.pdf",
  },
  {
    id: "3",
    image: "https://api.dicebear.com/8.x/lorelei/svg?seed=Sarah&flip=true",
    name: "Meriem",
    familyname: "Yahiaoui",
    email: "m.yahiaoui@esi-sba.dz",
    level: "B1",
    subject: "Francais",
    submission:
      "https://www.sbs.ox.ac.uk/sites/default/files/2019-01/cv-template.pdf",
  },
];

export default function page() {
  return (
    <div>
      <h1 className="font-bold text-xl mb-8">Liste des soumissions</h1>
      <hr />
      <Table>
        <TableCaption>La liste des soumissions.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Etudiant</TableHead>
            <TableHead>Sujet</TableHead>
            <TableHead>Niveau</TableHead>
            <TableHead>Document</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {submissions.map((item) => (
            <TableRow key={item.id}>
              <TableCell className="font-medium flex gap-2 items-center">
                <Avatar className="h-[42px] w-[42px]">
                  <AvatarImage src={item.image} alt="profile image" />
                  <AvatarFallback>SC</AvatarFallback>
                </Avatar>
                <div>
                  <p>{item.name}</p>
                  <p className="text-xs text-gray-400">{item.email}</p>
                </div>
              </TableCell>
              <TableCell>{item.subject}</TableCell>
              <TableCell>{item.level}</TableCell>

              <TableCell>
                <Link
                  href={item.submission}
                  target="_blank"
                  rel="noreferer"
                  className="flex gap-2 text-blue items-center"
                >
                  <FaLink /> Lire le document
                </Link>
              </TableCell>
              <TableCell className="text-right space-x-2">
                <Button className="bg-green-500 hover:bg-green-600">
                  Pass
                </Button>
                <Button variant="destructive">Fail</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
