

'use client'
import { useEffect, useState } from 'react';
import {Card,CardContent} from '@/Components/ui/card'
import { Button } from '@/Components/ui/button';

import Image from 'next/image';
import Link from "next/link";
import academic_student from '../images/academic_student.png';
import languages_studies from '../images/languages_studies.png';
import tutor_student from '../images/tutor_student.png';
import young_women from '../images/young-woman-holding-tablet-white_114579-76708 1.png';

export default function ServicesPage() {
  const serviceImages = [
    tutor_student,
    languages_studies,
    academic_student,
    
    
  ];

  const initialLessonCounts = [0, 0, 0];
  const [lessonCounts, setLessonCounts] = useState(initialLessonCounts);

  useEffect(() => {
    // Fonction pour récupérer le nombre de leçons pour chaque cours depuis la base de données
    async function fetchLessonCounts() {
      try {
        const counts = await Promise.all([
          getLessonCountForCourse('Tutor student'),
          getLessonCountForCourse('Academic studies'),
          getLessonCountForCourse('Languages Studies'),
        ]);
        setLessonCounts(counts);
      } catch (error) {
        console.error('Error fetching lesson counts:', error);
      }
    }

    fetchLessonCounts();
  }, []);

 

  return (
    <div  >
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <h2 className="text-3xl font-extrabold text-center mb-8  border-b-2 border-light-gray pb-4 mt-10">Nos services</h2>
    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8  xl:grid-cols-3 2xl:grid-cols-3">
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
      <h2 className="text-3xl justify-center font-extrabold text-center mt-24 mb-10 border-b-2 border-light-gray pb-4">Comment fonctionne Daresni</h2>
      <div className="flex justify-center items-center space-x-40 mb-12">
        <StepCard icon={<LaptopIcon />} text="Trouvez votre professeur" />
        <StepArrow />
        <StepCard icon={<SchoolIcon />} text="Commencer à apprendre" />
        <StepArrow />
        <StepCard icon={<RepeatIcon />} text="Répéter" />
      </div>
      </div>
      
      <div className="flex mb-8  ">
      <div >  
       <Image
      alt="Tutoring process"
      class=" w-screen h-[52vh]"
      src={young_women}
     
       />
  </div>
  <div className=" bg-[#6f42c1] p-8  w-screen h-[52vh]  ">  
  <div className="text-black ">
     <h2 className="text-3xl mb-4 font-bold">Devenez un professeur</h2>
     <p className="mb-6 text-black">
     Gagnez de l'argent en partageant vos connaissances d'expert avec les étudiants. Inscrivez-vous pour commencer à donner des cours en ligne avec Preply
    </p>
    <ul className="mb-8 text-black list-disc pl-4">
      <li className="mb-2">Trouver de nouveaux étudiants</li>
      <li className="mb-2">Développez votre entreprise</li>
      <li className="mb-2">Soyez payé en toute sécurité</li>
    </ul>
    </div>
    < Button className=" text-white hover:bg-gray-600  rounded-3xl w-60 h-10 bg-black  space-x-8">
      <span>Devenez un professeur</span>
      <ArrowRightIcon className="text-white" />
      </Button>

  </div>
</div>
    <div className=" min-h-screen">
    <div className="py-12">
        <h1 className="text-3xl font-extrabold text-center border-b-2 border-light-gray pb-4  mb-16">Apprenez des langues avec nous !</h1>
        <div className="flex justify-center space-x-6 mb-20 ">
      {['Arabe', 'Français', 'Englais'].map((language, index) => (
        <button key={index}>
          <Card className="w-[300px] h-32 pt-8">
            <CardContent>
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-semibold">{language}</h2>
                <ChevronRightIcon className="text-purple-added" />
              </div>
              <p className="text-sm text-gray-600">{lessonCounts[index]} cours</p>
            </CardContent>
          </Card>
        </button>
      ))}
    </div>
    <footer className="bg-light-gray py-8">
  <div className="max-w-7xl mx-auto px-4 border-b border-light-gray-1 pb-8">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-black justify-items-center">
      <div className="justify-self-center">
        <h3 className="text-lg font-semibold mb-4">À propos</h3>
        <ul>
          <li className="mb-2">
            <Link className="underline hover:text-purple-added" href="#">
            Qui sommes nous ?
            </Link>
          </li>
          <li className="mb-2">
            <Link className="underline hover:text-purple-added" href="#">
            Travailler chez Daresni
            </Link>
          </li>
          <li>
            <Link className="underline hover:text-purple-added" href="#">
            Comment fonctionne Daresni ?
            </Link>
          </li>
        </ul>
      </div>
      <div className="justify-self-center">
        <h3 className="text-lg font-semibold mb-4">Réseaux sociaux Daresni</h3>
        <ul>
          <li className="mb-2">
            <Link className="underline hover:text-purple-added" href="#">
              <FacebookIcon className="inline mr-2" /> Facebook
            </Link>
          </li>
          <li className="mb-2">
            <Link className="underline hover:text-purple-added" href="#">
              <InstagramIcon className="inline mr-2" /> Instagram
            </Link>
          </li>
          <li>
            <Link className="underline hover:text-purple-added" href="#">
              <LinkedinIcon className="inline mr-2" /> Linkedin
            </Link>
          </li>
        </ul>
      </div>
      <div className="justify-self-center">
        <h3 className="text-lg font-semibold mb-4">Étudiants</h3>
        <ul>
          <li>
            <Link className="underline hover:text-purple-added" href="#">
            Niveau de test d'arabe
            </Link>
          </li>
          <li className="mb-2">
            <Link className="underline hover:text-purple-added" href="#">
            Études académiques
            </Link>
          </li>
          <li>
            <Link className="underline hover:text-purple-added" href="#">
             Réduction pour étudiant
            </Link>
          </li>
        </ul>
      </div>
      <div className="justify-self-center">
        <h3 className="text-lg font-semibold mb-4">Profs</h3>
        <ul>
          <li className="mb-2">
            <Link className="underline hover:text-purple-added" href="#">
            Demande d'enseignement 
            </Link>
          </li>
          
          <li>
            <Link className="underline hover:text-purple-added" href="#">
            Voir tous les sujets des profs
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div className="mt-1 md:pt-5 md:mr-[775px] md:ml-32">
  <div className="flex flex-col md:flex-row justify-between items-center mb-11">
    <span className="text-sm text-black md:mb-0">© 2012-2024 Daresni Inc.</span>
    <div className="flex flex-col md:flex-row">
      <a className="underline mr-4 mb-2  md:mr-4 md:mb-0" href="#">Legal center</a>
      <a className="underline" href="#">Privacy policy</a>
    </div>
  </div>
</div>
</footer>

</div>
</div>

    </div>
    
    

  
)
}

function ServiceCard({ title, description,image }) {
  return (
    <div className="rounded-3xl border-[1px] text-purple-added  border-black shadow-lg sm:w-80 sm:h-80 md:w-96 md:h-80 lg:w-80 lg:h-80 xl:w-96 xl:h-80 mx-auto justify-between">
      <div className="flex flex-col items-center m-3">
        <Image
          alt={title}
          src={image}
          style={{
            aspectRatio: "400/200",
            border: "1px solid purple",
            borderRadius: "35px",
          }}
          width={300}
        />
        <div className="p-4">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-gray-700 text-base">{description}</p>
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

    
  )
  
  ;
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
  )
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
  )
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
  )
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
  )
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
  )
}