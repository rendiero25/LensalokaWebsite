
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const testimonials = [
  {
    name: 'Andi',
    text: 'Pelayanan sangat ramah dan hasil foto sangat memuaskan! Booth-nya juga keren banget.'
  },
  {
    name: 'Sinta',
    text: 'Cetakan instan dan kualitas premium, tamu-tamu saya suka sekali!'
  },
  {
    name: 'Budi',
    text: 'Tim profesional, proses booking mudah, dan hasilnya di luar ekspektasi.'
  },
  {
    name: 'Rina',
    text: 'Photobooth Lensaloka jadi highlight di acara kami. Semua tamu puas!'
  },
  {
    name: 'Dewi',
    text: 'Frame custom-nya lucu, hasil cetakannya tajam, recommended banget!'
  },
];

const Testimonial = () => {
    return (
        <section className="w-full py-16 px-4">
            <div className="container">
                <div className="flex flex-col md:flex-row md:items-center md:gap-8 mb-10">
                    <h2 className="font-primary text-3xl md:text-4xl font-bold text-[#273F3A] mb-4 md:mb-0 md:mr-6 whitespace-pre-line">
                        Apa Kata Klien Kami
                    </h2>
                    <p className="font-secondary text-base md:text-lg text-[#273F3A] max-w-xl">
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
                        1024: { slidesPerView: 2 },
                    }}
                    className="mb-12"
                >
                    {testimonials.map((item, idx) => (
                        <SwiperSlide key={idx} className="flex flex-col items-center justify-center bg-white/80 rounded-xl p-8 shadow-md mx-2">
                            <div className="font-secondary text-lg text-[#273F3A] mb-4">"{item.text}"</div>
                            <div className="font-primary text-base font-bold text-[#273F3A]">- {item.name}</div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                {/* Custom navigation arrows */}
                <div className="flex justify-center gap-6">
                    <button className="testimonial-prev bg-[#EAC347] text-[#273F3A] rounded-full w-10 h-10 flex items-center justify-center text-2xl font-bold shadow hover:bg-[#ffd966] transition">&#8592;</button>
                    <button className="testimonial-next bg-[#EAC347] text-[#273F3A] rounded-full w-10 h-10 flex items-center justify-center text-2xl font-bold shadow hover:bg-[#ffd966] transition">&#8594;</button>
                </div>
            </div>
        </section>
    );
}

export default Testimonial;