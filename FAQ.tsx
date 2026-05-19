import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const faqs = [
  {
    q: "How long are the courses?",
    a: "Most of our professional diplomas range from 6 to 12 months, while specialized workshops can be completed in 2 to 4 weeks."
  },
  {
    q: "Do you offer financial aid?",
    a: "Yes, we have various scholarship programs and flexible installment plans for eligible students."
  },
  {
    q: "Is there job placement assistance?",
    a: "Absolutely. Our dedicated career support team works with over 200 corporate partners to help our graduates secure high-paying tech roles."
  },
  {
    q: "Can I study part-time?",
    a: "We offer full-time, part-time, and weekend sessions to accommodate working professionals."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-white" id="faq">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-500 italic font-serif">Everything you need to know about joining ITA</p>
        </div>

        <div className="space-y-4">
          {faqs.map((item, i) => (
            <div key={i} className="border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-bold text-gray-900">{item.q}</span>
                {openIndex === i ? <Minus className="w-5 h-5 text-blue-600" /> : <Plus className="w-5 h-5 text-gray-400" />}
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-gray-600 leading-relaxed text-sm bg-gray-50/50">
                      {item.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
