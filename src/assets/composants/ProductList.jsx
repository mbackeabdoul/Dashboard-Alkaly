import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    title: '',
    description: '' 
  });

  const urlApi = 'https://fakestoreapi.com';
  const url2 = `${urlApi}/products`;

  useEffect(() => {
    axios.get(url2)
      .then((response) => {
        setProducts(response.data);
      })
    
  }, []);

  // Gérer changements wu formulaire
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({
      ...newProduct,
      [name]: value
    });
  };

   // Gérer  (POST) bi

  const handleSubmit = (e) => {
    e.preventDefault();
    
    axios.post(url2, newProduct)
      .then((response) => {
        console.log("Produits ajouter: ", response.data);
        setProducts([...products, response.data]);
        setNewProduct({
          title: '',
          description: '' 
        });
      })
    
  };

  return (
    <div className="p-5">
      <form onSubmit={handleSubmit} className="mb-5">
        <div className='flex gap-5 items-center justify-center'>
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">Titre</label>
            <input
              type="text"
              id="title"
              name="title"
              value={newProduct.title}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded"
              placeholder="Titre du produit"
            />
          </div>
          
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
            <input
              type="text"
              id="description"
              name="description"
              value={newProduct.description}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded"
              placeholder="Description du produit"
            />
          </div>
        </div>
        <div className='text-center'>
          <button type="submit" className="mt-4 p-2 bg-blue-500 text-white rounded">Ajouter produit</button>
        </div>
      </form>

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <li key={product.id} className="bg-white p-4 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-center">Titre : {product.title}</h2> 
            <p className="text-sm text-gray-600 mt-2 text-center">Catégorie : {product.category}</p> 
            <p className="text-lg font-bold text-black mt-1 text-center">{product.price}</p> 
            <p className="text-sm text-gray-700 mt-2 text-center">Description : {product.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
