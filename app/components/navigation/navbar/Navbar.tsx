// code by Samuel Lehman



"use client";
//Kaeden
import React from "react";
import Link from "next/link";
import { CartProvider, useCart } from "@/app/context/CartContext";
import { useSession, signOut } from "next-auth/react";
import { useState } from "react";
//Nick
import { usePathname } from "next/navigation";

const Navbar = () => {
  const { cartItems } = useCart();
  const { status } = useSession()
  const [menuVisible, setMenuVisible] = useState(false)

  // nw- added a change to ignore /studio
  const pathname = usePathname();
  if(pathname != "/studio" )
  return (
    <>
      <header>
        <div className="navbar bg-white fixed top-2 ">
          <div className="invisible lg:visible navbar-start bg-white">
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
              <p className="btn btn-ghost text-2xl">
                Parasol <span className="changeletter">Labs</span>
              </p>
            </div>
          </Link>
          <div className="navbar-end">
            {/* <a className="btn btn-ghost btn-circle bg-black"></a> */}
            {status !== 'authenticated' &&
              <>
                <div className="invisible lg:visible">
                  <Link className='m-2' href={"/api/auth/signin"}>Log In</Link>
                  <Link className='m-2' href={"/account/signup"}>Sign Up</Link>
                </div>
              </>
            }
            {status === 'authenticated' &&
              <>
                <div className="invisible lg:visible relative ">
                  {(cartItems && cartItems.length > 0) &&
                    <div className="absolute right-0 top-0 z-10 bg-red-500 rounded text-white p-[0.1rem]">
                      <p>{cartItems.length}</p>
                    </div>
                  }
                  <Link className='m-2' href={"/account/cart"}>
                    <img className='max-h-7' src="/images/cart.png" />
                  </Link>
                </div>
                <div className="invisible lg:visible mx-2">
                  <button onClick={() => signOut()}>Sign Out</button>
                </div>
              </>
            }
            <div className="lg:hidden">
              <button className="text-3xl font-bold text-black"
                onClick={() => setMenuVisible(!menuVisible)}>{menuVisible ?
                  <>
                    &#x2613;
                  </>
                  :
                  <>
                    &#x2630;
                  </>
                }</button>
              {menuVisible &&
                <div className="bg-white z-100 absolute right-0 p-10">
                  <div className="flex flex-col">
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
                    {status === 'authenticated' ?
                      <>
                        <Link className='m-2 changeletter' href={"/account/cart"}>My Cart</Link>
                        <button className='changeletter' onClick={() => signOut()}>Sign Out</button>
                      </>
                      :
                      <>
                        <Link className='m-2 changeletter' href={"/api/auth/signin"}>Log In</Link>
                        <Link className='m-2 changeletter' href={"/account/signup"}>Sign Up</Link>
                      </>
                    }
                  </div>
                </div>
              }
            </div>
          </div>
        </div>
      </header>
    </>
  );
  else return;
};

export default Navbar;
