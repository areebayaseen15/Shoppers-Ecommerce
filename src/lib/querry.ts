
import { groq } from "next-sanity";

const bannerQuerry = groq `*[_type == "banner"]`


const productQuerry = groq `*[_type == 'product']`


const bestSellerQuerry = groq `*[_type == 'product' && position == 'Bestsellers']`


export {bannerQuerry , productQuerry , bestSellerQuerry};