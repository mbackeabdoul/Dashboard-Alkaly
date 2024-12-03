import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Collections = () => {
  const [produits, setProduits] = useState([]);

  // Fonction pour récupérer les produits
  const fetchProduits = async () => {
    try {
      const response = await axios.get('https://fakestoreapi.com/products');
      setProduits(response.data); // Stocke les données des produits dans l'état
    } catch (error) {
      console.error('Erreur lors de la récupération des produits :', error);
    }
  };

  // Appel de l'API au montage du composant
  useEffect(() => {
    fetchProduits();
  }, []);

  return (
    <div className="w-full bg-[#F3F4F6] py-8">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Collection Enfants */}
          {produits.length > 0 && (
            <div className="bg-white p-8 rounded-lg shadow-sm flex flex-row items-center">
              <div className="w-1/2 pr-4">
                <span className="text-[#F97316] text-lg font-medium">MODE ENFANTS</span>
                <h2 className="text-3xl font-bold mt-2 mb-4">
                  Offre limitée<br />
                  Jusqu'à 30%
                </h2>
                <Link 
                  to="/enfants" 
                  className="inline-block px-6 py-3 bg-gray-800 text-white rounded w-fit hover:bg-[#F97316]  transition-colors"
                >
                  Achetez maintenant
                </Link>
              </div>
              <div className="w-1/2">
                <img 
                  src={produits[0]?.image} // Image du premier produit
                  alt="Mode enfants" 
                  className="w-full h-auto object-cover rounded"
                />
              </div>
            </div>
          )}

          {/* Collection Homme */}
          {produits.length > 1 && (
            <div className="bg-white p-8 rounded-lg shadow-sm flex flex-row items-center">
              <div className="w-1/2 pr-4">
                <span className="text-[#F97316] text-lg font-medium">COLLECTIONS HOMME</span>
                <h2 className="text-3xl font-bold mt-2 mb-4">
                  Nouvelles Arrivées<br />
                  Jusqu'à 50%
                </h2>
                <Link 
                  to="/hommes" 
                  className="inline-block px-6 py-3 bg-gray-800 text-white rounded w-fit hover:bg-[#F97316]  transition-colors"
                >
                  Achetez maintenant
                </Link>
              </div>
              <div className="w-1/2">
                <img 
                  src={produits[1]?.image} // Image du deuxième produit
                  alt="Collection homme" 
                  className="w-full h-auto object-cover rounded"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Collections;
