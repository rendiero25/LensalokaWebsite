import BgLines from '../assets/images/bg-lines.png';
import WhatUGet1 from '../assets/images/whatuget1.png';
import WhatUGet2 from '../assets/images/whatuget2.png';
import WhatUGet3 from '../assets/images/whatuget3.png';
import WhatUGet4 from '../assets/images/whatuget4.png';
import WhatUGet5 from '../assets/images/whatuget5.png';
import WhatUGet6 from '../assets/images/whatuget6.png';

const items = [
  { img: WhatUGet1, desc: 'Cetakan instan\nberkualitas tinggi' },
  { img: WhatUGet2, desc: 'Tim profesional\n(operator + fotografer)' },
  { img: WhatUGet3, desc: 'Desain frame &\ntemplate cetakan custom' },
  { img: WhatUGet4, desc: 'Unlimited photo\nsession selama event' },
  { img: WhatUGet5, desc: 'File digital\n(Google Drive / QR Access)' },
  { img: WhatUGet6, desc: 'Branding activation yang\nengage dengan audiens' },
];

const WhatUGet = () => {
    return (
        <section
            id='what-u-get'
            className="w-full py-16 xl:py-40 px-4 bg-cover bg-center relative overflow-hidden"
            style={{
                backgroundImage: 'linear-gradient(to bottom, #EAC347 0%, #fff 100%)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            {/* BgLines absolute memenuhi seluruh section */}
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
            <div className='flex justify-center items-center'>
                <div className="container px-6 sm:px-12 flex flex-col justify-between items-center">
                    <div className="flex flex-col md:flex-row w-full justify-between items-end md:gap-8 mb-10">
                        <h2 className="font-primary text-3xl md:text-6xl font-normal text-[#273F3A] mb-4 md:mb-0 md:mr-6 whitespace-pre-line">
                            Apa yang Anda Dapatkan
                        </h2>
                        <p className="font-secondary text-center xl:text-left text-base md:text-2xl text-[#273F3A] max-w-xl">
                            Semua yang Anda butuhkan untuk membuat acara lebih berkesan, lengkap dalam satu paket layanan Lensaloka.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
                    {items.map((item, idx) => (
                        <div key={idx} className="flex flex-col items-center text-center rounded-xl h-full">
                            <img src={item.img} alt={item.desc.split('\n')[0]} className="z-10 xl:h-140 w-400 mb-4" />
                            <p className="font-secondary text-[#273F3A] whitespace-pre-line text-base md:text-xl">{item.desc}</p>
                        </div>
                    ))}
                    </div>
                </div>
            </div>
            
        </section>
    );
}

export default WhatUGet;