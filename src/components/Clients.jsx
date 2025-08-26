
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

const Clients = () => {
    return (
        <section id='clients' className="w-full bg-[#EAC347] py-10">
            <div className="mx-auto px-8 xl:px-5 py-15">
                <Swiper
                    modules={[Autoplay]}
                    slidesPerView={2}
                    spaceBetween={100}
                    loop={true}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        768: { slidesPerView: 3 },
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