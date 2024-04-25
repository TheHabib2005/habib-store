"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import MobileSideBar from "./MobileSideBar";
import CartBar from "./CartBar";
import { useCartStore } from "@/zustand/useCartStore";
import { delay } from "@/helpers";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useOtherStore } from "@/zustand/useOtherStore";
import { ProductsApi } from "@/ProductApi";
import SearchBar from "./SearchBar";
const Header = () => {




    const [isSideBarOpen, setIsSideBarOpen] = useState<boolean>(false);
    // const [isCartBarOpen, setIsCartBarOpen] = useState<boolean>(false)
    const { cart, setIsCartOpen, isCartOpen } = useCartStore();


    return (
        <header className="w-full flex items-center md:justify-normal justify-between sm:py-6 py-4 px-4">
            {/* mobile view left menu icon */}
            <div
                className="relative p-3 rounded-md border border-neutral-700 md:hidden block cursor-pointer"
                onClick={() => setIsSideBarOpen(true)}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                </svg>
            </div>
            {/* left Links */}
            <div className="w-1/3 flex items-center md:justify-normal justify-center">
                <Link
                    href={"/"}
                    className="lg:text-xl font-semibold lg:block md:hidden sm:text-lg text-sm text-white"
                >
                    HABIB-STORE
                </Link>
                <Link
                    href={"/"}
                    className="text-md font-semibold lg:hidden md:block hidden"
                >
                    HABIB
                </Link>
                <div className=" items-center gap-5 ml-[30px] md:flex hidden">
                    <Link
                        href={"/about"}
                        className="text-neutral-400  hover:text-white  text-sm hover:underline"
                    >
                        About
                    </Link>
                    <Link
                        href={"/contact"}
                        className="text-neutral-400 hover:text-white  text-sm hover:underline"
                    >
                        Contact
                    </Link>
                </div>
            </div>
            {/* search box */}
            <SearchBar />
            {/*  right side icon  */}
            <div className="w-1/3 md:flex hidden items-center gap-6 justify-end select-none ">
                {/* wishList icon */}
                <div className="relative ">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="xl:w-7 xl:h-7 w-6 h-6 cursor-pointer text-white"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                        />
                    </svg>
                    <div className="absolute text-white bg-[#2563EB] w-4 h-4 rounded-full font-bold  top-[-6px] right-[-6px] text-[12px] flex items-center justify-center">
                        10
                    </div>
                </div>
                {/* cart icon */}
                <div className="relative " onClick={() => setIsCartOpen(true)}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className=" text-white xl:w-7 xl:h-7 w-6 h-6 cursor-pointer"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                        />
                    </svg>
                    <div className="absolute text-white bg-[#2563EB] w-4 h-4 rounded-full font-bold  top-[-6px] right-[-6px] text-[12px] flex items-center justify-center">
                        {cart.length}
                    </div>
                </div>

                {/* user icon */}
                <div>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="xl:w-7 xl:h-7 w-6 h-6 cursor-pointer text-white"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                        />
                    </svg>
                </div>
            </div>
            {/* mobile view right side cart icon  */}
            <div
                className="relative p-3 rounded-md border border-neutral-700 md:hidden block cursor-pointer"
                onClick={() => setIsCartOpen(true)}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 cursor-pointer"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                    />
                </svg>
                <div className="absolute bg-[#2563EB] w-5 h-5 rounded-full font-bold  top-[-10px] right-[-6px] text-[12px] flex items-center justify-center">
                    {cart.length}
                </div>
            </div>

            {/* mobile view side-bar */}
            <MobileSideBar
                isSideBarOpen={isSideBarOpen}
                setIsSideBarOpen={setIsSideBarOpen}
            />
            {/* mobile view cart-bar */}
            <CartBar />
        </header>
    );
};

export default Header;
