import React from 'react'

function Frame3() {
    return (
        // Mian Div
        <div className='w-screen realtive bg-[#F5F6FA] overflow-x-hidden'>
            {/* content Box */}
            <div className='w-[95%] mx-auto pt-12 flex flex-col items-center justify-center gap-16  '>
                {/* upperdiv */}
                <div className='flex flex-col items-center justify-between gap-[25px] max-w-[75%] mx-auto'>
                    {/* how it work div */}
                    <div className='bg-white py-[10px] px-[35px] rounded-[23px] font-sans font-[700] text-[20px] text-[#239c0c] '>
                        How it works ?
                    </div>
                    {/* heading + para div */}
                    <div className='flex flex-col gap-4 text-center'>
                        <h3 className='text-[#2d2d2d] font-bold sm:text-5xl text-3xl font-sans '>Getting Started is easy</h3>
                        <p className='font-semibold text-[#2d2d2d] font-sans text-2xl'>
                            How carboncrunch SAAS works
                        </p>
                    </div>
                </div>
                {/* middle Div */}
                <div className='w-[95%]  mx-auto relative  '>
                    {/* Grid Div */}
                    <div className='w-[100%] p-6 grid sm:grid-cols-3 bg-white gap-7 '>
                        {/* div1 */}
                        <div className='w-[100%] flex flex-col items-start gap-2 group'>
                            {/* Green Line */}
                            <div className='w-[40%] h-1 bg-transparent group-hover:bg-[#28b30e] rounded-2xl'></div>
                            <div className='flex flex-col gap-2'>
                                <div className='flex flex-col gap-3'>
                                    <h2 className='font-bold group-hover:text-[#28B30E]'>01</h2>
                                    <h2 className='font-bold group-hover:text-[#28B30E]'>Track and Manage your Net Zero Pathway</h2>
                                </div>
                                <p>Set decarbonisation targets,obtain insights on the amount of emissions to be emitted by the target y...</p>
                            </div>
                        </div>

                        {/* 2 */}
                        <div className='w-[100%] flex flex-col items-start gap-2 group'>
                            {/* Green Line */}
                            <div className='w-[40%] h-1 bg-transparent group-hover:bg-[#28b30e] rounded-2xl '></div>
                            <div className='flex flex-col gap-2'>
                                <div className='flex flex-col gap-3'>
                                    <h2 className='font-bold group-hover:text-[#28B30E] '>02</h2>
                                    <h2 className='font-bold group-hover:text-[#28B30E] '>Track and Manage your Net Zero Pathway</h2>
                                </div>
                                <p>Set decarbonisation targets,obtain insights on the amount of emissions to be emitted by the target y...</p>
                            </div>
                        </div>
                        {/* 3 */}

                        <div className='w-[100%] flex flex-col items-start group gap-2'>
                            {/* Green Line */}
                            <div className='w-[40%] h-1 bg-transparent group-hover:bg-[#28b30e]   rounded-2xl '></div>
                            <div className='flex flex-col gap-2'>
                                <div className='flex flex-col gap-3'>
                                    <h2 className='font-bold  group-hover:text-[#28B30E] '>03</h2>
                                    <h2 className='font-bold  group-hover:text-[#28B30E] '>Track and Manage your Net Zero Pathway</h2>
                                </div>
                                <p>Set decarbonisation targets,obtain insights on the amount of emissions to be emitted by the target y...</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* lower div */}
                <div className='xlg:w-[85%] sm:w-[90%] pt-8'>
                    {/* outer green div */}
                    <div className='w-[100%] overflow-y-hidden  relative sm:pt-10 sm:pl-10 rounded-l-[20px] rounded-r-[20px] sm:pr-10 pt-5 pl-5 pr-5 bg-gradient-to-b from-[#28B30E] to-white '>
                        <img src="./Employee.png" className=' rounded-2xl w-full object-cover' alt="EmployeeImg" loading='lazy' />
                        <div class="absolute inset-x-0 bottom-0 h-50 bg-gradient-to-t from-white/80 to-transparent"></div>

                    </div>
                </div>
            </div>


        </div>
    )
}

export default Frame3