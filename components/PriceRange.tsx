"use client"
import React from 'react'

const PriceRange = () => {
    return (
        <div className="my-5  border-t  border-neutral-700 px-4 py-3 select-none">
            <div className="flex items-center justify-between cursor-pointer">
                <h1>Price Range</h1>
            </div>
            <div className='flex items-center justify-between  mt-5'>
                <div className='w-[40%]'>
                    <input type="number" className='w-full outline-none bg-transparent border border-neutral-700 text-white rounded-sm py-2 px-2' placeholder='min' name="price-min" />
                </div>
                <span className=''>-</span>
                <div className='w-[40%]'>
                    <input type="number" className='w-full outline-none bg-transparent border border-neutral-700 text-white rounded-sm py-2 px-2' placeholder='max' name="price-max" />
                </div>
            </div>
            <button className='mt-3 p-2 w-full rounded-sm bg-black'>Apply</button>

        </div>
    )
}

export default PriceRange