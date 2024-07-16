import Image from "next/image";
import React from "react";

const CartModal = () => {
  const cartItems = false;
  return (
    <div className="w-max absolute p-4 rounded-md shadow-md bg-white top-12 right-0 flex flex-col gap-6 z-20">
      {cartItems ? (
        <div className="">Cart is Empty</div>
      ) : (
        <>
          <h2 className="text-xl">Shopping Cart</h2>
          <div className="flex flex-row gap-8 h-28">
            <Image
              src="/example-product.jpg"
              alt="Cart Product Image"
              width={72}
              height={172}
              className="object-cover rounded-md"
            />
            <div className="flex flex-col justify-between">
              {/* TOP */}
              <div className="flex flex-col">
                {/* TITLE */}
                <div className="flex items-center justify-center gap-8">
                  <h1 className="font-semibold">Project Title</h1>
                  <div className="p-1 bg-gray-50 rounded-sm">$49</div>
                </div>
                <div className="text-sm text-gray-500">avaliable</div>
              </div>
              {/* DESC */}
              {/* BOTTOM */}
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Qty. 2</span>
                <span className="text-blue-500">Remove</span>
              </div>
            </div>
          </div>
          <div className="">
            <div className="flex items-center justify-between font-semibold">
              <span>Subtotal</span>
              <span>$49</span>
            </div>
            <p className="text-gray-500 text-sm mt-2 mb-4">
              Lorem, ipsum dolor sit amet consectetur.
            </p>
            <div className="flex justify-between text-sm">
              <button className="rounded-md py-3 px-4 ring-1 ring-gray-300">
                View Cart
              </button>
              <button className="rounded-md py-3 px-4 bg-black text-white">
                Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CartModal;
