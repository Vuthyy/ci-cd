"use client";

import { useState, useEffect } from "react";
import Title from "@/components/ui/Title/Title";
import Products from "@/components/ui/Products/Products";
import Loading from "../loading";

const getData = async () => {
  const res = await fetch("https://jsonserver.reactbd.com/phonecase");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};

const PhoneCase = () => {
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
      <Title title="Make your phone looks cool with beautiful Phone Case" />
      {isLoading ? <Loading /> : <Products products={products} />}
    </main>
  );
};

export default PhoneCase;
