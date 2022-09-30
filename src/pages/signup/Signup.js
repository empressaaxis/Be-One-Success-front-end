import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <div className='w-full flex justify-center items-center bg-[#182747]'>
        <div className='w-[1300px] h-[1000px] px-[20px] mt-[100px] items-center justify-between'>
            <h1 className='text-white text-[25px] text-center mb-[30px] font-semibold'>Register</h1>
            <div className='w-[500px] min-h-[700px] mx-auto rounded-[20px] bg-[#006494] '>
                <div className='flex flex-col w-[80%] mx-auto '>
                    <label className='text-white text-[18px] mb-[10px] mt-[30px]'>Names</label>
                    <input type='text' className='h-[50px] rounded-[5px] p-[10px]' placeholder='Eg: John Doe' />
                </div>
                <div className='flex flex-col w-[80%] mx-auto '>
                    <label className='text-white text-[18px] mb-[10px] mt-[30px]'>Email</label>
                    <input type='email' className='h-[50px] rounded-[5px] p-[10px]' placeholder='Eg: example@example.com' />
                </div>
                <div className='flex flex-col w-[80%] mx-auto '>
                    <label className='text-white text-[18px] mb-[10px] mt-[30px]'>Password</label>
                    <input type='password' className='h-[50px] rounded-[5px] p-[10px]' placeholder='Eg: Password123!' />
                </div>
                <div className='flex flex-col w-[80%] mx-auto '>
                    <label className='text-white text-[18px] mb-[10px] mt-[30px]'>Confirm Password</label>
                    <input type='text' className='h-[50px] rounded-[5px] p-[10px]' placeholder='Eg: Password123!' />
                </div>
                <div className='flex flex-col w-[80%] mx-auto'>
                    <button className='w-full mb-[20px] h-[40px] bg-[#e7ab21] rounded-[10px] text-white mt-[30px]'>
                        Sign Up
                    </button>
                    <p className='text-white'>You have an account? <Link to='/login' className='text-[#e7ab21]'> Login</Link></p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Signup