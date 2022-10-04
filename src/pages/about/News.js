import React from 'react'
import { Link } from 'react-router-dom';
import Boy from '../../assets/landing/boy3.webp';

const News = () => {
  return (
    <div className='text-white text-[40px] font-semibold w-full min-h-[500px] text-center'>
        <h1 className='text-[#e7ab12] font-bold text-[40px] mt-[80px]'>News</h1>
        <div className=''>
         <Link to='/news-details'>
            <div className='w-[800px] h-[250px] justify-center align-middle bg-[#006494] rounded-[20px] flex mx-auto mt-20' >
                <img src={Boy} className='w-[200px] h-[200px] rounded-[10px] object-cover my-auto mx-5' alt='boy' />
                <div className='my-auto'>
                  <h1 className='text-left font-[400]'>Lorem Ipsum Magna id </h1>
                  <p className='text-white text-[18px] text-left pr-5 font-light'>Non mollit magna id aliquip ullamco duis id aute. Minim ullamco et incididunt esse duis eu cillum occaecat cupidatat. Aliquip voluptate ea elit sit est ut aliquip ipsum dolor tempor pariatur sunt. Consequat sint ad duis elit aute esse. Velit do minim excepteur aute dolore nulla.</p>
                </div>
            </div>
         </Link>
          <Link to='/news-details'>
            <div className='w-[800px] h-[250px] justify-center align-middle bg-[#006494] rounded-[20px] flex mt-5 mx-auto' >
              <img src={Boy} className='w-[200px] h-[200px] rounded-[10px] object-cover my-auto mx-5'  alt='boy'/>
              <div className='my-auto'>
                  <h1 className='text-left font-[400]'>Lorem Ipsum Magna id </h1>
                  <p className='text-white text-[18px] text-left pr-5 font-light'>Non mollit magna id aliquip ullamco duis id aute. Minim ullamco et incididunt esse duis eu cillum occaecat cupidatat. Aliquip voluptate ea elit sit est ut aliquip ipsum dolor tempor pariatur sunt. Consequat sint ad duis elit aute esse. Velit do minim excepteur aute dolore nulla.</p>
                </div>            
            </div>
          </Link>
         <Link to='/news-details'>
          <div className='w-[800px] h-[250px] justify-center align-middle bg-[#006494] rounded-[20px] flex mt-5 mx-auto' >
            <img src={Boy} className='w-[200px] h-[200px] rounded-[10px] object-cover my-auto mx-5'  alt='boy' />
            <div className='my-auto'>
                  <h1 className='text-left font-[400]'>Lorem Ipsum Magna id </h1>
                  <p className='text-white text-[18px] text-left pr-5 font-light'>Non mollit magna id aliquip ullamco duis id aute. Minim ullamco et incididunt esse duis eu cillum occaecat cupidatat. Aliquip voluptate ea elit sit est ut aliquip ipsum dolor tempor pariatur sunt. Consequat sint ad duis elit aute esse. Velit do minim excepteur aute dolore nulla.</p>
                </div>
            </div>
          </Link>
          <Link to='/news-details'>
          <div className='w-[800px] h-[250px] justify-center align-middle bg-[#006494] rounded-[20px] flex mt-5 mx-auto' >
            <img src={Boy} className='w-[200px] h-[200px] rounded-[10px] object-cover my-auto mx-5'  alt='boy' />
            <div className='my-auto'>
                  <h1 className='text-left font-[400]'>Lorem Ipsum Magna id </h1>
                  <p className='text-white text-[18px] text-left pr-5 font-light'>Non mollit magna id aliquip ullamco duis id aute. Minim ullamco et incididunt esse duis eu cillum occaecat cupidatat. Aliquip voluptate ea elit sit est ut aliquip ipsum dolor tempor pariatur sunt. Consequat sint ad duis elit aute esse. Velit do minim excepteur aute dolore nulla.</p>
                </div>
            </div>
          </Link>
         <Link to='/news-details'>
         <div className='w-[800px] h-[250px] justify-center align-middle bg-[#006494] rounded-[20px] flex mt-5 mx-auto mb-[100px]' >
            <img src={Boy} className='w-[200px] h-[200px] rounded-[10px] object-cover my-auto mx-5'  alt='boy' />
            <div className='my-auto'>
                  <h1 className='text-left font-[400]'>Lorem Ipsum Magna id </h1>
                  <p className='text-white text-[18px] text-left pr-5 font-light'>Non mollit magna id aliquip ullamco duis id aute. Minim ullamco et incididunt esse duis eu cillum occaecat cupidatat. Aliquip voluptate ea elit sit est ut aliquip ipsum dolor tempor pariatur sunt. Consequat sint ad duis elit aute esse. Velit do minim excepteur aute dolore nulla.</p>
                </div>
            </div>
          </Link>
        </div>
    </div>
  )
}

export default News
