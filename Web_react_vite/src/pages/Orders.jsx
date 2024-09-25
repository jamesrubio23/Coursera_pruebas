import React, { useContext, useEffect } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';

const Orders = () => {

  const { products, currency, cartItems } = useContext(ShopContext);



  return (
    <div className='border-t pt-16'>
      <div className='text-2xl'>
        <Title text1={'MY'} text2={'ORDERS'} />
      </div>

      <div>
        {
          products.slice(1, 4).map((item, index) => {
            const cartProduct = cartItems[item._id];

            if (!cartProduct) {
              console.log(`Product with ID ${item._id} not found in cart.`);
              return null;
            }

            return Object.keys(cartProduct).map((size, sizeIndex) => (
              <div key={`${index}-${sizeIndex}`} className='py-4 border-t text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4'>
                <div className='flex items-start gap-6 text-sm'>
                  <img className='w-16 sm:w-20' src={item.image[0]} alt="" />
                  <div>
                    <p className='text-base font-medium'>{item.name}</p>
                    <div className='flex items-center gap-3 mt-2 text-base text-gray-700'>
                      <p className='text-lg'>{item.price}{currency}</p>
                      <p>Quantity: {cartProduct[size]}</p>
                      <p>Size: {size}</p>
                    </div>
                    <p>Date: <span className='text-gray-400'>28, Aug, 2024</span></p>
                  </div>
                </div>
                <div className='md:w-1/2 flex justify-between'>
                  <div className='flex items-center gap-2'>
                    <p className='min-w-2 h-2 rounded-full bg-green-500'></p>
                    <p className='text-sm text-base'>Ready to ship</p>
                  </div>
                  <button className='border px-4 py-2 text-2 font-medium rounded-sm'>TRACK ORDER</button>
                </div>
              </div>
            ));
          })
        }
      </div>
    </div>
  );
};

export default Orders;

