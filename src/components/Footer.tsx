import React from 'react';
import { Music, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-800 border-t border-dark-600">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 text-2xl font-bold mb-4">
              <Music className="h-6 w-6 text-primary-500" />
              <span className="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
                Harmonia
              </span>
            </div>
            <p className="text-gray-400 mb-6">
              Discover, stream, and share a constantly expanding mix of music from emerging and major artists around the world.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors duration-300">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors duration-300">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors duration-300">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors duration-300">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">About</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Press</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">News</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Help Center</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Artist Resources</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Developer API</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Community</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Cookie Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Copyright Info</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-dark-600 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Harmonia. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <select className="bg-dark-700 border border-dark-600 text-gray-400 text-sm rounded-lg px-3 py-1.5 focus:outline-none focus:ring-1 focus:ring-primary-500">
              <option value="en">English</option>
              <option value="es">Español</option>
              <option value="fr">Français</option>
              <option value="de">Deutsch</option>
            </select>
          </div>
        </div>
      </div>
    </footer>
  );
};