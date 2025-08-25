
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

import AirAsia from '../assets/images/AirAsia.svg';
import Ecovacs from '../assets/images/ecovacs.webp';
import FootLocker from '../assets/images/Foot_Locker.webp';
import Fore from '../assets/images/fore.png';
import JktArtHouse from '../assets/images/jktarthouse.jpg';
import Korres from '../assets/images/Korres_logo.png';
import Lazada from '../assets/images/lazada.png';
import LogoTineco from '../assets/images/logo-tineco-1.webp';
import MieGacoan from '../assets/images/miegacoan.png';
import Nannys from '../assets/images/nannys.png';
import PuteriIndonesia from '../assets/images/Puteri_Indonesia_Logo.png';
import UkEmbassy from '../assets/images/ukembassy.webp';

const clientLogos = [
  AirAsia, Ecovacs, FootLocker, Fore, JktArtHouse, Korres, Lazada, LogoTineco, MieGacoan, Nannys, PuteriIndonesia, UkEmbassy
];

const Clients = () => {
    return (
        <section className="w-full bg-[#EAC347] py-10">
            <div className="mx-auto px-4 py-8">
                <Swiper
                    modules={[Autoplay]}
                    slidesPerView={2}
                    spaceBetween={50}
                    loop={true}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    breakpoints={{
                        640: { slidesPerView: 3 },
                        768: { slidesPerView: 5 },
                        1024: { slidesPerView: 7 },
                    }}
                >
                    {clientLogos.map((logo, idx) => (
                        <SwiperSlide key={idx} className="flex items-center justify-center">
                            <img src={logo} alt={`Client ${idx + 1}`} className="h-14 md:h-20 object-contain grayscale hover:grayscale-0 transition duration-300" />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}

export default Clients;