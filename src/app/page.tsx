import { ProductList } from "@/components/productList";
import { Slider } from "@/components/slider";
import React from "react";

const Home = () => {
  return (
    <>
      <Slider />
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64">
        <h1 className="text-2xl">Featured Products</h1>
        <ProductList />
      </div>
    </>
  );
};

export default Home;
