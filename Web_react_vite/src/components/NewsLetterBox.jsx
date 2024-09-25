import React from 'react'

const NewsLetterBox = () => {
    {/*event.preventDefault para que no se recargue la pagina de nuevo... */}
    const onSubmitHandler=()=>{
        event.preventDefault(); 
    }

  return (
    <div className='text-center'>
      <p className='text-2xl font-medium text-gray-800'>Subscribe now & get 20% off</p>
      <p className='text-gray-400 mt-3'>
        Description for the NewsLetter
      </p>
      
      {/*Acordarse de meter las restricciones dadas en el curso de Coursera */}
      <form onSunmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
        <input className='w-full sm:flex-1 outline-none' 
           type="email" 
           placeholder='Enter your email' 
           required 
           pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
           title="Please enter a valid email address (e.g., name@example.com)" />
           <button type='submit' className='bg-black text-white text-xs px-10 py-4'>SUBSCRIBE</button>
        </form>
    </div>
  )
}

export default NewsLetterBox
