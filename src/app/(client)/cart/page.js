'use client'
import React from 'react';
import { useProductData } from '../ProductDataContext/ProductDataContext';
import { useEffect } from 'react';
import { useAuth } from '../../../../firebase/Auth';
import {
  collection,
  where,
  query,
  getDocs,
  onSnapshot,
  doc,
  updateDoc,
} from 'firebase/firestore';
import { db } from '../../../../firebase/firebaseConfig';

const Page = () => {
  const { customerCartData, setCustomerCartData, productData, setproductData } = useProductData();
  const { authUser } = useAuth();

  useEffect(() => {
    if (authUser) {
      const cartRef = collection(db, `cart-${authUser.uid}`);
      const unsubscribe = onSnapshot(cartRef, (snapshot) => {
        const cartData = [];
        snapshot.forEach((doc) => {
          cartData.push({ id: doc.id, ...doc.data() });
        });
        setCustomerCartData(cartData);
        console.log(cartData, 'from cart page');
      });

      // Don't forget to unsubscribe when the component unmounts
      return () => unsubscribe();
    }
  }, [authUser]);

  // const increaseQuantity = async () => {
  //   if (authUser) {
  //     try {
  //       const cartData = doc(db, `cart-${authUser.uid}` , cartItem.id);

  //     await updateDoc(cartItem.id, {
  //       quantity: + 1
  //     });
  //     } catch (error) {
  //       console.error("PROCESS FAILED" , error)
  //     }
  
  //   } else {
  //     console.log("Login first to do this task");
  //     toast.warning("Please log in first to do this task");
  //   }
  // };
  // const decreaseQuantity = async () => {
  //   if (authUser) {
  //     try {
  //       const cartData = doc(db, `cart-${authUser.uid}` , cartItem.id);

  //     await updateDoc(cartItem.id, {
  //       quantity: - 1
  //     });
  //     } catch (error) {
  //       console.error("PROCESS FAILED" , error)
  //     }
  
  //   } else {
  //     console.log("Login first to do this task");
  //     toast.warning("Please log in first to do this task");
  //   }
  // };
  // const increaseQuantity = async (cartItem) => {
  //   if (authUser) {
  //     try {
  //       const cartDocRef = doc(db, `cart-${authUser.uid}`, cartItem.id);
  //       const newQuantity = cartItem.quantity + 1; // Increment quantity
  //       await updateDoc(cartDocRef, { quantity: newQuantity });
  //     } catch (error) {
  //       console.error("PROCESS FAILED", error);
  //     }
  //   } else {
  //     console.log("Login first to do this task");
  //     toast.warning("Please log in first to do this task");
  //   }
  // };
  const increaseQuantity = async (cartItem) => {
    console.log("authUser:", authUser);
    console.log("cartItem:", cartItem);
  
    if (authUser) {
      try {
        const cartDocRef = doc(db, `cart-${authUser.uid}`, cartItem.id);
        const newQuantity = cartItem.quantity + 1; // Increment quantity
        await updateDoc(cartDocRef, { quantity: newQuantity });
      } catch (error) {
        console.error("PROCESS FAILED", error);
      }
    } else {
      console.log("Login first to do this task");
      toast.warning("Please log in first to do this task");
    }
  };
  
  
  const decreaseQuantity = async (cartItem) => {
    if (authUser) {
      try {
        if (cartItem.quantity > 1) {
          const cartDocRef = doc(db, `cart-${authUser.uid}`, cartItem.id);
          const newQuantity = cartItem.quantity - 1; // Decrement quantity
          await updateDoc(cartDocRef, { quantity: newQuantity });
        } else {
          // Optionally, you can remove the item from the cart if the quantity becomes zero.
          // You can add this logic based on your requirements.
          console.log("Quantity cannot be less than 1");
        }
      } catch (error) {
        console.error("PROCESS FAILED", error);
      }
    } else {
      console.log("Login first to do this task");
      toast.warning("Please log in first to do this task");
    }
  };
  
  // const increaseQuantity = async (cartItem) => {
  //   if (authUser) {
  //     try {
  //       const cartDocRef = doc(db, `cart-${authUser.uid}`, cartItem.id);
  
  //       await updateDoc(cartDocRef, {
  //         quantity: cartItem.quantity + 1
  //       });
  //     } catch (error) {
  //       console.error("PROCESS FAILED", error);
  //     }
  //   } else {
  //     console.log("Login first to do this task");
  //     toast.warning("Please log in first to do this task");
  //   }
  // };
  
  // const decreaseQuantity = async (cartItem) => {
  //   if (authUser) {
  //     try {
  //       const cartDocRef = doc(db, `cart-${authUser.uid}`, cartItem.id);
  
  //       await updateDoc(cartDocRef, {
  //         quantity: cartItem.quantity - 1
  //       });
  //     } catch (error) {
  //       console.error("PROCESS FAILED", error);
  //     }
  //   } else {
  //     console.log("Login first to do this task");
  //     toast.warning("Please log in first to do this task");
  //   }
  // };

  const check = () => {
    console.log(customerCartData, " checking cart item ")
  }

  return (
    <>
      {/* <style
  dangerouslySetInnerHTML={{
    __html:
      '\n    @layer utilities {\n    input[type="number"]::-webkit-inner-spin-button,\n    input[type="number"]::-webkit-outer-spin-button {\n      -webkit-appearance: none;\n      margin: 0;\n    }\n  }\n'
  }}
/> */}
      <div className="min-h-screen bg-gray-100 pt-20 mb-1">
        <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
        <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
          <div className="rounded-lg md:w-2/3">
            {customerCartData.map((cartItem) => (
              <div onClick={() => console.log(cartItem.id)} value={cartItem.id} key={cartItem.id} className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
                <img
                  src={cartItem.productData.imageFile}
                  alt="product-image"
                  className="w-full rounded-lg sm:w-40"
                />
                <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                  <div className="mt-5 sm:mt-0">
                    <h2 className="text-lg font-bold text-gray-900">
                      {cartItem.productData.title}
                    </h2>
                    <p className="mt-1 text-xs text-gray-700">{cartItem.productData.tagline}</p>
                  </div>
                  <div className="mt-4 flex justify-between im sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                    <div className="flex items-center border-gray-100">
                      <span onClick={decreaseQuantity} className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50">
                        {" "}
                        -{" "}
                      </span>
                      <input
                        className="h-8 w-8 border bg-white text-center text-xs outline-none"
                        type="number"
                        // defaultValue={2}
                        value={cartItem.quantity}
                        min={1}
                      />
                      {/* <span>{cartItem.productData.quantity}</span> */}
                      <span onClick={increaseQuantity} className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50">
                        {" "}
                        +{" "}
                      </span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <p className="text-sm">{cartItem.productData.price}.00 ₭</p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}


          </div>
          {/* Sub total */}
          <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
            <div className="mb-2 flex justify-between">
              <p className="text-gray-700">Subtotal</p>
              <p className="text-gray-700">$129.99</p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-700">Shipping</p>
              <p className="text-gray-700">$4.99</p>
            </div>
            <hr className="my-4" />
            <div className="flex justify-between">
              <p className="text-lg font-bold">Total</p>
              <div className="">
                <p className="mb-1 text-lg font-bold">$134.98 USD</p>
                <p className="text-sm text-gray-700">including VAT</p>
              </div>
            </div>
            <button onClick={check} className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">
              Check out
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
