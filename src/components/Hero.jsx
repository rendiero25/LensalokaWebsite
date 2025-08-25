import Line from '../assets/images/line.png'
import { FaArrowDown } from "react-icons/fa";


const Hero = () => {
    return (
    <section className="flex flex-col items-center justify-center text-center px-4 flex-grow min-h-0" style={{ minHeight: 'calc(100vh - 72px)' }}>
            <h1 className="font-primary text-3xl md:text-5xl 2xl:text-7xl leading-tight font-light mb-4 text-white">
                Capture Meaningful Moments<br />
                Made Easy, Elegant, and Enjoyable
            </h1>

            <img src={Line} alt="Line" className="my-4 w-32 md:w-48 2xl:w-[27rem]" />

            <p className="font-secondary font-normal text-lg md:text-3xl text-white mb-6 mt-2 xl:mt-10">
                Custom Photobooth Services for Every Occasion
            </p>

                <a
                    href="https://wa.me/6285396144172?text=Halo%2C%20saya%20ingin%20bertanya%20mengenai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#EAC347] text-[#273F3A] mt-20 font-bold px-8 py-3 rounded-full shadow-md hover:bg-[#ffd966] transition mb-6 font-secondary inline-block"
                >
                    Book Now!
                </a>

            <div className="flex items-center justify-center gap-2 text-white text-xl font-secondary">
                <span>Atau lihat dulu layanan kami</span>
                <FaArrowDown size={18} />
            </div>
        </section>
    );
}

export default Hero;