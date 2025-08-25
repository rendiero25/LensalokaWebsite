import Header from "./components/Header";
import Hero from "./components/Hero";
import Bgvideo from './assets/video/bgHero.mp4';
import Clients from "./components/Clients";
import Why from "./components/Why";
import Services from "./components/Services";
import InstantPrints from "./components/InstantPrints";
import WhatUGet from "./components/WhatUGet";
import Banner from "./components/Banner";
// import Portfolio from "./components/Portfolio";
import Testimonial from "./components/Testimonial";
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="m-0 p-0 box-border">
      <div className="w-full">
        {/* Section: Header + Hero with video background */}
        <section className="relative w-full min-h-screen overflow-hidden">
          <div className="w-full h-full absolute">
            <video
            className="top-0 left-0 w-full h-full object-cover z-0 pointer-events-none"
            src={Bgvideo}
            autoPlay
            loop
            muted
            playsInline
          />
          </div>
          
          <div className="absolute top-0 left-0 w-full h-full bg-[#273F3A]/80 z-10 pointer-events-none" />
          
          <div className="relative z-20 w-full flex flex-col min-h-screen">
            <Header />
            <Hero />
          </div>
        </section>
        
        {/* Section lain tanpa video background */}
        <div className="">
          <Clients />
          <Why />
          <Services />
          <InstantPrints />
          <WhatUGet />
          <Banner />
          {/* <Portfolio /> */}
          <Testimonial />
          <Footer />
        </div>
      </div>
    </div>
    
  );
}

export default App;
