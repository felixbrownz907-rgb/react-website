import { Laptop, Phone, Mail, MapPin, Instagram, Twitter, Linkedin, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#fafafa] pt-20 pb-10 border-t border-gray-100" id="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Laptop className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black tracking-tighter text-gray-900 leading-none uppercase">IT International</span>
                <span className="text-[10px] font-bold text-blue-600 tracking-[0.2em] uppercase leading-tight">Academy</span>
              </div>
            </div>
            <p className="text-gray-500 leading-relaxed text-sm font-light">
              Zambia's premier 100% online institution for elite technical education. 
              Bridging the global digital divide from Lusaka to the world.
            </p>
            <div className="flex gap-4">
              {[Instagram, Twitter, Linkedin, Facebook].map((Icon, i) => (
                <a key={i} href="#" className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 hover:bg-blue-600 hover:text-white transition-all">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-6 uppercase tracking-wider text-xs underline decoration-blue-600/30 underline-offset-4">Resources</h4>
            <ul className="space-y-4 text-sm text-gray-600">
              <li><a href="#calendar" className="hover:text-blue-600">Academic Calendar</a></li>
              <li><a href="#faq" className="hover:text-blue-600">Student FAQ</a></li>
              <li><a href="#library-archive" className="hover:text-blue-600">Library Services</a></li>
              <li><a href="#hero" className="hover:text-blue-600">Admissions</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-6 uppercase tracking-wider text-xs underline decoration-blue-600/30 underline-offset-4">The Academy</h4>
            <ul className="space-y-4 text-sm text-gray-600">
              <li><a href="#campus" className="hover:text-blue-600">Virtual Campus</a></li>
              <li><a href="#courses" className="hover:text-blue-600">Our Programs</a></li>
              <li><a href="#testimonials" className="hover:text-blue-600">Graduates</a></li>
              <li><a href="#partnerships" className="hover:text-blue-600">Partnerships</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-6 uppercase tracking-wider text-xs">Contact Us</h4>
            <ul className="space-y-4 text-sm text-gray-600">
              <li className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-blue-600" />
                Lusaka, Zambia (Global Online Hub)
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-blue-600" />
                0779417675
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-blue-600" />
                itinternationalacademy46@gmail.com
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4 mt-8">
          <p className="text-gray-400 text-xs text-center md:text-left font-mono">
            © 2026 IT International Academy. Designed for the future.
          </p>
          <div className="flex gap-6 text-[10px] font-mono text-gray-400 uppercase tracking-widest">
            <a href="#" className="hover:text-gray-900">Privacy Policy</a>
            <a href="#" className="hover:text-gray-900">Terms of Service</a>
            <a href="#" className="hover:text-gray-900">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
