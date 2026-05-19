/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import VideoSection from "./components/VideoSection";
import Courses from "./components/Courses";
import AcademicCalendar from "./components/AcademicCalendar";
import Campus from "./components/Campus";
import Library from "./components/Library";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Partnerships from "./components/Partnerships";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import AIAssistant from "./components/AIAssistant";

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-blue-100 selection:text-blue-900 scroll-smooth">
      <Navbar />
      <main>
        <Hero />
        <VideoSection />
        <Courses />
        <AcademicCalendar />
        <Campus />
        <Library />
        <Testimonials />
        <FAQ />
        <Partnerships />
        <CTA />
      </main>
      <Footer />
      <BackToTop />
      <AIAssistant />
    </div>
  );
}
