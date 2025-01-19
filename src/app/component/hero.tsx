import { client } from '@/sanity/lib/client';
// import Button from './Button';
import { urlFor } from '@/sanity/lib/image';
import Image from "next/image"
import Link from 'next/link';
import FormatedPrice from './formatedPrice';

export async function getData() {
  const fetchData = await client.fetch(
    `
   *[_type == "banner"][0]
    `
  );

  return fetchData;
}



export async function getData2() {
    const fetchData = await client.fetch(
      `
     *[_type == "banner"][1..2]
      `
    );
  
    return fetchData;
  }
  
export default async function Hero() {
  const data = await getData();
  console.log(data);

  const data2 = await getData2();
  console.log(data2);
  

  return (
   
    <div className='grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10 md:max-h-[600px]'>
    {/* left half part */}
        <div className='md:col-span-2 bg-bg light relative flex items-end justify-end rounded-lg overflow-hidden group'>
           <div className='h-full z-10 absolute left-10 top-0 flex flex-col justify-center isolate gap-5 md:gap-10'>
           <div className='flex flex-col gap-1 md:gap-3'>
           <button className='bg-lightGreen text-white rounded-full w-20 py-1 text-sm font-semibold
            hover:bg-green-600 hoverEffect'>Sale{data.price}</button>

            <p className='text-xl md:text-3xl font-semibold'>{data.subtitle}</p>
            <h2 className='text-2xl md:text-6xl font-bold'>{data.title}</h2>
            <p className='text-xs md:texttext-sm text-black/60 font-medium max-w-44'>{data.description}</p>
           </div>
           
           <button  className='bg-lightOrange text-base text-white hover:text-darkOrange
           hoverEffect w-40 md:px-4 md:py-3 rounded-full font-semibold'>
           <Link href={"/shop"}>Shop now</Link>
            </button>
           </div>
            <Image
            src={urlFor(data.image).url()}
            alt={data.title}
            width={500}
            height={500}
            className='object-contain h-72 md:h-full max-h-[600px] self-end group-hover:scale-105 hoverEffect'/>
        </div>

         {/* right half */}
        <div className='flex flex-col space-y-5 md:space-y-10 h-auto md:max-h-[600px]'>

    <div key={data2._id} className='h-full md:h-1/2 bg-bg-light rounded-lg overflow-hidden flex justify-center
    items-center p-5 group '>
        <div>
            <div>
                <p className='text-2xl font-semibold'>{data2.title}</p>
                <p className='text-3xl font-bold'>{data2.subtitle}</p>
            </div>
            <p className='mt-3 font-medium text-black/60'><FormatedPrice amount={data2.price}
            className='text-lightRed font-semibold'/></p>
            <Link href={"/shop"} className='mt-5 font-bold underline underline-offset-2 decoration-[1px]
            hover:text-lightRed hoverEffect'>Shop now!</Link>
        </div>
        
        <Image src={urlFor(data2.image).url()} alt={data2.title} width={500} height={500}
        className="objet-contain h-72  md:h60 w-1/2  group=hover:sacle-105 hoverEffect"/>
    </div>
 
        </div>
    </div>
  )
}

