import Link from "next/link";
import React from "react";
import Menu from "./menu";
import Image from "next/image";
import NavIcons from "./navIcons";
import SearchBar from "./searchBar";

const Navbar = () => {
  return (
    <div className="h-20 px-4 md:px-6 lg:px-16 xl:32 2xl:px-64">
      <div className="h-full flex justify-between items-center md:hidden">
        <Link href={"/"}>
          <div className="text-2xl tracking-wide">IBTISAM</div>
        </Link>
        <Menu />
      </div>
      {/* BIGGER SCREENS */}
      <div className="hidden md:flex items-center justify-betweenn gap-12 h-full">
        <div className="flex items-center gap-12">
          <Link href={"/"} className="flex flex-row gap-2">
            <Image src="/logo.png" alt="Logo" width={24} height={24} />
            <div className="text-2xl tracking-wide">IBTISAM</div>
          </Link>
        </div>
        <div className="hidden xl:flex gap-4 md:w-1/2 w-1/4">
          <Link href={"/"}>HomePage</Link>
          <Link href={"/"}>Shop</Link>
          <Link href={"/"}>Deals</Link>
          <Link href={"/"}>About</Link>
          <Link href={"/"}>Contact US</Link>
        </div>
        <div className="w-2/3 flex items-center justify-betweenn gap-8">
          <SearchBar />
          <NavIcons />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
