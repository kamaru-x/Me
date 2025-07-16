import React from 'react';
import {
    FaPhoneAlt,
    FaInstagram,
    FaEnvelope,
    FaWhatsapp,
    FaLinkedin,
} from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';

const SocialMedia = () => {
    return (
        <div className="w-full bg-white text-black pb-12 md:pb-24">
            {/* Heading */}
            <div className="flex justify-center py-12 md:py-24">
                <h1 className="text-4xl md:text-5xl lg:text-7xl border-b-8 border-black inline-block">
                    CONNECT ME
                </h1>
            </div>

            {/* Contact Section */}
            <div className="bg-black text-white mx-6 md:mx-24 p-6 md:p-12 rounded-2xl shadow-xl">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Phone */}
                    <div className="bg-white text-black rounded-xl p-5 shadow-md flex items-center gap-4">
                        <FaPhoneAlt className="text-2xl text-black" />
                        <a href="tel:+919400711976" className="text-lg font-medium hover:underline">
                            +91 9400 711 976
                        </a>
                    </div>

                    {/* Email */}
                    <div className="bg-white text-black rounded-xl p-5 shadow-md flex items-center gap-4">
                        <FaEnvelope className="text-2xl text-black" />
                        <a
                            href="mailto:kamaru.office@gmail.com"
                            className="text-lg font-medium hover:underline"
                        >
                            connect@kamaru.me
                        </a>
                    </div>

                    {/* WhatsApp */}
                    <div className="bg-white text-black rounded-xl p-5 shadow-md flex items-center gap-4">
                        <FaWhatsapp className="text-2xl text-green-500" />
                        <a
                            href="https://wa.me/919400711976"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-lg font-medium hover:underline"
                        >
                            Chat on WhatsApp
                        </a>
                    </div>

                    {/* Instagram */}
                    <div className="bg-white text-black rounded-xl p-5 shadow-md flex items-center gap-4">
                        <FaInstagram className="text-2xl text-pink-500" />
                        <a
                            href="https://instagram.com/kamaru.me"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-lg font-medium hover:underline"
                        >
                            @kamaru.me
                        </a>
                    </div>

                    {/* Facebook */}
                    <div className="bg-white text-black rounded-xl p-5 shadow-md flex items-center gap-4">
                        <FaLinkedin className="text-2xl text-blue-500" />
                        <a
                            href="https://in.linkedin.com/in/kamarudheen-u"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-lg font-medium hover:underline"
                        >
                            Kamarudheen
                        </a>
                    </div>

                    {/* Location */}
                    <div className="bg-white text-black rounded-xl p-5 shadow-md flex items-center gap-4">
                        <FaLocationDot className="text-2xl text-red-500" />
                        <p className="text-lg font-medium">
                            Kannur, Kerala, India
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SocialMedia;
