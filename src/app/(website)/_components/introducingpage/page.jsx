"use client";
import React from 'react';
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import TuttoringImage from "../images/TutoringIllustration.svg";
import { useState, useEffect } from "react"; // Ajout de l'importation useState

import "./buttonanimation.css";
const useCounter = (maxValue) => {
  const [count, setCount] = React.useState(0); // State for the counter
  const [startTime, setStartTime] = React.useState(null); // State to store the start time

  React.useEffect(() => {
    // useEffect hook to update the counter
    const interval = setInterval(() => {
      // Increment the count if it's less than the max value
      if (count < maxValue) {
        setCount((prevCount) => prevCount + 1);
      } else {
        // If count reaches max value, clear the interval to stop further increments
        clearInterval(interval);
      }
    }, 50); // Decreased interval to make the calculation faster (50 milliseconds)

    // Set the start time when the component mounts
    setStartTime(new Date().getTime());

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, [count, maxValue]);

  // Calculate speed of calculation in counts per second
  const speed = count / ((new Date().getTime() - startTime) / 1000);

  return { count, speed };
};

export default function IntroductionSection() {
  const { count: count1, speed: speed1 } = useCounter(100); 
  const { count: count2, speed: speed2 } = useCounter(200); 
  const { count: count3, speed: speed3 } = useCounter(150); 

  const { count: maxNumber1, } = useCounter(170); 
  const { count: maxNumber2,  } = useCounter(230); 
  const { count: maxNumber3 } = useCounter(300); 
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
        <div className="max-w-7xl md:ml-12 px-16 py-12 flex flex-col md:flex-row justify-between items-center">
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
          <div className="flex justify-center md:justify-end md:mr-12">
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
      
      <div className="counter h-40  mx-24  mt-20  px-36 flex justify-between items-center  border  border-[#000000] rounded-3xl bg-[#E4D9FF] ">
        <div  className="text-center">
            <p className="font-bold text-2xl">{count1}+</p>
            <p className="text-[#888888]">Profs expérimentés</p>
        </div>
        <div className="text-center"> 
           <p className="font-bold text-2xl">{count2}+</p>
           <p className="text-[#888888]">Etudiants</p>
        </div>
        <div className="text-center">
        <p className="font-bold text-2xl">{count2}+</p>
        <p className="text-[#888888]">Etudiants</p>
        </div>
 
      </div>
    
    </div>
  );
}
