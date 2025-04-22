import React from 'react';
import { FaPhoneAlt, FaWhatsapp, FaInstagram, FaLinkedin } from 'react-icons/fa';

const HeroSection = () => {
    return (
        <div className="w-full h-screen p-3 md:px-6">
            <div className="relative h-full rounded-3xl py-5 px-5 md:px-10 md:py-10 overflow-hidden border-2 border-gray-300 bg-[#1c1c1c]">
                {/* Top-left Title */}
                <div>
                    <h1 className="text-3xl font-extrabold text-white">K_</h1>
                </div>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 h-full relative z-10">
                    {/* Text Section */}
                    <div className="w-full h-100 md:h-full flex flex-col items-center justify-center order-1 lg:order-2 text-white text-center space-y-6">
                        <h1 className="text-4xl md:text-7xl font-extrabold">
                            Hi, I&apos;m <br /> Kamarudheen
                        </h1>
                        {/* Social Icons */}
                        <div className="flex space-x-5 text-5xl mt-10">
                            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                                <FaWhatsapp className="hover:text-gray-400 transition duration-300" />
                            </a>
                            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                                <FaInstagram className="hover:text-blue-400 transition duration-300" />
                            </a>
                            <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin className="hover:text-sky-400 transition duration-300" />
                            </a>
                        </div>
                    </div>

                    {/* Image Section */}
                    <div className="w-full h-full flex items-end justify-center order-2 lg:order-1">
                        <img
                            className="max-h-full max-w-full lg:w-full object-contain"
                            src="/images/me.png"
                            alt="Kamarudheen"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
