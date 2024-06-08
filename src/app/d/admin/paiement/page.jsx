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
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const payments = [
  {
    id: "1",
    user: {
      name: "Yahiaoui Meriem",
      email: "m.yahiaoui@esi-sba.dz",
      image: "https://api.dicebear.com/8.x/lorelei/svg?seed=Harley&flip=true",
    },
    niveau: "Lycee",
    tarif: "9000 DA",
  },
  {
    id: "2",
    user: {
      name: "Yahiaoui Meriem",
      email: "m.yahiaoui@esi-sba.dz",
      image: "https://api.dicebear.com/8.x/lorelei/svg?seed=meriem&flip=true",
    },
    niveau: "Cem",
    tarif: "4000 DA",
  },
  {
    id: "3",
    user: {
      name: "Yahiaoui Meriem",
      email: "m.yahiaoui@esi-sba.dz",
      image: "https://api.dicebear.com/8.x/lorelei/svg?seed=Sarah&flip=true",
    },
    niveau: "Cem",
    tarif: "6000 DA",
  },
];

export default function page() {
  return (
    <div>
      <h1 className="font-bold text-xl mb-8">Liste des paiements</h1>
      <hr />
      <Table>
        <TableCaption>La liste des paiements.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Enseignant</TableHead>
            <TableHead>Niveau</TableHead>
            <TableHead>Tarif</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {payments.map((item) => (
            <TableRow key={item.id}>
              <TableCell className="font-medium">
                <User {...item.user} />
              </TableCell>
              <TableCell>{item.niveau}</TableCell>
              <TableCell>{item.tarif}</TableCell>
             
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
