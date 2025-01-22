"use client";

import { useDispatch, useSelector } from "react-redux";
import { ProductData, StoreState } from "../../../type";
import CartItem from "./CartItem";
import { resetCart } from "@/redux/SopersSlice";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import Link from "next/link";
import FormattedPrice from "./formatedPrice";

const CartContainer = () => {
  const { cart = [] } = useSelector((state: StoreState) => state?.shoppers || {});
  const dispatch = useDispatch();

  const handleResetCart = () => {
    const confirmed = window.confirm("Are you sure you want to reset your cart?");
    if (confirmed) {
      dispatch(resetCart());
      toast.success("Cart reset successfully");
    }
  };

  return (
    <div>
      {cart.length > 0 ? (
        <div className="pb-20">
          {/* Header */}
          <div
            className="w-full h-20 bg-[#f5f5f5] text-accent hidden lg:grid grid-cols-5 place-content-center px-6 text-lg font-semibold"
          >
            <h2 className="col-span-2">Product</h2>
            <h2>Price</h2>
            <h2>Quantity</h2>
            <h2>Sub Total</h2>
          </div>

          {/* Cart Items */}
          <div className="mt-5 px-20">
            {cart.map((item: ProductData) => (
              <CartItem key={item?._id} cart={cart} item={item} />
            ))}
          </div>

          {/* Reset Cart Button */}
          <button
            onClick={handleResetCart}
            className="py-2 mx-20 px-10 bg-lightRed text-white font-semibold uppercase mb-4 hover:bg-red-600 hoverEffect rounded-md text-sm"
          >
            Reset Cart
          </button>

          {/* Cart Totals */}
          <div className="max-w-7xl flex justify-end">
            <div className="w-96 flex flex-col gap-4">
              <div>
                <h1 className="text-2xl font-semibold text-center">Cart Totals</h1>
                  <div className="flex items-center justify-between border-[1px] border-gray-400 border-b-0 py-1.5 px-4 text-lg font-medium">
                    Sub Total <FormattedPrice amount={250} />
                  </div>
                  <div className="flex items-center justify-between border-[1px] border-gray-400 border-b-0 py-1.5 px-4 text-lg font-medium">
                    Shipping Charges <FormattedPrice amount={250} />
                  </div>
                  <div className="flex items-center justify-between border-[1px] border-gray-400 border-b-1 py-1.5 px-4 text-lg font-medium">
                    Total <FormattedPrice amount={500} />
                  </div>
               
              </div>
              <button
            className="py-2 mx-20 px-3 bg-lightRed text-white font-semibold uppercase mb-4 hover:bg-red-600 hoverEffect rounded-md text-sm"
          >
         Proceed To Checkout
          </button>
            </div>
          </div>
        </div>
      ) : (
        // Empty Cart Message
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { duration: 0.4 } }}
          className="flex items-center justify-center py-20"
        >
          <div className="max-w-[500px] p-4 y-8 bg-white flex flex-col gap-4 items-center rounded-md shadow-lg">
            <h1 className="text-xl font-bold uppercase ">Your cart feels lonely</h1>
            <p className="text-sm text-center px-10 mt-2">
              Your shopping cart lives to serve. Give it purpose—fill it with books,
              electronics, videos, etc., and make it happy.
            </p>
            <Link
              href={"/"}
              className="bg-lightOrange py-3 text-white hover:bg-darkOrange hoverEffect px-8 rounded-lg font-semibold"
            >
              Continue Shopping
            </Link>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default CartContainer;
