
import BannerImage from '../assets/images/bannerimage.png';

const Banner = () => {
    return (
        <section
            className="w-full bg-cover bg-center flex items-center justify-center min-h-[250px] md:min-h-[350px] px-4"
            style={{ backgroundImage: `url(${BannerImage})` }}
        >
            <div className="container flex flex-col items-center justify-center text-center py-12">
                <h2 className="font-primary text-2xl md:text-3xl font-normal text-white mb-4 drop-shadow-lg">
                    Turn every celebration into a timeless memory
                </h2>
                <p className="font-secondary text-lg md:text-xl text-white mb-6 drop-shadow font-normal">
                    let us capture yours with elegance!
                </p>
                <a
                    href="https://wa.me/6285396144172?text=Halo%2C%20saya%20ingin%20bertanya%20mengenai%20layanan%20Lensaloka"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#F5B52F] text-[#273F3A] font-bold px-8 py-3 uppercase rounded-full shadow-md hover:bg-[#ffd966] transition font-secondary inline-block"
                >
                    Hubungi Kami
                </a>
            </div>
        </section>
    );
}

export default Banner;