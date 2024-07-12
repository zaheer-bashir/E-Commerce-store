"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const SearchBar = () => {
  const { push } = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement> | any) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    console.log(name);
    if (name) {
      push(`/list?name=${encodeURIComponent(name)}`); 
    }
  };

  return (
    <form className="flex ic justify-between items-center bg-gray-100 p-2 rounded-md flex-1">
      <input
        type="text"
        name="name"
        placeholder="Search"
        className="flex-1 bg-transparent outline-none border-none"
        onSubmit={handleSubmit}
      />
      <button>
        <Image src="/search.png" alt="Search Icon" width={16} height={16} />
      </button>
    </form>
  );
};

export default SearchBar;
