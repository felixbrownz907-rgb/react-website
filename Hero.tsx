import { motion } from "motion/react";
import { ArrowRight, BookOpen, GraduationCap, Users, Play, User } from "lucide-react";
import { useState } from "react";
import VideoModal from "./VideoModal";

export default function Hero() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-[#fafafa]" id="hero">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex gap-3 mb-8">
              <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-[10px] font-bold tracking-[0.2em] uppercase border border-blue-100 shadow-sm">
                Global Tech Leadership
              </span>
              <span className="inline-block px-4 py-1.5 rounded-full bg-green-50 text-green-700 text-[10px] font-bold tracking-[0.2em] uppercase border border-green-100 shadow-sm animate-pulse">
                Next Intake: July 2026
              </span>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold text-gray-900 tracking-[-0.04em] leading-[0.95] mb-10">
              Future <br />
              <span className="text-blue-600 italic font-serif">Starts</span> Here.
            </h1>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed max-w-xl font-light">
              We officially opened our doors on <span className="font-bold text-gray-900">May 4th, 2026.</span> Zambia's premier online IT Academy is now building the next generation of global elites from our hub in Lusaka.
            </p>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gray-900 text-white px-8 py-4 rounded-full font-medium flex items-center gap-2 hover:bg-gray-800 transition-all group shadow-lg shadow-gray-200"
              >
                Explore Courses
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => setIsVideoOpen(true)}
                className="bg-white border border-gray-200 text-gray-700 px-8 py-4 rounded-full font-medium hover:bg-gray-50 transition-all flex items-center gap-3 group"
              >
                <div className="bg-blue-600 p-1.5 rounded-full text-white group-hover:scale-110 transition-transform">
                  <Play className="w-4 h-4 fill-current" />
                </div>
                Watch Intro
              </button>
            </div>

            <div className="mt-16 flex flex-wrap gap-8 items-center">
              <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mr-4">Our graduates work at:</div>
              <div className="flex gap-8 items-center grayscale opacity-50">
                <span className="font-display font-bold text-lg">TechHub</span>
                <span className="font-display font-bold text-lg">Innovate</span>
                <span className="font-display font-bold text-lg">Z-Networks</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white group/video">
              <img 
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1200" 
                alt="Academy Digital Learning"
                className="w-full h-[600px] object-cover transition-transform duration-700 group-hover/video:scale-110"
              />
              <div className="absolute inset-0 bg-blue-900/60 opacity-0 group-hover/video:opacity-100 transition-opacity flex items-center justify-center p-12 text-center">
                <div>
                  <p className="text-blue-400 font-black text-xs tracking-[0.3em] uppercase mb-4">Official Presentation</p>
                  <p className="text-white font-bold text-3xl tracking-tighter leading-tight">Virtual Campus Experience</p>
                  <p className="text-gray-300 text-sm mt-4 font-light max-w-xs mx-auto">Explore the global infrastructure of IT International Academy via our AI-guided presentation.</p>
                </div>
              </div>
              
              <button 
                onClick={() => setIsVideoOpen(true)}
                className="absolute inset-0 m-auto w-32 h-32 bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/30 hover:scale-110 transition-transform group"
              >
                <div className="relative">
                  {/* Pulse Effect */}
                  <div className="absolute inset-0 rounded-full bg-blue-500 animate-ping opacity-25" />
                  <div className="relative w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-2xl group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <Play className="w-10 h-10 fill-current ml-1" />
                  </div>
                </div>
              </button>
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 z-20 bg-white p-6 rounded-3xl shadow-xl border border-gray-100 max-w-[240px]">
              <div className="flex gap-2 mb-3">
                {[1,2,3].map(i => (
                  <div key={i} className="w-8 h-8 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600">
                    <User className="w-4 h-4" />
                  </div>
                ))}
              </div>
              <p className="text-sm font-bold text-gray-900">10,000+ Grads</p>
              <p className="text-xs text-gray-500">Working at top tech firms globally.</p>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative background elements */}
      <div className="absolute top-20 right-[-10%] w-[600px] h-[600px] bg-blue-100/30 rounded-full blur-3xl -z-0" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-indigo-100/40 rounded-full blur-3xl -z-0" />

      <VideoModal isOpen={isVideoOpen} onClose={() => setIsVideoOpen(false)} />
    </section>
  );
}

