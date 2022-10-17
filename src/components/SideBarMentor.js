import React from 'react'
import { FaFileAlt, FaHome, FaPen, FaThLarge, FaLock } from 'react-icons/fa'
import { BsFillTelephoneFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

function SideBarMentor() {
  return (
    <div className='bg-[#006494] w-[250px] h-[100%] fixed top-0 left-0 flex flex-col justify-between'>
        <h1 className='text-[#e7ab21] text-[25px] font-bold text-center mt-5'>Be One Success</h1>
        <div className='mt-[-50px] ml-8'>
            <Link to='/' className='flex hover:text-[#e7ab21]'>
                <FaHome color='#fff' size={24} />
                <p className='text-white hover:text-[#e7ab21] ml-3'>Home</p>
            </Link>
            <Link to='/student' className='flex mt-[30px]'>
                <FaFileAlt color='#fff' size={24} />
                <p className='text-white ml-3 hover:text-[#e7ab21] '>Students</p>
            </Link> 
            <Link to='/message' className='flex mt-[30px]'>
                <FaThLarge color='#fff' size={20} />
                <p className='text-white ml-3 hover:text-[#e7ab21] '>Messages</p>
            </Link>
        </div>
        <div>
            <Link to='/channels' className='flex mb-20 ml-[22px] w-[200px] h-[50px] bg-[#e7ab21] rounded-md justify-center align-middle pt-3'>
                <BsFillTelephoneFill color='#fff' size={24} />
                <p className='text-white ml-3 hover:text-[#fff] '>Channels</p>
            </Link>
        </div>
    </div>
  )
}

export default SideBarMentor;
