import React from "react";

const FooterNewsletter = () => {
  return (
    <footer className="w-full">
      {/* Newsletter Section */}
      <div className="w-full bg-white py-12 px-4">
        <div className="max-w-screen-xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-3 text-gray-800">Wanterma ?</h2>
          <p className="text-gray-600 mb-6">
            Abonnez-vous à notre newsletter pour recevoir des mises à jour sur nos dernières offres!
          </p>
          <div className="w-[260px] md:w-[500px] mx-auto flex flex-row gap-1">
      <input
        type="email"
        placeholder="Email Address"
        className="flex-1 p-1 md:p-2 border border-gray-300 rounded text-xs md:text-sm h-8 md:h-10"
      />
      <button 
        className="w-20 md:w-28 bg-gray-800 text-white px-2 md:px-4 h-8 md:h-10 rounded text-xs md:text-sm 
        hover:bg-[#F97316] active:bg-[#F97316] touch-manipulation"
      >
        S'abonner
      </button>
    </div>

        </div>
      </div>

      {/* Main Footer */}
      <div className="w-full bg-[#1a1a1a] text-gray-400 py-12 px-4">
        <div className="max-w-[1140px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* A propos */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">A propos</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">Entreprise</a></li>
              <li><a href="#" className="hover:text-white">Localisation</a></li>
              <li><a href="#" className="hover:text-white">Contacts</a></li>
              <li><a href="#" className="hover:text-white">Horaires d'ouvertures</a></li>
            </ul>
          </div>

          {/* Liens utiles */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Liens utiles</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">Aide</a></li>
              <li><a href="#" className="hover:text-white">Politique de confidentialité</a></li>
              <li><a href="#" className="hover:text-white">Termes et Conditions</a></li>
              <li><a href="#" className="hover:text-white">FAQ</a></li>
            </ul>
          </div>

          {/* Service client */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Service client</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">Méthodes de paiement</a></li>
              <li><a href="#" className="hover:text-white">Remboursement</a></li>
              <li><a href="#" className="hover:text-white">Retour</a></li>
              <li><a href="#" className="hover:text-white">Expédition</a></li>
            </ul>
          </div>

          {/* Nous joindre */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Nous joindre</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">Twitter</a></li>
              <li><a href="#" className="hover:text-white">Facebook</a></li>
              <li><a href="#" className="hover:text-white">Instagram</a></li>
              <li><a href="#" className="hover:text-white">Linkedin</a></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="max-w-[1140px] mx-auto mt-12 pt-8 border-t border-gray-800 text-center bg-[#1e1e1e]">
          <p className="text-white">
            Cette plateforme est réalisée par{" "}
            <span className="text-white font-bold">PROMISING TEAM</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterNewsletter;