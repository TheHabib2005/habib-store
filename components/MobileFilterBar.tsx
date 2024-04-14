"use client"
import React, { useState } from 'react'
import BrandLists from './BrandLists'
import DiscountRange from './DiscountRange'
import RatingStar from './RatingStar'
import PriceRange from './PriceRange'

const MobileFilterBar = () => {
    const [isFilterBarOpen, setFilterBarOpen] = useState(false)
    return (
        <div className='md:hidden block'>
            <div className='flex items-center gap-x-2 cursor-pointer border border-neutral-600  py-1 px-2 rounded-sm'
                onClick={() => {
                    setFilterBarOpen(true)
                }}
            >
                <p>Filters</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
                </svg>
            </div>
            <div className={`fixed overflow-y-scroll w-full flex  h-svh bg-black/60 z-10  top-0 ${isFilterBarOpen ? "left-0" : "left-[-100%]"}  `}>
                <div className='bg-black w-[85%] h-full '>
                    <div className='flex items-center justify-between p-4'>
                        <h3 className='capitalize text-lg'>filter Your Product</h3>
                        <svg
                            onClick={() => {
                                setFilterBarOpen(false)

                            }}
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </div>
                    <div className='mt-10 '>
                        <BrandLists />
                        {/* <DiscountRange /> */}
                        <RatingStar />
                        <PriceRange />
                    </div>
                </div>

                <div className='w-[15%] h-full' onClick={() => {
                    setFilterBarOpen(false)
                }}>

                </div>
            </div>
        </div>
    )
}

export default MobileFilterBar