"use client";

import { useState, useEffect } from "react";
import Title from "@/components/ui/Title/Title";
import Products from "@/components/ui/Products/Products";
import Loading from "../loading";

const getData = async () => {
  const res = await fetch("https://jsonserver.reactbd.com/watch");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};

const Watches = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getData();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <main>
      <Title title="Find your Dream Watches" />
      {isLoading ? <Loading /> : <Products products={products} />}
    </main>
  );
};

export default Watches;
