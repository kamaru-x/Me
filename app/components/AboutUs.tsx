import React from 'react';

const AboutUs = () => {
    return (
        <div className="w-full p-3 md:px-6 bg-white">
            <div className="relative w-full rounded-3xl py-10 px-5 md:px-10 md:py-15 overflow-hidden border-5 border-r-15 border-b-15 border-black flex flex-col space-y-10">
                {/* Overview Section */}
                <div className="text-black text-center space-y-4">
                    <h2 className="text-3xl md:text-5xl font-bold">About Me</h2>
                    <p className="max-w-3xl mx-auto text-lg">
                        I&apos;m Kamarudheen, a passionate developer, hacker, and tech enthusiast building innovative solutions and impactful digital experiences. My mission is to create clean, efficient, and future-ready systems that solve real-world problems.
                    </p>
                </div>

                {/* Divider */}
                <hr className="border-t-2 border-gray-300 w-full" />

                {/* Mission & Vision */}
                <div className="flex flex-col md:flex-row">
                    {/* Mission */}
                    <div className="w-full md:w-1/2 p-6 text-black text-center space-y-4 md:border-r-2 border-b-2 md:border-b-0 border-gray-300">
                        <h3 className="text-2xl font-bold">Mission</h3>
                        <p>
                            To empower individuals and businesses with cutting-edge automation and smart digital tools, while upholding integrity, simplicity, and impact.
                        </p>
                    </div>

                    {/* Vision */}
                    <div className="w-full md:w-1/2 p-6 text-black text-center space-y-4">
                        <h3 className="text-2xl font-bold">Vision</h3>
                        <p>
                            To become a leading force in technology-driven change by delivering scalable, secure, and user-first solutions that shape a better digital future.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
