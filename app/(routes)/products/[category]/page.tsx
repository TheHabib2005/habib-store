import FilterWrapper from '@/components/FilterWrapper'
import Image from 'next/image'
import Link from 'next/link'
import React, { FC } from 'react'
interface PROPS {
    params: {
        category: string
    }
}
const Category: FC<PROPS> = ({ params }) => {
    return (
        <section>
            <div className='flex px-4 py-5 min-w-full gap-x-4'>
                {/* filter bar */}
                <FilterWrapper />


                {/* product bar */}
                <div className='md:w-[75%] w-full bg-[#1d1d1d] h-auto p-4'>
                    <header className='flex items-center justify-between pb-3'>
                        <div>BreadGrums</div>
                        <div>select dropdown</div>
                    </header>

                    <div className="grid grid-flow-row gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">


                        <div className="aspect-square transition-opacity animate-fadeIn">
                            <Link
                                className="relative inline-block h-full w-full"
                                href="/product/acme-geometric-circles-t-shirt"
                            >
                                <div className="group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-white hover:border-blue-600 dark:bg-[#252424] relative border-neutral-200 dark:border-neutral-800">
                                    <Image
                                        className='w-full object-contain  transition duration-300 ease-in-out group-hover:scale-105 '
                                        width={1000000}
                                        height={100000}
                                        alt=''
                                        src={"https://static-01.daraz.com.bd/p/defb4a1f8dd811c6f099a97c90fb2c15.jpg_750x750.jpg_.webp"}
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
                                        className='w-full object-contain  transition duration-300 ease-in-out group-hover:scale-105 '
                                        width={1000000}
                                        height={100000}
                                        alt=''
                                        src={"https://static-01.daraz.com.bd/p/1f6f4cdee3b28dfb6396fe62ffccea9e.jpg_300x0q75.webp"}
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
                                        className='w-full object-contain  transition duration-300 ease-in-out group-hover:scale-105 h-auto'
                                        width={10000000}
                                        height={1000000}
                                        alt=''
                                        src={"https://static-01.daraz.com.bd/p/0bede50eb47a9c0175c205454703fcfe.jpg_300x0q75.webp"}
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
                    </div>


                </div>

            </div>
        </section>
    )
}

export default Category