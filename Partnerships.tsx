import { motion } from "motion/react";
import { Handshake, Building2, Users, ArrowRight, Mail, Phone } from "lucide-react";

const PARTNER_BENEFITS = [
  {
    icon: Building2,
    title: "Corporate Training",
    description: "Upskill your workforce with our bespoke technical curriculum designed for modern industry needs."
  },
  {
    icon: Users,
    title: "Talent Pipeline",
    description: "Get direct access to our top-tier graduates in Software Engineering, Cloud, and Cybersecurity."
  },
  {
    icon: Handshake,
    title: "Institutional Synergy",
    description: "Collaborate on research, local technical innovation, and digital transformation initiatives across Zambia."
  }
];

export default function Partnerships() {
  return (
    <section className="py-24 bg-white" id="partnerships">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-blue-600 font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Institutional Growth</span>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-[0.9] text-gray-900 mb-8">
              Empower Zambia's <br />
              <span className="text-blue-600 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">Digital Future.</span>
            </h2>
            <p className="text-gray-600 text-xl font-light leading-relaxed mb-12">
              We are actively seeking strategic partners to bridge the technical gap. 
              Whether you represent a corporation, a government body, or an NGO, 
              let's collaborate to build an elite technical infrastructure.
            </p>

            <div className="space-y-8">
              {PARTNER_BENEFITS.map((benefit, i) => {
                const Icon = benefit.icon;
                return (
                  <div key={i} className="flex gap-6 group">
                    <div className="flex-shrink-0 w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center border border-gray-100 group-hover:bg-blue-600 group-hover:text-white transition-all">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-1">{benefit.title}</h4>
                      <p className="text-gray-500 font-light">{benefit.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gray-900 rounded-[3rem] p-10 md:p-16 text-white relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="relative z-10">
              <h3 className="text-3xl font-black tracking-tight mb-4">Partner With Us</h3>
              <p className="text-gray-400 mb-10 font-light text-lg">
                Submit an inquiry and our institutional relations office will respond within 24 hours.
              </p>

              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2 ml-1">Organization Name</label>
                    <input 
                      type="text" 
                      placeholder="e.g. Copperbelt Tech"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all text-white placeholder:text-gray-600"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2 ml-1">Official Email</label>
                    <input 
                      type="email" 
                      placeholder="partnership@org.com"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all text-white placeholder:text-gray-600"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2 ml-1">Inquiry Type</label>
                  <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all text-white appearance-none cursor-pointer">
                    <option className="bg-gray-900">Corporate Training</option>
                    <option className="bg-gray-900">Hiring Talent</option>
                    <option className="bg-gray-900">CSR Partnerships</option>
                    <option className="bg-gray-900">Infrastructure Collaboration</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2 ml-1">Brief Description</label>
                  <textarea 
                    rows={4} 
                    placeholder="How can we work together?"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all text-white placeholder:text-gray-600 resize-none"
                  />
                </div>
                <button className="w-full bg-blue-600 py-5 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/20 active:scale-[0.98]">
                  Submit Partnership Inquiry
                  <ArrowRight className="w-5 h-5" />
                </button>
              </form>

              <div className="mt-12 pt-12 border-t border-white/10 flex flex-col md:flex-row gap-8 items-center text-sm font-medium text-gray-400">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-blue-500" />
                  partnerships@itacademy.ac
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-blue-500" />
                  +260 779 417 675
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
