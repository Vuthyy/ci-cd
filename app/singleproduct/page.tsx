import { getSingleProduct } from "@/helpers";
import Image from "next/image";
import React from "react";

type Props = {
  searchParams: { [key: string]: string | string[] | undefined };
};

const SingleProduct = async ({ searchParams }: Props) => {
  const _idString = searchParams?._id;
  const _id = Number(_idString);
  const product = await getSingleProduct(_id);

  return (
    <div className="w-full h-screen bg-gray-200 flex items-center justify-center">
      <div className="w-[900px] h-[400px]rounded-lg shadow bg-white grid grid-cols-5 overflow-hidden">
        <div className="col-span-2 relative flex items-center justify-center">
          <Image
            src={product?.image}
            alt={product?.title}
            width={800}
            height={400}
            className="object-cover w-full"
          />
        </div>
        <div className="col-span-3 p-8">
          <h4 className="text-3xl font-bold">{product?.title}</h4>
          <p className="text-red-600 my-4 text-lg">
            {product?.isNew && "New Item"}
          </p>
          <b className="text-gray-700">Description</b>
          <p className="text-gray-700">{product?.description}</p>
          <h3 className="text-3xl font-bold text-gray-700 mt-4">
            Pice: ${product?.price}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
