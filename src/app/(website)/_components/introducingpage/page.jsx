"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import TuttoringImage from "../images/TutoringIllustration.svg";
import { useState, useEffect } from "react"; // Ajout de l'importation useState

import "./buttonanimation.css";

export default function IntroductionSection() {
  const [statistics, setStatistics] = useState({
    tutors: 0,
    students: 0,
    subjects: 0,
  });

  useEffect(() => {
    // const fetchStatistics = async () => {
    //   try {
    //     const response = await fetch("/api/statistics");
    //     if (!response.ok) {
    //       throw new Error("Failed to fetch statistics");
    //     }
    //     const data = await response.json();
    //     setStatistics(data);
    //   } catch (error) {
    //     console.error("Error fetching statistics:", error);
    //   }
    // };
    // fetchStatistics();
  }, []);

  return (
    <div key="1" className="bg-white">
      <header>
        <div className="max-w-7xl md:ml-28 px-4 py-12 flex flex-col md:flex-row justify-between items-center">
          <div className="max-w-lg text-center md:text-left md:mr-16">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-purple-added">
              Dévoilez votre potentiel
            </h1>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              avec les meilleurs profs.
            </h1>
            <p className="mt-6 text-gray-600">
              Découvrez notre plateforme de cours particuliers en ligne et
              maîtrisez toutes les matières à votre rythme, chez vous!
            </p>

            <Button className=" w-64 mt-8">
              <Link href={`/tutors`}>Commencer maintenant</Link>
            </Button>
          </div>
          <div className="flex justify-center md:justify-end">
            <Image
              alt="Tutoring illustration"
              className="w-full md:w-auto"
              height="auto"
              src={TuttoringImage}
              objectFit="cover"
              width="400"
            />
          </div>
        </div>
      </header>
      <section className="bg-purple-100 py-12 md:ml-28 md:w-10/12 md:h-40 md:rounded-3xl border-[1px] border-black">
        <div className="mx-auto grid grid-cols-1 md:grid-cols-3  text-center">
          <div>
            <h2 className="text-3xl font-bold text-black">
              {statistics.tutors}
            </h2>
            <p className="text-gray-600 mt-2"> Profs expérimentés</p>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-black">
              {statistics.students}
            </h2>
            <p className="text-gray-600 mt-2">Etudiants</p>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-black">
              {statistics.subjects}
            </h2>
            <p className="text-gray-600 mt-2">sujets</p>
          </div>
        </div>
      </section>
    </div>
  );
}
