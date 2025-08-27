
import BgLines from '../assets/images/bg-lines.png';
import Instant1 from '../assets/images/instantprints1.png';
import Instant2 from '../assets/images/instantprints2.png';
import Instant3 from '../assets/images/instantprints3.png';
import VideoPotrait from '../assets/video/Potrait.mp4';
import Video2R from '../assets/video/2R.mp4';
import Video4R from '../assets/video/4R.mp4';

const InstantPrints = () => {
    return (
        <section
            id='instant-prints'
            className="w-full bg-cover bg-center relative overflow-hidden"
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
            <div className="w-full px-6 sm:px-12 text-center flex flex-col justify-between items-center">
                <h2 className="font-primary text-3xl md:text-5xl font-normal text-[#273F3A] mb-4">Instant Prints</h2>
                <p className="font-secondary text-lg md:text-3xl text-[#273F3A] mb-6 font-normal">Spontaneous Moments Captured Instantly</p>
                <p className="font-secondary font-normal text-md md:text-2xl text-[#273F3A] max-w-4xl mb-0 xl:mb-8">
                    Bukan sekadar foto digital, tapi kenangan nyata yang bisa langsung dibawa pulang. Lensaloka menghadirkan hasil cetakan instan dengan kualitas premium yang bisa jadi bagian dari souvenir event Anda.
                </p>
            </div>

            <div className="flex flex-col md:flex-row w-full">
                {/* Portrait */}
                <div className="z-10 flex-1 flex flex-col justify-end items-start min-h-[260px] md:min-h-[500px] relative overflow-hidden text-white">
                    <video
                        className="absolute top-0 left-0 w-full h-full object-cover z-0"
                        src={VideoPotrait}
                        autoPlay
                        loop
                        muted
                        playsInline
                    />
                    <div className='bg-primary/70 h-full p-10 flex flex-col justify-center items-center gap-6 relative z-10'>
                        <h3 className="font-primary text-secondary text-4xl font-normal mb-2 drop-shadow">Portrait</h3>
                        <p className="font-secondary text-xl px-10 xl:px-20 font-light text-center drop-shadow">Elegan dan timeless. Cetakan portrait yang selalu jadi favorit di setiap event.</p>
                    </div>
                    
                </div>

                {/* Ukuran 4R */}
                <div className="z-10 flex-1 flex flex-col justify-end items-start min-h-[260px] md:min-h-[500px] relative overflow-hidden text-white">
                    <video
                        className="absolute top-0 left-0 w-full h-full object-cover z-0"
                        src={Video4R}
                        autoPlay
                        loop
                        muted
                        playsInline
                    />
                    <div className='bg-primary/70 h-full p-10 flex flex-col justify-center items-center gap-6 relative z-10'>
                        <h3 className="font-primary text-secondary text-4xl font-normal mb-2 drop-shadow">Ukuran 4R</h3>
                        <p className="font-secondary text-xl px-10 xl:px-20 font-light text-center drop-shadow">Lebih besar, lebih detail. Cetakan 4R untuk momen yang ingin benar-benar diabadikan.</p>
                    </div>
                    
                </div>

                {/* Ukuran 2R */}
                <div className="z-10 flex-1 flex flex-col justify-end items-start min-h-[260px] md:min-h-[500px] relative overflow-hidden text-white">
                    <video
                        className="absolute top-0 left-0 w-full h-full object-cover z-0"
                        src={Video2R}
                        autoPlay
                        loop
                        muted
                        playsInline
                    />
                    <div className='bg-primary/70 h-full p-10 flex flex-col justify-center items-center gap-6 relative z-10'>
                        <h3 className="font-primary text-secondary text-4xl font-normal mb-2 drop-shadow">Ukuran 2R</h3>
                        <p className="font-secondary text-xl px-10 xl:px-20font-light text-center drop-shadow">Simple dan praktis. Uukuran 2R yang pas untuk dibawa pulang sebagai kenangan manis.</p>
                    </div>
                    
                </div>
            </div>
        </section>
    );
}

export default InstantPrints;