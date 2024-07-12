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
      <div className="hidden md:flex items-center justify-betweenn gap-8 h-full">
        <div className="w-1/3">
          <Link href={"/"} className="flex flex-row gap-2">
            <Image src="/logo.png" alt="Logo" width={24} height={24} />
            <div className="text-2xl tracking-wide">IBTISAM</div>
          </Link>
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
