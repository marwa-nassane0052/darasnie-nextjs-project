"use client"
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
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import AddGroupDialog from "../_components/AddGroupDialog";
import { getGroupContainerByid, getGroupsByGroupContainerId } from "@/actions/client/groups";
import { useEffect, useState } from "react";


const groupsFixed = [
  {
    id: "1",
    group: "Groupe 01",
    date: "13 Decembre 2024",
    deadline: "13 Octobre 2024",
  },
  {
    id: "2",
    group: "Groupe 02",
    date: "13 Avril 2024",
    deadline: "13 Mars 2024",
  },
  {
    id: "3",
    group: "Groupe 03",
    date: "13 Decembre 2024",
    deadline: "13 Octobre 2024",
  },
];

export default function page({ params }) {
  const groupContainerId = params.slug
  const [data, setData] = useState([]);
  const [groups, setGroups] = useState([]);


  const fetchData = async () => {
    try {
      const responseData = await getGroupContainerByid(groupContainerId);
      setData(responseData);
      const responseData2 = await getGroupsByGroupContainerId(groupContainerId);
      setGroups(responseData2)
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, [groupContainerId]);



  return (
    <div>
      <div className="flex justify-between items-center">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/d/teacher/sessions">
                Sessions
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Session  {data?.moduleName} {data?.sessionsNumberPerWeek}  </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <AddGroupDialog nb={data?.sessionsNumberPerWeek} idGC={data?._id} fetchData={fetchData}>
          <Button>Cree un groupe</Button>
        </AddGroupDialog>
      </div>
      <hr className="my-6" />
      <Table>
        <TableCaption>La liste des groupes.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[150px]">Groupe</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Etat</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {groups?.map((item) => (
            <TableRow key={item.id}>
              <TableCell className="font-medium">{item.groupName}</TableCell>
              <TableCell>{new Date(item.startingDates[0]).toDateString()}</TableCell>
              <TableCell>
                {new Date(item.deadlineDate).getTime() < new Date().getTime() ? (
                  <span className="text-red-500">Ferme</span>
                ) : (
                  <span className="text-green-500">Ouvert</span>
                )}
              </TableCell>
              <TableCell className="text-right space-x-2">
                <Button variant="link" asChild>
                  <Link href={`/d/teacher/sessions/${params.slug}/${item._id}/${item.groupName}`}>
                    Liste des etudiants
                  </Link>
                </Button>
                <Button variant="link" asChild className="text-right space-x-2">
                  <Link href={`/d/teacher/groups/${item._id}`}>
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
