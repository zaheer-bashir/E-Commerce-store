import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductList = () => {
  return (
    <div className="mt-12 flex gap-8 justify-between flex-wrap md:gap-x-8">
      {Array.from({ length: 4 }).map(() => (
        <Link
          href={"/"}
          className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
        >
          <div className="relative w-full h-80">
            <Image
              src="/example-product.jpg"
              sizes="25vw"
              fill
              alt="Product Item"
              className="absolute object-cover rounded-md hover:opacity-0 transition-opacity ease-in-out duration-500"
            />
            <Image
              src="/example-product.jpg"
              sizes="25vw"
              fill
              alt="Product Item"
              className="absolute object-cover rounded-md"
            />
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Product Name</span>
            <span className="font-semibold">$49</span>
          </div>
          <div className="text-sm text-gray-500">My description</div>
          <button className="rounded-2xl ring-1 ring-primaryPink text-primaryPink py-2 px-4 text-xs hover:bg-primaryPink hover:text-white w-max">
            Add to Cart
          </button>
        </Link>
      ))}
    </div>
  );
};

export default ProductList;
