import React from 'react'
import {assets} from '../assets/assets'

{/*El rectangulo con Latest Arrivals y la imagen a la derecha */}
const Hero = () => {
  return (
    <div className='flex flex-col sm:flex-row border border-gray-400'>{/*En pantallas grandes los elemntos se organizan en una fila, en pequeñas en una columna*/}
      {/*Añadimos el lado izquierdo */}
      <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>{/*En pantallas pequeñas ocupa todo el ancho (w-full), pero engrandes solo la mitad del ancho (w-1/2) y estará centrado (justify-center) */}
        <div className='text-[#414141]'>
            <div className='flex items-center gap-2'>
                <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p> {/*Este es un p que actúa como una barra horizontal. Su ancho es de w-8 (32 píxeles) en pantallas pequeñas y w-11 (44 píxeles) en pantallas medianas. La altura es de h-[2px] (2 píxeles) y su color de fondo es gris oscuro (bg-[#414141]) */}
                <p className='font-medium text-sm md:text-base'>OUR BESTSELLERS</p> {/*peso de fuente medio (font-medium) y un tamaño de fuente pequeño (text-sm) en pantallas pequeñas, que aumenta a text-base en pantallas medianas */}
            </div>
            <h1 className='prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed'>Latest Arrivals</h1> {/*Tamaño aumenta en pantallas grandes leading-relaxed ofrece margen de separación */}
            <div className='flex items-center gap-2'>
                <p className='font-semibold text-sm md:text-base'>SHOP NOW</p>
                <p className='w-8 md:w-11 h-[1px] bg-[#414141]'></p>
            </div>
        </div>
      </div>

      {/*Lado derecho con imagen */}
      <img className='w-full sm:w-1/2' src={assets.p_img_home} alt="" />
    </div>
  )
}

export default Hero
