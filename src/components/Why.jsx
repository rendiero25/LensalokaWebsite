import BgLines from '../assets/images/bg-lines.png';
import Icon1 from '../assets/images/Icon1.png';
import Icon2 from '../assets/images/Icon2.png';
import Icon3 from '../assets/images/Icon3.png';

const Why = () => {
    return (
        <section 
            id='why'
            className="w-full py-10 xl:py-20 bg-cover bg-center"
            style={{ backgroundImage: `url(${BgLines})`, objectFit: 'cover' }}
            >             
                <div className='flex justify-center items-center'>
                    <div className="container w-full mx-auto px-6 sm:px-12 ">
                        <div className="flex flex-col md:flex-row justify-between md:items-end md:gap-8 mb-5 xl:mb-10">
                            <h2 className="font-primary leading-tight text-3xl md:text-6xl text-center md:text-left font-normal text-[#273F3A] mb-4 md:mb-0 md:mr-6 whitespace-pre-line">
                                Lebih dari Sekadar <br /> Photobooth,
                            </h2>
                            <p className="font-secondary text-base font-normal md:text-2xl text-center md:text-left text-[#273F3A] max-w-2xl">
                                Kami membantu Anda menciptakan pengalaman berharga
                                yang tak terlupakan dengan sentuhan elegan dan kualitas premium.
                            </p>
                        </div>

                        <div className="xl:mt-20 flex flex-col md:flex-row gap-1 md:gap-6 lg:gap-12 justify-center items-stretch">
                            {/* Icon 1 */}
                            <div className="flex flex-col items-center text-center rounded-xl p-6 flex-1">
                                <img src={Icon1} alt="Seamless Experience" className="h-16 w-16 mb-4" />
                                <h3 className="font-primary text-lg md:text-4xl font-normal text-[#273F3A] mb-4">Seamless Experience</h3>
                                <p className="font-secondary text-sm md:text-2xl text-[#273F3A]">Dari booking hingga eksekusi, semua serba praktis dan profesional.</p>
                            </div>
                            {/* Icon 2 */}
                            <div className="flex flex-col items-center text-center rounded-xl p-6 flex-1">
                                <img src={Icon2} alt="High-Quality Prints & Setup" className="h-16 w-16 mb-4" />
                                <h3 className="font-primary text-lg md:text-4xl font-normal text-[#273F3A] mb-4">High-Quality Prints & Setup</h3>
                                <p className="font-secondary text-sm md:text-2xl text-[#273F3A]">Foto tajam, desain cetakan eksklusif, booth elegan sesuai brand atau event Anda..</p>
                            </div>
                            {/* Icon 3 */}
                            <div className="flex flex-col items-center text-center rounded-xl p-6 flex-1">
                                <img src={Icon3} alt="Memorable Engagement" className="h-16 w-16 mb-4" />
                                <h3 className="font-primary text-lg md:text-4xl font-normal text-[#273F3A] mb-4">Memorable Engagement</h3>
                                <p className="font-secondary text-sm md:text-2xl text-[#273F3A]">Jadi daya tarik utama event, 
                                bikin tamu betah berfoto & bawa 
                                pulang kenangan.</p>
                            </div>
                        </div>
                    </div>
                </div>  
        </section>
    );
}

export default Why;