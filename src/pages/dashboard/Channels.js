import React from 'react'

const Channels = () => {
  return (
    <div className='w-full h-full bg-[rgb(24,39,71)]'>
        <div className='w-full h-[70px] bg-[#0081a7] '>
            <h1 className='text-[25px] font-bold text-white ml-[340px]  pt-2'><span className='font-light'>Hi</span> Jane Doe!</h1>
        </div>
        <div className='w-[600px] h-[400px] mt-20 rounded-[20px] bg-[#e5e5e5] ml-[600px] pt-[10px] px-10'>
            <h1 className='font-semibold text-[30px] text-center'>Provide Channels</h1>
            <div className='w-full flex justify-between mt-10 mb-5'>
                <div className='flex flex-col'>
                    <label className='mb-2'>Whatsapp Number</label>
                    <input className='border-[1px] border-[rgb(24,39,71)] w-[250px] h-[40px] p-2 rounded-[10px] bg-[#e5e5e5]' />
                </div>
                <div className='flex flex-col'>
                    <label className='mb-2'>Telephone 1</label>
                    <input className='border-[1px] border-[rgb(24,39,71)] w-[250px] h-[40px] p-2 rounded-[10px] bg-[#e5e5e5]' />
                </div>

            </div>
            
            <div className='w-full flex justify-between mb-5'>
                <div className='flex flex-col'>
                    <label className='mb-2'>Telephone 2</label>
                    <input className='border-[1px] border-[rgb(24,39,71)] w-[250px] h-[40px] p-2 rounded-[10px] bg-[#e5e5e5]' />
                </div>
                <div className='flex flex-col'>
                    <label className='mb-2'>Telephone 3</label>
                    <input className='border-[1px] border-[rgb(24,39,71)] w-[250px] h-[40px] p-2 rounded-[10px] bg-[#e5e5e5]' />
                </div>

            </div>

            <button className='w-full h-[40px] rounded-[10px] bg-[#006494] text-white mt-10'>Submit</button>
        </div>
    </div>
  )
}

export default Channels