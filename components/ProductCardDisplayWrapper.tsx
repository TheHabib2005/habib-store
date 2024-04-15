"use client"
import { ProductsApi } from '@/ProductApi'
import React, { FC, useState } from 'react'
import ProductCard from './ProductCard'
import FetchProducts from '@/hooks/useFetchProducts'
import Loading from './Loading'
import { ProductSkelecttion } from './ProductSkelectionLoader'
import Error from './Error'
interface PROPS {

    category: string;

}
const ProductCardDisplayWrapper: FC<PROPS> = ({ category }) => {
    // const [productData] = useState(ProductsApi);
    const { isLoading, productsData, error } = FetchProducts(category);
    if (error) {
        return <Error />
    }
    // if (isLoading) {
    //     return <Loading />
    // }
    return (
        <>
            {isLoading ? <div>
                <Loading />
                <ProductSkelecttion />
            </div> :

                productsData.map((product) => {
                    return <ProductCard key={product.id} product={product} />
                })
            }
        </>
    )
}

export default ProductCardDisplayWrapper