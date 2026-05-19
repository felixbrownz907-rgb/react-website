import { motion } from "motion/react";
import { Laptop, Menu, X, Phone, Mail } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100" id="navbar">
      {/* Top Bar */}
      <div className="bg-gray-900 py-2.5 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center text-[11px] font-bold uppercase tracking-[0.15em]">
          <div className="flex items-center gap-6">
            <a href="tel:0779417675" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
              <Phone className="w-3 h-3" />
              0779417675
            </a>
            <a href="mailto:itinternationalacademy46@gmail.com" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
              <Mail className="w-3 h-3" />
              itinternationalacademy46@gmail.com
            </a>
          </div>
          <div className="hidden md:block text-gray-400">
            Zambia's Premier 100% Online Academy
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center gap-2">
            <div className="bg-blue-600 p-2 rounded-lg">
              <Laptop className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-tighter text-gray-900 leading-none">IT INTERNATIONAL</span>
              <span className="text-[10px] font-bold text-blue-600 tracking-[0.2em] uppercase leading-tight">Academy</span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
            <a href="#calendar" className="hover:text-blue-600 transition-colors">Calendar</a>
            <a href="#courses" className="hover:text-blue-600 transition-colors">Courses</a>
            <a href="#partnerships" className="hover:text-blue-600 transition-colors">Partners</a>
            <a href="#campus" className="hover:text-blue-600 transition-colors">Virtual Campus</a>
            <a href="#labs" className="hover:text-blue-600 transition-colors tracking-tight font-bold text-blue-600/80">High-Tech Lab</a>
            <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
            <button 
              onClick={() => document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition-all shadow-sm active:scale-95"
            >
              Enroll Now
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 p-2">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-b border-gray-100 flex flex-col p-4 gap-4"
        >
          <a href="#calendar" onClick={() => setIsOpen(false)} className="text-gray-600 font-medium">Calendar</a>
          <a href="#courses" onClick={() => setIsOpen(false)} className="text-gray-600 font-medium">Courses</a>
          <a href="#partnerships" onClick={() => setIsOpen(false)} className="text-gray-600 font-medium">Partners</a>
          <a href="#campus" onClick={() => setIsOpen(false)} className="text-gray-600 font-medium">Virtual Campus</a>
          <a href="#labs" onClick={() => setIsOpen(false)} className="text-blue-600 font-bold">High-Tech Lab</a>
          <a href="#about" onClick={() => setIsOpen(false)} className="text-gray-600 font-medium">About</a>
          <button 
            onClick={() => {
              setIsOpen(false);
              document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-blue-600 text-white px-5 py-2 rounded-xl text-center active:scale-95 transition-transform"
          >
            Enroll Now
          </button>
        </motion.div>
      )}
    </nav>
  );
}
