import React from 'react';
import { PERSONAL_INFO } from '../constants';
import { Github, Mail, Phone, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-2">{PERSONAL_INFO.name}</h3>
            <p className="text-gray-400 text-sm">追求极致的用户体验与代码质量</p>
          </div>

          <div className="flex gap-6">
            <a href={`mailto:${PERSONAL_INFO.email}`} className="text-gray-400 hover:text-white transition-colors">
              <Mail className="w-6 h-6" />
            </a>
            <a href={`tel:${PERSONAL_INFO.phone}`} className="text-gray-400 hover:text-white transition-colors">
              <Phone className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Github className="w-6 h-6" />
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-500 flex items-center justify-center gap-2">
          <span>&copy; {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.</span>
          <span className="hidden md:inline">|</span>
          <span className="flex items-center gap-1">
            Built with <Heart className="w-3 h-3 text-red-500 fill-red-500" /> using React & Tailwind
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;