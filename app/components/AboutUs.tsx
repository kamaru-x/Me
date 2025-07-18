import React from 'react';

const AboutUs = () => {
    return (
        <div className="w-full">
            <div className='w-full bg-black text-white pb-12 md:pb-24'>
                <div className="flex justify-center py-12 md:py-24">
                    <h1 className='text-4xl md:text-5xl lg:text-7xl border-b-8 border-white inline-block'>
                        INTRODUCTION
                    </h1>
                </div>
                <div className='bg-white text-black mx-6 md:mx-24 p-6 md:p-12 rounded-lg shadow-lg'>
                    <div>
                        <p className='text-center'>
                            I am a passionate software developer with a focus on creating innovative solutions that make a difference. My journey in technology is driven by a commitment to excellence and a desire to contribute positively to the community.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
