"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { FaPlus } from "react-icons/fa";
import AddSessionDialog from "./_components/AddSessionDialog";
import { getGroupContainerForProf } from "@/actions/client/groups";
import { useEffect, useState } from "react";

export default function Page() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const dataN = await getGroupContainerForProf();
      setData(dataN.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div className=" flex justify-between items-center ">
        <h1 className="font-bold text-xl mb-5">Mes Sessions</h1>
        <AddSessionDialog fetchData={fetchData}>
          <Button
            variant="ghost"
            className="w-[240px] h-full  shadow border-dashed border-2 border-purple-border-added gap-3 bg-white mb-5"
          >
            <FaPlus /> Add Session
          </Button>
        </AddSessionDialog>
      </div>
      <hr />
      <div className="mt-6 grid md:grid-cols-3 gap-4">
        <AddSessionDialog fetchData={fetchData}></AddSessionDialog>
        {data?.map((s) => (
          <Card key={s._id} className=" w-[300px] transition ease-in-out delay-150  hover:-translate-y-1 hover:drop-shadow-2xl duration-300" opacity-25={!s.valide} >
            <CardHeader>
              <CardTitle>Module: {s.moduleName}</CardTitle>
              <CardDescription>
                {s.level}, {s.year}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p >
                <strong >Tarif:</strong> <span className="text-gray-400">{s.price}DA</span>
              </p>
              <p>
                <strong>Duree:</strong> <span className="text-gray-400">{s.sessionDuration}</span>
              </p>
              <p>
                <strong>Groupes:</strong>{" "}
                <span className="text-gray-400"> {s.groups.length} groupes</span>
              </p>
              <p>
                <strong>Nombre des seances:</strong>{" "}
                <span className="text-gray-400">{s.sessionsNumberPerWeek}</span>
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="link" disabled={!s.valide} className="ml-auto">
                <Link href={`/d/teacher/sessions/${s._id}/forum`}>Forum</Link>
              </Button>
              
              <Button disabled={!s.valide}>
                <Link href={`/d/teacher/sessions/${s._id}`}>Details</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
