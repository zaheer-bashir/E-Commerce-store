"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const NavIcons = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { push } = useRouter();

  const onProfile = () => {
    const isLoggedIn = false;
    if (isLoggedIn) {
      push("/login");
    } else {
      setIsProfileOpen((prev) => !prev);
    }
  };

  return (
    <div className="flex items-center gap-4 xl:gap-6 relative">
      <Image
        src="/profile.png"
        alt="Profile"
        width={22}
        height={22}
        className="cursor-pointer"
        onClick={onProfile}
      />
      {isProfileOpen && (
        <div className="absolute p-4 rounded-md top-12 left-0 text-sm z-20 shadow-md">
          <Link href={"/"}>Profile</Link>
          <div className="mt-2 cursor-pointer">Logout</div>
        </div>
      )}
      <Image
        src="/notification.png"
        alt="Notifications"
        width={22}
        height={22}
        className="cursor-pointer"
      />
      <Image
        src="/profile.png"
        alt="Cart"
        width={22}
        height={22}
        className="cart-pointer"
        onClick={() => setIsCartOpen(!isCartOpen)}
      />
    </div>
  );
};

export default NavIcons;
