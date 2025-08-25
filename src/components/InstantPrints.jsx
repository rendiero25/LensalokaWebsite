
import BgLines from '../assets/images/bg-lines.png';
import Instant1 from '../assets/images/instantprints1.png';
import Instant2 from '../assets/images/instantprints2.png';
import Instant3 from '../assets/images/instantprints3.png';

const InstantPrints = () => {
    return (
        <section
            className="w-full py-16 bg-cover bg-center"
            style={{ backgroundImage: `url(${BgLines})` }}
        >
            <div className="container px-6 sm:px-12 xl:px-20 2xl:px-40 mb-10 text-center w-full flex flex-col justify-between items-center">
                <h2 className="font-primary text-3xl md:text-4xl font-bold text-[#273F3A] mb-4">Instant Prints</h2>
                <p className="font-secondary text-lg md:text-xl text-[#273F3A] mb-2">Spontaneous Moments Captured Instantly</p>
                <p className="font-secondary text-base md:text-lg text-[#273F3A] max-w-2xl mb-8">
                    Bukan sekadar foto digital, tapi kenangan nyata yang bisa langsung dibawa pulang. Lensaloka menghadirkan hasil cetakan instan dengan kualitas premium yang bisa jadi bagian dari souvenir event Anda.
                </p>
            </div>

            <div className="flex flex-col md:flex-row w-full">
                {/* Portrait */}
                <div
                    className="flex-1 flex flex-col justify-end items-start min-h-[260px] md:min-h-[800px] bg-cover bg-center text-white"
                    style={{ backgroundImage: `url(${Instant1})` }}
                >
                    <div className='bg-primary/70 h-full p-10 flex flex-col justify-center items-center gap-6'>
                        <h3 className="font-primary text-secondary text-2xl font-bold mb-2 drop-shadow">Portrait</h3>
                        <p className="font-secondary text-base text-center drop-shadow">Elegan dan timeless. Cetakan portrait yang selalu jadi favorit di setiap event.</p>
                    </div>
                    
                </div>
                {/* Ukuran 4R */}
                <div
                    className="flex-1 flex flex-col justify-end items-start min-h-[260px] md:min-h-[800px] bg-cover bg-center text-white"
                    style={{ backgroundImage: `url(${Instant2})` }}
                >
                    <div className='bg-primary/70 h-full p-10 flex flex-col justify-center items-center gap-6'>
                        <h3 className="font-primary text-secondary text-2xl font-bold mb-2 drop-shadow">Ukuran 4R</h3>
                        <p className="font-secondary text-base text-center drop-shadow">Lebih besar, lebih detail. Cetakan 4R untuk momen yang ingin benar-benar diabadikan.</p>
                    </div>
                    
                </div>
                {/* Ukuran 2R */}
                <div
                    className="flex-1 flex flex-col justify-end items-start min-h-[260px] md:min-h-[800px] bg-cover bg-center text-white"
                    style={{ backgroundImage: `url(${Instant3})` }}
                >
                    <div className='bg-primary/70 h-full p-10 flex flex-col justify-center items-center gap-6'>
                        <h3 className="font-primary text-secondary text-2xl font-bold mb-2 drop-shadow">Ukuran 2R</h3>
                        <p className="font-secondary text-base drop-shadow">Simple dan praktis. Uukuran 2R yang pas untuk dibawa pulang sebagai kenangan manis.</p>
                    </div>
                    
                </div>
            </div>
        </section>
    );
}

export default InstantPrints;