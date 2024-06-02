'use client'


import { Button } from "@/components/ui/button"
import Image from 'next/image'
import Link from "next/link"
import TuttoringImage from '../images/Tutoring illustration.svg'
import { useRouter } from 'next/navigation';
import { useState,useEffect } from 'react'; // Ajout de l'importation useState

import './buttonanimation.css'

export default function Introducingpage() {
  const router = useRouter();
  
  const [statistics, setStatistics] = useState({ tutors: 0, students: 0, subjects: 0 });
  const [redirectToLogin, setRedirectToLogin] = useState(false);

  const handleLoginClick = () => {
    setRedirectToLogin(true);
  };

  if (redirectToLogin) {
    router.push("/login");
  }

  useEffect(() => {
    const fetchStatistics = async () => {
      try {
        const response = await fetch('/api/statistics');
        if (!response.ok) {
          throw new Error('Failed to fetch statistics');
        }
        const data = await response.json();
        setStatistics(data);
      } catch (error) {
        console.error('Error fetching statistics:', error);
      }
    };

    fetchStatistics();
  }, []);

  return (
    <div key="1" className="bg-white">
      <nav className="py-4 border-b-2">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 items-center">
          <div className="flex justify-start  md:col-span-1"> 
            <div className="bg-gray-400 rounded-full w-8 h-8" />
          </div>
          <div className="flex justify-center  md:justify-start space-x-14 font-bold md:col-span-1 " style={{fontFamily: 'NATS'}}> 
            <Link className="hover:text-indigo-800" href="/find-tutor">
            Nos profs
            </Link>
            <Link className="hover:text-indigo-800" href="/become-tutor">
            Devenez un prof particulier
            </Link>
            <Link className="hover:text-indigo-800" href="/about-us">
            À propos de nous
            </Link>
          </div>
          <div className="flex justify-end space-x-12 md:col-span-1">
            <Button className="bg-neutral-1 text-ag-body/regular hover:bg-slate-300 border border-purple-added rou ml-2 md:ml-96 md:mt-0 mt-2 w-28 h-8 rounded-3xl button-shrink" onClick={handleLoginClick}>
            Se connecter
            </Button>
          </div>
        </div>
      </nav>

      <header>
        <div className="max-w-7xl md:ml-28 px-4 py-12 flex flex-col md:flex-row justify-between items-center">
          <div className="max-w-lg text-center md:text-left md:mr-16">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-purple-added" style={{fontFamily: 'NATS'}}>
            Dévoilez votre potentiel
            </h1>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight" style={{fontFamily: 'NATS'}}>avec les meilleurs profs.</h1>
            <p className="mt-11 text-gray-600" style={{fontFamily: 'NATS'}}>
            Découvrez notre plateforme de cours particuliers en ligne et maîtrisez toutes les matières à votre rythme, chez vous!
            </p>
            <Button className="mt-20 bg-purple-added text-white hover:bg-blue w-64 rounded-3xl border-black border-[1px] button-shrink" onClick={() => router.push('/getstarted')}>
            Commencer maintenant
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
        <div className="mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <h2 className="text-3xl font-bold text-black">{statistics.tutors}</h2>
            <p className="text-gray-600 mt-2"> Profs expérimentés</p>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-black">{statistics.students}</h2>
            <p className="text-gray-600 mt-2">Etudiants</p>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-black">{statistics.subjects}</h2>
            <p className="text-gray-600 mt-2">sujets</p>
          </div>
        </div>
      </section>

      
    </div>
  )
}