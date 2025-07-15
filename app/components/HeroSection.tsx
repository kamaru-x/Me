import React from 'react';

const HeroSection = () => {
    return (
        <div className="w-full  flex flex-col">
            {/* Header */}
            <div className="p-5 w-full">
                <h1 className="text-3xl font-extrabold text-black">K_</h1>
            </div>

            {/* Main Section */}
            <div className="flex-1 w-full px-5 md:px-0 mt-12 flex flex-col md:block">
                {/* Grid - vertically centered on mobile using flex */}
                <div className='flex flex-col justify-center items-center flex-1 md:block'>
                    <p className='text-black text-center text-2xl'>Hi, I&apos;m</p>
                    <h1 className='text-black text-4xl md:text-5xl lg:text-9xl text-center'>
                        KAMARUDHEEN
                    </h1>
                    <p className='text-black my-10 text-center'>Join us in making a difference through innovative solutions and community-driven initiatives.</p>
                </div>

                <div className="flex justify-center w-full">
                    <div className="flex items-end justify-center">
                        <img
                            src="images/me.png"
                            alt="Hero"
                            className="w-full h-auto max-w-7xl object-contain"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;