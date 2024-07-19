import Image from "next/image";
import Link from "next/link";
import React from "react";

const CategoryList = () => {
  return (
    <div className="px-4 overflow-x-scroll hide-scrollbar">
      <div className="flex gap-4 md:gap-4">
        {Array.from({ length: 8 }).map((_, index) => (
          <Link
            href={"/list?cat=test"}
            key={index}
            className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/16"
          >
            <div className="relative bg-slate-100 w-full h-96">
              <Image
                src="/example-product.jpg"
                alt=""
                sizes="20vw"
                fill
                className="object-cover"
              />
            </div>
            <h1 className="mt-8 font-light text-cl tracking-wide">
              Category Name
            </h1>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
