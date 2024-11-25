import React from 'react';
import { Settings, Facebook, Twitter, Mail } from 'lucide-react';
import reparation from '../../assets/images/reparation.jpg';


const MarketingSignup = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      {/* Header */}
      <header className="flex justify-between items-center mb-8">
        <div className="flex items-center">
          <div className="w-6 h-6 bg-orange-500 rounded-full mr-1"></div>
          <span className="text-xl font-bold">Marketing</span>
        </div>
        <div className="flex items-center gap-4">
          <button className="text-gray-300 hover:text-white">LOGIN</button>
          <Settings className="text-gray-300 hover:text-white cursor-pointer" />
        </div>
      </header>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto">
        {/* Left Side - Form */}
        <div className="md:w-1/2">
          <div className="bg-gray-800 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-6 text-center">Create Your Account</h2>
            
            {/* Social Buttons */}
            <div className="flex gap-2 justify-center mb-6">
              <button className="bg-blue-600 px-4 py-2 rounded flex items-center gap-2">
                <span size={18} />
                FACEBOOK
              </button>
              <button className="bg-blue-400 px-4 py-2 rounded flex items-center gap-2">
                <span size={18} />
                TWITTER
              </button>
              <button className="bg-red-500 px-4 py-2 rounded flex items-center gap-2">
                <span size={18} />
                GOOGLE
              </button>
            </div>

            <div className="text-center text-gray-400 text-sm mb-6">
              Or register with email
            </div>

            {/* Form */}
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full bg-gray-700 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full bg-gray-700 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full bg-gray-700 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <div className="text-right mt-1">
                  <a href="#" className="text-blue-400 text-sm">Forgot Password?</a>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" id="terms" className="rounded" />
                <label htmlFor="terms" className="text-sm">
                  I have read and accept the <a href="#" className="text-blue-400">Terms of Service</a>
                </label>
              </div>
              <button className="w-full bg-blue-500 py-2 rounded font-semibold hover:bg-blue-600 transition-colors">
                CONTINUE
              </button>
            </form>
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="md:w-1/2 flex flex-col justify-center">
          <h2 className="text-2xl font-semibold mb-4">Lorem ipsum dolor sit amet</h2>
          <p className="text-gray-400 mb-8">
            consectetur adipiscing elit. Suspendisse sed urna in justo eleifend condimentum.
          </p>
          <div className="relative">
            <img src={reparation}
              alt="Marketing illustration"
              className="rounded-lg object-cover"
            />
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-16 border-t border-gray-800 pt-8 pb-4">
        <div className="max-w-6xl mx-auto grid grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <div className="w-6 h-6 bg-orange-500 rounded-full mr-1"></div>
              <span className="font-bold">Marketing</span>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-3">COMPANY</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Demo option</li>
              <li>Cubilia aperia</li>
              <li>Nam posuere</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">SERVICES</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Vestibulum facibus</li>
              <li>Aliquam nec ve</li>
              <li>Cras auctor tristique</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">RESOURCES</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Suspendisse porttitor</li>
              <li>Nam secure</li>
              <li>Curabitur aperia</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400 text-sm">
          © Skype Theme 2020
        </div>
      </footer>
    </div>
  );
};

export default MarketingSignup;