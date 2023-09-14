'use client'

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const page = () => {
  const searchParams = useSearchParams();
  const productData = JSON.parse(searchParams.get("productData"));
  return (
    <>
    {/* <div>my post {params.product} </div> */}
      <div className="bg-gray-100 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row -mx-4">
            <div className="md:flex-1 px-4">
              <div className="h-[460px] rounded-lg bg-gray-300 mb-4">
                <img
                  className="w-full h-full object-cover"
                  src={productData.imageFile}
                  alt="Product Image"
                />
              </div>
              <div className="flex -mx-2 mb-4">
                <div className="w-1/2 px-2">
                  <button className="w-full bg-gray-900 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800">
                    Add to Cart
                  </button>
                </div>
                <div className="w-1/2 px-2">
                  <button className="w-full bg-gray-400 text-gray-800 py-2 px-4 rounded-full font-bold hover:bg-gray-300">
                    Add to Wishlist
                  </button>
                </div>
              </div>
            </div>
            <div className="md:flex-1 px-4">
              <h2 className="text-2xl font-bold mb-2">{productData.title}</h2>
              <p className="text-gray-600 text-sm mb-4">
                {productData.tagline}
              </p>
              <div className="flex mb-4">
                <div className="mr-4">
                  <span className="font-bold text-gray-700">Price:</span>
                  <span className="text-gray-600">${productData.price}</span>
                </div>
                <div>
                  <span className="font-bold text-gray-700">Availability:</span>
                  <span className="text-gray-600">{productData.availability}</span>
                </div>
              </div>
              <div className="mb-4">
                <span className="font-bold text-gray-700">Select Color:</span>
                <div className="flex items-center mt-2">
                  <button className="w-6 h-6 rounded-full bg-gray-800 mr-2" />
                  <button className="w-6 h-6 rounded-full bg-red-500 mr-2" />
                  <button className="w-6 h-6 rounded-full bg-blue-500 mr-2" />
                  <button className="w-6 h-6 rounded-full bg-yellow-500 mr-2" />
                </div>
              </div>
              <div className="mb-4">
                <span className="font-bold text-gray-700">Select Size:</span>
                <div className="flex items-center mt-2">
                  <button className="bg-gray-300 text-gray-700 py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400">
                    S
                  </button>
                  <button className="bg-gray-300 text-gray-700 py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400">
                    M
                  </button>
                  <button className="bg-gray-300 text-gray-700 py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400">
                    L
                  </button>
                  <button className="bg-gray-300 text-gray-700 py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400">
                    XL
                  </button>
                  <button className="bg-gray-300 text-gray-700 py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400">
                    XXL
                  </button>
                </div>
              </div>
              <div>
                <span className="font-bold text-gray-700">
                  Product Description:
                </span>
                <p className="text-gray-600 text-sm mt-2">
                  {productData.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;







// 'use client'

// import { useRouter, useSearchParams } from "next/navigation";
// import { useEffect, useState } from "react";

// const ProductDetailsPage = () => {
//   const searchParams = useSearchParams();
//   const productData = JSON.parse(searchParams.get("productData"));

//   return (
//     <div>
//       <h1>Product Page</h1>
//       <p>Product title: {productData.title}</p>
//       <p>Product description: {productData.description}</p>
//     </div>
//   );
// };
// export default ProductDetailsPage
