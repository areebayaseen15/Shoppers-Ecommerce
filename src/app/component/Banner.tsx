import { getBannersData } from '@/lib/getData';
import { urlFor } from '@/sanity/lib/image';
import Image from 'next/image';
import Link from 'next/link';
import { BannerData } from '../../../type';
import FormatedPrice from './formatedPrice';

const Banner = async () => {
  // Fetch banner data
  const banners = await getBannersData();
  if (!banners || banners.length === 0) return null; // Ensure banners are available

  const singleBanner = banners[0];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10 md:max-h-[600px]">
      {/* Left Half */}
      <div className="bg-gray-100 md:col-span-2 bg-bg-light relative flex items-end justify-end rounded-lg overflow-hidden group">
        {/* Text Content */}
        <div className="h-full z-10 absolute left-10 top-0 flex flex-col justify-center isolate gap-5 md:gap-10">
          <div className="flex flex-col gap-1 md:gap-3">
            <button className="bg-lightGreen text-white rounded-full w-20 py-1 text-sm font-semibold hover:bg-green-600 hoverEffect">
              Sale {singleBanner?.price}
            </button>
            <p className="text-xl md:text-3xl font-semibold">{singleBanner?.subtitle}</p>
            <h2 className="text-2xl md:text-6xl font-bold">{singleBanner?.title}</h2>
            <p className="text-xs md:text-sm text-black/60 font-medium max-w-44">
              {singleBanner?.description}
            </p>
          </div>
          <button className="bg-lightOrange text-base text-white hover:text-darkOrange hoverEffect w-40 md:px-4 md:py-3 rounded-full font-semibold">
            <Link href="/shop">Shop now</Link>
          </button>
        </div>

        {/* Image */}
        <Image
          src={urlFor(singleBanner?.image).url()}
          alt={singleBanner?.title || 'Banner Image'}
          width={500}
          height={500}
          priority
          className="object-contain h-72 md:h-full max-h-[600px] self-end group-hover:scale-105 hoverEffect"
        />
      </div>

      {/* Right Half */}
      <div className="flex flex-col space-y-5 md:space-y-10 h-auto md:max-h-[600px]">
        {banners.slice(1, 3).map((item: BannerData) => (
          <div
            key={item?._id}
            className="h-full md:h-1/2 bg-bg-light rounded-lg overflow-hidden bg-gray-100 flex justify-center items-center p-5 group"
          >
            <div>
              <div>
                <p className="text-2xl font-semibold">{item?.title}</p>
                <p className="text-3xl font-bold">{item?.subtitle}</p>
              </div>
              <p className="mt-3 font-medium text-black/60">{item?.description}</p>
              <FormatedPrice
                amount={item?.price}
                className="text-lightRed font-semibold"
              />
              <Link
                href="/shop"
                className="mt-5 font-bold underline underline-offset-2 decoration-[1px] hover:text-lightRed hoverEffect"
              >
                Shop now!
              </Link>
            </div>

            <Image
              src={urlFor(item?.image).url()}
              alt={item?.title || 'Banner Image'}
              width={500}
              height={500}
              priority
              className="object-contain h-72 md:h-60 w-1/2 group-hover:scale-105 hoverEffect"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner;
