import React from 'react'

const AboutUs = () => {
    return (
        <div className="overflow-hidden p-3 md:px-6">
            <div className="border-2 border-gray-300 rounded-3xl p-5 bg-[#1c1c1c]">
                <div className="px-3 md:px-6 py-5 md:py-10">
                    {/* About Us Content */}
                    <h3 className="font-extrabold text-white text-xl md:text-2xl">About Me</h3>

                    <p className="text-white text-lg md:text-xl mt-5 md:mt-10">
                        I&apos;m Kamarudheen CTO of Ecotonic Automation Solutions and Founder & CEO of RouteFense. I work where code, control, and chaos collide.
                        At Ecotonic, I lead tech innovation in smart automation building secure, intelligent systems for modern homes and businesses.
                        At RouteFense, we hunt vulnerabilities. I run black-box pentests and red team ops to simulate real world attacks and expose weaknesses.
                        I break systems to make them stronger whether in physical automation or digital warfare.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutUs