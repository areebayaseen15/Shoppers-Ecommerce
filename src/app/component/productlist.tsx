
import { getProductsData } from '@/lib/getData'
import React from 'react'
import { ProductData } from '../../../type'
import ProductCard from './ProductCard'



const Productlist = async() => {
    const products:ProductData[]=await getProductsData()
  
    
  return (
    <div className="grid lg:grid-cols-4 gap-5">
    {products?.map((items)=>
    <ProductCard key={items?._id} item={items}/>)}
    </div>
  )
}

export default  Productlist
