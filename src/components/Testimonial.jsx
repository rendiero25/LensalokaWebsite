
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import image1 from '../assets/images/testiimage1.jpg';
import image2 from '../assets/images/testiimage2.jpg';
import image3 from '../assets/images/testiimage3.jpg';
import image4 from '../assets/images/testiimage4.jpg';
import image5 from '../assets/images/testiimage5.jpg';
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";

const testimonials = [
  {
    name: 'Ashab Alkahfi',
    position: 'Founder Chickin Indonesia',
    text: 'Suka banget sama hasil foto Lensaloka, kualitasnya jernih, printnya cepet, dan kameranya bagus! cocok buat corporate event',
    pic: image1
},
  {
    name: 'Barsena Bestandhi',
    position: 'Influencer',
    text: 'Buat kalian yang acaranya pengen meriah dan bisa diabadikan dengan Photobooth, bisa book Lensaloka, semoga acara kalian berkesan dengan Lensaloka',
    pic: image2
},
  {
    name: 'Dimas Ramadhan',
    position: 'Influencer',
    text: 'Terima kasih Lensaloka. Bagus banget hasilnya, cepet dan gercep dan mantep. Buat yang mau wedding atau acara apapun pakai lensaloka, super estetik, semuanya the best',
    pic: image3
  },
  {
    name: 'Fadli Hafizan',
    position: 'Founder Jakarta Art House',
    text: 'Hasilnya bagus-bagus semua dan pasti kalian happy dengan hasil foto Lensaloka Studio',
    pic: image4
  },
  {
    name: 'Yusman Kusuma',
    position: 'Influencer',
    text: 'Seneng banget bisa pakai Lensaloka Photobooth karena hasilnya cepet banget, kualitasnya HD, Free design, dan Free Area Jabodetabek. Jadi kalau mau event, jangan lupa pakai Lensaloka Photobooth!',
    pic: image5
  },
];

const Testimonial = () => {
    return (
        <section id='testimonial' className="w-full pb-10 xl:pb-20 px-4">
            <div className="container mx-auto px-6 sm:px-12">
                <div className="flex flex-col justify-between md:flex-row md:items-end md:gap-8 mb-10">
                    <h2 className="font-primary text-center xl:text-left text-3xl md:text-5xl font-bold text-[#273F3A] mb-4 md:mb-0 md:mr-6 whitespace-pre-line">
                        Apa Kata Klien Kami
                    </h2>
                    <p className="font-secondary text-center xl:text-left text-md md:text-2xl text-[#273F3A] max-w-xl">
                        Senyum dan kepuasan klien adalah bukti nyata 
                        dari kualitas layanan Lensaloka.
                    </p>
                </div>
                <Swiper
                    modules={[Navigation]}
                    slidesPerView={1}
                    spaceBetween={25}
                    navigation={{
                        nextEl: '.testimonial-next',
                        prevEl: '.testimonial-prev',
                    }}
                    breakpoints={{
                        640: { slidesPerView: 1 },
                        1024: { slidesPerView: 3 },
                    }}
                    className="mb-12 h-144 xl:h-107 flex"
                >
                    {testimonials.map((item, idx) => (
                        <SwiperSlide key={idx} className="flex flex-col items-start justify-between bg-secondary rounded-4xl p-8 h-full">
                            <div className='h-full flex flex-col justify-between items-center xl:items-start'>
                                <div className="font-secondary text-lg text-center xl:text-left text-[#273F3A] mb-6">"{item.text}"</div>
                                <div className='flex flex-col xl:flex-row justify-start items-center gap-6'>
                                    <img src={item.pic} alt={item.name} className="size-50 shadow-2xl rounded-full object-cover" />
                                    <div className='flex flex-col justify-center items-center xl:items-start text-center xl:text-left'>
                                        <div className="font-primary text-base font-bold text-[#273F3A]">{item.name}</div>
                                        <div className="font-secondary text-sm text-[#273F3A]">{item.position}</div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                {/* Custom navigation arrows */}
                <div className="flex justify-center gap-6">
                    <button className="cursor-pointer testimonial-prev flex items-center justify-center" aria-label="Sebelumnya">
                        <FaArrowCircleLeft size={44} color="#273F3A" />
                    </button>
                    <button className="cursor-pointer testimonial-next flex items-center justify-center" aria-label="Berikutnya">
                        <FaArrowCircleRight size={44} color="#273F3A" />
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Testimonial;