
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import image1 from '../assets/images/testiimage1.png';
import image2 from '../assets/images/testiimage2.png';
import image3 from '../assets/images/testiimage3.png';
import image4 from '../assets/images/testiimage4.png';
import image5 from '../assets/images/testiimage5.png';
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";

const testimonials = [
  {
    name: 'Sugeng Pramono',
    position: 'Marketing Manager, Fore Indonesia',
    text: 'Lensaloka benar-benar bikin event kami jadi lebih hidup! Booth-nya elegan, hasil fotonya berkualitas tinggi, dan tamu-tamu langsung jatuh cinta dengan cetakan instannya.',
    pic: image1
},
  {
    name: 'Ratna Fransisca',
    position: 'Marketing Manager, Fore Indonesia',
    text: '“Kami senang banget bekerja sama dengan Lensaloka. Timnya profesional, responsif, dan setup photobooth-nya sesuai dengan brand guidelines kami. Sangat recommended!',
    pic: image2
},
  {
    name: 'Kenny Recardo',
    position: 'Brand Activation Specialist, Lazada',
    text: 'Pelanggan kami puas, influencer juga happy, dan brand exposure kami maksimal. Lensaloka bukan hanya photobooth, tapi solusi engagement di event.',
    pic: image3
  },
  {
    name: 'Rina',
    position: 'Event Organizer',
    text: 'Photobooth Lensaloka jadi highlight di acara kami. hasil fotonya berkualitas tinggi, dan tamu-tamu langsung jatuh cinta dengan cetakan instannya, Semua tamu puas!',
    pic: image4
  },
  {
    name: 'Dewi',
    position: 'Influencer',
    text: 'Frame custom-nya lucu, hasil cetakannya tajam, Timnya profesional, responsif, dan setup photobooth-nya sesuai dengan brand guidelines kami, recommended banget!',
    pic: image5
  },
];

const Testimonial = () => {
    return (
        <section className="w-full py-16 xl:py-40 px-4">
            <div className="container mx-auto px-6 sm:px-12">
                <div className="flex flex-col justify-between md:flex-row md:items-end md:gap-8 mb-10">
                    <h2 className="font-primary text-3xl md:text-6xl font-bold text-[#273F3A] mb-4 md:mb-0 md:mr-6 whitespace-pre-line">
                        Apa Kata Klien Kami
                    </h2>
                    <p className="font-secondary text-base md:text-2xl text-[#273F3A] max-w-xl">
                        Senyum dan kepuasan klien adalah bukti nyata 
                        dari kualitas layanan Lensaloka.
                    </p>
                </div>
                <Swiper
                    modules={[Navigation]}
                    slidesPerView={1}
                    spaceBetween={24}
                    navigation={{
                        nextEl: '.testimonial-next',
                        prevEl: '.testimonial-prev',
                    }}
                    breakpoints={{
                        640: { slidesPerView: 1 },
                        1024: { slidesPerView: 3 },
                    }}
                    className="mb-12"
                >
                    {testimonials.map((item, idx) => (
                        <SwiperSlide key={idx} className="flex flex-col items-center justify-center bg-secondary rounded-4xl p-8">
                            <div className="font-secondary text-lg text-[#273F3A] mb-6">"{item.text}"</div>
                            <div className='flex flex-row justify-start items-center gap-2'>
                                <img src={item.pic} alt={item.name} className="size-15 rounded-full object-cover" />
                                <div className='flex flex-col justify-center items-start'>
                                    <div className="font-primary text-base font-bold text-[#273F3A]">{item.name}</div>
                                    <div className="font-secondary text-sm text-[#273F3A]">{item.position}</div>
                                </div>
                                    
                            </div>
                            
                        </SwiperSlide>
                    ))}
                </Swiper>
                {/* Custom navigation arrows */}
                <div className="flex justify-center gap-6">
                    <button className="testimonial-prev flex items-center justify-center" aria-label="Sebelumnya">
                        <FaArrowCircleLeft size={44} color="#273F3A" />
                    </button>
                    <button className="testimonial-next flex items-center justify-center" aria-label="Berikutnya">
                        <FaArrowCircleRight size={44} color="#273F3A" />
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Testimonial;