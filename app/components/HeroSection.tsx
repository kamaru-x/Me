import React from 'react';

const HeroSection = () => {
    return (
        <div className="w-full min-h-screen bg-[#1E1E1E] flex flex-col">
            {/* Header */}
            <div className="p-5 w-full">
                <h1 className="text-3xl font-extrabold text-white">K_</h1>
            </div>

            {/* Main Section */}
            <div className="flex-1 flex flex-col justify-between w-full px-5 md:px-0 mt-12">
                {/* Grid */}
                <div className="flex justify-center w-full flex-1">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full md:w-4/5">
                        {/* Text Section */}
                        <div className="flex flex-col justify-center text-center md:text-left text-white py-10">
                            <p className="text-gray-100 text-xs mb-6">Hello! My name is</p>
                            <h2 className="text-4xl font-bold mb-4 md:mb-12">Kamarudheen</h2>
                            <p className="text-lg mb-6">
                                Join us in making a difference through innovative solutions and community-driven initiatives.
                            </p>
                            {/* <button className="bg-orange-400 text-white px-6 py-3 rounded-lg hover:bg-orange-500 transition duration-300">
                                Get Involved
                            </button> */}
                        </div>

                        {/* Image Section */}
                        <div className="flex items-end justify-center">
                            <img
                                src="images/me.png"
                                alt="Hero"
                                className="w-full h-auto max-w-md object-contain"
                            />
                        </div>
                    </div>
                </div>

                {/* Orange Bottom Box */}
                <div className="flex justify-center w-full">
                    <div className="bg-orange-400 px-10 py-18 text-center w-full md:w-4/5">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
                            <div className='flex items-center md:col-span-2'>
                                <p className="font-semibold text-center md:text-left text-xl md:text-2xl">DESIGN A BETTER WORLD TODAY</p>
                            </div>
                            <div>
                                <button className='bg-white text-black py-3 rounded-3xl w-full'>About Me</button>
                            </div>
                            <div>
                                <button className='bg-black py-3 rounded-3xl w-full'>My Initiatives</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;