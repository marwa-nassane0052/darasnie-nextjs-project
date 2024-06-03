"use client"

import React from "react";
import { useEffect,useState } from "react";
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
import { getAllGroupCOntainer } from "@/actions/client/groups";

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
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        const responseData = await getAllGroupCOntainer();
        setData(responseData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDataFromApi();
  }, []); 



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
          {data?.map((item) => (
            <TableRow key={item._id}>
              <TableCell className="font-medium">
                <User name={item.name} familyname={item.familyname} email={item.email} />
              </TableCell>
              <TableCell>{item.sessionInfo.level}</TableCell>
              <TableCell>{item.sessionInfo.moduleName}</TableCell>
              <TableCell>
                <span
                  className={
                    item.sessionInfo.valide === true
                      ? "text-green-400"
                      : item.sessionInfo.valide === false && "text-red-400"
                  }
                >
                 {item.sessionInfo.valide === true ? "accepted" : "refused"} 
                </span>
              </TableCell>
              <TableCell className="text-right space-x-2">
                <Button asChild>
                  <Link href={`/d/admin/sessions/${item.sessionInfo.croupContainerId}`}>Details</Link>
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

const User = ({ name,familyname, email }) => {
  return (
    <div className="flex items-center gap-4">
      <Avatar className="h-[42px] w-[42px]">
        <AvatarImage src={"https://api.dicebear.com/8.x/lorelei/svg?seed=Sarah&flip=true"} alt="profile image" />
        <AvatarFallback>SC</AvatarFallback>
      </Avatar>
      <div>
        <p className="font-bold text-sm">{name} {familyname}</p>
        <p className="text-xs text-gray-500">{email}</p>
      </div>
    </div>
  );
};