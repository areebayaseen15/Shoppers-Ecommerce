
"use client"
import Image from "next/image";
import Link from "next/link"
import { ProductData } from '../../../type'
import { MdStar } from 'react-icons/md'
import { urlFor } from '@/sanity/lib/image'
import AddToCartButton from "./AddToCart";
import FormattedPrice from "./formatedPrice";

const ProductCard = ({item}:{item:ProductData}) => {
  
  return (
    
    <div className="flex ">

    <div className="border border-px border-lightText/40 rounded-md relative group overflow-hidden   w-[400px]">
<div className="overflow-hidden">
<Link href={`/product/${item?.slug.current}`}>
<Image
src={urlFor(item?.image).url()}
alt={item?._type}
width={500}
height={500}
loading="lazy"
className="w-full  object-cover group-hover:scale-105 hoverEffect"
/>

</Link>

</div>
<div className="px-6  flex flex-col items-center gap-2">
    <div className="text-base text-lightText flex items-center">
        {Array?.from({length:5})?.map((_, index)=>{
            const filled =index+1 <= Math.floor(item?.ratings)
            const halfFilled =index+1 > Math.ceil(item?.ratings)
            return(
                <MdStar
                 key={index}
                className={`${filled ?  "text-[#fa8900]" : halfFilled ?"text-yellow-300" : "text-lightText"}`}
                 />
            )
        })}
    </div>
<p className="uppercase text-xs font-medium text-lightOrange">{item.brand}</p>
<h2 className="text-base font-semibold text-accent line-clamp-1">{item?.title}</h2>
<p className="text-center text-sm line-clamp-2">{item?.description}</p>
<div className="flex items-center gap-3 mb-5">
<FormattedPrice amount={item?.rowprice}
className="text-lightText line-through "/>

<FormattedPrice amount={item?.price}
className="text-darkOrange font-bold "/>
</div>

</div>
<AddToCartButton item={item} className={""}/>
</div>

    </div>
  )
}

export default ProductCard
