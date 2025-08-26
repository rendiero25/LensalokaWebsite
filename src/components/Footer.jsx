import Logo from '../assets/images/logolensaloka.png';
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

const navLinks = [
    { name: 'Why', href: '#why' },
    { name: 'Clients', href: '#clients' },
    { name: 'Services', href: '#services' },
    { name: 'Instant Prints', href: '#instant-prints' },
    { name: 'What U Get', href: '#what-u-get' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Testimonial', href: '#testimonial' },
];

const Footer = () => {
    return (
        <footer className="w-full bg-[#273F3A] text-white">
            <div className='flex flex-col justify-center items-center'>
                <div className='container mx-auto px-6 sm:px-12 pt-40 pb-10'>
                    {/* Sesi 1: CTA */}
                    <div className="container flex flex-col md:flex-row items-center justify-between gap-6 pb-25">
                        <h2 className="font-primary text-2xl md:text-3xl font-normal text-center md:text-left mb-4 md:mb-0">Buat momen berharga Anda lebih berkesan dengan Lensaloka.</h2>
                        <a
                            href="https://wa.me/6285396144172?text=Halo%2C%20saya%20ingin%20bertanya%20mengenai%20Lensaloka"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[#EAC347] text-[#273F3A] font-normal px-25 py-3 rounded-full shadow-md hover:bg-[#ffd966] transition font-secondary inline-block"
                        >
                            Hubungi Kami Sekarang
                        </a>
                    </div>

                    {/* Sesi 2: Info & Slogan */}
                    <div className="flex flex-col md:flex-row justify-between gap-10">
                        {/* Kiri: Info */}
                        <div className="flex-1 flex flex-col gap-1 items-center md:items-start">
                            <img src={Logo} alt="Lensaloka Logo" className="h-15 mb-5" />
                            <div className="font-primary text-6xl text-center xl:text-left font-normal mb-5">PT Lensaloka Sukses Abadi</div>
                            <div className="font-secondary text-center xl:text-left text-base">Jl. Melati Raya No. 25, Jakarta Selatan, 12150 | Senin - Jumat, 08.00 - 17.00 wib</div>
                            <div className="font-secondary text-center xl:text-left text-base"></div>
                            <div className="font-secondary text-center xl:text-left text-base">+62 812-3456-7890 | hello@lensaloka.com</div>
                            <div className="flex gap-4 mt-2">
                                <div className='flex flex-row justify-center'>
                                    <FaInstagram className="text-2xl mr-2" />
                                    <a href="https://instagram.com/lensaloka" target="_blank" rel="noopener noreferrer" className="hover:underline font-secondary">lensaloka</a>
                                </div>
                                <div className='flex flex-row justify-center'>
                                    <FaTiktok className="text-2xl mr-2" />
                                    <a href="https://tiktok.com/@lensaloka" target="_blank" rel="noopener noreferrer" className="hover:underline font-secondary">lensaloka</a>
                                </div>
                            </div>
                        </div>
                        {/* Kanan: Slogan & Link Header */}
                        <div className="flex-1 flex flex-col gap-4 justify-end items-center md:items-end ">
                            <div>
                                <div className="font-primary text-xl md:text-5xl leading-tight text-center font-normal mb-2">Create. Capture. Cherish. Together <br className="hidden md:block"/>with Lensaloka</div>
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
                    <div className="container text-center text-[#EAC347] text-sm pt-30">
                        Copyright 2025. Developed by <a href="https://www.rendiero.dev" target="_blank" rel="noopener noreferrer" className=" hover:text-white font-bold">rendiero</a>.
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;