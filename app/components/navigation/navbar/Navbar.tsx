'use client'

import React from "react";
import Link from "next/link";
import { useCart } from "@/app/context/CartContext";


const Navbar = () => {
  const { cartItems } = useCart()
  return (
    <>
      <div className="navbar bg-white">
        <div className="navbar-start bg-white">
          <Link href="/">
            <p className="btn btn-ghost">
              <span className="changeletter">Home</span>
            </p>
          </Link>
          <Link href="/about">
            <p className="btn btn-ghost ">
              <span className="changeletter">About</span>
            </p>
          </Link>
          <Link href="/news">
            <p className="btn btn-ghost">
              <span className="changeletter">News</span>
            </p>
          </Link>
          <Link href="/team">
            <p className="btn btn-ghost">
              <span className="changeletter">Team</span>
            </p>
          </Link>
          <Link href="/products">
            <p className="btn btn-ghost ">
              <span className="changeletter">Shop</span>
            </p>
          </Link>
        </div>
        <Link href="/">
          <div className="navbar-center">
            <p className="btn btn-ghost text-2xl">Parasol <span className="changeletter">Labs</span></p>
          </div>
        </Link>
        <div className="navbar-end">
          {/* <a className="btn btn-ghost btn-circle bg-black"></a> */}
          <Link className='m-2' href={"/api/auth/signin"}>Log In</Link>
          <Link className='m-2' href={"/account/signup"}>Sign Up</Link>
          <div className="relative">
            {
              cartItems.length > 0 &&
              <div className="absolute right-0 top-0 z-10 bg-red-500 rounded text-white p-[0.1rem]">
                <p>{cartItems.length}</p>
              </div>
            }
            <Link className='m-2' href={"/account/cart"}>
              <img className='max-h-7' src="/images/cart.png" />
            </Link>
          </div>
        </div>
      </div>
    </>

  );
};

export default Navbar;