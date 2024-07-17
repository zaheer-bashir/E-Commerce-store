"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Slider = () => {
  const slides = [
    {
      id: 1,
      title: "Summer Sale Collections",
      description: "Sale! Up to 50% off!",
      img: "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800",
      url: "/",
      bg: "bg-gradient-to-r from-yellow-50 to-pink-50",
    },
    {
      id: 2,
      title: "Winter Sale Collections",
      description: "Sale! Up to 50% off!",
      img: "https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=800",
      url: "/",
      bg: "bg-gradient-to-r from-pink-50 to-blue-50",
    },
    {
      id: 3,
      title: "Spring Sale Collections",
      description: "Sale! Up to 50% off!",
      img: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800",
      url: "/",
      bg: "bg-gradient-to-r from-blue-50 to-yellow-50",
    },
  ];
  // const [current, setCurrent] = useState(0);

  return (
    <div className="h-[calc(100vh-80px)] overflow-hidden">
      <div className="w-max h-full flex transition-all ease-in-out duration-1000">
        {slides.map((item) => {
          return (
            <div
              key={item.id}
              className={`${item.bg} w-screen h-full flex flex-col gap-16 xl:flex-row`}
            >
              {/* TEXT CONTAINER */}
              <div className="h-1/2 xl:w-1/2 xl:h-full flex justify-center items-center flex-col gap-8 xl:gap-12 text-center">
                <h2 className="text-5xl lg:text-6xl 2xl:text-8xl font-semibold">
                  {item.title}
                </h2>
                <h1 className="text-xl lg:text-3xl 2xl:text-5xl">
                  {item.description}
                </h1>
                <Link href={item.url}>
                  <button className="rounded-md bg-black text-white py-3 px-4">
                    Shop Now
                  </button>
                </Link>
              </div>
              {/* IMAGE CONTAINER */}
              <div className="h-1/2 xl:w-1/2 relative xl:h-full">
                <Image
                  src={item.img}
                  alt={item.title}
                  sizes="100%"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Slider;
