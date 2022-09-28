import React from 'react'

const Login = () => {
  return (
    <div className='w-full flex justify-center items-center bg-[#182747]'>
        <div className='w-[1300px] h-[600px] px-[20px] mt-[100px] items-center justify-between'>
            <h1 className='text-white text-[25px] text-center mb-[30px] font-semibold'>Login</h1>
            <div className='w-[700px] min-h-[400px] mx-auto rounded-[20px] bg-[#006494] '>
                <div className='flex flex-col w-[80%] mx-auto '>
                    <label className='text-white text-[18px] mb-[10px] mt-[30px]'>Email</label>
                    <input type='email' className='h-[50px] rounded-[5px] p-[10px]' placeholder='Eg: example@example.com' />
                </div>
                <div className='flex flex-col w-[80%] mx-auto '>
                    <label className='text-white text-[18px] mb-[10px] mt-[30px]'>Password</label>
                    <input type='password' className='h-[50px] rounded-[5px] p-[10px]' placeholder='Eg: Password123!' />
                </div>
                <button className='w-full mb-[20px] md:w-[150px] h-[40px] bg-[#e7ab21] rounded-[10px] text-white mt-[30px]'>
                    Sign Up
                </button>
            </div>
        </div>
    </div>
  )
}

export default Login
