import React from 'react'

const Initiatives = () => {
    return (
        <div className="w-full">
            <div className='w-full bg-white text-black pb-12 md:pb-24'>
                {/* Heading */}
                <div className="flex justify-center py-12 md:py-24">
                    <h1 className='text-4xl md:text-5xl lg:text-7xl border-b-8 border-black inline-block'>
                        INITIATIVES
                    </h1>
                </div>

                {/* Initiatives Box */}
                <div className="px-6 md:px-12 lg:px-24">
                    <div className='bg-black text-white rounded-lg shadow-lg p-6 md:p-12'>

                        {/* ECOTONICS */}
                        <div className='border-x-2 border-white p-6 mb-12 text-center lg:text-left'>
                            <p className='text-3xl md:text-4xl'>ECOTONICS</p>
                            <p className='mt-6 lg:text-lg'>
                                Ecotonics is a smart home and industrial automation company offering energy-efficient, secure, and intelligent automation solutions tailored to modern living and industrial control systems.
                            </p>
                            <a
                                href="https://ecotonics.in"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <button className='px-12 py-3 bg-white rounded-2xl mt-6 md:mt-12 text-black hover:bg-gray-200 transition'>
                                    Visit Website
                                </button>
                            </a>
                        </div>

                        {/* HACKCORE */}
                        <div className='border-x-2 border-white p-6 mt-12 text-center lg:text-right'>
                            <p className='text-3xl md:text-4xl'>HACKCORE</p>
                            <p className='mt-6 lg:text-lg'>
                                HackCore is a cybersecurity firm specializing in penetration testing and digital risk assessments. We help businesses safeguard their data, applications, and infrastructure from modern cyber threats.
                            </p>
                            <a
                                href="https://hackcore.in"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <button className='px-12 py-3 bg-white rounded-2xl mt-6 md:mt-12 text-black hover:bg-gray-200 transition'>
                                    Visit Website
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Initiatives