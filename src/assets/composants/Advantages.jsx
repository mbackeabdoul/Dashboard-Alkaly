import React from 'react';
import { FaDollarSign, FaShippingFast, FaRegCheckCircle } from 'react-icons/fa';

const Advantages = () => {
  return (
    <div className="w-full bg-[#F3F4F6] py-8">
      <div className="max-w-[1140px] mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm flex flex-col items-center text-center">
            <FaDollarSign className="w-12 h-12 md:w-16 md:h-16 text-[#F97316]" />
            <h3 className="mt-4 text-lg md:text-xl font-bold text-gray-900">Meilleurs prix</h3>
            <p className="mt-2 text-gray-600 text-sm md:text-base">
              Dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.
            </p>
          </div>
          
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm flex flex-col items-center text-center">
            <FaShippingFast className="w-12 h-12 md:w-16 md:h-16 text-[#F97316]" />
            <h3 className="mt-4 text-lg md:text-xl font-bold text-gray-900">Livraison rapide</h3>
            <p className="mt-2 text-gray-600 text-sm md:text-base">
              Dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.
            </p>
          </div>
          
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm flex flex-col items-center text-center">
            <FaRegCheckCircle className="w-12 h-12 md:w-16 md:h-16 text-[#F97316]" />
            <h3 className="mt-4 text-lg md:text-xl font-bold text-gray-900">Retours sans frais</h3>
            <p className="mt-2 text-gray-600 text-sm md:text-base">
              Dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Advantages;
