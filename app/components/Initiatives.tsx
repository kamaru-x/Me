import React from 'react'

const Initiatives = () => {
    return (
        <div className="w-full p-3 md:px-6 text-black">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                <div className='w-full h-100 flex flex-col items-center justify-center text-center border-5 border-r-15 border-b-15 border-black rounded-3xl'>
                    <p className='text-2xl font-bold'>POSTCRAFT</p>
                    <p>Social Media Management Platform</p>
                </div>

                <div className='w-full h-100 flex flex-col items-center justify-center text-center border-5 border-r-15 border-b-15 border-black rounded-3xl'>
                    <p className='text-2xl font-bold'>DEVTOOLS</p>
                    <p>Developer Productivity Suite</p>
                </div>

                <div className='w-full h-100 flex flex-col items-center justify-center text-center border-5 border-r-15 border-b-15 border-black rounded-3xl'>
                    <p className='text-2xl font-bold'>CLOUDOPS</p>
                    <p>Cloud Infrastructure Management</p>
                </div>
            </div>
        </div>
    )
}

export default Initiatives