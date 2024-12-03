import React from 'react';
import { FaDollarSign, FaShippingFast, FaRegCheckCircle } from 'react-icons/fa';

const Advantages = () => {
  return (
    <div className="w-full bg-[#F3F4F6] py-8">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Premier avantage */}
          <div className="bg-white p-8 rounded-lg shadow-sm flex flex-col items-center text-center">
            <FaDollarSign className="w-16 h-16 text-[#F97316]" />
            <h3 className="mt-4 text-xl font-bold text-gray-900">Meilleurs prix</h3>
            <p className="mt-2 text-gray-600">
              Dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.
            </p>
          </div>
          
          {/* Deuxième avantage */}
          <div className="bg-white p-8 rounded-lg shadow-sm flex flex-col items-center text-center">
            <FaShippingFast className="w-16 h-16 text-[#F97316]" />
            <h3 className="mt-4 text-xl font-bold text-gray-900">Livraison rapide</h3>
            <p className="mt-2 text-gray-600">
              Dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.
            </p>
          </div>
          
          {/* Troisième avantage */}
          <div className="bg-white p-8 rounded-lg shadow-sm flex flex-col items-center text-center">
            <FaRegCheckCircle className="w-16 h-16 text-[#F97316]" />
            <h3 className="mt-4 text-xl font-bold text-gray-900">Retours sans frais</h3>
            <p className="mt-2 text-gray-600">
              Dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Advantages;
