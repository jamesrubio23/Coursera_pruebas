import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom';

const ProductItem = ({id, image, name, price}) => {

    const {currency} =useContext(ShopContext);
{/*Añadimos el link para que cuando cliquen en el objeto se abra la pagina donde esta el objeto con las 4 fotos y el preico, talla y demás */}
  return (
    <Link className='text-gray-700 cursor-pointer' to={`/product/${id}`}>
        <div className='overflow-hidden'>
            <img className='hover:scale-110 transition ease-in-out' src={image[0]} alt="" />
        </div>
        {/*Despues de poner el hover a la imagen de Latest products ponemos sus caracteristicas mas imprtantes (Nombre y precio)
        Los ensearemos en LatestCollection component */}
        <p className='pt-3 pb-1 text-sm'>{name}</p>
        <p className='text-sm font-medium'>{price} {currency}</p>
    </Link>
  )
}

export default ProductItem
