import React from 'react'
import { Link } from 'react-router-dom'

const MentorHome = () => {
  return (
    <div className='bg-[rgb(24,39,71)] w-full h-full'>
      <div className='w-full h-[70px] bg-[#0081a7] '>
        <h1 className='text-[25px] font-bold text-white ml-[340px] pt-2'><span className='font-light'>Hi Mentor</span> Jane Doe!</h1>
      </div>
      <div className='w-[1100px] pb-20 mx-auto mt-10'>
        <h1 className='text-white text-[45px] font-bold mb-5'>Mentor</h1>
        <div className='w-[400px] h-[180px] rounded-[20px] pt-5 bg-[#e5e5e5]'>
          <h1 className='font-semibold text-[24px] mx-10'>No Application found.</h1>
          <p className='mx-10 font-light mt-5'>You have not yet applied to any application, please apply at any open application <Link className='text-[#006494]' to='/apply'>Here</Link>.</p>
        </div>
      </div>
    </div>
  )
}

export default MentorHome