import React from 'react'
import { Link } from 'react-router-dom'
import { FaPlus } from 'react-icons/fa'

const Documents = () => {

  const hiddenFileInput = React.useRef(null);
  
  const handleClick = event => {
    hiddenFileInput.current.click();
  };

//   const handleChange = event => {
//     const fileUploaded = event.target.files[0];
//   };

  return (
    <div className='bg-[rgb(24,39,71)] w-full h-full'>
        <div className='w-full h-[70px] bg-[#0081a7] '>
            <h1 className='text-[25px] font-bold text-white ml-[340px] pt-2'><span className='font-light'>Hi</span> Jane Doe!</h1>
        </div>
        <div className='w-[1000px] mx-auto mt-10'>
            <h1 className='text-white text-[45px] font-bold mb-5'>Documents</h1>
            <div className='flex'>
                <div className='w-[400px] h-[180px] rounded-[20px] pt-5 bg-[#e5e5e5]'>
                    <h1 className='font-semibold text-[24px] mx-10'>No Document found.</h1>
                    <p className='mx-10 font-light mt-5'>You have not yet uploaded a document, please upload some.</p>
                </div>
                <button onClick={handleClick} className='w-[180px] h-[180px] rounded-[20px] pt-5 bg-[#e5e5e5] ml-10 flex justify-center align-middle'>
                    <FaPlus color='rgb(24, 39, 71)' size={100} className='mt-5' />
                </button>
                <input
                    type="file"
                    ref={hiddenFileInput}
                    style={{display: 'none'}}
                />
            </div>
        </div>
    </div>
  )
}

export default Documents