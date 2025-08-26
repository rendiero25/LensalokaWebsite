import BgLines from '../assets/images/bg-lines.png';
import PhotoBoothVideo from '../assets/video/photobooth.mp4';
import MobileBoothVideo from '../assets/video/mobilebooth.mp4';

const whatsappUrl = 'https://wa.me/6285396144172?text=Halo%2C%20saya%20ingin%20bertanya%20mengenai%20layanan%20Lensaloka';

const Services = () => {
    return (
        <section 
            id='services' 
            className="w-full bg-cover bg-center relative overflow-hidden"
            style={{
                backgroundImage: 'linear-gradient(to bottom, #EAC347 0%, #fff 100%)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            {/* BgLines absolute atas dan bawah section */}
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
            <div className='flex justify-center items-center relative z-10'>
                <div className='flex justify-center items-center'>
                    <div className="container mx-auto px-6 sm:px-12 py-40">
                        <div className="flex flex-col justify-between md:flex-row md:items-end md:gap-8 mb-10">
                            <h2 className="font-primary leading-tight text-3xl md:text-6xl text-center md:text-left font-normal text-[#273F3A] mb-4 md:mb-0 md:mr-6 whitespace-pre-line">
                                Pilihan Layanan <br /> Lensaloka
                            </h2>
                            <p className="font-secondary text-base md:text-2xl text-center md:text-left text-[#273F3A] max-w-xl">
                                Dari photobooth elegan hingga mobile photobooth, kami hadir dengan solusi yang sesuai untuk setiap jenis acara.
                            </p>
                        </div>
                        <div className="flex flex-col md:flex-row gap-10">
                            {/* Section A: Lensaloka Photobooth */}
                            <div className="relative flex-1 overflow-hidden shadow-2xl h-[800px] flex flex-col justify-end">
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
                                    <h3 className="font-primary text-4xl font-normal text-white mb-6 xl:mb-4 text-center">Lensaloka Photobooth</h3>
                                    <div className='flex flex-col justify-between items-center gap-4'>
                                        <p className="font-secondary text-xl xl:text-2xl text-white text-center font-normal leading-tight mb-4">Photobooth elegan dengan backdrop custom, cetakan instan, dan desain frame sesuai kebutuhan event Anda.</p>
                                        <a
                                            href={whatsappUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="bg-[#EAC347] text-[#273F3A] font-bold px-8 text-center py-3 rounded-full shadow hover:bg-[#ffd966] transition font-secondary"
                                        >
                                        Pesan Sekarang
                                    </a>
                                    </div>
                                </div>
                            </div>
                            {/* Section B: Mobile Photobooth */}
                            <div className="relative flex-1 overflow-hidden shadow-2xl h-[800px] flex flex-col justify-end">
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
                                    <h3 className="font-primary text-4xl text-center font-normal text-white mb-6 xl:mb-4">Mobile Photobooth</h3>
                                    <div className='flex flex-col justify-between items-center gap-4'>
                                        <p className="font-secondary text-xl xl:text-2xl text-center text-white font-normal mb-4">Tim fotografer profesional yang keliling event untuk mengabadikan momen spesial, hasilnya bisa langsung dicetak.</p>
                                        <a
                                            href={whatsappUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="bg-[#EAC347] text-[#273F3A] text-center font-bold px-8 py-3 rounded-full shadow hover:bg-[#ffd966] transition font-secondary"
                                        >
                                        Pesan Sekarang
                                    </a>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* ...hapus BgLines block di bawah konten... */}
            
        </section>
    );
}

export default Services;