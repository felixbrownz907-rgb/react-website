import { motion, AnimatePresence } from "motion/react";
import { Code, Database, Globe, Layers, Shield, Smartphone, Search, CheckCircle2, User, Mail, BookOpen, X, Loader2, Calendar } from "lucide-react";
import { useState, useMemo } from "react";
import React from "react";

const categories = ["All", "Web", "Data", "Security", "Networking", "Mobile", "Engineering"];

const courses = [
  {
    title: "Full Stack Web Development",
    category: "Web",
    desc: "Master modern frameworks like React, Node.js, and Cloud architectures.",
    icon: Globe,
    color: "bg-blue-500",
    students: "1,240 enrolled"
  },
  {
    title: "Data Science & AI",
    category: "Data",
    desc: "Deep dive into machine learning, python, and statistical modeling.",
    icon: Database,
    color: "bg-purple-500",
    students: "850 enrolled"
  },
  {
    title: "Cyber Security",
    category: "Security",
    desc: "Learn to protect digital assets and master ethical hacking techniques.",
    icon: Shield,
    color: "bg-red-500",
    students: "620 enrolled"
  },
  {
    title: "Cloud Engineering",
    category: "Engineering",
    desc: "Architect scalable solutions on AWS, Google Cloud, and Azure.",
    icon: Layers,
    color: "bg-indigo-500",
    students: "430 enrolled"
  },
  {
    title: "Mobile App Development",
    category: "Mobile",
    desc: "Build cross-platform applications with Flutter and React Native.",
    icon: Smartphone,
    color: "bg-green-500",
    students: "560 enrolled"
  },
  {
    title: "Software Engineering",
    category: "Engineering",
    desc: "Advanced logic, algorithms, and clean code principles.",
    icon: Code,
    color: "bg-orange-500",
    students: "980 enrolled"
  },
  {
    title: "Cisco Networking Expert",
    category: "Networking",
    desc: "Preparation for CCNA & CCNP certifications. Master enterprise networking foundations.",
    icon: Globe,
    color: "bg-cyan-600",
    students: "740 enrolled"
  }
];

export default function Courses() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCourse, setSelectedCourse] = useState<typeof courses[0] | null>(null);
  const [enrollStep, setEnrollStep] = useState<"idle" | "form" | "loading" | "success">("idle");

  const filteredCourses = useMemo(() => {
    return courses.filter(course => {
      const matchesCategory = activeCategory === "All" || course.category === activeCategory;
      const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           course.desc.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const handleEnroll = (e: React.FormEvent) => {
    e.preventDefault();
    setEnrollStep("loading");
    
    // Simulate API call
    setTimeout(() => {
      setEnrollStep("success");
    }, 2000);
  };

  return (
    <section className="py-24 bg-white" id="courses">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-[10px] font-black tracking-[0.2em] uppercase mb-8 border border-blue-100 shadow-sm">
            <Calendar className="w-3 h-3" />
            Next Induction: July 2026
          </div>
          <h2 className="text-3xl md:text-6xl font-black text-gray-900 mb-6 tracking-tighter leading-tight">Elite <span className="text-blue-600">Technical</span> Curriculums</h2>
          <p className="text-gray-500 text-lg font-light leading-relaxed">
            Our programs are designed by industry veterans to bridge the gap between 
            academic theory and global corporate reality. Join our July intake today.
          </p>
        </div>

        {/* Filters and Search */}
        <div className="flex flex-col md:flex-row gap-6 mb-12 items-center justify-between">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat 
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20" 
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full max-w-sm">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search courses..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-gray-50 border border-gray-200 rounded-full pl-11 pr-6 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
            />
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[400px]"
        >
          <AnimatePresence>
            {filteredCourses.map((course) => (
              <motion.div
                layout
                key={course.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ y: -5 }}
                className="group p-8 rounded-3xl bg-[#fafafa] border border-gray-100 hover:border-blue-100 hover:shadow-xl hover:shadow-blue-500/5 transition-all flex flex-col"
              >
                <div className={`${course.color} w-12 h-12 rounded-2xl flex items-center justify-center mb-8 text-white shadow-lg`}>
                  <course.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {course.title}
                </h3>
                <p className="text-gray-600 mb-8 leading-relaxed flex-grow">
                  {course.desc}
                </p>
                <div className="flex items-center justify-between pt-6 border-t border-gray-200/50">
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{course.students}</span>
                  <button 
                    onClick={() => {
                      setSelectedCourse(course);
                      setEnrollStep("form");
                    }}
                    className="text-blue-600 font-bold text-sm hover:underline"
                  >
                    Enroll Now
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {filteredCourses.length === 0 && (
            <div className="col-span-full flex flex-col items-center justify-center py-20 text-center">
              <div className="bg-gray-100 p-6 rounded-full mb-4">
                <Search className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">No courses found</h3>
              <p className="text-gray-500">Try adjusting your filters or search terms.</p>
            </div>
          )}
        </motion.div>
      </div>

      {/* Enrollment Modal */}
      <AnimatePresence>
        {selectedCourse && (
          <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => {
                if (enrollStep !== "loading") setSelectedCourse(null);
                setEnrollStep("idle");
              }}
              className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative bg-white rounded-[2.5rem] w-full max-w-lg overflow-hidden shadow-2xl shadow-blue-500/10"
            >
              <button 
                onClick={() => {
                  setSelectedCourse(null);
                  setEnrollStep("idle");
                }}
                className="absolute top-6 right-6 p-2 text-gray-400 hover:text-gray-900 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="p-8 md:p-12">
                {enrollStep === "form" && (
                  <div className="text-left">
                    <div className={`${selectedCourse.color} w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-8 shadow-xl shadow-blue-500/10`}>
                      <selectedCourse.icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">Join the Academy</h3>
                    <p className="text-gray-500 mb-8 font-medium">Enrolling in: <span className="text-blue-600"> {selectedCourse.title}</span></p>

                    <form onSubmit={handleEnroll} className="space-y-4">
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-gray-400 uppercase tracking-widest pl-1">Full Name</label>
                        <div className="relative">
                          <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                          <input 
                            required
                            disabled={enrollStep === "loading"}
                            type="text" 
                            placeholder="John Doe"
                            className="w-full bg-gray-50 border border-gray-100 rounded-2xl pl-12 pr-6 py-4 text-sm focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all font-medium disabled:opacity-50"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-gray-400 uppercase tracking-widest pl-1">Email Address</label>
                        <div className="relative">
                          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                          <input 
                            required
                            disabled={enrollStep === "loading"}
                            type="email" 
                            placeholder="john@example.com"
                            className="w-full bg-gray-50 border border-gray-100 rounded-2xl pl-12 pr-6 py-4 text-sm focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all font-medium disabled:opacity-50"
                          />
                        </div>
                      </div>
                      
                      <button 
                        type="submit"
                        disabled={enrollStep === "loading"}
                        className="w-full bg-blue-600 text-white py-4 rounded-2xl font-bold text-lg hover:bg-blue-700 transition-all mt-6 shadow-xl shadow-blue-600/20 active:scale-95 disabled:opacity-50 disabled:active:scale-100"
                      >
                        {enrollStep === "loading" ? "Processing..." : "Complete Enrollment"}
                      </button>
                    </form>
                    <p className="text-center text-xs text-gray-400 mt-6 font-medium">
                      By enrolling, you agree to ITA's terms and academic code of conduct.
                    </p>
                  </div>
                )}

                {enrollStep === "loading" && (
                  <div className="py-20 flex flex-col items-center justify-center text-center">
                    <div className="relative">
                      <div className="w-24 h-24 border-4 border-blue-100 border-t-blue-600 rounded-full animate-spin mb-8" />
                      <Loader2 className="w-10 h-10 text-blue-600 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Processing Enrollment</h3>
                    <p className="text-gray-500">Securing your spot and preparing materials...</p>
                  </div>
                )}

                {enrollStep === "success" && (
                  <div className="py-12 flex flex-col items-center text-center">
                    <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-8 shadow-xl shadow-green-500/10">
                      <CheckCircle2 className="w-12 h-12" />
                    </div>
                    <h3 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">You're In!</h3>
                    <p className="text-gray-600 text-lg mb-8 leading-relaxed max-w-xs">
                      Your enrollment for <span className="font-bold text-gray-900">{selectedCourse.title}</span> has been confirmed.
                    </p>
                    <div className="bg-blue-50 p-6 rounded-3xl w-full mb-8 border border-blue-100">
                      <div className="flex items-center gap-4 text-left">
                        <div className="bg-blue-600 text-white p-3 rounded-xl">
                          <BookOpen className="w-6 h-6" />
                        </div>
                        <div>
                          <p className="text-xs font-bold text-blue-400 uppercase tracking-widest">Next Step</p>
                          <p className="text-gray-900 font-bold">Check your email for portal access</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-3 w-full">
                      <button 
                        onClick={() => {
                          setSelectedCourse(null);
                          setEnrollStep("idle");
                          window.location.hash = "#labs";
                        }}
                        className="w-full py-4 bg-blue-600 text-white rounded-2xl font-bold hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/20 active:scale-95 flex items-center justify-center gap-2"
                      >
                        <Layers className="w-5 h-5" />
                        Enter High-Tech Lab
                      </button>
                      <button 
                        onClick={() => {
                          setSelectedCourse(null);
                          setEnrollStep("idle");
                        }}
                        className="w-full py-4 bg-gray-100 text-gray-600 rounded-2xl font-bold hover:bg-gray-200 transition-colors"
                      >
                        Return to Courses
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
