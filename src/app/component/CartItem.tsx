"use client";

import { ProductData } from "../../../type";
import { ImCross } from "react-icons/im";
import Link from "next/link";
import Image from "next/image";
import { useDispatch } from "react-redux";
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "@/redux/SopersSlice";
import { urlFor } from "@/sanity/lib/image";
import toast from "react-hot-toast";
import FormattedPrice from "./formatedPrice";
import { FaMinus, FaPlus } from "react-icons/fa";

interface Props {
  cart: ProductData[];
  item: ProductData;
}

const CartItem = ({ cart, item }: Props) => {
  const dispatch = useDispatch();

  const existingProduct = cart?.find((product) => product?._id === item?._id);

  const handleMinus = () => {
    if ((existingProduct?.quantity ?? 0) > 1) {
      dispatch(decreaseQuantity(item?._id));
      toast.success("Quantity decreased successfully");
    } else {
      toast.error("Quantity cannot decrease below 1");
    }
  };

  const imageUrl = item?.image ? urlFor(item?.image).url() : "/fallback-image.jpg";

  return (
    <div className="w-full grid grid-cols-5 mb-4 border py-2">
      {/* Product Image and Title */}
      <div className="flex col-span-5 md:col-span-2 items-center gap-4 ml-4">
        <ImCross
          onClick={() => {
            dispatch(removeFromCart(item?._id));
            toast.success(`Removed "${item?.title.substring(0, 12)}" from cart`);
          }}
          className="text-accent hover:text-lightRed cursor-pointer duration-300"
        />
        <Link href={`/product/${item?.slug?.current}`}>
          <Image
            src={imageUrl}
            alt={item?.title || "Product image"}
            width={200}
            height={200}
            className="w-32 h-32 object-contain"
          />
        </Link>
      </div>

      {/* Price, Quantity, and Total */}
      <div className="col-span-5 md:col-span-3 flex items-center justify-between py-4 md:py-0 px-4 lg:px-0">
        <div className="w-1/3 flex items-center text-lg font-semibold">
            <FormattedPrice amount={item?.price} />
        </div>
        <div className="w-1/3 flex items-center gap-6 text-lg">
          <button
            onClick={handleMinus}
            className="w-6 h-6 bg-gray-100 text-sm flex items-center justify-center hover:bg-darkOrange/10 
                      cursor-pointer border-[1px] border-gray-300 hover:border-darkOrange hoverEffect"
          >
            <FaMinus />
          </button>
          <p className="text-sm font-semibold">{item?.quantity}</p>
          <button
            onClick={() => {
              dispatch(increaseQuantity(item?._id));
              toast.success("Quantity increased successfully");
            }}
            className="w-6 h-6 bg-gray-100 text-sm flex items-center justify-center hover:bg-darkOrange/10 
                      cursor-pointer border-[1px] border-gray-300 hover:border-darkOrange hoverEffect"
          >
            <FaPlus />
          </button>
        </div>
        <div className="w-1/3 flex items-center font-bold text-lg">
            <FormattedPrice amount={(item?.quantity ?? 0) * (item?.price ?? 0)} />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
