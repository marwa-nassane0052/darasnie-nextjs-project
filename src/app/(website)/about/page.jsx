"use client"
import Footer from "../_components/Footer";

export default function About() {
  return (
    <div>
      <div className="relative">
        <img
          src="/about.jpeg" // Remplacez par le chemin réel de votre image
          alt="À propos de nous"
          className="w-full h-64 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white">À propos de nous</h1>
        </div>
      </div>
      <div className="container mx-auto px-4 py-8">

        <div className="flex justify-center">
          <div className="flex flex-wrap justify-center">
            <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
              <div className="bg-white shadow-lg rounded-lg p-6 h-full">
                <h3 className="text-2xl font-semibold mb-4 text-center">Éducation Numérique</h3>
                <p className="text-gray-700 text-sm">
                  Avec le développement rapide de la technologie numérique, l’enseignement
                  en ligne est devenu une partie intégrante de l’éducation. Plusieurs plateformes
                  d’enseignement en ligne ont été créées et sont largement utilisées dans le monde
                  entier. Cependant, il existe toujours un manque de plateformes spécifiquement
                  conçues pour les cours particuliers à l’échelle nationale en Algérie.
                </p>
              </div>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8 ">
              <div className="bg-white shadow-lg rounded-lg p-6 h-full">
                <h3 className="text-2xl font-semibold mb-4 text-center">Projet "DARESNI"</h3>
                <p className="text-gray-700 text-sm">
                  Dans ce contexte, le projet "DARESNI" entre en jeu. Il s’agit d’une
                  plateforme d’enseignement en ligne dédiée à ces leçons de soutien. L’objectif de
                  cette plateforme est de combler ce manque en offrant un espace en ligne où les
                  enseignants et les élèves (CEM et Lycée) peuvent interagir efficacement dans un
                  environnement en ligne convivial et intuitif.
                </p>
              </div>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
              <div className="bg-white shadow-lg rounded-lg p-6 h-full text-center">
                <h3 className="text-2xl font-semibold mb-4">Apprentissage des Langues</h3>
                <p className="text-gray-700 text-sm">
                  Un des atouts majeurs de notre plateforme est qu’elle offre une
                  fonctionnalité d’apprentissage des langues, actuellement centrée sur la langue
                  arabe. Cela permet aux utilisateurs d’améliorer leurs compétences linguistiques
                  tout en bénéficiant d’autres services éducatifs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
