"use client"
import Link from 'next/link'
import React from 'react'
import { useRouter, usePathname } from 'next/navigation';
import { BsSearch } from "react-icons/bs";
import { AiOutlineUser, AiOutlineShoppingCart } from "react-icons/ai";
import CartCountBadge from "./CartCountBadge";

const Navbar = () => {
  // const router = useRouter();
  // const pathname = usePathname()
  return (
    <div className="container hidden lg:block">
      <div className="flex justify-between items-center pt-8">
        <Link href="/">
        <img className="h-7" src="/logo.svg" alt="" />
        </Link>
        {/* <h1 className="text-4xl font-medium">Logo</h1> */}
        <div className="relative w-full max-w-[500px]">
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
          <div className="icon__wrapper">
            <AiOutlineUser />
          </div>
          <Link href='/cart'>
            <div className="icon__wrapper relative">
              <AiOutlineShoppingCart />
              <CartCountBadge size="w-[25px] h-[25px]" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
