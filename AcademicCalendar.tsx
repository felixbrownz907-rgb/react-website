import { motion } from "motion/react";
import { Calendar, Clock, ChevronRight, Bell } from "lucide-react";

const CALENDAR_EVENTS = [
  {
    date: "May 4, 2026",
    title: "Official Academy Launch",
    description: "Inaugural classes commenced. History in the making for Zambian digital education.",
    type: "past",
    icon: Bell
  },
  {
    date: "May 15, 2026",
    title: "Orientation Week",
    description: "Onboarding for the first cohort of digital elites.",
    type: "past",
    icon: Clock
  },
  {
    date: "July 6, 2026",
    title: "Next Intake Opening",
    description: "Applications open for our mid-year technical programs. Limited seats available.",
    type: "important",
    icon: Calendar
  },
  {
    date: "August 10, 2026",
    title: "Second Cohort Induction",
    description: "Official start date for all newly enrolled students.",
    type: "future",
    icon: Bell
  }
];

export default function AcademicCalendar() {
  return (
    <section className="py-24 bg-gray-50 overflow-hidden" id="calendar">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-blue-600 font-bold tracking-[0.3em] uppercase text-xs mb-4 block"
          >
            Academic Schedule
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black tracking-tight text-gray-900 mb-6"
          >
            The Path to <span className="text-blue-600">Elite Proficiency.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 max-w-2xl mx-auto text-lg font-light leading-relaxed"
          >
            Stay informed with our critical academic dates. We are committed to a structured, 
            world-class learning pace that respects your time and career goals.
          </motion.p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gray-200 hidden md:block" />

          <div className="space-y-12">
            {CALENDAR_EVENTS.map((event, index) => {
              const Icon = event.icon;
              return (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex flex-col md:flex-row gap-8 items-center ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <div className="flex-1 w-full">
                    <div className={`p-8 rounded-3xl border transition-all duration-300 group hover:shadow-xl ${
                      event.type === 'important' 
                        ? "bg-blue-600 border-blue-600 text-white shadow-2xl shadow-blue-500/20" 
                        : "bg-white border-gray-100 text-gray-900"
                    }`}>
                      <div className="flex items-center justify-between mb-4">
                        <span className={`text-[10px] font-bold uppercase tracking-[0.2em] ${
                          event.type === 'important' ? "text-blue-200" : "text-blue-600"
                        }`}>
                          {event.date}
                        </span>
                        <Icon className={`w-5 h-5 ${
                          event.type === 'important' ? "text-white" : "text-gray-400"
                        }`} />
                      </div>
                      <h3 className="text-xl font-bold mb-3">{event.title}</h3>
                      <p className={`text-sm leading-relaxed mb-6 font-light ${
                        event.type === 'important' ? "text-blue-100" : "text-gray-500"
                      }`}>
                        {event.description}
                      </p>
                      <div className={`flex items-center gap-2 text-[10px] font-black uppercase tracking-widest ${
                        event.type === 'important' ? "text-white" : "text-blue-600"
                      }`}>
                        <span>Event Details</span>
                        <ChevronRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>

                  <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full bg-white border-4 border-gray-50 shadow-sm hidden md:flex">
                    <div className={`w-3 h-3 rounded-full ${
                      event.type === 'important' ? "bg-blue-600 animate-pulse" : "bg-gray-300"
                    }`} />
                  </div>

                  <div className="flex-1 hidden md:block" />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* July Enrollment CTA */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-20 bg-blue-900 rounded-[3rem] p-12 text-center text-white relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <Calendar className="w-64 h-64 rotate-12" />
          </div>
          <div className="relative z-10 max-w-2xl mx-auto">
            <h3 className="text-3xl font-black tracking-tighter mb-4">Ready for the July Class?</h3>
            <p className="text-blue-200 text-lg font-light mb-8 italic">
              Enrollment for our high-standard technical cohorts fills up quickly. Secure your place today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://itacademy.ac/apply" className="bg-white text-blue-900 px-10 py-4 rounded-full font-bold hover:bg-blue-50 transition-colors">
                Apply Now for July
              </a>
              <a href="#courses" className="border border-blue-700 text-white px-10 py-4 rounded-full font-bold hover:bg-white/5 transition-colors">
                Explore Programs
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
