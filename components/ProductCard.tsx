"use client"
import { useCartStore } from '@/zustand/useCartStore'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect } from 'react'
import LazyImage from './LazyImage'

const ProductCard = () => {
    const currentPath = usePathname();




    return (
        <>
            <div className="aspect-square transition-opacity animate-fadeIn">
                <Link
                    className="relative inline-block h-full w-full"
                    href={`${currentPath}/035249831056489`}
                >
                    <div className="group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-white hover:border-blue-600 dark:bg-[#252424] relative border-neutral-200 dark:border-neutral-800">
                        <LazyImage src='https://static-01.daraz.com.bd/p/defb4a1f8dd811c6f099a97c90fb2c15.jpg_750x750.jpg_.webp' />
                        <div className="absolute bottom-0 left-0 flex w-full px-4 pb-4 @container/label">
                            <div className="flex items-center rounded-full border bg-white/70 p-1 text-xs font-semibold text-black backdrop-blur-md dark:border-neutral-800 dark:bg-[#1D1D1D] dark:text-white">
                                <h3 className="mr-4 line-clamp-2 flex-grow pl-2 leading-none tracking-tight">
                                    Acme Circles T-Shirt
                                </h3>
                                <p className="flex-none rounded-full bg-blue-600 p-2 text-white">
                                    $20.00
                                    <span className="ml-1 inline hidden @[275px]/label:inline">
                                        USD
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
            <div className="aspect-square transition-opacity animate-fadeIn">
                <Link
                    className="relative inline-block h-full w-full"
                    href="/product/acme-geometric-circles-t-shirt"
                >
                    <div className="group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-white hover:border-blue-600 dark:bg-[#252424] relative border-neutral-200 dark:border-neutral-800">
                        <Image
                            className="w-full object-contain  transition duration-300 ease-in-out group-hover:scale-105 "
                            width={1000000}
                            height={100000}
                            alt=""
                            src={
                                "https://static-01.daraz.com.bd/p/1f6f4cdee3b28dfb6396fe62ffccea9e.jpg_300x0q75.webp"
                            }
                        />
                        <div className="absolute bottom-0 left-0 flex w-full px-4 pb-4 @container/label">
                            <div className="flex items-center rounded-full border bg-white/70 p-1 text-xs font-semibold text-black backdrop-blur-md dark:border-neutral-800 dark:bg-[#1D1D1D] dark:text-white">
                                <h3 className="mr-4 line-clamp-2 flex-grow pl-2 leading-none tracking-tight">
                                    Acme Circles T-Shirt
                                </h3>
                                <p className="flex-none rounded-full bg-blue-600 p-2 text-white">
                                    $20.00
                                    <span className="ml-1 inline hidden @[275px]/label:inline">
                                        USD
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
            <div className="aspect-square transition-opacity animate-fadeIn">
                <Link
                    className="relative inline-block h-full w-full"
                    href="/product/acme-geometric-circles-t-shirt"
                >
                    <div className="group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-white hover:border-blue-600 dark:bg-[#252424] relative border-neutral-200 dark:border-neutral-800">
                        <Image
                            className="w-full object-contain  transition duration-300 ease-in-out group-hover:scale-105 h-auto"
                            width={10000000}
                            height={1000000}
                            alt=""
                            src={
                                "https://static-01.daraz.com.bd/p/3f4ecb0bab5c31ab9d47deef93473881.jpg_300x0q75.webp"
                            }
                        />
                        <div className="absolute bottom-0 left-0 flex w-full px-4 pb-4 @container/label">
                            <div className="flex items-center rounded-full border bg-white/70 p-1 text-xs font-semibold text-black backdrop-blur-md dark:border-neutral-800 dark:bg-[#1D1D1D] dark:text-white">
                                <h3 className="mr-4 line-clamp-2 flex-grow pl-2 leading-none tracking-tight">
                                    Acme Circles T-Shirt
                                </h3>
                                <p className="flex-none rounded-full bg-blue-600 p-2 text-white">
                                    $20.00
                                    <span className="ml-1 inline hidden @[275px]/label:inline">
                                        USD
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    )
}

export default ProductCard