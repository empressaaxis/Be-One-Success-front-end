import React from 'react'

const Apply = () => {
  return (
    <div className='w-full h-full bg-[rgb(24,39,71)]'>
        <div className='w-full h-[70px] bg-[#0081a7] '>
            <h1 className='text-[25px] font-bold text-white ml-[340px]  pt-2'><span className='font-light'>Hi</span> Jane Doe!</h1>
        </div>
        <div className='w-[600px] h-[670px] mt-20 rounded-[20px] bg-[#e5e5e5] ml-[600px] pt-[10px] px-10'>
            <h1 className='font-semibold text-[30px] text-center'>Become a mentor</h1>
            <div className='w-full flex justify-between mb-5'>
                <div className='flex flex-col'>
                    <label className='mb-2'>Phone Number</label>
                    <input className='border-[1px] border-[rgb(24,39,71)] w-[250px] h-[40px] p-2 rounded-[10px] bg-[#e5e5e5]' />
                </div>
                <div className='flex flex-col'>
                    <label className='mb-2'> Address</label>
                    <input className='border-[1px] border-[rgb(24,39,71)] w-[250px] h-[40px] p-2 rounded-[10px] bg-[#e5e5e5]' />
                </div>
            </div>
            <div className='w-full flex justify-between mb-5'>
                <div className='flex flex-col'>
                    <label className='mb-2'>City</label>
                    <input className='border-[1px] border-[rgb(24,39,71)] w-[250px] h-[40px] p-2 rounded-[10px] bg-[#e5e5e5]' />
                </div>
                <div className='flex flex-col'>
                    <label className='mb-2'>Country</label>
                    <input className='border-[1px] border-[rgb(24,39,71)] w-[250px] h-[40px] p-2 rounded-[10px] bg-[#e5e5e5]' />
                </div>

            </div>

            <div className='w-full flex justify-between mb-5'>
                <div className='flex flex-col'>
                    <label className='mb-2'>Certifications</label>
                    <textarea placeholder='Tell List of certifications you have.' className='border-[1px] border-[rgb(24,39,71)] w-[250px] h-[100px] p-2 rounded-[10px] bg-[#e5e5e5]' ></textarea>
                </div>
                <div className='flex flex-col'>
                    <label className='mb-2'>Trainings</label>
                    <textarea placeholder='Tell some of the trainings that you attended or provided for the role.' className='border-[1px] border-[rgb(24,39,71)] w-[250px] h-[100px] p-2 rounded-[10px] bg-[#e5e5e5]'></textarea>
                </div>

            </div>
            <div className='w-full flex justify-between mb-5'>
                <div className='flex flex-col'>
                    <label className='mb-2'>Tell us about your self.</label>
                    <textarea placeholder='Tell us about your yourself under 500 words.' className='border-[1px] border-[rgb(24,39,71)] w-[250px] h-[100px] p-2 rounded-[10px] bg-[#e5e5e5]' ></textarea>
                </div>
                <div className='flex flex-col'>
                    <label className='mb-2'>Upload</label>
                    <input type='file' multiple className='border-[1px] border-[rgb(24,39,71)] w-[250px] h-[49px] p-2 rounded-[10px] bg-[#e5e5e5]' />
                    <p className='w-[250px] font-light text-[13px]'>Upload all certifications that you listed and the supporting documents if any.</p>
                </div>

            </div>
            <button className='w-full h-[40px] rounded-[10px] bg-[#006494] text-white mt-10'>Submit</button>
        </div>
    </div>
  )
}

export default Apply