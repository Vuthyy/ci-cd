const getData = async () => {
  const res = await fetch("http://localhost:5000/product");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};

export const getSingleProduct = async (_id: number) => {
  const product = await getData();
  const singleProduct = await product.find((item: any) => item._id === _id);
  return singleProduct;
};
