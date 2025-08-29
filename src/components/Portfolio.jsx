import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";
// import BgLines from '../assets/images/bg-lines.png';

const imageListAirasia = Object.values(import.meta.glob('../assets/images/Portfolio/airasia/*.{jpg,jpeg,png,webp}', {eager: true})).map(mod => mod.default);
const imageListFootlocker = Object.values(import.meta.glob('../assets/images/Portfolio/footlocker/*.{jpg,jpeg,png,webp}', {eager: true})).map(mod => mod.default);
const imageListJktarthouse = Object.values(import.meta.glob('../assets/images/Portfolio/jktarthouse/*.{jpg,jpeg,png,webp}', {eager: true})).map(mod => mod.default);
const imageListKorres = Object.values(import.meta.glob('../assets/images/Portfolio/korres/*.{jpg,jpeg,png,webp}', {eager: true})).map(mod => mod.default);
const imageListLazada = Object.values(import.meta.glob('../assets/images/Portfolio/lazada/*.{jpg,jpeg,png,webp}', {eager: true})).map(mod => mod.default);
const imageListPutriindonesia = Object.values(import.meta.glob('../assets/images/Portfolio/putriindonesia/*.{jpg,jpeg,png,webp}', {eager: true})).map(mod => mod.default);
const imageListUkembassy = Object.values(import.meta.glob('../assets/images/Portfolio/ukembassy/*.{jpg,jpeg,png,webp}', {eager: true})).map(mod => mod.default);
const imageListTineco = Object.values(import.meta.glob('../assets/images/Portfolio/tineco/*.{jpg,jpeg,png,webp}', {eager: true})).map(mod => mod.default);
const imageListEcovacs = Object.values(import.meta.glob('../assets/images/Portfolio/ecovacs/*.{jpg,jpeg,png,webp}', {eager: true})).map(mod => mod.default);

const imageListBarsena = Object.values(import.meta.glob('../assets/images/Portfolio/barsena/*.{jpg,jpeg,png,webp}', {eager: true})).map(mod => mod.default);
const imageListDimas = Object.values(import.meta.glob('../assets/images/Portfolio/dimas/*.{jpg,jpeg,png,webp}', {eager: true})).map(mod => mod.default);
const imageListYuka = Object.values(import.meta.glob('../assets/images/Portfolio/yukadanaya/*.{jpg,jpeg,png,webp}', {eager: true})).map(mod => mod.default);

const brands = [
    { name: 'AirAsia', images: imageListAirasia },
    { name: 'Foot Locker', images: imageListFootlocker },
    { name: 'Tineco', images: imageListTineco },
    { name: 'Ecovacs', images: imageListEcovacs },
    { name: 'JKT Art House', images: imageListJktarthouse },
    { name: 'Korres', images: imageListKorres },
    { name: 'Lazada', images: imageListLazada },
    { name: 'Putri Indonesia', images: imageListPutriindonesia },
    { name: 'UK Embassy', images: imageListUkembassy }
];

const influencers = [
    { name: 'Barsena', img: imageListBarsena[0], images: imageListBarsena },
    { name: 'Yuka', img: imageListYuka[0], images: imageListYuka },
    { name: 'Dimas', img: imageListDimas[0], images: imageListDimas },
];

const Portfolio = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [activeBrand, setActiveBrand] = useState(null);

    // Block scroll when modal is open
    useEffect(() => {
        if (modalOpen) {
            document.body.style.overflow = 'hidden';
            
            // Add CSS to hide testimonials behind modal
            const style = document.createElement('style');
            style.id = 'modal-testimonial-override';
            style.textContent = `
                #testimonial {
                    z-index: -1 !important;
                    position: relative !important;
                }
                #testimonial .swiper-slide {
                    z-index: -1 !important;
                }
                #testimonial .swiper-wrapper {
                    z-index: -1 !important;
                }
                #testimonial .swiper {
                    z-index: -1 !important;
                }
            `;
            document.head.appendChild(style);
        } else {
            document.body.style.overflow = 'unset';
            
            // Remove testimonial override styles
            const existingStyle = document.getElementById('modal-testimonial-override');
            if (existingStyle) {
                existingStyle.remove();
            }
        }

        // Cleanup on unmount
        return () => {
            document.body.style.overflow = 'unset';
            const existingStyle = document.getElementById('modal-testimonial-override');
            if (existingStyle) {
                existingStyle.remove();
            }
        };
    }, [modalOpen]);

    const openModal = (brand) => {
        setActiveBrand(brand);
        setModalOpen(true);
    };
    
    const closeModal = () => {
        setModalOpen(false);
        setActiveBrand(null);
    };

    // Handle click anywhere in modal to close
    const handleModalClick = () => {
        closeModal();
    };

    return (
        <section
            id='portfolio'
            className="w-full py-16 xl:py-10 px-4 bg-cover bg-center relative overflow-hidden"
        >
            {/* BgLines absolute di atas dan bawah section, berkelanjutan */}
            {/* <img
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
            /> */}
            <div className='flex justify-center items-center'>
                <div className="container mx-auto px-6 sm:px-12 justify-between items-center w-full">
                    <h2 className="font-primary text-3xl md:text-5xl font-normal text-center text-[#273F3A] mb-5 xl:mb-10">Portofolio Event</h2>
                    {/* Trusted by Brands Slider */}
                    <div className="mb-2">
                        <h3 className="font-primary font-normal text-2xl text-center text-[#273F3A] xl:mb-6">Trusted by Brands</h3>

                        <div className="relative pb-2">
                            <Swiper
                                modules={[Navigation]}
                                slidesPerView={1}
                                spaceBetween={24}
                                navigation={{
                                    nextEl: '.custom-swiper-next',
                                    prevEl: '.custom-swiper-prev',
                                }}
                                breakpoints={{
                                    640: { slidesPerView: 2 },
                                    1024: { slidesPerView: 3 },
                                }}
                                className="swiper-brands !pb-0"
                            >
                                {brands.map((brand) => (
                                    <SwiperSlide key={brand.name} className="flex flex-col items-center justify-center rounded-xl p-6 -mb-1 xl:mb-10">
                                        {/* Tampilkan gambar pertama sebagai thumbnail */}
                                        <div className=''>
                                            {brand.images[0] && (
                                                <img src={brand.images[0]} alt={brand.name} className="h-100 xl:h-140 w-500 mb-8 object-cover rounded-lg" />
                                            )}
                                        </div>
                                        <div className="flex w-full justify-between items-center p-0 xl:px-2">
                                            <div className="font-primary font-bold text-2xl bg-secondary py-2 px-4 rounded-full text-[#273F3A]">{brand.name}</div>
                                            
                                            <button
                                                className="font-secondary text-lg xl:text-xl text-primary font-bold cursor-pointer hover:text-[#EAC347]"
                                                onClick={() => openModal(brand)}
                                            >
                                                See more
                                            </button>
                                        </div>
                                    </SwiperSlide>
                                ))}

                            </Swiper>
                            
                            {/* Navigation arrows outside of Swiper */}
                            <div className="flex justify-center items-center gap-8 mt-4">
                                <div className="custom-swiper-prev cursor-pointer hover:opacity-80 transition-opacity">
                                    <FaArrowCircleLeft size={44} color="#273F3A" />
                                </div>
                                <div className="custom-swiper-next cursor-pointer hover:opacity-80 transition-opacity">
                                    <FaArrowCircleRight size={44} color="#273F3A" />
                                </div>
                            </div>

                            <style>{`
                                .swiper-brands {
                                    margin-bottom: 0 !important;
                                }
                                .custom-swiper-prev,
                                .custom-swiper-next {
                                    display: inline-flex;
                                    align-items: center;
                                    justify-content: center;
                                    cursor: pointer;
                                    transition: opacity 0.3s ease;
                                }
                                .custom-swiper-prev:hover,
                                .custom-swiper-next:hover {
                                    opacity: 0.8;
                                }
                            `}</style>
                        </div>
                    </div>

                    {/* Modal Gallery */}
                    {modalOpen && activeBrand && (
                        <div 
                            className="mt-15 xl:mt-20 fixed inset-0 bg-primary/90 z-[9999] flex items-center justify-center"
                            onClick={handleModalClick}
                        >
                            <div 
                                className="relative w-full h-full flex items-center justify-center"
                            >
                                {/* <button
                                    className="absolute top-4 cursor-pointer right-8 text-white text-3xl z-50"
                                    onClick={closeModal}
                                    aria-label="Close"
                                >
                                    &times;
                                </button> */}

                                {/* Close button - responsive positioning */}
                                <button
                                    className="absolute right-4 top-8 md:right-20 md:top-1/2 md:transform md:-translate-y-1/2 cursor-pointer text-white text-4xl z-50 bg-black/30 hover:bg-black/50 rounded-full w-12 h-12 flex items-center justify-center transition-all duration-200"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        closeModal();
                                    }}
                                    aria-label="Close Modal"
                                >
                                    &times;
                                </button>

                                <div 
                                    className="pt-10 xl:pt-0 max-w-xs xl:max-w-4xl h-[80vh] flex items-center justify-center relative"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    {/* Clickable area above image */}
                                    <div 
                                        className="absolute top-0 left-0 right-0 h-20 cursor-pointer z-40"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            closeModal();
                                        }}
                                        aria-label="Click to close modal"
                                    ></div>

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

                                    {/* Clickable area below image */}
                                    <div 
                                        className="absolute bottom-0 left-0 right-0 h-20 cursor-pointer z-40"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            closeModal();
                                        }}
                                        aria-label="Click to close modal"
                                    ></div>

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
                    <div className="mt-10 xl:mt-15">
                        <h3 className="font-primary text-2xl font-normal text-[#273F3A] mb-6 text-center">Moments with Influencers</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 xl:gap-8">
                            {influencers.map((item, idx) => (
                                <div key={idx} className="flex flex-col items-center rounded-xl mb-0 xl:mb-4 p-2 xl:p-6 z-10">
                                    <img src={item.img} alt={item.name} className="h-90 xl:h-140 w-400 mb-4 object-cover rounded-lg" />
                                    
                                    <div className='flex flex-row justify-between items-center w-full'>
                                        <div className="font-primary text-2xl font-bold bg-secondary py-2 px-4 rounded-full text-[#273F3A]">{item.name}</div>
                                        
                                        <button
                                                className="font-secondary text-lg xl:text-xl text-primary font-bold cursor-pointer hover:text-[#EAC347]"
                                                onClick={() => openModal(item)}
                                            >
                                                See more
                                            </button>
                                    </div>
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
    