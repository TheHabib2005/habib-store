
import React, { FC } from 'react'
import BreadGrum from './BreadGrum'
import SelectSort from './SelectSort'
import ProductCard from './ProductCard'
import ProductCardDisplayWrapper from './ProductCardDisplayWrapper'

import MobileFilterBar from './MobileFilterBar'
import FetchProducts from '@/hooks/useFetchProducts'
import Loading from './Loading'
import Error from './Error'
interface PROPS {

    category: string;

}
const ProductContainer: FC<PROPS> = ({ category }) => {

    return (
        <div className="md:w-[75%] w-full bg-[#1d1d1d] h-auto p-4 relative">
            <header className="md:flex items-center justify-between pb-3">
                <BreadGrum />
                <div className='flex items-center justify-between mt-4'>
                    <MobileFilterBar />
                    <SelectSort />
                </div>
            </header>

            <div className="grid grid-flow-row gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-3">
                <ProductCardDisplayWrapper category={category} />
            </div>
        </div>
    )
}

export default ProductContainer