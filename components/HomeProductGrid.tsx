import { HomeDisplayedProducts } from '@/ProductData'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const HomeProduct = () => {
    return (
        <section className=" grid  gap-4 px-4 pb-4 md:grid-cols-6 md:grid-rows-2 max-w-screen-2xl  mx-auto">
            <div className="md:col-span-4 md:row-span-2">
                <Link
                    className="relative block aspect-square h-full w-full"
                    href={`/product/${HomeDisplayedProducts[0].category}/${HomeDisplayedProducts[0].title}`}
                >
                    <div className="group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-white hover:border-blue-600 dark:bg-black relative border-neutral-800">
                        <Image
                            className='transition duration-300 ease-in-out group-hover:scale-105 sm:w-[300px] w-[200px] sm:w-[300px] w-[200px]'
                            src={`${HomeDisplayedProducts[0].thumbnail}`}
                            width={300}
                            height={300}
                            alt=''
                        />
                        <div className="absolute bottom-0 left-0 flex w-full px-4 pb-4 @container/label lg:px-20 lg:pb-[35%]">
                            <div className="flex items-center rounded-full border bg-white/70 p-1 text-xs font-semibold text-black backdrop-blur-md dark:border-neutral-800 dark:bg-black/70 dark:text-white">
                                <h3 className="mr-4 line-clamp-2  capitalize text-[15px] flex-grow pl-2 leading-none tracking-tight">
                                    {HomeDisplayedProducts[0].title}
                                </h3>
                                <p className="flex-none rounded-full bg-blue-600 p-2 text-white">
                                    ${HomeDisplayedProducts[0].price}
                                    <span className="ml-1 inline hidden @[275px]/label:inline">
                                        USD
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
            <div className="md:col-span-2 md:row-span-1">
                <Link
                    className="relative block aspect-square h-full w-full"
                    href={`/product/${HomeDisplayedProducts[1].category}/${HomeDisplayedProducts[1].title}`}
                >
                    <div className="group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-white hover:border-blue-600 dark:bg-black relative border-neutral-800">
                        <Image
                            className='transition duration-300 ease-in-out group-hover:scale-105 sm:w-[300px] w-[200px]'
                            src={`${HomeDisplayedProducts[1].thumbnail}`}
                            width={300}
                            height={300}
                            alt=''
                        />
                        <div className="absolute bottom-0 left-0 flex w-full px-4 pb-4 @container/label">
                            <div className="flex items-center rounded-full border bg-white/70 p-1 text-xs font-semibold text-black backdrop-blur-md dark:border-neutral-800 dark:bg-black/70 dark:text-white">
                                <h3 className="mr-4 line-clamp-2  text-[15px] flex-grow pl-2 leading-none tracking-tight capitalize">
                                    {HomeDisplayedProducts[1].title}
                                </h3>
                                <p className="flex-none rounded-full bg-blue-600 p-2 text-white">
                                    ${HomeDisplayedProducts[1].price}
                                    <span className="ml-1 inline hidden @[275px]/label:inline">
                                        USD
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
            <div className="md:col-span-2 md:row-span-1">
                <Link
                    className="relative block aspect-square h-full w-full"
                    href="/product/acme-cup"
                >
                    <div className="group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-white hover:border-blue-600 dark:bg-black relative border-neutral-800">
                        <Image
                            className='transition duration-300 ease-in-out group-hover:scale-105 sm:w-[300px] w-[200px]'
                            src={`${HomeDisplayedProducts[2].thumbnail}`}
                            width={300}
                            height={300}
                            alt=''
                        />
                        <div className="absolute bottom-0 left-0 flex w-full px-4 pb-4 @container/label">
                            <div className="flex items-center rounded-full border bg-white/70 p-1 text-xs font-semibold text-black backdrop-blur-md dark:border-neutral-800 dark:bg-black/70 dark:text-white">
                                <h3 className="mr-4 line-clamp-2  text-[15px] flex-grow pl-2 leading-none tracking-tight capitalize">
                                    {HomeDisplayedProducts[2].title}
                                </h3>
                                <p className="flex-none rounded-full bg-blue-600 p-2 text-white">
                                    ${HomeDisplayedProducts[2].price}
                                    <span className="ml-1 inline hidden @[275px]/label:inline">
                                        USD
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        </section>

    )
}

export default HomeProduct