import { motion, AnimatePresence } from "motion/react";
import { Send, User, CheckCircle2, Loader2 } from "lucide-react";
import { useState } from "react";
import React from "react";

export default function CTA() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setStatus('success');
    
    // Reset after some time
    setTimeout(() => setStatus('idle'), 5000);
  };

  return (
    <section className="py-20 bg-white" id="enroll">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-gray-900 rounded-[3rem] p-12 md:p-20 overflow-hidden shadow-2xl">
          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-white mb-6 leading-[1.1]">
                Launch Your Global Career <span className="text-blue-500 underline decoration-blue-500/30 underline-offset-8">Today.</span>
              </h2>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed font-light">
                We officially opened on <span className="text-white font-bold">May 4th</span> and our second cohort begins in <span className="text-blue-400 font-bold tracking-widest uppercase">July</span>. 
                Don't miss your chance to join Zambia's premier digital elite.
              </p>
              <div className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/5 w-fit">
                <div className="flex -space-x-2">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-gray-900 bg-gray-800 flex items-center justify-center text-gray-500">
                      <User className="w-5 h-5" />
                    </div>
                  ))}
                </div>
                <span className="text-sm text-gray-400 font-medium">Joined by 10k+ graduates</span>
              </div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10">
              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="flex flex-col items-center justify-center py-12 text-center"
                  >
                    <CheckCircle2 className="w-16 h-16 text-green-400 mb-4" />
                    <h3 className="text-2xl font-bold text-white mb-2">Application Received!</h3>
                    <p className="text-gray-400">An advisor will contact you shortly.</p>
                  </motion.div>
                ) : (
                  <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
                      <input 
                        required
                        type="text" 
                        className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all font-mono text-sm"
                        placeholder="Enter your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                      <input 
                        required
                        type="email" 
                        className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all font-mono text-sm"
                        placeholder="name@email.com"
                      />
                    </div>
                    <button 
                      disabled={status === 'loading'}
                      className="w-full bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-blue-600/20"
                    >
                      {status === 'loading' ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Processing...
                        </>
                      ) : (
                        <>
                          Request Application Info
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </AnimatePresence>
            </div>
          </div>
          
          <div className="absolute top-0 right-0 w-[40%] h-full bg-blue-600/10 blur-[120px] rounded-full translate-x-1/2 -z-0" />
        </div>
      </div>
    </section>
  );
}
