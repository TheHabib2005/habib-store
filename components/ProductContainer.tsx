import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import BreadGrum from './BreadGrum'
import SelectSort from './SelectSort'
import ProductCard from './ProductCard'

const ProductContainer = () => {
    return (
        <div className="md:w-[75%] w-full bg-[#1d1d1d] h-auto p-4">
            <header className="sm:flex items-center justify-between pb-3">
                <BreadGrum />
                <SelectSort />
            </header>

            <div className="grid grid-flow-row gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-3">
                <ProductCard />
            </div>
        </div>
    )
}

export default ProductContainer