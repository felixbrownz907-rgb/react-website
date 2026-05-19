import { motion } from "motion/react";
import { MapPin, Building2, Coffee, Library } from "lucide-react";

const facilities = [
  {
    title: "High-Tech Lab",
    desc: "Remote access to elite hardware simulations and server-side project workstations.",
    icon: Building2,
    img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Digital Library",
    desc: "A massive, categorized repository of global technical intelligence and research journals.",
    icon: Library,
    img: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Global Synergy Hub",
    desc: "Connect with peers and mentors across timezones in our high-bandwidth collaboration zones.",
    icon: Coffee,
    img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"
  }
];

export default function Campus() {
  return (
    <section className="py-24 bg-[#fafafa]" id="campus">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="text-blue-600 text-xs font-bold tracking-widest uppercase mb-4 block">100% Online Excellence</span>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              Elite <span className="text-blue-600">Virtual Campus</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Experience global tech standards from anywhere. Our virtual campus 
              replaces traditional classrooms with high-performance digital environments 
              and elite level mentorship.
            </p>
          </div>
          <div className="flex gap-4">
            <div className="bg-white px-6 py-4 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-3">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <div className="text-sm font-medium">Headquarters: Lusaka, Zambia | Online Global Reach</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {facilities.map((item, i) => (
            <motion.a
              key={i}
              href={item.title === "Digital Library" ? "#library" : undefined}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative h-[400px] rounded-[2rem] overflow-hidden shadow-xl"
            >
              <img 
                src={item.img} 
                alt={item.title} 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              <div className="absolute bottom-0 left-0 p-8 text-white">
                <div className="bg-blue-600 w-10 h-10 rounded-xl flex items-center justify-center mb-4">
                  <item.icon className="w-5 h-5" />
                </div>
                <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.desc}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
