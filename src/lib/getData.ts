

import {client} from "@/sanity/lib/client";
import { bannerQuerry, bestSellerQuerry,  productQuerry, } from "./querry";

export const revalidate= 0;

const getBannersData = async()=>{
    const bannersData = await client.fetch(bannerQuerry);
    return bannersData;
}

const getProductsData = async()=>{
    const productsData = await client.fetch(productQuerry);
    return productsData;
}

const getBestSellersData = async()=>{
    const bestSellersData = await client.fetch(bestSellerQuerry);
    return bestSellersData;
}

export {getBannersData , getProductsData , getBestSellersData}