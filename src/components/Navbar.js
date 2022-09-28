import React, { useState } from 'react'
import { CgMenuRight, CgClose } from 'react-icons/cg';

const Navbar = () => {
    const [isNavOpen, setIsNavOpened] = useState(false);

    const openNav = () => {
        setIsNavOpened(true);
    }

    const closeNav = () => {
        setIsNavOpened(false);
    }

  return (
    <>
        <div className='w-full flex justify-center items-center bg-[#182747] h-[70px]'>
            <div className='w-[1300px] flex flex-row justify-between px-[20px]'>
                <h1 className='text-[#e7ab21] font-bold md:flex md:items-center'>Be-One</h1>
                <div className='w-[35%] hidden md:flex md:flex-row md:items-center md:justify-between md:block'>
                    <span className='text-white'>Home</span>
                    <span className='text-white'>About Us</span>
                    <span className='text-white'>Our Services</span>
                    <span className='text-white'>News</span>
                </div>
                <div>
                    <button className='w-[150px] h-[40px] bg-[#e7ab21] rounded-[10px] hidden md:block text-white transition duration-0 ease-in-out md:hover:duration-200'>
                        Sign Up
                    </button>
                    <button className='inline md:hidden' onClick={openNav}>
                        <CgMenuRight size={24} color='#0072BB' />
                    </button>
                </div>
            </div>
        </div>
        {
            isNavOpen ? 
            <div className='w-full h-full absolute top-0 left-0 bg-[#182747]'>
                <button onClick={closeNav} className='absolute top-5 right-5'>
                    <CgClose size={20} color='#0072BB' />
                </button>
                <h1 className='text-[#e7ab21] font-bold m-4'>Be-One</h1>
                <div className='mx-5 '>
                    <p className='my-2 text-white'>Home</p>
                    <p className='my-2 text-white'>About Us</p>
                    <p className='my-2 text-white'>News</p>
                    <p className='my-2 text-white'>Our Services</p>
                </div>

                <button className='w-[150px] h-[40px] bg-[#e7ab21] rounded-[10px] m-5 text-white transition duration-0 ease-in-out md:hover:duration-200'>
                    Sign Up
                </button>
            </div> : null
        }
    </>
  )
}

export default Navbar