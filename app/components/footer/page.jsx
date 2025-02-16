import React from "react";
import { FaFacebook, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0097b2] text-white py-6 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          
          {/* Section 1: À propos */}
          <div>
            <h3 className="text-lg font-semibold mb-2">À propos</h3>
            <p className="text-sm">
              Notre plateforme  vous permet de  Trouvez le professionnel idéal pour vos besoins : nounou, vigile, maçon ou femme de ménage, en un clic !
            </p>
          </div>

          {/* Section 2: Navigation */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Navigation</h3>
            <ul className="text-sm space-y-2">
              <li><a href="/offres" className="hover:underline">Voir les offres</a></li>
              <li><a href="/contact" className="hover:underline">Contactez nous</a></li>
         
            </ul>
          </div>

          {/* Section 3: Réseaux sociaux */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Suivez-nous</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="text-2xl hover:text-gray-300" />
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-2xl hover:text-gray-300" />
              </a>
            </div>
          </div>
        </div>

        {/* Ligne de séparation */}
        <div className="border-t border-gray-300 mt-6 pt-4 text-center text-sm">
          © {new Date().getFullYear()} Jobsure- Tous droits réservés.
        </div>
      </div>
    </footer>
  );
};

export default Footer;