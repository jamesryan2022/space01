import type { NextPage } from "next";
import { useState } from "react";
import Products from "../components/layout/Products/Products";
import useHelpers from "../hooks/useHelpers";

export interface PageData {
  data: { name: string; price: number }[];
}

const Home: NextPage<PageData> = ({ data }: PageData) => {
  // Hooks
  const { sortByCheapest } = useHelpers();

  // Sort Data
  let productsSorted = sortByCheapest(data, "price");

  // Set State
  const [products, setProducts] = useState(productsSorted);

  return <Products products={products} />;
};

export default Home;

export function getStaticProps() {
  const data = [
    { name: "Item A", price: 125 },
    { name: "Item B", price: 230 },
    { name: "Item C", price: 295 },
    { name: "Item D", price: 245 },
    { name: "Item E", price: 900 },
    { name: "Item F", price: 875 },
    { name: "Item G", price: 235 },
    { name: "Item H", price: 400 },
  ];

  return {
    props: {
      data,
    },
  };
}
