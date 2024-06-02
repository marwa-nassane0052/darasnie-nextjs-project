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
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { FaCheck, FaLink } from "react-icons/fa";
import { LuTrash2 } from "react-icons/lu";

const users = [
  {
    id: "1",
    image: "https://api.dicebear.com/8.x/lorelei/svg?seed=Harley&flip=true",
    name: "Meriem",
    familyname: "Yahiaoui",
    email: "m.yahiaoui@esi-sba.dz",

    phone: "0666235548",
    cv: "https://www.sbs.ox.ac.uk/sites/default/files/2019-01/cv-template.pdf",
  },
  {
    id: "2",
    image: "https://api.dicebear.com/8.x/lorelei/svg?seed=Meriem&flip=true",
    name: "Meriem",
    familyname: "Yahiaoui",
    email: "m.yahiaoui@esi-sba.dz",

    phone: "0666235548",
    cv: "https://www.sbs.ox.ac.uk/sites/default/files/2019-01/cv-template.pdf",
  },
  {
    id: "3",
    image: "https://api.dicebear.com/8.x/lorelei/svg?seed=Sarah&flip=true",
    name: "Meriem",
    familyname: "Yahiaoui",
    email: "m.yahiaoui@esi-sba.dz",

    phone: "0666235548",
    cv: "https://www.sbs.ox.ac.uk/sites/default/files/2019-01/cv-template.pdf",
  },
];

export default function page() {
  return (
    <div>
      <h1 className="font-bold text-xl mb-8">Liste des Inscriptions</h1>
      <hr />
      <Table>
        <TableCaption>La liste des inscriptions.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Profile</TableHead>
            <TableHead>Prenom</TableHead>
            <TableHead>Nom</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Telephone</TableHead>
            <TableHead>CV</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((item) => (
            <TableRow key={item.id}>
              <TableCell className="font-medium">
                <Avatar className="h-[42px] w-[42px]">
                  <AvatarImage src={item.image} alt="profile image" />
                  <AvatarFallback>SC</AvatarFallback>
                </Avatar>
              </TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.familyname}</TableCell>
              <TableCell>{item.email}</TableCell>
              <TableCell>{item.phone}</TableCell>
              <TableCell>
                <Link
                  href={item.cv}
                  target="_blank"
                  rel="noreferer"
                  className="flex gap-2 text-blue items-center"
                >
                  <FaLink /> Lire le document
                </Link>
              </TableCell>
              <TableCell className="text-right space-x-2">
                <Button size="icon" className="bg-green-500 hover:bg-green-600">
                  <FaCheck />
                </Button>
                <Button size="icon" variant="destructive">
                  <LuTrash2 />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
