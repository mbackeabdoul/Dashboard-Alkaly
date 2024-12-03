import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Soldes = () => {
  const [products, setProducts] = useState([]);

  // Effectuer la requête API pour récupérer les produits
  useEffect(() => {
    fetch('https://fakestoreapi.com/products') // URL de l'API
      .then(response => response.json())
      .then(data => {
        setProducts(data.slice(0, 5)); // Limiter à 5 produits seulement
      })
      .catch(error => console.error('Erreur de récupération des produits:', error));
  }, []);

  return (
    <div className="w-full bg-[#F3F4F6] py-8">
      <div className="max-w-screen-xl mx-auto px-4">
        {/* En-tête */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">EN SOLDES</h2>
          <Link
            to="/soldes"
            className="text-gray-800 underline hover:text-gray-600"
          >
            VOIR TOUT
          </Link>
        </div>

        {/* Grille des produits */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <img
                src={product.image} // L'URL de l'image venant de l'API
                alt={product.title} // Le titre du produit en tant qu'alt
                className="w-full h-30 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-medium text-gray-800 mb-2">
                {product.title} {/* Affichage du titre du produit */}
              </h3>
              <p className="text-[#F97316] font-semibold mb-4">
                {`francs ${product.price}`} {/* Affichage du prix du produit */}
              </p>
              <Link
                to={`/produit/${product.id}`} // Lien vers la page du produit
                className="block text-center bg-gray-800 text-white py-2 px-4 rounded hover:bg-[#F97316]  transition-colors"
              >
                Voir produit
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Soldes;
