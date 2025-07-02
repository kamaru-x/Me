import React from 'react';

const HeroSection = () => {
    return (
        <div className="w-full h-screen p-3 md:px-6">
            <div className="relative h-full rounded-3xl py-5 px-5 md:px-10 md:py-10 overflow-hidden border-5 border-r-15 border-b-15 border-black bg-white flex flex-col">
                {/* Top-left Title */}
                <div>
                    <h1 className="text-3xl font-extrabold text-black">K_</h1>
                </div>

                {/* Centered Text Section */}
                <div className="flex-grow flex items-center justify-center">
                    <div className="text-center space-y-6 text-black">
                        <h1 className="text-4xl md:text-9xl font-extrabold">
                            Hi, I&apos;m <br /> Kamarudheen
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
