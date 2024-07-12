"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Menu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="">
      <Image
        src="/menu.png"
        alt="Menu Icon"
        width={28}
        height={28}
        className="cursor-pointer"
        onClick={(prev) => setIsOpen(!isOpen)}
      />
      {isOpen && (
        <div className="absolute text-center left-0 top-20 w-full h-[calc(100vh-80px)] bg-black text-white flex gap-10 items-center justify-center flex-col z-10">
          <Link href={"/"}>HomePage</Link>
          <Link href={"/"}>Shop</Link>
          <Link href={"/"}>Deals</Link>
          <Link href={"/"}>About</Link>
          <Link href={"/"}>Contact US</Link>
          <Link href={"/"}>Logout</Link>
          <Link href={"/"}>Cart(1)</Link>
        </div>
      )}
    </div>
  );
};

export default Menu;
