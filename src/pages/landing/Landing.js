import React from 'react';
import ScholarshipImage from '../../assets/landing/scholar.jpg'
import Amazon from '../../assets/landing/amazon.png'
import Boy from '../../assets/landing/boy.webp';
import BusinessImage from '../../assets/landing/business.jpg';

const Landing = () => {
  return (
    <>
        <div className='w-full flex justify-center items-center bg-[#182747]'>
            <div className='w-[1300px] px-[20px] mt-[100px] md:flex flex-row justify-between'>
                <div className=' md:flex md:flex-col md:align-middle mt-[5px] md:mt-[20px]'>
                    <h1 className='font-bold text-[43px] text-center font-[roboto] md:text-left md:w-[400px] md:text-[50px] text-white'>We bring success on your door steps</h1>
                    <p className='md:w-[400px] mt-[30px] text-center md:text-left text-white'>Many students find reliable and safe for their career pursuation and use our services, we are game changers.</p>
                    <button className='w-full mb-[20px] md:w-[150px] h-[40px] bg-[#e7ab21] rounded-[10px] text-white mt-[30px]'>
                        Sign Up Free
                    </button>
                </div>
                <div className=''>
                    <img src={ScholarshipImage} className='rounded-[20px] md:w-[700px] md:h-[500px]' alt='graduationImg' />
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
                    <button className='w-full mb-[20px] md:w-[150px] h-[40px] bg-[#e7ab21] rounded-[10px] text-white mt-[30px]'>
                        Sign Up Free
                    </button>
                </div>
                <div className=''>
                    <img src={BusinessImage} className='rounded-[20px] md:w-[700px] md:h-[700px] rounded-[100%] object-cover' alt='graduationImg' />
                </div>
            </div>
        </div>

        <div className='w-full flex justify-center items-center bg-[#182747]'>
            <div className='w-[1300px] px-[20px] mt-[20px] pt-[20px] items-center justify-center'>
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
            <div className='w-[1300px] px-[20px] mt-[20px] pt-[20px] items-center justify-center'>
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
    </>
  )
}

export default Landing