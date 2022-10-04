import React from 'react';
import ScholarshipImage from '../../assets/landing/scholar.jpg'
import Amazon from '../../assets/landing/amazon.png'
import Boy from '../../assets/landing/boy.webp';
import BusinessImage from '../../assets/landing/business.jpg';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <>
        <div className='w-full flex justify-center items-center bg-[#182747]'>
            <div className='w-[1300px] px-[20px] mt-[100px] md:flex flex-row justify-between'>
                <div className=' md:flex md:flex-col md:align-middle mt-[5px] md:mt-[20px]'>
                    <h1 className='font-bold text-[43px] text-center font-[roboto] md:text-left md:w-[400px] md:text-[50px] text-white'>We bring success on your door steps</h1>
                    <p className='md:w-[400px] mt-[30px] text-center md:text-left text-white'>Many students find reliable and safe for their career pursuation and use our services, we are game changers.</p>
                    <Link to='/signup'>
                        <button className='w-full mb-[20px] md:w-[150px] h-[40px] bg-[#e7ab21] rounded-[10px] text-black mt-[30px]'>
                            Sign Up Free
                        </button>
                    </Link>
                </div>
                <div className='flex flex-row justify-around mt-[20px]'>
                    <img src={ScholarshipImage} className='rounded-[20px] md:w-[220px] object-cover md:h-[500px] mr-2' alt='graduationImg' />
                    <img src='https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80' className='rounded-[20px] md:w-[220px] object-cover md:h-[500px] mr-2 mt-[-100px]' alt='graduationImg' />
                    <img src='https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80' className='rounded-[20px] md:w-[220px] object-cover md:h-[500px]' alt='graduationImg' />
                </div>
            </div>
            
        </div>
        <div className='w-full justify-center items-center bg-[#182747] pt-[40px] h-[900px]'>
            <div className='mt-[50px]'>
                <h1 className='text-[30px] text-center text-white'>Over 10k students trust us.</h1>
                <div className='md:flex flex-row md:flex-wrap md:w-[1300px] justify-between mx-auto mt-[70px] px-[20px]'>
                    <div className='md:w-[32%] min-h-[200px] rounded-[10px] shadow bg-[#006494] text-white p-[20px]'>
                        <div className='flex flex-row m-[10px]'>
                            <img src={Boy} className='w-[80px] h-[80px] object-cover rounded-full' alt='boy' />
                            <div className='mx-[10px] mt-[8px]'>
                                <h1 className='font-bold text-[20px]'>John Doe</h1>
                                <p>Student ad CMU Netherlands</p>
                            </div>
                        </div>
                        <p>Hello,  If you can suppress the urge to retch long enough to give it a chance, I really think you’ll wonder how you ever </p>
                    </div>
                    <div className='md:w-[32%] min-h-[200px] rounded-[10px] shadow bg-[#006494] text-white mt-[15px] p-[20px]'>
                        <div className='flex flex-row m-[10px]'>
                            <img src={Boy} className='w-[80px] h-[80px] object-cover rounded-full' alt='boy' />
                            <div className='mx-[10px] mt-[8px]'>
                                <h1 className='font-bold text-[20px]'>John Doe</h1>
                                <p>Student ad CMU Netherlands</p>
                            </div>
                        </div>
                        <p>Hello,  If you can suppress the urge to retch long enough to give it a chance, I really think you’ll wonder how you ever worked with CSS any other way.</p>
                    </div>
                    <div className='md:w-[32%] min-h-[200px] rounded-[10px] shadow bg-[#006494] text-white p-[20px] mt-[15px]'>
                        <div className='flex flex-row m-[10px]'>
                            <img src={Boy} className='w-[80px] h-[80px] object-cover rounded-full' alt='boy' />
                            <div className='mx-[10px] mt-[8px]'>
                                <h1 className='font-bold text-[20px]'>John Doe</h1>
                                <p>Student ad CMU Netherlands</p>
                            </div>
                        </div>
                        <p>Hello,  If you can suppress the urge to retch long enough to give it a chance, I really think you’ll wonder how you ever worked with CSS any other way.</p>
                    </div>
                    <div className='md:w-[32%] min-h-[200px] rounded-[10px] shadow bg-[#006494] text-white mt-[15px] p-[20px]'>
                        <div className='flex flex-row m-[10px]'>
                            <img src={Boy} className='w-[80px] h-[80px] object-cover rounded-full' alt='boy' />
                            <div className='mx-[10px] mt-[8px]'>
                                <h1 className='font-bold text-[20px]'>John Doe</h1>
                                <p>Student ad CMU Netherlands</p>
                            </div>
                        </div>
                        <p>Hello,  If you can suppress the urge to retch long enough to give it a chance, I really think you’ll wonder how you ever worked with CSS any other way.</p>
                    </div>
                    <div className='md:w-[32%] min-h-[200px] rounded-[10px] shadow bg-[#006494] text-white p-[20px] mt-[15px]'>
                        <div className='flex flex-row m-[10px]'>
                            <img src={Boy} className='w-[80px] h-[80px] object-cover rounded-full' alt='boy' />
                            <div className='mx-[10px] mt-[8px]'>
                                <h1 className='font-bold text-[20px]'>John Doe</h1>
                                <p>Student ad CMU Netherlands</p>
                            </div>
                        </div>
                        <p>Hello,  If you can suppress the urge to retch long enough to give it a chance, I really think you’ll wonder how you ever worked with CSS any other way.</p>
                    </div>
                    <div className='md:w-[32%] min-h-[200px] rounded-[10px] shadow bg-[#006494] text-white p-[20px] mt-[15px]'>
                        <div className='flex flex-row m-[10px]'>
                            <img src={Boy} className='w-[80px] h-[80px] object-cover rounded-full' alt='boy' />
                            <div className='mx-[10px] mt-[8px]'>
                                <h1 className='font-bold text-[20px]'>John Doe</h1>
                                <p>Student ad CMU Netherlands</p>
                            </div>
                        </div>
                        <p>Hello,  If you can suppress the urge to retch long enough to give it a chance, I really think you’ll wonder how you ever worked with CSS any other way.</p>
                    </div>
                </div>
            </div>
            <div>
            </div>
        </div>
        <div className='w-full flex justify-center items-center bg-[#182747]'>
            <div className='w-[1300px] px-[20px] mt-[100px] md:flex flex-row-reverse h-[900px] pt-[150px] justify-between'>
            <div className=' md:flex md:flex-col md:align-middle mt-[5px] md:mt-[100px]'>
                    <h1 className='font-bold text-[43px] text-center font-[roboto] md:text-left md:w-[400px] md:text-[50px] text-white'>We help you build your business successfully</h1>
                    <p className='md:w-[400px] mt-[30px] text-center md:text-left text-white'>Many students find reliable and safe for their career pursuation and use our services, we are game changers.</p>
                    <Link to='/signup'>
                    <button className='w-full mb-[20px] md:w-[150px] h-[40px] bg-[#e7ab21] rounded-[10px] text-white mt-[30px]'>
                        Sign Up Free
                    </button>
                    </Link>
                </div>
                <div className=''>
                    <img src={BusinessImage} className='rounded-[20px] md:w-[600px] md:h-[600px] rounded-[100%] object-cover' alt='graduationImg' />
                </div>
            </div>
        </div>

        <div className='w-full flex justify-center items-center bg-[#182747]'>
            <div className='w-[1300px] px-[20px] mt-[20px] h-[300px] pt-[20px] items-center justify-center pb-5'>
                    <h1 className='text-[30px] text-center text-white font-thin'>Over 1000 business trust us.</h1>
                    <div className='md:flex w-full justify-between mt-[60px]'>
                        <img src={Amazon} className='w-[140px] h-[40px]' alt='Amazon' />
                        <img src={Amazon} className='w-[140px] h-[40px]' alt='Amazon' />
                        <img src={Amazon} className='w-[140px] h-[40px]' alt='Amazon' />
                        <img src={Amazon} className='w-[140px] h-[40px]' alt='Amazon' />
                        <img src={Amazon} className='w-[140px] h-[40px]' alt='Amazon' />
                    </div>
            </div>
        </div>

        <div className='w-full flex justify-center items-center bg-[#182747]'>
            <div className='w-[1300px] h-[700px] items-center justify-center pb-5'>
                <h1 className='text-[30px] text-center text-white font-thin'>Current Scholarships.</h1>
                <div className='bg-[#006494] flex justify-center items-center rounded-[10px] w-[700px] h-[350px] mx-auto mt-20'>
                    <div className='flex flex-row w-[90%]'>
                        <img src={Boy} className='w-[260px] h-[300px] object-cover rounded-[10px]' alt='ing' />
                        <div className='ml-5 mt-5'>
                            <h1 className='text-white font-bold text-[30px]'>University of Rwanda</h1>
                            <p className='text-white mt-[20px]'>Lorem ipsum hsdf ksjdhf skjdfh sjfhskdjhf sdhsjkg sdgsjkdhjs sjdfhsdkjfhds jfhkjsdhf sdjkhf sdkjhfk jsdhfs djkfkjsdhf kjsdhf kjsdhf jkshdf kjsdhfskjdhf jsdhfs djkfkjsdhf kjsdhf kjsdhf jkshdf kjsdhfskjdhf </p>
                        <Link to='/scholar-details'>
                            <button className='bg-[#e7ab21] w-full md:w-[150px] text-white font-medium h-[60px] rounded-[10px] mt-[30px]'>
                                View
                            </button>
                        </Link> 
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className='w-full flex justify-center items-center bg-[#182747]'>
        <div className='w-[1300px] h-[700px] px-[20px] mt-[50px] items-center justify-between'>
            <h1 className='text-white text-[25px] text-center mb-[30px] font-light'>Contact Us</h1>
            <div className='w-[500px] min-h-[400px] mx-auto rounded-[20px] bg-[#006494] '>
                <div className='flex flex-col w-[80%] mx-auto '>
                    <label className='text-white text-[18px] mb-[10px] mt-[30px]'>Names</label>
                    <input type='names' className='h-[50px] rounded-[5px] p-[10px]' placeholder='Eg: John Doe' />
                </div>
                <div className='flex flex-col w-[80%] mx-auto '>
                    <label className='text-white text-[18px] mb-[10px] mt-[30px]'>Email</label>
                    <input type='email' className='h-[50px] rounded-[5px] p-[10px]' placeholder='Eg: example@example.com' />
                </div>
                <div className='flex flex-col w-[80%] mx-auto '>
                    <label className='text-white text-[18px] mb-[10px] mt-[30px]'>Message</label>
                    <textarea type='text' className='h-[100px] rounded-[5px] p-[10px]' placeholder='Eg: Your message ...' />
                </div>
                <div className='flex flex-col w-[80%] mx-auto'>
                    <button className='w-full mb-[20px] h-[40px] bg-[#e7ab21] rounded-[10px] text-white mt-[30px]'>
                        Send Message
                    </button>
                </div>
            </div>
        </div>
        </div>

    </>
  )
}

export default Landing