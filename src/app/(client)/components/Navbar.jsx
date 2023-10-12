"use client"
import Link from 'next/link'
import React from 'react'
import { BsSearch } from "react-icons/bs";
import { AiOutlineUser, AiOutlineShoppingCart } from "react-icons/ai";
import CartCountBadge from "./CartCountBadge";
// import { onAuthStateChanged, signOut as authSignOut } from "firebase/auth";
// import { auth } from '../../../../firebase/firebaseConfig';
import { useAuth } from '../../../../firebase/Auth';
import { toast } from 'react-toastify';
import LoginModel from './LoginModel';
import RegisterModel from './RegisterModel';
import { useProductData } from '../ProductDataContext/ProductDataContext';


const Navbar = () => {
  const { signOut, authUser, isLoading, handleLoginButtonClick, setLoginModalOpen, isLoginModalOpen , handleSignupButtonClick , isRegisterModalOpen, setRegisterModalOpen} = useAuth();
  const { customerCartData, setCustomerCartData } = useProductData();
  // const handleSignOut = () => {
  //   console.log("Signing out... click");
  //   try {
  //     signOut();
  //     console.log("Signed out successfully");
  //     toast.success("Sign out successfully");
  //   }

  //   catch (error) {
  //     console.error(error)
  //     toast.error("Sign out failed");
  //   }
  // }

  // const handleSignOut = () => {
  //   try {
  //     signOut();
  //     console.log("Signed out successfully");
  //     toast.success("Sign out successfully");
  //     clearUser();
  //   }

  //   catch (error) {
  //     console.error(error)
  //     toast.error("Sign out failed");
  //   }
  // };
  const handleSignOut = () => {
    if (authUser) {
      signOut();
      setCustomerCartData([])
    } else {
      console.log('No user authenticated.'); // Add appropriate error handling
    }
  };


  return (
    <>
      <div className="container block">
        <div className="flex justify-between items-center pt-8">
          <Link href="/">
            <img className="h-7" src="/logo.svg" alt="" />
          </Link>
          {/* <h1 className="text-4xl font-medium">Logo</h1> */}
          <div className="relative w-full max-w-[500px] hidden sm:block">
            <input
              className="bg-[#f2f3f5] border-none outline-none px-6 py-3 rounded-[30px] w-full"
              type="text"
              placeholder="Search Product..."
            />
            <BsSearch
              className="absolute top-0 right-0 mt-4 mr-5 text-gray-500"
              size={20}
            />
          </div>

          <div className="flex gap-4">
            {isLoading || (!isLoading && !authUser) ? (
              <>
                <div className='text-xs rounded-xl border-2 icon__wrapper' onClick={handleLoginButtonClick} >
                  Login
                </div>
                <div className='text-xs rounded-xl border-2 icon__wrapper' onClick={handleSignupButtonClick} >
                  Register
                </div>
              </>
            )
              : (
                <div onClick={handleSignOut} className="text-xs icon__wrapper">
                  <AiOutlineUser />
                </div>
              )}
            <Link href='/cart'>
              <div className="icon__wrapper relative">
                <AiOutlineShoppingCart />
                <CartCountBadge size="w-[25px] h-[25px]" />
              </div>
            </Link>
          </div>
        </div>
      </div>
      {isLoginModalOpen && <LoginModel closeModal={() => setLoginModalOpen(false)} />}
      {isRegisterModalOpen && <RegisterModel closeModal={() => setLoginModalOpen(false)} />}
    </>
  );
};

export default Navbar;
