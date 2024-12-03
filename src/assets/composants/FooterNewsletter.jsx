import React from 'react';

const FooterNewsletter = () => {
  return (
    <footer className="w-full">
      {/* Newsletter Section */}
      <div className="w-full bg-gray-100 py-12 px-4">
        <div className="max-w-[1140px] mx-auto text-center">
          <h2 className="text-2xl font-bold mb-3 text-gray">Wanterma ?</h2>
          <p className="text-gray-600 mb-6">
            Abonnez-vous à notre newsletter pour recevoir des mises à jour sur nos dernières offres!
          </p>
          <div className="flex max-w-lg mx-auto gap-2">
            <input
              type="email"
              placeholder="Email Address"
              className="flex-1 p-2 border border-gray-300 rounded"
            />
            <button className="bg-gray-800 text-white px-6 py-2 rounded hover:bg-[#F97316]">
              S'abonner
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="w-full bg-[#1a1a1a] text-gray-400 py-12 px-4">
        <div className="max-w-[1140px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
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
        <div className="max-w-[1140px] mx-auto mt-12 pt-8 border-t border-gray-800 text-center">
          <p>Cette plateforme est réalisée par <span className="text-white">PROMISING TEAM</span></p>
        </div>
      </div>
    </footer>
  );
};

export default FooterNewsletter;