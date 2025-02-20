"use client"
import React, { useEffect, useState } from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { FaCheck } from "react-icons/fa";
import { LuTrash2 } from "react-icons/lu";
import { getAllGroupContainerById, validateSession, refuseSession } from "@/actions/client/groups";
import { useRouter } from "next/navigation";
export default function Page({ params }) {
  const router = useRouter();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        const responseData = await getAllGroupContainerById(params.slug);
        setData(responseData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDataFromApi();
  }, [params.slug]);

  async function onSubmit(idS) {
    try {
      await validateSession(idS);
      router.push('/d/admin/sessions');
    } catch (err) {
      console.log(err);
    }
  }

  async function refuseS() {
    try {
      await refuseSession(params.slug);
      router.push('/d/admin/sessions');
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div>
      <h1 className="font-bold text-xl">Details de Session</h1>
      <hr className="my-6" />
      {data.map((session) => (
        <div key={session._id} className="border overflow-hidden max-w-[920px]">
          <div className="h-[180px] bg-[#E4D9FF]">
            <div className="mx-auto w-fit translate-y-1/2">
              <Avatar className="h-[200px] w-[200px] p-6 bg-slate-200">
                <AvatarImage
                  src="https://api.dicebear.com/8.x/lorelei/svg?seed=Harley&flip=true"
                  alt="profile image"
                />
                <AvatarFallback>SC</AvatarFallback>
              </Avatar>
            </div>
          </div>
          <div className="pt-[120px] py-8 px-4">
            <div className="text-center p-6">
              <p className="text-primary">{session.name}</p>
              <p>{session.email}</p>
            </div>
            <div className="grid grid-cols-4 gap-8 w-fit mx-auto">
              <div className="text-center">
                <p className="text-lg">Module</p>
                <p>{session.sessionInfo.moduleName}</p>
              </div>
              <div className="text-center">
                <p className="text-lg">Specialite</p>
                <p>{session.sessionInfo.speciality}</p>
              </div>
              <div className="text-center">
                <p className="text-lg">Tarif</p>
                <p>{session.sessionInfo.price} DA</p>
              </div>
              <div className="text-center">
                <p className="text-lg">Annee</p>
                <p>{session.sessionInfo.year}</p>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-8 w-fit mx-auto mt-6">
              <div className="text-center">
                <p className="text-lg">Durree</p>
                <p>{session.sessionInfo.studyDuration} week</p>
              </div>
              <div className="text-center">
                <p className="text-lg">NB de seances par semaine</p>
                <p>{session.sessionInfo.sessionsNumberPerWeek} seances</p>
              </div>
              <div className="text-center">
                <p className="text-lg">NB Max des etudiants</p>
                <p>{session.sessionInfo.studentNumber}</p>
              </div>
              <div className="text-center">
                <p className="text-lg">Duree d&apos;une seance</p>
                <p>{session.sessionInfo.sessionDuration} heures</p>
              </div>
            </div>
            <div className="space-x-3 mx-auto w-fit mt-8">
              <Button className="bg-green-500 gap-3 hover:bg-green-600" onClick={() => onSubmit(params.slug)}>
                <FaCheck /> Accepter
              </Button>
              <Button className="bg-red-500 gap-3 hover:bg-red-600" onClick={refuseS}>
                <LuTrash2 /> Refuser
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
