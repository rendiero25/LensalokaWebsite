import Logo from '../assets/images/logolensaloka.png';
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import BannerImage2 from '../assets/images/bannerimage2.jpg';

const navLinks = [
    { name: 'Why', href: '#why' },
    { name: 'Clients', href: '#clients' },
    { name: 'Services', href: '#services' },
    { name: 'Instant Prints', href: '#instant-prints' },
    { name: 'What You Get', href: '#what-u-get' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Testimonial', href: '#testimonial' },
];

const Footer = () => {
    return (
        <footer className="w-full bg-[#273F3A] text-white">
            <div className='flex flex-col justify-center items-center'>
                <div className='pb-10 w-full'>
                    <div
                        className="bg-blue-500 w-full bg-cover bg-center flex items-center justify-center min-h-[250px] md:min-h-[350px]"
                        style={{ backgroundImage: `url(${BannerImage2})` }}
                    >
                        <div className="flex flex-wrap gap-5 xl:gap-20 items-center justify-center text-center px-6 xl:px-0 py-12">
                            <h2 className="font-primary text-2xl md:text-3xl leading-tight font-normal text-center md:text-left mb-4 md:mb-0">Buat momen berharga Anda lebih berkesan dengan Lensaloka.</h2>
                            <a
                                href="https://wa.me/6285396144172?text=Halo%2C%20saya%20ingin%20bertanya%20mengenai%20Lensaloka"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-secondary text-[#273F3A] text-lg text-center font-normal px-10 xl:px-25 py-3 xl:py-5 rounded-full shadow-md hover:bg-[#ffd966] transition font-secondary inline-block"
                            >
                                Hubungi Kami Sekarang
                            </a>
                        </div>
                    </div>

                    {/* Sesi 2: Info & Slogan */}
                    <div className="container pt-10 mx-auto px-6 sm:px-12 flex flex-col md:flex-row justify-between gap-10">
                        {/* Kiri: Info */}
                        <div className="flex-1 flex flex-col gap-1 items-center md:items-start">
                            <img src={Logo} alt="Lensaloka Logo" className="h-15 mb-5" />
                            <div className="font-primary text-4xl xl:text-4xl text-center xl:text-left font-normal mb-2">PT Lensaloka Sukses Abadi</div>
                            <div className="font-secondary text-center xl:text-left text-base">Jl. Bungur No.27 A, RT.12/RW.2, Kby. Lama Utara, Kec. Kby. Lama, Kota Jakarta Selatan</div>
                            <div className="font-secondary text-center xl:text-left text-base">Senin - Jumat, 08.00 - 17.00 wib</div>
                            <div className="font-secondary text-center xl:text-left text-base"></div>
                            <div className="font-secondary text-center xl:text-left text-base">+62 853-9614-4172 | lensalokaphotobooth@gmail.com</div>
                            <div className="flex gap-4 mt-2">
                                <div className='flex flex-row justify-center'>
                                    <FaInstagram className="text-2xl mr-2" />
                                    <a href="https://instagram.com/lensalokastudio" target="_blank" rel="noopener noreferrer" className="hover:underline font-secondary">lensaloka</a>
                                </div>
                                <div className='flex flex-row justify-center'>
                                    <FaTiktok className="text-2xl mr-2" />
                                    <a href="https://www.tiktok.com/@lensalokastudio" target="_blank" rel="noopener noreferrer" className="hover:underline font-secondary">lensaloka</a>
                                </div>
                            </div>
                        </div>
                        {/* Kanan: Slogan & Link Header */}
                        <div className="flex-1 flex flex-col gap-4 justify-end items-center md:items-end ">
                            <div>
                                <div className="font-primary text-xl md:text-3xl leading-tight text-center font-normal mb-2">Create. Capture. Cherish. Together with Lensaloka</div>
                            </div>
                            <nav className="flex flex-wrap gap-4 justify-center md:justify-end mt-4">
                                {navLinks.map(link => (
                                    <a key={link.name} href={link.href} className="font-secondary hover:underline text-white">
                                        {link.name}
                                    </a>
                                ))}
                            </nav>
                        </div>
                    </div>

                    {/* Sesi 3: Copyright */}
                    <div className="text-center text-[#F5B52F] text-sm pt-10">
                        Copyright 2025. Developed by <a href="https://www.rendiero.dev" target="_blank" rel="noopener noreferrer" className=" hover:text-white font-bold">rendiero</a>.
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;