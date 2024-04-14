
import ProductDetails from '@/components/ProductDetails'
import React, { FC } from 'react'
interface Props {
    params: {
        id: string
    }
}
const ProductDetailsPage: FC<Props> = async ({ params }) => {

    return (
        <section className='md:px-4 px-2'>
            <ProductDetails productId={params.id} />
        </section>
    )
}

export default ProductDetailsPage