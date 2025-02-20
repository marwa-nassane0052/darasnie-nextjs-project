"use client";
import React from "react";
import { useEffect, useState } from "react";
import {Card,CardContent} from "@/components/ui/card"
import { Row,Col, Button } from "antd";
import Image from "next/image";
import Link from "next/link";
import academic_student from "../images/academic_student.png";
import languages_studies from "../images/languages_studies.png";
import tutor_student from "../images/tutor_student.png";
import young_women from "../images/young-women.png";
import { RightOutlined,ArrowRightOutlined } from "@ant-design/icons";
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
export default function ServicesSection() {
  
  const { count: count1, speed: speed1 } = useCounter(100); 
  const { count: count2, speed: speed2 } = useCounter(200); 
  const { count: count3, speed: speed3 } = useCounter(150); 

  const { count: maxNumber1, } = useCounter(170); 
  const { count: maxNumber2,  } = useCounter(230); 
  const { count: maxNumber3 } = useCounter(300);
  const serviceImages = [tutor_student, languages_studies, academic_student];

  const initialLessonCounts = [0, 0, 0];
  const [lessonCounts, setLessonCounts] = useState(initialLessonCounts);

  useEffect(() => {
    // Fonction pour récupérer le nombre de leçons pour chaque cours depuis la base de données
    async function fetchLessonCounts() {
      try {
        const counts = await Promise.all([
          getLessonCountForCourse("Tutor student"),
          getLessonCountForCourse("Academic studies"),
          getLessonCountForCourse("Languages Studies"),
        ]);
        setLessonCounts(counts);
      } catch (error) {
        console.error("Error fetching lesson counts:", error);
      }
    }

    fetchLessonCounts();
  }, []);

  return (
    <div>
     <div className="services mt-20">
      <div className="text-center flex justify-center items-center flex-col mb-3">
         <h2 className="text-3xl font-semibold pb-2 ">Nos services</h2> 
         <div className="line h-[1px] w-32 border border-[#E4D9FF] my-2 mx-24"></div>
      </div>
        <div className=" px-16 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-1  xl:grid-cols-3 2xl:grid-cols-3">
          <ServiceCard
            title="Prof-étudiant"
            description="Nos services aident les étudiants à atteindre leurs objectifs académiques grâce à des séances individuelles personnalisées."
            image={serviceImages[0]}
          />
          <ServiceCard
            title="Études académiques"
            description="Plongez profondément dans votre domaine d’études grâce à nos conseils et ressources académiques experts."
            image={serviceImages[1]}
          />
          <ServiceCard
            title="Études de langues"
            description="Élargissez vos horizons en apprenant une nouvelle langue avec nos professeurs de langue expérimentés."
            image={serviceImages[2]}
          />
        </div>
        <h2 className="text-3xl justify-center font-extrabold text-center mt-24 mb-10 border-b-2 border-light-gray pb-4">
          Comment fonctionne Daresni
        </h2>
        <div className="flex justify-center items-center space-x-32  mb-12">
          <StepCard icon={<LaptopIcon />} text="Trouvez votre professeur" />
          <StepArrow />
          <StepCard icon={<SchoolIcon />} text="Commencer à apprendre" />
          <StepArrow />
          <StepCard icon={<RepeatIcon />} text="Répéter" />
        </div>
      </div>
      <div className="mt-20">
      <Row style={{ height: "420px" }}>
        <Col span={13}>
        <Image src={young_women} width={750} />
        </Col>
        <Col span={11} className="  w-full bg-[#9747FF] p-11" >
          <h2  className="pb-1 font-bold text-4xl">Devenez un professeur</h2>
          <p className="pb-7">Gagnez de l'argent en partageant vos connaissances d'expert avec les étudiants. Inscrivez-vous pour commencer à donner des cours en ligne avec Preply</p>
          <ul className="list-disc  pl-4" >
            <li className="my-1 font-semibold text-sm">Trouver de nouveaux étudiants</li>
            <li className="my-1 font-semibold text-sm">Développez votre entreprise</li>
            <li className="my-1 font-semibold text-sm">Soyez payé en toute sécurité</li>
          </ul>
          <Button className="bg-black border-none rounded-xl px-6 py-3  text-white ml-4 mt-8 flex items-center" >Devenez un professeur <ArrowRightOutlined /></Button>
        </Col>

      </Row>
     </div>
      <div className="my-20">
          <div className="text-center flex justify-center items-center flex-col mb-3">
            <h2 className="text-3xl font-semibold pb-2 ">Apprenez des langues avec nous !  </h2> 
            <div className="line h-[1px] w-32 border border-[#E4D9FF] my-2 mx-24"></div>
          </div>
        <Row className="px-28 mt-5" justify="space-between">
        <Col>
         <LangCard nameL="Arabe" maxNumber={maxNumber1}></LangCard>
        </Col>
        <Col>
          <LangCard nameL="français" maxNumber={maxNumber2}></LangCard>
        </Col>
        <Col>
         <LangCard nameL="Anglais" maxNumber={maxNumber3}></LangCard>
        </Col>
      </Row>
       
      </div>
    </div>
  );
}

function ServiceCard({ title, description, image }) {
  return (
    <div className="rounded-3xl border-[1px] text-purple-added  border-gray-300 shadow-lg sm:w-72 sm:h-80 md:w-80 md:h-80 lg:w-72 lg:h-72 xl:w-80 xl:h-80 mx-auto justify-between">
      <div className="flex flex-col items-center m-2">
        <Image
          alt={title}
          src={image}
          style={{
            aspectRatio: "400/200",
            border: "1px solid ",
            borderRadius: "35px",
          }}
          width={340}
        />
        <div className="p-4">
          <h3 className="text-xl font-medium mb-2 text-center">{title}</h3>
          <p className="text-gray-700 text-sm text-center">{description}</p>
        </div>
      </div>
    </div>
  );
}
function StepCard({ icon, text }) {
  return (
    <div className="text-center">
      {icon}
      <p>{text}</p>
    </div>
  );
}

function LangCard({nameL,maxNumber}) {
  return(
        
    <Card style={{ width: "320px", height: "100px" }}>
    <div className="flex justify-between items-center h-full   px-16">
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-xl font-semibold text-center">{nameL}</h2>
        <p className="text-[#A3A9AF] text-lg text-center ">{maxNumber} cours</p>
      </div>
      <RightOutlined style={{ color: "#9747FF", fontSize: '50px' }} />
    </div>
  </Card>
  )
}
function StepArrow() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6 text-purple-600"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

function LaptopIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-12 w-12 mb-2 mx-auto"
    >
      <path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16" />
    </svg>
  );
}

function RepeatIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-12 w-12 mb-2 mx-auto"
    >
      <path d="m17 2 4 4-4 4" />
      <path d="M3 11v-1a4 4 0 0 1 4-4h14" />
      <path d="m7 22-4-4 4-4" />
      <path d="M21 13v1a4 4 0 0 1-4 4H3" />
    </svg>
  );
}

function SchoolIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-12 w-12 mb-2 mx-auto"
    >
      <path d="m4 6 8-4 8 4" />
      <path d="m18 10 4 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8l4-2" />
      <path d="M14 22v-4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v4" />
      <path d="M18 5v17" />
      <path d="M6 5v17" />
      <circle cx="12" cy="9" r="2" />
    </svg>
  );
}
function LinkedinIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function InstagramIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function FacebookIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      color="black"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}
function ChevronRightIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

function ArrowRightIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}
