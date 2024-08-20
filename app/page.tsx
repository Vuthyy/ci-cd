"use client";

import { useState, useEffect } from "react";
import Title from "@/components/ui/Title/Title";
import Products from "../components/ui/Products/Products";
import Loading from "./loading";
import { ProductProps } from "@/components/ui/Products/Products"; // Import ProductProps

const getData = async (page = 1, perPage = 8): Promise<ProductProps[]> => {
  try {
    const res = await fetch(
      `http://localhost:5000/product?_page=${page}&_per_page=${perPage}`
    );
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    const result = await res.json();
    console.log("API response:", result); // Debugging line to check the response
    return result.data; // Return the `data` array from the response
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};

export default function Home() {
  const [products, setProducts] = useState<ProductProps[]>([]); // Use ProductProps here
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true); // Start loading
      try {
        const newProducts = await getData(currentPage);

        console.log("Fetched products:", newProducts); // Debugging line

        setProducts((prevProducts) => [...prevProducts, ...newProducts]);

        // Check if we need to disable "Load More"
        if (newProducts.length < 8) {
          setHasMore(false);
        }
      } catch (error) {
        console.error("Error in useEffect:", error);
      } finally {
        setIsLoading(false); // End loading
      }
    };

    fetchProducts();
  }, [currentPage]);

  const handleLoadMore = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  return (
    <main>
      <Title title="All Products Here" />
      {isLoading && currentPage === 1 ? (
        <Loading />
      ) : (
        <>
          <Products products={products} />
          {isLoading && currentPage > 1 && <Loading />}
          {hasMore && (
            <button
              className={`my-4 px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 ml-[580px] ${
                isLoading ? "opacity-50 cursor-not-allowed" : ""
              }`}
              onClick={handleLoadMore}
              disabled={isLoading}
            >
              {isLoading ? "Loading..." : "Load More"}
            </button>
          )}
        </>
      )}
    </main>
  );
}
