import React from 'react';
import { Mail, Phone, MapPin, Download } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-20">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-50/50 to-transparent -z-10" />
      <div className="absolute bottom-20 left-10 text-9xl text-gray-100 font-bold opacity-50 -z-10 select-none">
        JAVA
      </div>

      <div className="container mx-auto px-6 flex flex-col-reverse md:flex-row items-center gap-12">
        <div className="flex-1 space-y-6">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 bg-blue-100 text-primary rounded-full font-semibold text-sm mb-4">
              求职意向：Java 后端 / 软件开发
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-dark leading-tight mb-2">
              你好，我是 <br/>
              <span className="text-primary">{PERSONAL_INFO.name}</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-600 font-medium">
              {PERSONAL_INFO.role}
            </h2>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-gray-600 max-w-lg leading-relaxed text-lg"
          >
            {PERSONAL_INFO.about}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 pt-4"
          >
             {/* Contact Info Chips */}
             <div className="flex flex-wrap gap-4">
                <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-center gap-2 text-dark hover:text-primary transition-colors bg-white px-4 py-3 rounded-lg shadow-sm border border-gray-100">
                  <Mail className="w-5 h-5" />
                  <span>{PERSONAL_INFO.email}</span>
                </a>
                <a href={`tel:${PERSONAL_INFO.phone}`} className="flex items-center gap-2 text-dark hover:text-primary transition-colors bg-white px-4 py-3 rounded-lg shadow-sm border border-gray-100">
                  <Phone className="w-5 h-5" />
                  <span>{PERSONAL_INFO.phone}</span>
                </a>
                <div className="flex items-center gap-2 text-gray-500 bg-transparent px-4 py-3">
                  <MapPin className="w-5 h-5" />
                  <span>{PERSONAL_INFO.location}</span>
                </div>
             </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="pt-8"
          >
            <button className="bg-primary text-white px-8 py-4 rounded-lg font-bold shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:-translate-y-1 transition-all flex items-center gap-2">
              <Download className="w-5 h-5" />
              下载简历 PDF
            </button>
          </motion.div>
        </div>

        {/* Visual / Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex-1 flex justify-center md:justify-end"
        >
          <div className="relative w-64 h-64 md:w-96 md:h-96">
            <div className="absolute inset-0 bg-primary rounded-[2rem] rotate-6 opacity-20"></div>
            <div className="absolute inset-0 bg-dark rounded-[2rem] -rotate-3 opacity-5"></div>
            <img 
              src="https://picsum.photos/400/400" 
              alt="Profile" 
              className="w-full h-full object-cover rounded-[2rem] shadow-2xl relative z-10 border-4 border-white"
            />
            {/* Floating Badges */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg z-20 flex items-center gap-3 animate-bounce" style={{ animationDuration: '3s' }}>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="font-bold text-dark text-sm">Open to Work</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;