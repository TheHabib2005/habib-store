"use client"
import React from 'react'
import BrandLists from './BrandLists'
import DiscountRange from './DiscountRange'
import RatingStar from './RatingStar'
import PriceRange from './PriceRange'
import { usePathname, useRouter } from 'next/navigation'

const FilterWrapper = () => {
    const path = usePathname();
    console.log(path);
    const router = useRouter()

    return (
        <div className='w-[25%] bg-[#1d1d1d] md:block hidden py-4  rounded-sm  relative'>
            <div className='flex items-center justify-between px-4'>
                <h1>Filters</h1>
                <button className='text-sm text-neutral-300 hover:text-neutral-200' onClick={() => {
                    router.replace(path)
                }}>CLEAR ALL</button>
            </div>
            <BrandLists />
            <DiscountRange />
            <RatingStar />
            <PriceRange />
        </div>
    )
}

export default FilterWrapper