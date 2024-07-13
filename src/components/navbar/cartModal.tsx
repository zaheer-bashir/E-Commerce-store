import Image from "next/image";
import React from "react";

const CartModal = () => {
  const cartItems = false;
  return (
    <div className= "w-max absolute p-4 rounded-md shadow-md bg-white top-12 right-0 flex flex-col gap-6 z-20">
      {cartItems ? (
        <div className="">Cart is Empty</div>
      ) : (
        <div className="flex flex-row gap-8">
        <Image
            src="/example-product.jpg"
            alt="Cart Product Image"
            width={72}
            height={72}
            className="object-cover rounded-md"
          />
          <div className="flex flex-col justify-between w-full">
            {/* TOP */}
            <div className="flex items-center justify-between gap-8">
              {/* TITLE */}
              <div className="flex items-center justify-center gap-8">
                <h1 className="font-semibold">Project Title</h1>
                <div className="p-1 bg-gray-50 rounded-sm">$49</div>
              </div>
              {/* DESC */}
              <div className="text-sm text-gray-500">avaliable</div>
            </div>
            {/* BOTTOM */}
            <div className="flex justify-between text-sm">
                <span className="text-gray-500">Qty. 2</span>
                <span className="text-blue-500">Remove</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartModal;
