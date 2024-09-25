import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';

const Collection = () => {
  {/*Para hacer la query en la barra de busqueda */}
  const {products, search, showSearch} = useContext(ShopContext);
  const [showFilter, setShowFilter] =useState(false);
  const [filterProducts, setFilterProducts] =useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType,setSortType] =useState('relevant')

  const toggleCategory = (e) =>{
    if (category.includes(e.target.value)) {
      setCategory(prev =>prev.filter(item => item != e.target.value))
    }
    else{
      setCategory(prev => [...prev, e.target.value])
    }
  }

  const toggleSubCategory = (e) =>{
    if (subCategory.includes(e.target.value)) {
      setSubCategory(prev =>prev.filter(item => item != e.target.value))
    }
    else{
      setSubCategory(prev => [...prev, e.target.value])
    }
  }

  const applyFilter = () => {
    let productsCopy = products.slice();

    // Mejoramos la query del buscador, dando puntuación a cada objeto
    if (showSearch && search) {
      const searchTerms = search.toLowerCase().split(' ');
      productsCopy = productsCopy.filter(item => 
          searchTerms.every(term => 
              item.name.toLowerCase().includes(term) ||
              item.description.toLowerCase().includes(term) ||
              item.category.toLowerCase().includes(term)
          )
      );
    }

    if (category.length > 0){
      productsCopy=productsCopy.filter(item => category.includes(item.category));
    }

    if (subCategory.length > 0){
      productsCopy=productsCopy.filter(item => subCategory.includes(item.subCategory));
    }
    

    setFilterProducts(productsCopy)
  }

  const sortProduct = ()=>{

    let fpCopy=filterProducts.slice();

    switch (sortType){
      case 'low-high':
        setFilterProducts(fpCopy.sort((a,b)=>(a.price-b.price)));
        break;
      
      case 'high-low':
        setFilterProducts(fpCopy.sort((a,b)=>(b.price-a.price)));
        break;
        
      default:
        applyFilter();
        break;
    }
  }

  useEffect(()=>{
    applyFilter();
  },[category, subCategory, search, showSearch])


    useEffect(()=>{
      sortProduct();
    },[sortType])

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      

      {/*Filter Options*/}
      <div className='min-w-60'>
        <p onClick={()=>setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>
          FILTROS
          <img className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`} src={assets.dropdown_icon} alt=""/>
          </p>
        {/*CATEGORY FILTER (Escondida en movil)*/}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>ROPA</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input className='w-3' type='checkbox' value={'Camisa'} onChange={toggleCategory} />Camisa
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type='checkbox' value={'Pantalón'} onChange={toggleCategory} />Pantalón
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type='checkbox' value={'Polo'} onChange={toggleCategory} />Polo
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type='checkbox' value={'Camiseta'} onChange={toggleCategory} />Camiseta
            </p>
          </div>
        </div>
        {/*SubCategory Filter*/}
        <div className={`border border-gray-300 pl-5 py-3 mY-5 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>TIPO</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input className='w-3' type='checkbox' value={'Casual'} onChange={toggleSubCategory}/>Casual
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type='checkbox' value={'Formal'} onChange={toggleSubCategory}/>Formal
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type='checkbox' value={'Clásico'} onChange={toggleSubCategory}/>Clásico
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type='checkbox' value={'Verano'} onChange={toggleSubCategory}/>Verano
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type='checkbox' value={'Manga Larga'} onChange={toggleSubCategory}/>Manga Larga
            </p>
          </div>
        </div>
      </div>
      
      {/*Lado Derecho */}
      <div className='flex-1'>
        <div className='flex justify-between text-base sm:text-2xl mb-4'>
          <Title text1={'ALL'} text2={'COLLECTIONS'} />
          {/*Product Sort*/}
          <select onChange={(e)=>setSortType(e.target.value)} className='border-2 border-gray-300 text-sm px-2'>
            <option value="relevant">Sort by: Relevant</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>

        {/*Map Products*/}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
          {
            filterProducts.map((item,index)=>(
              <ProductItem key={index} id={item._id} image={item.image} name={item.name} price ={item.price}/>
            ))
          }
        </div>
      </div>
      
    </div>
  )
}

export default Collection
