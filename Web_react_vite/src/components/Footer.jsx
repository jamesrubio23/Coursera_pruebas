import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
      <div className='flex flec-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

        <div>
            <img src={assets.logo} className='mb-5 w-32' alt="" />
            <p className='w-full md:w-2/3 text-gray-600'>
            Cada pieza de nuestra colección es diseñada con pasión y confeccionada con materiales de origen responsable, asegurando no solo la durabilidad, sino también un impacto positivo en el medio ambiente. Nos enorgullece trabajar con artesanos y proveedores que comparten nuestro compromiso con la calidad y la integridad.
            </p>
        </div>

        <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>Home</li>
                <li>Collection</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>

        <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>+34 678857998</li>
                <li>info@celtiqshop.com</li>
            </ul>
        </div>

      </div>

        <div>
            <hr />
            <p className='py-5 text-sm text-center'>Copyright 2024 @celtiqshop.com - All Rights Reserved</p>
        </div>

    </div>
  )
}

export default Footer
