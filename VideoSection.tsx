import { motion } from "motion/react";
import { Play, Volume2, ShieldCheck, Globe } from "lucide-react";
import { useState } from "react";
import VideoModal from "./VideoModal";

export default function VideoSection() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section className="py-24 bg-gray-900 text-white overflow-hidden" id="video-ad">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-8"
          >
            <div>
              <span className="text-blue-500 font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Official AI Presentation</span>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-tight mb-8">
                Experience the Future <br />
                <span className="text-blue-500">of Global Learning.</span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed max-w-lg mb-8 font-light">
                Launch our immersive AI-generated presentation to see how IT International Academy is redefining technical excellence. 
                Experience our virtual ecosystems and global mentorship standards in a cinematic digital walkthrough.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 mb-4">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-500/10 rounded-xl">
                  <ShieldCheck className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Global Content</h4>
                  <p className="text-xs text-gray-500">Exclusively focused on IT International Academy.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-500/10 rounded-xl">
                  <Globe className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Interactive</h4>
                  <p className="text-xs text-gray-500">A dynamic cinematic experience for future elites.</p>
                </div>
              </div>
            </div>

            <button 
              onClick={() => setIsVideoOpen(true)}
              className="w-fit bg-blue-600 text-white px-10 py-5 rounded-full font-bold flex items-center gap-4 hover:bg-blue-700 transition-all shadow-xl shadow-blue-900/20 group"
            >
              <Play className="w-5 h-5 fill-current" />
              Launch AI Presentation
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-video rounded-[2rem] overflow-hidden border border-gray-800 shadow-2xl group cursor-pointer"
                 onClick={() => setIsVideoOpen(true)}>
              <img 
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200" 
                alt="Ad Thumbnail"
                className="w-full h-full object-cover opacity-30 group-hover:opacity-50 transition-all duration-700"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                  <Play className="w-10 h-10 fill-current ml-1" />
                </div>
              </div>
              <div className="absolute bottom-8 left-8 right-8 p-6 bg-black/60 backdrop-blur-xl rounded-2xl border border-white/10 opacity-100 transition-all">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-[10px] font-bold text-blue-400 uppercase tracking-[0.3em] mb-1">Interactive System</p>
                    <p className="font-bold tracking-tight text-xl">Academy Presentation v2.0</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex -space-x-2">
                      {[1,2,3].map(i => (
                        <div key={i} className="w-6 h-6 rounded-full bg-blue-500 border-2 border-gray-900" />
                      ))}
                    </div>
                    <span className="text-[10px] text-gray-400 font-bold ml-2">LIVE</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Reflection Effect */}
            <div className="absolute -bottom-10 left-10 right-10 h-20 bg-blue-500/20 blur-3xl -z-10 rounded-full" />
          </motion.div>
        </div>
      </div>

      <VideoModal isOpen={isVideoOpen} onClose={() => setIsVideoOpen(false)} />
    </section>
  );
}
