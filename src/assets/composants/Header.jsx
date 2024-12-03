import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
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
    <div className="w-full bg-[#F3F4F6] py-8">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <div className="flex justify-between items-center">
            <div className="w-1/2">
              <h1 className="text-5xl font-bold text-[#F97316] mb-4">
                {product.title} {/* Utilisation du titre dynamique du produit */}
              </h1>
              <p className="text-gray-700 mb-8">
                {product.description} {/* Utilisation de la description dynamique du produit */}
              </p>
              <Link 
                to="/shop" 
                className="inline-block px-6 py-3 bg-gray-800 text-white rounded hover:bg-[#F97316] transition-colors"
              >
                Achetez maintenant
              </Link>
            </div>
            <div className="w-1/2 flex justify-end">
              <img 
                src={product.image}  // Utilisation de l'image dynamique récupérée de l'API
                alt={product.title}  // Utilisation du titre dynamique
                className="w-auto h-[400px] object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
