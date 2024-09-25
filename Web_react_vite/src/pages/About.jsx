import React from 'react';
import Title from '../components/Title';
import NewsLetterBox from '../components/NewsLetterBox';
import { assets } from '../assets/assets';

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>
      <div className='my-10 flex flex-col md:flex-row items-center justify-center gap-16'>
        <img className='w-full md:w-[40%] lg:w-[35%] max-w-xs' src={assets.p_img_about} alt="About Us" />
        <div className='flex flex-col justify-center gap-6 text-gray-600 max-w-lg text-center md:text-left'>
          <p>Esto es un texto</p>
          <p>Otro texto sobre nosotros</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Mas texto</p>
        </div>
      </div>

      <div className='text-4xl py-4 text-center'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20 items-center justify-center gap-6'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 max-w-xs'>
          <b>Servicio al Cliente</b>
          <p className='text-gray-600'>Somos una compañía con un gran servicio al cliente</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 max-w-xs'>
          <b>Calidad</b>
          <p className='text-gray-600'>Somos una compañía con una gran Calidad</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 max-w-xs'>
          <b>Accesibilidad</b>
          <p className='text-gray-600'>Somos una compañía con un gran Accesibilidad</p>
        </div>
      </div>
      
      <NewsLetterBox />
    </div>
  );
}

export default About;



