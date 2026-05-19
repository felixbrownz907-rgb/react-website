/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./Navbar";
import Hero from "./Hero";
import VideoSection from "./VideoSection";
import Courses from "./Courses";
import AcademicCalendar from "./AcademicCalendar";
import Campus from "./Campus";
import Library from "./Library";
import Testimonials from "./Testimonials";
import FAQ from "./FAQ";
import Partnerships from "./Partnerships";
import CTA from "./CTA";
import Footer from "./Footer";
import BackToTop from "./BackToTop";
import AIAssistant from "./AIAssistant";

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
