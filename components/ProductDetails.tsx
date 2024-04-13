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
    const [quantity, setQuantity] = useState(1)

    return (
        <div className='md:flex block gap-x-4'>
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

                    <div className='flex items-center gap-x-8'>
                        <span>Quantity</span>
                        <div className='flex items-center gap-x-8'>
                            <button className='w-[40px] h-[40px] flex items-center justify-center text-lg font-semibold rounded-sm cursor-pointer bg-[#1D1D1D] disabled:cursor-default  disabled:bg-gray-400'
                                disabled={quantity > 1 ? false : true}
                                onClick={() => setQuantity(prev => prev > 1 ? prev - 1 : prev)}
                            >-</button>
                            <span>{quantity}</span>
                            <button className='w-[40px] h-[40px] flex items-center justify-center text-lg font-semibold rounded-sm cursor-pointer bg-[#1D1D1D] '
                                onClick={() => setQuantity(prev => prev + 1)}
                            >+</button>
                        </div>
                    </div>

                    <div className='flex ml-4 gap-x-3 items-center relative mt-5'>
                        <button className='w-[110px] bg-[#2562E7] p-3 rounded-sm'>add to cart</button>
                        <button className='w-[110px] bg-[#D0611E] p-3 rounded-sm'>buy now</button>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default ProductDetails