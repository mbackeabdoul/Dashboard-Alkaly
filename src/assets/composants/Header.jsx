import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [product, setProduct] = useState(null);

  // Utilisation de useEffect pour récupérer les données de l'API
  useEffect(() => {
    fetch('https://fakestoreapi.com/products/1') // URL de l'API
      .then((response) => response.json())
      .then((data) => {
        setProduct(data); // Met à jour l'état avec le produit récupéré
      })
      .catch((error) =>
        console.error('Erreur de récupération des données:', error)
      );
  }, []);

  // Vérifie si le produit est disponible
  if (!product) {
    return <div>Chargement...</div>; // Affiche un message de chargement si les données ne sont pas encore disponibles
  }

  return (
    <div className="w-full bg-[#F3F4F6] py-8">
      <div className="w-full max-w-[1140px] mx-auto px-4">
        <div className="bg-white rounded-lg shadow-sm p-6 sm:p-8">
          <div className="flex flex-col-reverse md:flex-row items-center md:justify-between">
            {/* Texte du produit */}
            <div className="w-full md:w-1/2 text-center md:text-left mt-6 md:mt-0">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#F97316] mb-4">
                {product.title}
              </h1>
              <p className="text-gray-700 mb-6 sm:mb-8">
                {product.description}
              </p>
              <Link
                to="/shop"
                className="inline-block px-6 py-3 bg-gray-800 text-white rounded hover:bg-[#F97316] transition-colors"
              >
                Achetez maintenant
              </Link>
            </div>

            {/* Image du produit */}
            <div className="w-full md:w-1/2 flex justify-center md:justify-end">
              <img
                src={product.image}
                alt={product.title}
                className="w-full max-w-sm sm:max-w-md h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
