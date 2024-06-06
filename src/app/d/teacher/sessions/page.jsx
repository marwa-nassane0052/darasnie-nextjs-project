"use client"
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
      <h1 className="font-bold text-xl mb-5">Mes Sessions</h1>
      <hr />
      <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        <AddSessionDialog fetchData={fetchData}>
          <Button
            variant="ghost"
            className="w-full h-full border shadow border-dashed gap-3 bg-white"
          >
            <FaPlus /> Add Session
          </Button>
        </AddSessionDialog>
        {data?.map((s) => (
          <Card key={s._id}>
            <CardHeader>
              <CardTitle>Module: {s.moduleName}</CardTitle>
              <CardDescription>
                {s.level}, {s.year}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                <strong>Tarif:</strong> <span>{s.price}</span>
              </p>
              <p>
                <strong>Duree:</strong> <span>{s.sessionDuration}</span>
              </p>
              <p>
                <strong>Groupes:</strong> <span> {s.groups.length} groupes</span>
              </p>
              <p>
                <strong>Nombre des seances:</strong> <span>{s.sessionsNumberPerWeek}</span>
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="link" disabled={!s.valide} className="ml-auto">
                <Link href={`/d/teacher/sessions/${s._id}/forum`}>
                  Forum
                </Link>
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
