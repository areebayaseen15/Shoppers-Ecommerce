import Container from "@/app/component/Container";
import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";
import { ProductData } from "../../../../type";
import { getBestSellersData } from "@/lib/getData";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import ProductCard from "@/app/component/ProductCard";
import FormattedPrice from "@/app/component/formatedPrice";
import { MdStar } from "react-icons/md";
import AddToCartButton from "@/app/component/AddToCart";

interface PageProps {
  params: {
    slug: string;
  };
}

const SingleProductPage = async ({ params }: PageProps) => {
  const { slug } = await Promise.resolve(params);
  const query = groq`*[_type == "product" && slug.current == $slug][0]`;
  const product: ProductData = await client.fetch(query, { slug });
  const bestSellerData: ProductData[] = await getBestSellersData();

  return (
    <Container className="my-10 bg-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-4 p-4">
        {/* Product Image */}
        <div className="xl:col-span-2">
          <Image
            src={urlFor(product?.image).url()}
            alt={product?.title}
            width={500}
            height={500}
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Product Details */}
        <div className="xl:col-span-3 flex flex-col gap-6">
          <h1 className="text-4xl font-semibold">{product?.title}</h1>

          {/* Price and Savings */}
          <div className="flex   items-center gap-4">
            
            <span className="text-lg text-gray-500 line-through">
              <FormattedPrice amount={product?.rowprice} />
            </span>
            <span className="text-2xl font-bold text-black">
              <FormattedPrice amount={product?.price} />
            </span>
            <span className="text-sm flex text-green-600">
              You saved{" "}
              <FormattedPrice
                amount={product?.rowprice - product?.price}
                className="px-2 py-1 bg-lightGreen text-white rounded-md"
              />{" "}
              on this item
            </span>
          </div>

          {/* Ratings */}
          <div className="flex items-center">
            {Array.from({ length: 5 }).map((_, index) => {
              const isFilled = index + 1 <= Math.floor(product?.ratings);
              return (
                <MdStar
                  key={index}
                  className={`${
                    isFilled ? "text-[#fa8900]" : "text-gray-300"
                  } text-xl`}
                />
              );
            })}
          </div>
          <p className="text-sm text-gray-600">(5 customer reviews)</p>

          {/* Description */}
          <p className="text-gray-700 text-sm">{product?.description}</p>
          <p className="text-sm text-gray-500">Be the first to leave a review.</p>

          {/* Add to Cart */}
          <AddToCartButton item={product} className="rounded-md w-[400px] py-3 bg-black text-white  text-center" />
          {/* Categories */}
          <p className="text-sm">
            <span className="font-medium">Categories:</span> Spring, Collection,
            Streetwear, Women{" "}
            <span className="font-medium">Tags:</span> featured{" "}
            <span className="font-medium">SKU:</span> N/A
          </p>
        </div>
      </div>

      {/* Best Sellers */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {bestSellerData.map((item) => (
          <ProductCard key={item?._id} item={item} />
        ))}
      </div>
    </Container>
  );
};

export default SingleProductPage;
