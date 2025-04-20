import React from 'react';

const HeroSection = () => {
    return (
        <div className="w-full h-screen p-3 md:px-6">
            <div className="rounded-3xl h-full py-5 px-5 md:px-10 md:py-10 overflow-hidden border-2 border-gray-300 bg-[#1c1c1c]">
                <div>
                    <h1 className='text-3xl font font-extrabold'>K_</h1>
                </div>
                <div className='w-full h-full flex items-center justify-center'>
                    <h1 className="text-3xl md:text-7xl font-extrabold text-center">
                        Hi, I'm <br /> Kamarudheen
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;