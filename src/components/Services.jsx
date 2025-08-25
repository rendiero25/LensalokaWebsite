
import BgLines from '../assets/images/bg-lines.png';
import PhotoBoothVideo from '../assets/video/photobooth.mp4';
import MobileBoothVideo from '../assets/video/mobilebooth.mp4';

const whatsappUrl = 'https://wa.me/6285396144172?text=Halo%2C%20saya%20ingin%20bertanya%20mengenai%20layanan%20Lensaloka';

const Services = () => {
    return (
        <section
            className="w-full py-16 px-4 bg-cover bg-center relative"
            style={{
                backgroundImage: `linear-gradient(to bottom, #EAC347 0%, #fff 100%), url(${BgLines})`,
                backgroundBlendMode: 'overlay',
            }}
        >
            <div className="container mx-auto py-20">
                <div className="flex flex-col justify-between md:flex-row md:items-end md:gap-8 mb-10">
                    <h2 className="font-primary leading-tight text-3xl md:text-6xl text-center md:text-left font-bold text-[#273F3A] mb-4 md:mb-0 md:mr-6 whitespace-pre-line">
                        Pilihan Layanan <br /> Lensaloka
                    </h2>
                    <p className="font-secondary text-base md:text-2xl text-center md:text-left text-[#273F3A] max-w-xl">
                        Dari photobooth elegan hingga mobile photobooth, kami hadir dengan solusi yang sesuai untuk setiap jenis acara.
                    </p>
                </div>
                <div className="flex flex-col md:flex-row gap-10">
                    {/* Section A: Lensaloka Photobooth */}
                    <div className="relative flex-1 overflow-hidden shadow-lg min-h-[1000px] flex flex-col justify-end">
                        <video
                            className="absolute top-0 left-0 w-full h-full object-cover z-0"
                            src={PhotoBoothVideo}
                            autoPlay
                            loop
                            muted
                            playsInline
                        />
                        <div className="absolute top-0 left-0 w-full h-full bg-[#273F3A]/80 z-10" />
                        
                        <div className="relative z-20 p-20 flex flex-col items-center h-full justify-between">
                            <h3 className="font-primary text-4xl font-bold text-white mb-2">Lensaloka Photobooth</h3>
                            <div className='flex flex-col justify-between items-center gap-4'>
                                <p className="font-secondary text-2xl text-white text-center leading-tight mb-4">Photobooth elegan dengan backdrop custom, cetakan instan, dan desain frame sesuai kebutuhan event Anda.</p>
                                <a
                                    href={whatsappUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-[#EAC347] text-[#273F3A] font-bold px-8 py-3 rounded-full shadow hover:bg-[#ffd966] transition font-secondary"
                                >
                                Pesan Sekarang
                            </a>
                            </div>
                        </div>
                    </div>
                    {/* Section B: Mobile Photobooth */}
                    <div className="relative flex-1 overflow-hidden shadow-lg min-h-[1000px] flex flex-col justify-end">
                        <video
                            className="absolute top-0 left-0 w-full h-full object-cover z-0"
                            src={MobileBoothVideo}
                            autoPlay
                            loop
                            muted
                            playsInline
                        />
                        <div className="absolute top-0 left-0 w-full h-full bg-[#273F3A]/80 z-10" />
                        <div className="relative z-20 p-20 flex flex-col items-center h-full justify-between">
                            <h3 className="font-primary text-4xl font-bold text-white mb-2">Mobile Photobooth</h3>
                            <div className='flex flex-col justify-between items-center gap-4'>
                                <p className="font-secondary text-2xl text-center text-white mb-4">Tim fotografer profesional yang keliling event untuk mengabadikan momen spesial, hasilnya bisa langsung dicetak.</p>
                                <a
                                    href={whatsappUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-[#EAC347] text-[#273F3A] font-bold px-8 py-3 rounded-full shadow hover:bg-[#ffd966] transition font-secondary"
                                >
                                Pesan Sekarang
                            </a>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Services;