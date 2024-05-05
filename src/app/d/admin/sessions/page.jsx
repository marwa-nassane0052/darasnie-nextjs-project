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

const sessions = [
  {
    id: "1",
    emitteur: {
      name: "Yahiaoui Meriem",
      email: "m.yahiaoui@esi-sba.dz",
      image: "https://api.dicebear.com/8.x/lorelei/svg?seed=Harley&flip=true",
    },
    niveau: "Lycee",
    module: "Mathematique",
    status: "Acceptee",
  },
  {
    id: "2",
    emitteur: {
      name: "Yahiaoui Meriem",
      email: "m.yahiaoui@esi-sba.dz",
      image: "https://api.dicebear.com/8.x/lorelei/svg?seed=meriem&flip=true",
    },
    niveau: "Cem",
    module: "Physiques",
    status: "En Attente",
  },
  {
    id: "3",
    emitteur: {
      name: "Yahiaoui Meriem",
      email: "m.yahiaoui@esi-sba.dz",
      image: "https://api.dicebear.com/8.x/lorelei/svg?seed=Sarah&flip=true",
    },
    niveau: "Cem",
    module: "Physiques",
    status: "Refusee",
  },
];

export default function page() {
  return (
    <div>
      <h1 className="font-bold text-xl mb-8">Demande des Sessions</h1>
      <hr />
      <Table>
        <TableCaption>La liste des demandes.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Emiteur</TableHead>
            <TableHead>Niveau</TableHead>
            <TableHead>Module</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sessions.map((item) => (
            <TableRow key={item.id}>
              <TableCell className="font-medium">
                <User {...item.emitteur} />
              </TableCell>
              <TableCell>{item.niveau}</TableCell>
              <TableCell>{item.module}</TableCell>
              <TableCell>
                <span
                  className={
                    item.status == "Acceptee"
                      ? "text-green-400"
                      : item.status == "Refusee" && "text-red-400"
                  }
                >
                  {item.status}
                </span>
              </TableCell>
              <TableCell className="text-right space-x-2">
                <Button asChild>
                  <Link href={`/d/admin/sessions/${item.id}`}>Details</Link>
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

const User = ({ name, email, image }) => {
  return (
    <div className="flex items-center gap-4">
      <Avatar className="h-[42px] w-[42px]">
        <AvatarImage src={image} alt="profile image" />
        <AvatarFallback>SC</AvatarFallback>
      </Avatar>
      <div>
        <p className="font-bold text-sm">{name}</p>
        <p className="text-xs text-gray-500">{email}</p>
      </div>
    </div>
  );
};
