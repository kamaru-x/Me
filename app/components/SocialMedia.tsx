import React from 'react'
import { FaPhoneAlt, FaWhatsapp, FaInstagram, FaLinkedin, FaEnvelope, FaGlobe } from 'react-icons/fa';

const SocialMedia = () => {
    return (
        <div className="overflow-hidden p-3 md:px-6">
            <div className="border-2 border-gray-300 rounded-3xl p-5 bg-[#1c1c1c]">
                <div className="px-3 md:px-6 py-5 md:py-10">
                    {/* About Us Content */}
                    <h3 className="font-extrabold text-white text-xl md:text-2xl">Get in Touch</h3>

                    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-5  mt-5 md:mt-10">
                        <div className="bg-[#2c2c2c] px-5 py-5 rounded-3xl text-xl font-semibold">
                            <a href="" className='flex space-x-2 items-center'>
                                <FaPhoneAlt className="hover:text-gray-400 transition duration-300" />
                                <span className="ml-3">+91 9400 711 976</span>
                            </a>
                        </div>
                        <div className="bg-[#2c2c2c] px-5 py-5 rounded-3xl text-xl font-semibold">
                            <a href="" className='flex space-x-2 items-center'>
                            <FaEnvelope className="hover:text-gray-400 transition duration-300" />
                                <span className="ml-3">connect@kamaru.me</span>
                            </a>
                        </div>
                        <div className="bg-[#2c2c2c] px-5 py-5 rounded-3xl text-xl font-semibold">
                            <a href="" className='flex space-x-2 items-center'>
                                <FaInstagram className="hover:text-gray-400 transition duration-300" />
                                <span className="ml-3">kamaru.me</span>
                            </a>
                        </div>
                        <div className="bg-[#2c2c2c] px-5 py-5 rounded-3xl text-xl font-semibold">
                            <a href="" className='flex space-x-2 items-center'>
                                <FaGlobe className="hover:text-gray-400 transition duration-300" />
                                <span className="ml-3">kamaru.me</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SocialMedia