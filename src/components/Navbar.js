import React, { useState } from 'react'
import { CgMenuRight, CgClose } from 'react-icons/cg';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Boy from '../assets/landing/boy.webp';

const Navbar = () => {
    const [isNavOpen, setIsNavOpened] = useState(false);
    const [isAdOn, setIsAdOn] = useState(true);

    const openNav = () => {
        setIsNavOpened(true);
    }

    const closeNav = () => {
        setIsNavOpened(false);
    }

  return (
    <>
        { isAdOn ? <div className=' bg-[#006494] w-full flex justify-center items-center '>
            <div className='w-[1300px] flex flex-row justify-between mx-auto'>
                <div className='w-[800px] flex flex-row justify-around'>
                    <img src={Boy} className='w-[70px] h-[70px] rounded-full object-cover' alt='boy' />
                    <h1 className='text-white font-light ml-10 mt-5'>An Active Scholarship at Massachussete University giving out 10 scholarships.</h1>
                </div>
                <button onClick={() => setIsAdOn(false)} className='text-white hover:text-[#e7ab21]'>
                    X
                </button>
            </div>
        </div> : null }
        <div className='w-full flex justify-center items-center bg-[#182747] h-[70px]'>
            <div className='w-[1300px] flex flex-row justify-between px-[20px]'>
                <h1 className='text-[#e7ab21] font-bold md:flex md:items-center'>Be-One</h1>
                <div className='w-[35%] hidden md:flex md:flex-row md:items-center md:justify-between md:block'>
                    <NavLink to='/' className='text-white hover:text-[#e7ab21] cursor-pointer'>Home</NavLink>
                    <NavLink to='about' className='text-white hover:text-[#e7ab21] cursor-pointer'>About Us</NavLink>
                    <NavLink to='services'><span className='text-white hover:text-[#e7ab21] cursor-pointer'>Our Services</span></NavLink>
                    <NavLink to='news'><span className='text-white hover:text-[#e7ab21] cursor-pointer'>News</span></NavLink>
                </div>
                <div className='flex flex-row'>
                    
                    <Link to='/signup'>
                    <button className='w-[150px] h-[40px] bg-[#e7ab21] rounded-[10px] hidden md:block text-white transition duration-0 ease-in-out md:hover:duration-200'>
                        Sign Up
                    </button>
                    </Link>
                        <button className='inline md:hidden' onClick={openNav}>
                            <CgMenuRight size={24} color='#0072BB' />
                        </button>
                    
                </div>
            </div>
            <button className='w-[150px] h-[40px] bg-[#e7ab21] rounded-[10px] text-[#000]'>
                Donate
            </button>
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

                <Link to='/'>
                <button className='w-[150px] h-[40px] bg-[#e7ab21] rounded-[10px] m-5 text-white transition duration-0 ease-in-out md:hover:duration-200'>
                    Sign Up
                </button>
                </Link>
            </div> : null
        }
    </>
  )
}

export default Navbar