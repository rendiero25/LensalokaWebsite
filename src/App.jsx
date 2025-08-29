import Header from "./components/Header";
import Hero from "./components/Hero";
import Bgvideo from './assets/video/bgHero.mp4';
import Clients from "./components/Clients";
import Why from "./components/Why";
import Services from "./components/Services";
import InstantPrints from "./components/InstantPrints";
import WhatUGet from "./components/WhatUGet";
import Banner from "./components/Banner";
import Portfolio from "./components/Portfolio";
import Testimonial from "./components/Testimonial";
import Footer from './components/Footer';
import { FaWhatsapp } from "react-icons/fa";
import FadeInSection from "./components/FadeInSection";

// const FadeInSection = ({ children, delay = 0 }) => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ 
//         opacity: 1, 
//         y: 0,
//         transition: {
//           duration: 0.8,
//           delay: delay,
//           ease: "easeOut"
//         }
//       }}
//       viewport={{ once: true, margin: "-100px" }}
//     >
//       {children}
//     </motion.div>
//   );
// };

const App = () => {
  return (
    <div className="m-0 p-0 box-border">
      {/* WhatsApp Floating Button with Tooltip */}
      <div className="fixed bottom-8 right-8 group" style={{ zIndex: 999998 }}>
        <a
          href="https://wa.me/6285396144172?text=Halo%2C%20saya%20ingin%20bertanya%20mengenai%20layanan%20Lensaloka"
          target="_blank"
          rel="noopener noreferrer"
          className="block rounded-full bg-[#25D366] p-4 shadow-lg cursor-pointer animate-bounce"
          aria-label="Chat on WhatsApp"
        >
          <FaWhatsapp className="text-white text-3xl" />
        </a>
        {/* Tooltip */}
        <div className="absolute bottom-full right-0 mb-2 pointer-events-none">
          <div className="bg-white text-[#273F3A] px-4 py-2 rounded-lg shadow-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            Chat Via WhatsApp
            {/* Tooltip Arrow */}
            <div className="absolute bottom-0 right-6 transform translate-y-1/2 rotate-45 w-2 h-2 bg-white"></div>
          </div>
        </div>
      </div>

      <div className="w-full">
        {/* Section: Header + Hero with video background */}
        <section className="relative w-full min-h-screen overflow-hidden" style={{ zIndex: 1 }}>
          <div className="w-full h-full absolute">
            <video
            className="top-0 left-0 w-full h-full object-cover pointer-events-none"
            src={Bgvideo}
            autoPlay
            loop
            muted
            playsInline
            style={{ zIndex: 1 }}
          />
          </div>
          
          <div className="absolute top-0 left-0 w-full h-full bg-[#273F3A]/60 pointer-events-none" style={{ zIndex: 2 }} />
          
          <div className="relative w-full flex flex-col min-h-screen" style={{ zIndex: 3 }}>
            <Header />
            <Hero />
          </div>
        </section>
        
        {/* Section lain tanpa video background */}
        <div className="">
          <Clients />
          <FadeInSection delay={0.1}>
            <Why />
          </FadeInSection>
          <FadeInSection delay={0.1}>
            <Services />
          </FadeInSection>
          <FadeInSection delay={0.1}>
            <InstantPrints />
          </FadeInSection>
          <FadeInSection delay={0.1}>
            <WhatUGet />
          </FadeInSection>
          <FadeInSection delay={0.1}>
            <Banner />
          </FadeInSection>
          <FadeInSection delay={0.1}>
            <Portfolio />
          </FadeInSection>
          <FadeInSection delay={0.1}>
            <Testimonial />
          </FadeInSection>
          <Footer />
        </div>
      </div>
    </div>
    
  );
}

export default App;
