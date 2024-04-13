
import ProductDetails from '@/components/ProductDetails'
import React, { FC } from 'react'
interface Props {
    params: {
        id: string
    }
}
const ProductDetailsPage: FC<Props> = ({ params }) => {
    return (
        <section className='px-4'>
            <ProductDetails productId={params.id} />
        </section>
    )
}

export default ProductDetailsPage