

import { useState } from 'react';
import BgLines from '../assets/images/bg-lines.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Barsena from '../assets/images/barsena.png';
import Yuka from '../assets/images/yuka.png';
import Dimas from '../assets/images/dimas.png';

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
            className="w-full py-16 px-4 bg-cover bg-center relative"
            style={{ backgroundImage: `url(${BgLines})` }}
        >
            <div className="container">
                <h2 className="font-primary text-3xl md:text-4xl font-bold text-[#273F3A] mb-10">Portofolio Event</h2>
                {/* Trusted by Brands Slider */}
                <div className="mb-12">
                    <h3 className="font-primary text-2xl font-bold text-[#273F3A] mb-6">Trusted by Brands</h3>
                    <Swiper
                        modules={[Navigation]}
                        slidesPerView={1}
                        spaceBetween={24}
                        navigation
                        breakpoints={{
                            640: { slidesPerView: 2 },
                            1024: { slidesPerView: 4 },
                        }}
                    >
                        {brands.map((brand) => (
                            <SwiperSlide key={brand.name} className="flex flex-col items-center justify-center bg-white/80 rounded-xl p-6">
                                {/* Tampilkan gambar pertama sebagai thumbnail */}
                                {brand.images[0] && (
                                    <img src={brand.images[0]} alt={brand.name} className="h-32 w-auto mb-4 object-cover rounded-lg" />
                                )}
                                <div className="flex w-full justify-between items-center">
                                    <div className="font-primary text-lg text-[#273F3A]">{brand.name}</div>
                                    <button
                                        className="font-secondary text-sm text-[#273F3A] underline hover:text-[#EAC347]"
                                        onClick={() => openModal(brand)}
                                    >
                                        See more
                                    </button>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                {/* Modal Gallery */}
                {modalOpen && activeBrand && (
                    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center">
                        <div className="relative w-full h-full flex items-center justify-center">
                            <button
                                className="absolute top-4 right-8 text-white text-3xl z-50"
                                onClick={closeModal}
                                aria-label="Close"
                            >
                                &times;
                            </button>

                            <div className="w-full max-w-5xl h-[80vh] flex items-center justify-center">
                                {/* Gallery Slider */}
                                <Swiper
                                    modules={[Navigation]}
                                    navigation
                                    spaceBetween={16}
                                    slidesPerView={1}
                                    className="w-full h-full"
                                >
                                    {Array.isArray(activeBrand.images) && activeBrand.images.length > 0 ? (
                                        activeBrand.images.map((img, i) => (
                                            <SwiperSlide key={i} className="flex items-center justify-center h-full">
                                                <img src={img} alt={activeBrand.name + ' gallery'} className="max-h-[70vh] w-auto rounded-xl shadow-lg" />
                                            </SwiperSlide>
                                        ))
                                    ) : (
                                        <SwiperSlide className="flex items-center justify-center h-full">
                                            <div className="text-white text-xl">Belum ada foto untuk {activeBrand.name}</div>
                                        </SwiperSlide>
                                    )}
                                </Swiper>
                            </div>
                        </div>
                    </div>
                )}

                {/* Moments with Influencers */}
                <div className="mt-16">
                    <h3 className="font-primary text-2xl font-bold text-[#273F3A] mb-6">Moments with Influencers</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {influencers.map((item, idx) => (
                            <div key={idx} className="flex flex-col items-center bg-white/80 rounded-xl p-6">
                                <img src={item.img} alt={item.name} className="h-40 w-auto mb-4 object-cover rounded-lg" />
                                <div className="font-primary text-lg text-[#273F3A]">{item.name}</div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Portfolio;
    