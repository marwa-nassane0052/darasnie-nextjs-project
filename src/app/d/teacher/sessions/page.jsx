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

const sessions = [
  {
    id: "1",
    module: "Math",
    niveau: "CEM",
    annee: "2eme annee",
    duree: "2 mois",
    Nb_seance:3,
    tarif: "2500 DA",
    groupes: 2,
  },
  {
    id: "2",
    module: "Physique",
    niveau: "LYCEE",
    annee: "3eme annee",
    duree: "2 mois",
    
    Nb_seance:2,
    tarif: "4500 DA",
    groupes: 3,
  },
  {
    id: "3",
    module: "Math",
    niveau: "CEM",
    annee: "2eme annee",
    duree: "2 mois",
    
    Nb_seance:4,
    tarif: "2500 DA",
    groupes: 2,
  },
];

export default function page() {
  return (
    <div>
      <h1 className="font-bold text-xl mb-5">Mes Sessions</h1>
      <hr />
      <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        <AddSessionDialog>
          <Button
            variant="ghost"
            className="w-full h-full border shadow border-dashed gap-3 bg-white"
          >
            <FaPlus /> Add Session
          </Button>
        </AddSessionDialog>
        {sessions.map((session) => (
          <Card key={session.id}>
            <CardHeader>
              <CardTitle>Module: {session.module}</CardTitle>
              <CardDescription>
                {session.niveau}, {session.annee}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                <strong>Tarif:</strong> <span>{session.tarif}</span>
              </p>
              <p>
                <strong>Duree:</strong> <span>{session.duree}</span>
              </p>
              <p>
                <strong>Groupes:</strong> <span>{session.groupes} groupes</span>
              </p>
              
              <p>
                <strong>Nombre des seances:</strong> <span>{session.Nb_seance}</span>
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="link" asChild className="ml-auto">
                <Link href={`/d/teacher/sessions/${session.id}/forum`}>
                  Forum
                </Link>
              </Button>
              <Button asChild>
                <Link href={`/d/teacher/sessions/${session.id}`}>Details</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
