"use client";

import { twMerge } from "tailwind-merge";
import { ProductData } from "../../../type";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/SopersSlice";
import toast from "react-hot-toast";

interface Props {
  item: ProductData;
  className?: string; // Optional to avoid errors if not passed
}

const AddToCartButton = ({ item, className = "" }: Props) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(item));
    toast.success(`${item?.title.substring(0, 12)} added successfully`);
  };

  return (
    <button
      onClick={handleAddToCart}
      className={twMerge(
        "bg-accent py-3 text-[16px] text-white w-full border border-accent hover:bg-darkOrange hoverEffect font-semibold tracking-wide flex items-center justify-center gap-1",
        className
      )}
    >
      Add To Cart
    </button>
  );
};

export default AddToCartButton;
