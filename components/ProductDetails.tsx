"use client"
import { ProductsApi } from '@/ProductApi'
import Image from 'next/image'
import React, { FC, useState } from 'react'
interface Props {
    productId: string
}
const ProductDetails: FC<Props> = (productId) => {
    const [currentProduct] = useState(ProductsApi[0]);
    console.log(currentProduct);
    const [currentDisplayimage, setCurrentDisplayImage] = useState(currentProduct.thumbnail)
    const [currentDisplayimageActive, setCurrentDisplayImageActive] = useState(0)


    return (
        <div className='flex gap-x-4'>
            <div className='w-[40%] p-2'>
                <div className='w-full '>
                    <Image
                        className='rounded-sm'
                        src={currentDisplayimage}
                        width={5000000}
                        height={5000000}
                        alt=''
                    />
                </div>
                <div className='flex items-center mt-3 gap-x-3 w-full '>
                    {
                        currentProduct.images.map((image, index) => {
                            return <Image key={index}
                                onClick={() => {
                                    setCurrentDisplayImage(image)
                                    setCurrentDisplayImageActive(index)
                                }}
                                className={`rounded-sm cursor-pointer ${currentDisplayimageActive === index ? "border-2 border-blue-700" : ""}`}
                                src={image}
                                width={80}
                                height={80}
                                alt=''
                            />
                        })
                    }
                </div>
            </div>
            <div className='w-[60%] bg-red-300'>
                <div>
                    <h1>{currentProduct.title}</h1>
                    <span className='flex items-center gap-x-2'> {
                        Array(4).fill("4").map(rating => {
                            return <svg key={rating} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 text-yellow-400">
                                <path fillRule="evenodd" d="M8 1.75a.75.75 0 0 1 .692.462l1.41 3.393 3.664.293a.75.75 0 0 1 .428 1.317l-2.791 2.39.853 3.575a.75.75 0 0 1-1.12.814L7.998 12.08l-3.135 1.915a.75.75 0 0 1-1.12-.814l.852-3.574-2.79-2.39a.75.75 0 0 1 .427-1.318l3.663-.293 1.41-3.393A.75.75 0 0 1 8 1.75Z" clipRule="evenodd" />
                            </svg>

                        }
                        )
                    }</span>
                    <p className='capitalize'>Brand : {currentProduct.brand}</p>

                    <p>৳ {currentProduct.stringPrice}</p>

                </div>
            </div>
        </div>
    )
}

export default ProductDetails