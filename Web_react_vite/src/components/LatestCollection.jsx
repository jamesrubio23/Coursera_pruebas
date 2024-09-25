import React, {useContext, useEffect, useState} from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem';

{/*utilizamos el "hook" para obtener la informacion de los productos (Todo desde ShopContext que es nuestra especie de API)!! */}
const LatestCollection = () => {
    const { products } = useContext(ShopContext);
    const [latestProducts, setLatestProducts] = useState([]);
{/*En setLatestProducts escribimos cuantos productos queremos eneseñar del ultimo lanzamiento (pOnemos 2 de moemnto)*/}
    useEffect(()=>{
        setLatestProducts(products.slice(0,10));
    }, [])
    {/*Añadimos el array desués ([]) como vacío paa luego añadir los productos de LatestProducts? */}

  {/*Añadimos la componente Title con los valores de text1 y text2 */}
  return (
    <div className='my-10'> {/*Aplicar margen tanto arriba como abajo de 2.5 rem */}
      <div className='text-center py-8 text-3xl'> {/*padding de 8 unides cnetrado de texto y tamaño de 30 px para la fuente */}
        <Title text1={'LATEST'} text2={'COLLECTION'} />
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
            Nuestra último lanzamiento abarca desde camisas a polos elegantes para llevar a todas partes. Añadir más texto con una descripción de la colección.
        </p>
      </div>

    {/*Para enseñar los productos hay que sacar el item y hacer un map con el array creado ([])*/}

    {/*Rendering Prodcuts*/}
    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
      {
        latestProducts.map((item, index)=>(
            <ProductItem key={index} id={item._id} image={item.image} name={item.name} price ={item.price} />
        ))
      }
    </div>
    </div>
  )
}

export default LatestCollection
