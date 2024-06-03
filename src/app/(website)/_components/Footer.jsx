import Link from "next/link";
import { FacebookIcon, InstagramIcon, LinkedinIcon } from "lucide-react";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-light-gray py-8 w-full">
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
            <h3 className="text-lg font-semibold mb-4">
              Réseaux sociaux Daresni
            </h3>
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
          <span className="text-sm text-black md:mb-0">
            © 2012-2024 Daresni Inc.
          </span>
          <div className="flex flex-col md:flex-row">
            <a className="underline mr-4 mb-2  md:mr-4 md:mb-0" href="#">
              Legal center
            </a>
            <a className="underline" href="#">
              Privacy policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
