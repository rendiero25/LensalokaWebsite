
// import { useState } from 'react';
// import BgLines from '../assets/images/bg-lines.png';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';

// const brands = [
//     {
//         name: 'AirAsia',
//         folder: 'airasia',
//         logo: require('../assets/images/AirAsia.svg'),
//     },
//     {
//         name: 'Foot Locker',
//         folder: 'footlocker',
//         logo: require('../assets/images/Foot_Locker.webp'),
//     },
//     {
//         name: 'JKT Art House',
//         folder: 'jktarthouse',
//         logo: require('../assets/images/jktarthouse.jpg'),
//     },
//     {
//         name: 'Korres',
//         folder: 'korres',
//         logo: require('../assets/images/Korres_logo.png'),
//     },
//     {
//         name: 'Lazada',
//         folder: 'lazada',
//         logo: require('../assets/images/lazada.png'),
//     },
//     {
//         name: 'Putri Indonesia',
//         folder: 'putriindonesia',
//         logo: require('../assets/images/Puteri_Indonesia_Logo.png'),
//     },
//     {
//         name: 'UK Embassy',
//         folder: 'ukembassy',
//         logo: require('../assets/images/ukembassy.webp'),
//     },
// ];

// const getGalleryImages = (folder) => {
//     // require.context tidak tersedia di Vite, jadi hardcode atau gunakan import.meta.glob jika ingin dinamis
//     // Untuk demo, return array kosong
//     return [];
// };

// const Portfolio = () => {
//     const [modalOpen, setModalOpen] = useState(false);
//     const [activeBrand, setActiveBrand] = useState(null);

//     const openModal = (brand) => {
//         setActiveBrand(brand);
//         setModalOpen(true);
//     };
//     const closeModal = () => {
//         setModalOpen(false);
//         setActiveBrand(null);
//     };

//     return (
//         <section
//             className="w-full py-16 px-4 bg-cover bg-center relative"
//             style={{ backgroundImage: `url(${BgLines})` }}
//         >
//             <div className="container">
//                 <h2 className="font-primary text-3xl md:text-4xl font-bold text-[#273F3A] mb-10">Portofolio Event</h2>
//                 {/* Trusted by Brands Slider */}
//                 <div className="mb-12">
//                     <h3 className="font-primary text-2xl font-bold text-[#273F3A] mb-6">Trusted by Brands</h3>
//                     <Swiper
//                         modules={[Navigation]}
//                         slidesPerView={1}
//                         spaceBetween={24}
//                         navigation
//                         breakpoints={{
//                             640: { slidesPerView: 2 },
//                             1024: { slidesPerView: 4 },
//                         }}
//                     >
//                         {brands.map((brand, idx) => (
//                             <SwiperSlide key={brand.name} className="flex flex-col items-center justify-center bg-white/80 rounded-xl p-6 shadow-md">
//                                 <img src={brand.logo} alt={brand.name} className="h-16 w-auto mb-4" />
//                                 <div className="font-primary text-lg text-[#273F3A] mb-2">{brand.name}</div>
//                                 <button
//                                     className="font-secondary text-sm text-[#273F3A] underline hover:text-[#EAC347]"
//                                     onClick={() => openModal(brand)}
//                                 >
//                                     See all
//                                 </button>
//                             </SwiperSlide>
//                         ))}
//                     </Swiper>
//                 </div>

//                 {/* Modal Gallery */}
//                 {modalOpen && activeBrand && (
//                     <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center">
//                         <div className="relative w-full h-full flex items-center justify-center">
//                             <button
//                                 className="absolute top-4 right-8 text-white text-3xl z-50"
//                                 onClick={closeModal}
//                                 aria-label="Close"
//                             >
//                                 &times;
//                             </button>
//                             <div className="w-full max-w-5xl h-[80vh] flex items-center justify-center">
//                                 {/* Gallery Slider */}
//                                 <Swiper
//                                     modules={[Navigation]}
//                                     navigation
//                                     spaceBetween={16}
//                                     slidesPerView={1}
//                                     className="w-full h-full"
//                                 >
//                                     {/* TODO: Ganti [] dengan getGalleryImages(activeBrand.folder) */}
//                                     {getGalleryImages(activeBrand.folder).map((img, i) => (
//                                         <SwiperSlide key={i} className="flex items-center justify-center h-full">
//                                             <img src={img} alt={activeBrand.name + ' gallery'} className="max-h-[70vh] w-auto rounded-xl shadow-lg" />
//                                         </SwiperSlide>
//                                     ))}
//                                     {/* Placeholder jika belum ada gambar */}
//                                     {getGalleryImages(activeBrand.folder).length === 0 && (
//                                         <SwiperSlide className="flex items-center justify-center h-full">
//                                             <div className="text-white text-xl">Belum ada foto untuk {activeBrand.name}</div>
//                                         </SwiperSlide>
//                                     )}
//                                 </Swiper>
//                             </div>
//                         </div>
//                     </div>
//                 )}
//             </div>
//         </section>
//     );
// }

// export default Portfolio;