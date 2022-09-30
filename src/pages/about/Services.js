import React from 'react'

const Services = () => {
  return (
    <>
    <h1 className='text-white text-[40px] font-bold mt-[40px] mb-[60px] mx-auto text-center'>What we offer.</h1>
    <div className='w-full flex justify-center items-center bg-[#182747]'>
        <div className='w-[1300px] h-[900px] flex flex-row justify-around px-[20px] mt-10'>
            <div className='w-[400px] h-[600px] bg-[#006494] rounded-[10px]'>
                <img src='https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80' className='w-[350px] h-[250p] rounded-[10px] object-cover mx-auto mt-5' />
                <h1 className='text-white text-[30px] text-center font-bold mt-[20px] '>Business Mentorship</h1>
                <p className='text-white font-light px-10 text-center mt-[20px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever .</p>
                <button className='w-[150px] h-[40px] bg-[#e7ab21] rounded-[10px] ml-[110px] text-white mt-[30px]'>
                    Apply
                </button>
            </div>
            <div className='w-[400px] h-[600px] bg-[#006494] rounded-[10px]'>
                <img src='https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c3R1ZGVudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60' className='w-[350px] h-[250p] rounded-[10px] object-cover mx-auto mt-5' />
                <h1 className='text-white text-[30px] text-center font-bold mt-[20px] '>Scholarship Abroad</h1>
                <p className='text-white font-light px-10 text-center mt-[20px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever .</p>
                <button className='w-[150px] h-[40px] bg-[#e7ab21] rounded-[10px] ml-[110px] text-white mt-[30px]'>
                    Apply
                </button>
            </div>
        </div>
    </div>
</>
  )
}

export default Services