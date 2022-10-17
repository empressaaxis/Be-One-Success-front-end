import React from 'react'

const SendMessage = () => {
  const [sendMessage, setSendMessage] = React.useState(false);
  return (
    <div className='bg-[rgb(24,39,71)] w-full h-full'>
      <div className='w-full h-[70px] bg-[#0081a7] '>
        <h1 className='text-[25px] font-bold text-white ml-[340px] pt-2'><span className='font-light'>Hi</span> Jane Doe!</h1>
      </div>
      <div className='w-[1100px] pb-20 mx-auto mt-10'>
        <h1 className='text-white text-[45px] font-bold mb-5'>Messages</h1>
        <div className='w-full flex justify-between'>
          <p className='text-white text-[35px] font-bold mb-5'>{ !sendMessage ? 'Inbox' : 'New Message'   }</p>
          <button onClick={() => {
            !sendMessage ? setSendMessage(true) : setSendMessage(false);            
          }} className='text-[16px] text-[#fff] w-[150px] h-[40px] bg-[#0081a7] rounded-lg'>{!sendMessage ? <p>New Message</p> : <p>Go Back</p>}</button>
          </div>
        {
          !sendMessage ? 
        (
        <div className='w-full'>
          <div className='bg-white w-full h-[500px] rounded-md '>
            <h1 className='text-black text-center pt-3'>No New Messages Found</h1>
          </div>
        </div>
        ) 
        : 
        (
          <div>
            <input type='text' className='w-full h-[40px] pl-5 rounded-lg' placeholder='Enter the recipient' />
            <textarea className='w-full h-[100px] rounded-lg mt-5' placeholder='Your Message'>
            </textarea>
            <button className='w-full h-[40px] text-white bg-[#0081a7] rounded-lg mt-[30px]'>Send Message</button>
          </div>
        )
        }
          
          
      </div>
    </div>
  )
}

export default SendMessage