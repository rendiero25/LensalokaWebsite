import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Barsena from '../assets/images/barsena.png';
import Yuka from '../assets/images/yuka.png';
import Dimas from '../assets/images/dimas.png';
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";
import BgLines from '../assets/images/bg-lines.png';

const imageListAirasia = Object.values(import.meta.glob('../assets/images/Portfolio/airasia/*.{jpg,jpeg,png,webp}', {eager: true})).map(mod => mod.default);
const imageListFootlocker = Object.values(import.meta.glob('../assets/images/Portfolio/footlocker/*.{jpg,jpeg,png,webp}', {eager: true})).map(mod => mod.default);
const imageListJktarthouse = Object.values(import.meta.glob('../assets/images/Portfolio/jktarthouse/*.{jpg,jpeg,png,webp}', {eager: true})).map(mod => mod.default);
const imageListKorres = Object.values(import.meta.glob('../assets/images/Portfolio/korres/*.{jpg,jpeg,png,webp}', {eager: true})).map(mod => mod.default);
const imageListLazada = Object.values(import.meta.glob('../assets/images/Portfolio/lazada/*.{jpg,jpeg,png,webp}', {eager: true})).map(mod => mod.default);
const imageListPutriindonesia = Object.values(import.meta.glob('../assets/images/Portfolio/putriindonesia/*.{jpg,jpeg,png,webp}', {eager: true})).map(mod => mod.default);
const imageListUkembassy = Object.values(import.meta.glob('../assets/images/Portfolio/ukembassy/*.{jpg,jpeg,png,webp}', {eager: true})).map(mod => mod.default);

const brands = [
    { name: 'AirAsia', images: imageListAirasia },
    { name: 'Foot Locker', images: imageListFootlocker },
    { name: 'JKT Art House', images: imageListJktarthouse },
    { name: 'Korres', images: imageListKorres },
    { name: 'Lazada', images: imageListLazada },
    { name: 'Putri Indonesia', images: imageListPutriindonesia },
    { name: 'UK Embassy', images: imageListUkembassy },
];

const influencers = [
    { name: 'Barsena', img: Barsena },
    { name: 'Yuka', img: Yuka },
    { name: 'Dimas', img: Dimas },
];

const Portfolio = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [activeBrand, setActiveBrand] = useState(null);

    const openModal = (brand) => {
        setActiveBrand(brand);
        setModalOpen(true);
    };
    const closeModal = () => {
        setModalOpen(false);
        setActiveBrand(null);
    };

    return (
        <section
            id='portfolio'
            className="w-full py-16 xl:py-40 px-4 bg-cover bg-center relative overflow-hidden"
        >
            {/* BgLines absolute di atas dan bawah section, berkelanjutan */}
            <img
                src={BgLines}
                alt="bg lines atas"
                className="absolute top-0 left-0 w-full object-cover pointer-events-none select-none"
                style={{
                    height: '50%',
                    zIndex: 1,
                    opacity: 0.7,
                }}
            />
            <img
                src={BgLines}
                alt="bg lines bawah"
                className="absolute bottom-0 left-0 w-full object-cover pointer-events-none select-none"
                style={{
                    height: '50%',
                    zIndex: 1,
                    opacity: 0.7,
                }}
            />
            <div className='flex justify-center items-center'>
                <div className="container mx-auto px-6 sm:px-12 justify-between items-center w-full">
                    <h2 className="font-primary text-3xl md:text-6xl font-normal text-center text-[#273F3A] mb-10">Portofolio Event</h2>
                    {/* Trusted by Brands Slider */}
                    <div className="mb-12">
                        <h3 className="font-primary font-normal text-2xl text-center text-[#273F3A] mb-6">Trusted by Brands</h3>

                        <div className="relative pb-16">
                            <Swiper
                                modules={[Navigation]}
                                slidesPerView={1}
                                spaceBetween={24}
                                autoplay={{ delay: 3000, disableOnInteraction: false }}
                                navigation={{
                                    nextEl: '.custom-swiper-next',
                                    prevEl: '.custom-swiper-prev',
                                }}
                                breakpoints={{
                                    640: { slidesPerView: 2 },
                                    1024: { slidesPerView: 3 },
                                }}
                                className="swiper-brands"
                            >
                                {brands.map((brand) => (
                                    <SwiperSlide key={brand.name} className="mb-20 flex flex-col items-center justify-center rounded-xl p-6">
                                        {/* Tampilkan gambar pertama sebagai thumbnail */}
                                        <div className=''>
                                            {brand.images[0] && (
                                                <img src={brand.images[0]} alt={brand.name} className="h-140 w-500 mb-4 object-cover rounded-lg" />
                                            )}
                                        </div>
                                        <div className="flex w-full justify-between items-center px-6">
                                            <div className="font-primary text-xl text-[#273F3A]">{brand.name}</div>
                                            <button
                                                className="font-secondary text-lg text-blue-500 cursor-pointer hover:text-[#EAC347]"
                                                onClick={() => openModal(brand)}
                                            >
                                                See more
                                            </button>
                                        </div>
                                    </SwiperSlide>
                                ))}
                                {/* Custom navigation buttons */}
                                <div className="custom-swiper-prev absolute left-1/2 -translate-x-[120%] bottom-2 z-50 cursor-pointer">
                                    <FaArrowCircleLeft size={44} color="#273F3A" />
                                </div>
                                <div className="custom-swiper-next absolute left-1/2 translate-x-[20%] bottom-2 z-50 cursor-pointer">
                                    <FaArrowCircleRight size={44} color="#273F3A" />
                                </div>
                            </Swiper>

                            {/* Custom CSS for navigation arrows below */}
                            <style>{`
                                .swiper-brands .swiper-button-next,
                                .swiper-brands .swiper-button-prev {
                                    top: auto !important;
                                    bottom: 0.5rem !important;
                                    transform: none !important;
                                    width: 44px;
                                    height: 44px;
                                }
                                .swiper-brands .swiper-button-next {
                                    right: 45%;
                                    left: auto;
                                }
                                .swiper-brands .swiper-button-prev {
                                    left: 45%;
                                    right: auto;
                                }
                                @media (max-width: 640px) {
                                    .swiper-brands .swiper-button-next {
                                        right: 35%;
                                    }
                                    .swiper-brands .swiper-button-prev {
                                        left: 35%;
                                    }
                                }
                            `}</style>
                        </div>
                    </div>

                    {/* Modal Gallery */}
                    {modalOpen && activeBrand && (
                        <div className="fixed inset-0 bg-primary/90 z-50 flex items-center justify-center">
                            <div className="relative w-full h-full flex items-center justify-center">
                                <button
                                    className="absolute top-4 cursor-pointer right-8 text-white text-3xl z-50"
                                    onClick={closeModal}
                                    aria-label="Close"
                                >
                                    &times;
                                </button>

                                <div className="w-full max-w-5xl h-[80vh] flex items-center justify-center relative">
                                    {/* Gallery Slider */}
                                    <Swiper
                                        modules={[Navigation]}
                                        navigation
                                        spaceBetween={16}
                                        slidesPerView={1}
                                        className="w-full h-full swiper-modal-gallery flex items-center justify-center"
                                    >
                                        {Array.isArray(activeBrand.images) && activeBrand.images.length > 0 ? (
                                            activeBrand.images.map((img, i) => (
                                                <SwiperSlide key={i} className="flex items-center justify-center h-full w-full">
                                                    <img src={img} alt={activeBrand.name + ' gallery'} className="max-h-[70vh] w-auto rounded-xl shadow-lg mx-auto" />
                                                </SwiperSlide>
                                            ))
                                        ) : (
                                            <SwiperSlide className="flex items-center justify-center h-full">
                                                <div className="text-white text-xl">Belum ada foto untuk {activeBrand.name}</div>
                                            </SwiperSlide>
                                        )}
                                    </Swiper>
                                    {/* Custom CSS for navigation arrows below */}
                                    <style>{`
                                        .swiper-modal-gallery .swiper-button-next,
                                        .swiper-modal-gallery .swiper-button-prev {
                                            top: auto !important;
                                            bottom: 0.5rem !important;
                                            transform: none !important;
                                            width: 44px;
                                            height: 44px;
                                        }
                                        .swiper-modal-gallery .swiper-button-next {
                                            right: 45%;
                                            left: auto;
                                        }
                                        .swiper-modal-gallery .swiper-button-prev {
                                            left: 45%;
                                            right: auto;
                                        }
                                        @media (max-width: 640px) {
                                            .swiper-modal-gallery .swiper-button-next {
                                                right: 35%;
                                            }
                                            .swiper-modal-gallery .swiper-button-prev {
                                                left: 35%;
                                            }
                                        }
                                    `}</style>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Moments with Influencers */}
                    <div className="mt-25">
                        <h3 className="font-primary text-2xl font-normal text-[#273F3A] mb-6 text-center">Moments with Influencers</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {influencers.map((item, idx) => (
                                <div key={idx} className="flex flex-col items-center rounded-xl p-6 z-10">
                                    <img src={item.img} alt={item.name} className="h-140 w-400 mb-4 object-cover rounded-lg" />
                                    <div className="font-primary text-lg text-[#273F3A]">{item.name}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Portfolio;
    