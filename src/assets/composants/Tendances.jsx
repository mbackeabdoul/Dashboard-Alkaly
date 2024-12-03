import React, { useState, useEffect } from 'react';

const DernieresTendances = () => {
  const [product, setProduct] = useState(null);

  // Utilisation de useEffect pour récupérer les données de l'API
  useEffect(() => {
    fetch('https://fakestoreapi.com/products/1') // Remplace avec l'URL de l'API ou de ton produit spécifique
      .then(response => response.json())
      .then(data => {
        setProduct(data); // Met à jour l'état avec le produit récupéré
      })
      .catch(error => console.error('Erreur de récupération des données:', error));
  }, []);

  // Vérifie si le produit est disponible
  if (!product) {
    return <div>Chargement...</div>; // Affiche un message de chargement si les données ne sont pas encore disponibles
  }

  return (
    <div className="flex justify-center items-center p-4">
      <div className="flex w-[1140px]  shadow-lg flex-col sm:flex-row">
        {/* Section gauche - Image sur fond blanc */}
        <div className="w-full sm:w-1/2 bg-white p-6 flex items-center justify-center">
          <img
            src={product.image} // Utilisation de l'image dynamique récupérée de l'API
            alt={product.title} // Utilisation du titre dynamique récupéré de l'API
            className="max-h-[400px] object-contain"
          />
        </div>

        <div className="w-full sm:w-1/2 bg-[#eee8aa] p-8 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {product.title} {/* Utilisation du titre dynamique du produit */}
          </h2>
          <p className="text-gray-700 mb-6">
            {product.description} {/* Utilisation de la description dynamique */}
          </p>
          <button className="bg-gray-900 text-white px-6 py-2 w-fit hover:bg-[#F97316] transition-colors">
            Achetez maintenant
          </button>
        </div>
      </div>
    </div>
  );
};

export default DernieresTendances;
