"use client";
import { addDoc, collection, doc, getDoc , onSnapshot } from "firebase/firestore";
import { db } from "../../../../../../firebase/firebaseConfig";

import { useRouter, useSearchParams, useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useAuth } from "../../../../../../firebase/Auth";
import { useProductData } from "@/app/(client)/ProductDataContext/ProductDataContext";
import { toast } from "react-toastify";

const ProductDetailsPage = () => {
  const { authUser } = useAuth();
  const {customerCartData , setCustomerCartData  } = useProductData();
  // const router = useRouter();
  // const searchParams = useSearchParams();
  const params = useParams();
  const productId = params.product;
  const [loading, setLoading] = useState(true);
  const [productData, setProductData] = useState(null);


  const addToCart = () => {
    if (authUser) {
      try {
        const cartRef = collection(db, `cart-${authUser.uid}`); // Reference to the cart collection
        const cartData = {
          productData,
          quantity: 1,
        };
        addDoc(cartRef, cartData); // Add the document to the cart collection
        console.log("You can add to cart");
        console.log("product added to cart successfully.....");

      } catch (error) {
        console.log(error);
      }
    }
    else{
      console.log("login first to do this task")
      toast.warning("Please login first to do this task")
    }
  };
  useEffect(() => {
    if (authUser) {
      const cartRef = collection(db, `cart-${authUser.uid}`);
      const unsubscribe = onSnapshot(cartRef, (snapshot) => {
        const cartData = [];
        snapshot.forEach((doc) => {
          cartData.push({ id: doc.id, ...doc.data() });
        });
        setCustomerCartData(cartData);
        console.log(cartData , 'from product page cart');
      });

      // Don't forget to unsubscribe when the component unmounts
      return () => unsubscribe();
    }
  }, [authUser]);

  const check = ()=>{
    console.log(customerCartData);

  }
  

  useEffect(() => {
    if (productId) {
      const getProductData = async () => {
        try {
          const productRef = doc(db, "products", productId);
          const productSnapshot = await getDoc(productRef);

          if (productSnapshot.exists()) {
            const product = { id: productId, ...productSnapshot.data() };
            setProductData(product);
            // console.log(productData , "product data");
          } else {
            <>product not available</>;
            // Handle the case where the product doesn't exist
          }
        } catch (error) {
          console.log(error);
          // Handle any errors that occur during fetching
        } finally {
          setLoading(false);
        }
      };

      getProductData();
    }
  }, [productId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!productData) {
    return <div>Product not found</div>;
  }
  return (
    <>
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
                  <button
                    onClick={addToCart}
                    className="w-full bg-gray-900 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800"
                  >
                    Add to Cart
                  </button>
                </div>
                <div className="w-1/2 px-2">
                  <button  className="w-full bg-gray-400 text-gray-800 py-2 px-4 rounded-full font-bold hover:bg-gray-300">
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
                  <span className="text-gray-600">
                    {productData.availability}
                  </span>
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

export default ProductDetailsPage;
