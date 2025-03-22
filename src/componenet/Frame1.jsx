import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';

function Frame1() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    // Main Div
    <div className='w-screen pb-8 relative bg-[#F5F6FA] overflow-x-hidden'>
      {/* content div */}
      <div className='w-[95%] mx-auto relative flex items-center justify-center flex-col gap-5 py-8'>
        {/* nav */}
        <nav className='relative flex items-center mb-8 xs:mb-4 justify-between w-[100%] xlg:gap-[150px] xlg:justify-end gapmanage'>
          {/* Mobile Menu Button */}
          <div className='flex xlg:hidden items-center justify-center bg-[#D6FFD0] py-2 px-4 rounded-2xl hover:bg-[#28B30E] cursor-pointer' onClick={toggleMenu}>
            <FaBars size={24} color="black" />
          </div>

          {/* Desktop Menu */}
          <ul className='hidden xlg:flex gap-6 text-[18px] bg-white px-2 rounded-2xl'>
            <li className='p-3 text-black hover:bg-[#D6FFD0] hover:text-[#28B30E] font-semibold cursor-pointer' onClick={closeMenu}>Home</li>
            <li className='p-3 text-black hover:bg-[#D6FFD0] hover:text-[#28B30E] font-semibold cursor-pointer' onClick={closeMenu}>Services</li>
            <li className='p-3 text-black hover:bg-[#D6FFD0] hover:text-[#28B30E] font-semibold cursor-pointer' onClick={closeMenu}>Blog</li>
            <li className='p-3 text-black hover:bg-[#D6FFD0] hover:text-[#28B30E] font-semibold cursor-pointer' onClick={closeMenu}>About Us</li>
            <li className='p-3 text-black hover:bg-[#D6FFD0] hover:text-[#28B30E] font-semibold cursor-pointer' onClick={closeMenu}>Contact</li>
          </ul>

          {/* RightAlign Buttons */}
          <div className='flex gap-3 items-center align-baseline justify-center text-[18px]'>
            <button className='bg-[#D6FFD0] rounded-lg px-[22px] py-[10px] text-[#28B30E] font-bold'>Login</button>
            <button className='bg-[#28B30E] rounded-lg px-[22px] py-[10px] text-black font-bold'>Book Demo</button>
          </div>
        </nav>

        {/* Mobile Menu (Dropdown) */}
        {isOpen && (
          <ul className='xlg:hidden absolute top-16 z-[10] left-0 w-full bg-white shadow-md flex flex-col gap-4 text-center text-[18px] rounded-b-2xl'>
            <li className='p-3 text-black hover:bg-[#D6FFD0] hover:text-[#28B30E]  font-semibold cursor-pointer' onClick={closeMenu}>Home</li>
            <li className='p-3 text-black hover:bg-[#D6FFD0] hover:text-[#28B30E]  font-semibold cursor-pointer' onClick={closeMenu}>Services</li>
            <li className='p-3 text-black hover:bg-[#D6FFD0] hover:text-[#28B30E]  font-semibold cursor-pointer' onClick={closeMenu}>Blog</li>
            <li className='p-3 text-black hover:bg-[#D6FFD0] hover:text-[#28B30E]  font-semibold cursor-pointer' onClick={closeMenu}>About Us</li>
            <li className='p-3 text-black  hover:bg-[#D6FFD0] hover:text-[#28B30E] font-semibold cursor-pointer' onClick={closeMenu}>Contact</li>
          </ul>
        )}

        {/* Earth div */}
        <div className='relative w-[100%] mx-auto flex items-center justify-center'>
          {/* Img Container */}
          <div className='w-[100%] z-[2] relative flex justify-center items-center rounded-2xl bg-[#28B30E]'>
           
            <img src="../public/assest/Earth.png" className='w-[95%] mx-auto' alt="Earth" />
          </div>
          <div className='absolute z-[4] text-center xs:space-y-4 xxs:space-y-1'>
            <h3 className='font-extrabold text-[#2D2D2D] xlg:text-6xl sm:text-5xl xs:text-3xl xxs:text-xl text-[18px]'>GHG Accounting</h3>
            <h3 className='font-extrabold text-[#2D2D2D] xlg:text-6xl sm:text-5xl xs:text-3xl xxs:text-xl text-[18px]'>Scope 1, Scope 2, Scope 3</h3>
            <p className='font-semibold text-[#2D2D2D] mx-auto xs:text-lg max-w-[65%] text-center xxs:text-[16px] text-sm'>
              Track minimize, offset, and report your carbon emissions effortlessly to drive faster decarbonization progress.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Frame1;
