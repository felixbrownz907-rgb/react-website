import { motion } from "motion/react";
import { Quote, Star, User } from "lucide-react";

const testimonials = [
  {
    name: "Faith Mwaba",
    role: "Full Stack Developer",
    content: "The curriculum at ITA is incredibly intense but worth every second. Within 6 months, I went from zero to land my dream role."
  },
  {
    name: "Kelvin Phiri",
    role: "Data Analyst",
    content: "What sets ITA apart is the direct industry links. We weren't just learning code; we were building products for real companies."
  },
  {
    name: "Namwiinga H.",
    role: "UI/UX Designer",
    content: "The mentors here are world-class. They don't just teach the 'how', they teach the 'why', which is critical in tech."
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-white overflow-hidden" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">Our Success Stories</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Don't just take our word for it. Hear from our graduates who are now 
            leading the tech industry across the globe.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {testimonials.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative p-10 rounded-[3rem] bg-gray-50/50 border border-gray-100 hover:bg-white hover:shadow-2xl hover:shadow-blue-500/5 transition-all"
            >
              <div className="absolute top-10 right-10 text-blue-100">
                <Quote className="w-12 h-12" />
              </div>
              
              <div className="flex gap-1 mb-6">
                {[1,2,3,4,5].map(star => (
                  <Star key={star} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              <p className="text-gray-700 italic mb-8 leading-relaxed relative z-10">
                "{item.content}"
              </p>

              <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600">
                  <User className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{item.name}</h4>
                  <p className="text-xs text-blue-600 font-semibold uppercase tracking-widest">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
