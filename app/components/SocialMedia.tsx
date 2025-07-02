import React from 'react'
import { FaPhoneAlt, FaInstagram, FaEnvelope, FaWhatsapp, FaFacebook } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';

const SocialMedia = () => {
    return (
        <div className="w-full p-3 md:px-6 text-black">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className='border-5 border-r-15 border-b-15 border-black rounded-3xl'>
                    <h1 className='p-5 pb-0'>Send Message</h1>
                    <form action="" className='p-5'>
                        <input type="text"  className='rounded-2xl border-black border-2 w-full h-10 px-5 py-5' placeholder='Your Name'/>
                        <input type="email" className='rounded-2xl border-black border-2 w-full h-10 px-5 py-5 mt-3' placeholder='Your Email' />
                        <textarea className='rounded-2xl border-black border-2 w-full h-40 px-5 py-5 mt-3' placeholder='Your Message'></textarea>
                        <button className='bg-black text-white rounded-2xl w-full h-10 mt-3 hover:bg-gray-800 transition-colors duration-300'>Send Message</button>
                    </form>
                </div>
                <div>
                    <div>
                        <div className="flex items-center p-5 border-5 border-r-15 border-b-15 border-black rounded-3xl mb-4 hover:bg-gray-100 transition-colors duration-300">
                            <FaInstagram className="text-pink-500 text-2xl mr-4" />
                            <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-lg font-semibold">
                                @kamaru.me
                            </a>
                        </div>
                        <div className="flex items-center p-5 border-5 border-r-15 border-b-15 border-black rounded-3xl mb-4 hover:bg-gray-100 transition-colors duration-300">
                            <FaWhatsapp className="text-green-500 text-2xl mr-4" />
                            <a href="https://wa.me/yourwhatsapplink" target="_blank" rel="noopener noreferrer" className="text-lg font-semibold">
                                +91 9400 711 976
                            </a>
                        </div>
                        <div className="flex items-center p-5 border-5 border-r-15 border-b-15 border-black rounded-3xl mb-4 hover:bg-gray-100 transition-colors duration-300">
                            <FaFacebook className="text-blue-600 text-2xl mr-4" />
                            <a href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-lg font-semibold">
                                Kamarudheen
                            </a>
                        </div>
                    </div>
                    <div className='grid grid-cols-3 gap-5'>
                        <div className='flex flex-col items-center justify-center text-center border-5 border-r-15 border-b-15 border-black rounded-3xl p-5'>
                            <FaEnvelope className="text-blue-600 text-2xl mb-2" />
                            <p>Email</p>
                        </div>
                        <div className='flex flex-col items-center justify-center text-center border-5 border-r-15 border-b-15 border-black rounded-3xl p-5'>
                            <FaPhoneAlt className="text-blue-600 text-2xl mb-2" />
                            <p>Call</p>
                        </div>
                        <div className='flex flex-col items-center justify-center text-center border-5 border-r-15 border-b-15 border-black rounded-3xl p-5'>
                            <FaLocationDot className="text-blue-600 text-2xl mb-2" />
                            <p>Location</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SocialMedia