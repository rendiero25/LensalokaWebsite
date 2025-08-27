import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

import AirAsia from '../assets/images/airasia.webp';
import Ecovacs from '../assets/images/ecovacs.webp';
import FootLocker from '../assets/images/Foot_Locker.webp';
import Fore from '../assets/images/fore.webp';
import JktArtHouse from '../assets/images/jktarthouse.webp';
import Korres from '../assets/images/korres.webp';
import Lazada from '../assets/images/lazada.webp';
import LogoTineco from '../assets/images/tineco.webp';
import MieGacoan from '../assets/images/gacoan.webp';
import Nannys from '../assets/images/nannys.webp';
import PuteriIndonesia from '../assets/images/putri.webp';
import UkEmbassy from '../assets/images/uk.webp';

const clientLogos = [
  AirAsia, 
  Ecovacs, 
  FootLocker, 
  Fore, 
  JktArtHouse, 
  Korres, 
  Lazada, 
  LogoTineco, 
  MieGacoan, 
  Nannys, 
  PuteriIndonesia, 
  UkEmbassy
];

// Quadruple data untuk transisi lebih mulus
const quadrupleLogos = [...clientLogos, ...clientLogos, ...clientLogos, ...clientLogos];

const Clients = () => {
    return (
        <section id='clients' className="w-full bg-secondary py-8">
            <div className="">
                <Swiper
                    modules={[Autoplay]}
                    slidesPerView={2}
                    spaceBetween={30}
                    loop={true}
                    speed={8000}
                    allowTouchMove={false}
                    initialSlide={0}
                    simulateTouch={false}
                    loopedSlides={clientLogos.length}
                    watchSlidesProgress={true}
                    grabCursor={false}
                    autoplay={{
                        delay: 1,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: false,
                        reverseDirection: false
                    }}
                    style={{
                        '--swiper-wrapper-transition-timing-function': 'linear',
                    }}
                    className="!overflow-hidden"
                    breakpoints={{
                        320: { slidesPerView: 2, spaceBetween: 20 },
                        640: { slidesPerView: 3, spaceBetween: 30 },
                        768: { slidesPerView: 4, spaceBetween: 40 },
                        1024: { slidesPerView: 6, spaceBetween: 50 },
                    }}
                >
                    {quadrupleLogos.map((logo, idx) => (
                        <SwiperSlide 
                            key={idx} 
                            className="flex items-center justify-center"
                        >
                            <div 
                                className="w-20 sm:w-24 md:w-28 lg:w-32 xl:w-36 flex items-center justify-center cursor-pointer"
                                onClick={() => {
                                    document.getElementById('portfolio').scrollIntoView({ 
                                        behavior: 'smooth',
                                        block: 'start'
                                    });
                                }}
                            >
                                <img 
                                    src={logo} 
                                    alt={`Client ${(idx % clientLogos.length) + 1}`} 
                                    className="h-12 sm:h-14 md:h-16 lg:h-20 w-full object-contain grayscale hover:grayscale-0 transition duration-300" 
                                    draggable={false}
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}

export default Clients;