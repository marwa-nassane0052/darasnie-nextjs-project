"use client"
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
import { getAllProf, validateProf } from "@/actions/client/auth";
import { useState, useEffect } from "react";

export default function Page() {
  const [profs, setProfs] = useState([]);

  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        const response = await getAllProf();
        if (response.success) {
          setProfs(response.data);
        } else {
          console.error(response.data);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchDataFromApi();
  }, []);

  async function onSubmit(idP) {
    try {
      await validateProf(idP);
      // Refresh the list of professors after validation
      const updatedResponse = await getAllProf();
      if (updatedResponse.success) {
        setProfs(updatedResponse.data);
      } else {
        console.error(updatedResponse.data);
      }
    } catch (err) {
      console.log(err);
    }
  }

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
            <TableHead>Statut</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {profs?.map((item) => (
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
                {item.isValid ? (
                  <Link
                    href={item.cv}
                    target="_blank"
                    rel="noreferer"
                    className="flex gap-2 text-blue items-center"
                  >
                    <FaLink /> Lire le document
                  </Link>
                ) : (
                  <span className="flex gap-2 text-gray-500 items-center">
                    <FaLink /> Non disponible
                  </span>
                )}
              </TableCell>
              <TableCell>
                <span
                  className={
                    item.user.isActive === true
                      ? "text-green-400"
                      : item.user.isActive === false && "text-red-400"
                  }
                >
                  {item.user.isActive === true ? "accepted" : "en attente"}
                </span>
              </TableCell>
              <TableCell className="text-right space-x-2">
                <Button
                  size="icon"
                  className="bg-green-500 hover:bg-green-600"
                  onClick={() => onSubmit(item.user._id)}
                >
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
