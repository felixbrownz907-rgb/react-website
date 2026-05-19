import { motion, AnimatePresence } from "motion/react";
import { X, ChevronRight, ChevronLeft, Volume2, Shield, Globe, Award } from "lucide-react";
import { useState, useEffect } from "react";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SCENES = [
  {
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200",
    title: "Welcome to IT International Academy",
    description: "Zambia's premier 100% online institution for world-class technical education.",
    icon: Globe
  },
  {
    image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=1200",
    title: "Elite Mentorship",
    description: "Learn from industry experts who have built systems at a global scale.",
    icon: Shield
  },
  {
    image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=1200",
    title: "Future-Proof Your Career",
    description: "Master Software Engineering, Cloud Computing, and Cybersecurity from anywhere in Zambia.",
    icon: Award
  }
];

export default function VideoModal({ isOpen, onClose }: VideoModalProps) {
  const [currentScene, setCurrentScene] = useState(0);

  useEffect(() => {
    if (isOpen) {
      const timer = setInterval(() => {
        setCurrentScene((prev) => (prev + 1) % SCENES.length);
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [isOpen]);

  const CurrentIcon = SCENES[currentScene].icon;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/95 backdrop-blur-xl"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-5xl aspect-video bg-black rounded-[2.5rem] overflow-hidden shadow-[0_0_100px_rgba(59,130,246,0.3)] border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Presentation Engine */}
            <div className="absolute inset-0">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentScene}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 1.5 }}
                  className="absolute inset-0"
                >
                  <img 
                    src={SCENES[currentScene].image} 
                    className="w-full h-full object-cover opacity-60"
                    alt="Presentation Scene"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Content Overlay */}
            <div className="absolute inset-0 p-12 flex flex-col justify-end">
              <div className="max-w-2xl">
                <motion.div 
                  key={`icon-${currentScene}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-8 shadow-2xl shadow-blue-600/40"
                >
                  <CurrentIcon className="w-8 h-8 text-white" />
                </motion.div>
                
                <motion.h2 
                  key={`title-${currentScene}`}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="text-5xl font-black tracking-tighter text-white mb-4 leading-tight"
                >
                  {SCENES[currentScene].title}
                </motion.h2>
                
                <motion.p 
                  key={`desc-${currentScene}`}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-xl text-gray-300 font-light leading-relaxed"
                >
                  {SCENES[currentScene].description}
                </motion.p>
              </div>

              {/* Progress Bar */}
              <div className="absolute bottom-0 left-0 right-0 p-12 flex items-center justify-between">
                <div className="flex gap-2">
                  {SCENES.map((_, i) => (
                    <div 
                      key={i}
                      className={`h-1.5 rounded-full transition-all duration-500 ${
                        i === currentScene ? "w-12 bg-blue-600" : "w-2 bg-white/20"
                      }`}
                    />
                  ))}
                </div>
                
                <div className="flex items-center gap-6">
                  <button 
                    onClick={() => setCurrentScene((prev) => (prev - 1 + SCENES.length) % SCENES.length)}
                    className="p-3 bg-white/5 hover:bg-white/10 rounded-full text-white transition-colors border border-white/10"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button 
                    onClick={() => setCurrentScene((prev) => (prev + 1) % SCENES.length)}
                    className="p-3 bg-white/5 hover:bg-white/10 rounded-full text-white transition-colors border border-white/10"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </div>

            {/* AI HUD Elements */}
            <div className="absolute top-8 left-8 flex items-center gap-3 px-4 py-2 bg-black/40 backdrop-blur-md rounded-full border border-white/10">
              <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              <span className="text-[10px] font-bold text-blue-400 uppercase tracking-[0.2em]">AI Generated Presentation</span>
            </div>

            <button 
              onClick={onClose}
              className="absolute top-8 right-8 z-10 bg-white/5 hover:bg-white/10 p-3 rounded-full text-white transition-colors border border-white/10 backdrop-blur-md"
            >
              <X className="w-6 h-6" />
            </button>
            
            <div className="absolute top-8 right-24 flex items-center gap-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest hidden md:flex">
              <Volume2 className="w-3 h-3" />
              <span>Audio Simulated</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
