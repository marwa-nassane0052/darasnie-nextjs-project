import { Button } from "@/components/ui/button";
import { FacebookIcon, InstagramIcon, LinkedinIcon } from "lucide-react";
import Link from "next/link";

export default function RootLayout({ children }) {
  return (
    <div>
      <div className="min-h-screen">
        <nav className="py-4 border-b-2">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 items-center">
            <div className="flex justify-start  md:col-span-1">
              <div className="bg-gray-400 rounded-full w-8 h-8" />
            </div>
            <div className="flex justify-center items-center text-sm  md:justify-start space-x-8 font-bold md:col-span-1 ">
              <Link className="hover:text-indigo-800" href="/find-tutor">
                Nos profs
              </Link>
              <Link className="hover:text-indigo-800" href="/become-tutor">
                Devenez un prof
              </Link>
              <Link className="hover:text-indigo-800" href="/about-us">
                À propos de nous
              </Link>
            </div>
            <div className="flex justify-end space-x-12 md:col-span-1">
              <Link href="/signin">
                <Button className="bg-neutral-1 text-ag-body/regular hover:bg-slate-300 border border-purple-added rou ml-2 md:ml-96 md:mt-0 mt-2 w-28 h-8 rounded-3xl button-shrink">
                  Se connecter
                </Button>
              </Link>
            </div>
          </div>
        </nav>
        {children}
      </div>
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
    </div>
  );
}
