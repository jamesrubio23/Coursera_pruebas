import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t' >
        <Title text1={'CONTACT'} text2={'US'}/>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16' >
        <img className='w-full md:max-w-[450px' src={assets.p_img_home2} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600' >
          <p>Esto es un texto</p>
          <p>Otro texto sobre nosotros</p>
          <b className='text-gray-800' >Our Mission</b>
          <p>Mas texto</p>
        </div>
      </div>

      
      
    </div>
  )
}

export default Contact
