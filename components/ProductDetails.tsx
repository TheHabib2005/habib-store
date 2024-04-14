"use client"
import { ProductsApi } from '@/ProductApi'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import React, { FC, useEffect, useState } from 'react'
import BreadGrum from './BreadGrum'
import { useCartStore } from '@/zustand/useCartStore'
import { ProductsTYPE } from '@/constant-type'
import axios from 'axios'
import { axiosInstance } from '@/helpers'


interface Props {
    productId: string
}
const ProductDetails: FC<Props> = ({ productId }) => {

    const [currentProduct, setCurrentProduct] = useState<any>([]);
    const { addToCart, cart, removeFromCart, updateQuantity } = useCartStore()
    const isProudctInCart = () => {
        return cart.find((item: any) => item.id === currentProduct.id)
    }
    const [currentDisplayimage, setCurrentDisplayImage] = useState(currentProduct.thumbnail)
    const [currentDisplayimageActive, setCurrentDisplayImageActive] = useState(1)
    const [quantity, setQuantity] = useState(1)
    const router = useRouter();
    const path = usePathname();
    const [isLoading, setIsLoading] = useState(false);

    const [error, setError] = useState<any>();

    const fetchProductById = async () => {
        try {
            setIsLoading(true);
            const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products/singleProduct/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(productId),
            })
            const data = await response.json();
            setCurrentProduct(data[0])
            setIsLoading(false);
            setCurrentDisplayImage(data[0].thumbnail)
        } catch (error) {
            setIsLoading(false);
            setError(error)
        }
    }


    useEffect(() => {
        fetchProductById()
    }, [])

    return (
        <div className='lg:flex block gap-x-4'>
            {isLoading ? "Loading" :
                <>
                    <div className='lg:w-[40%] p-2'>
                        <div className=' md:hidden block mb-5  '><BreadGrum category={currentProduct.category} /></div>

                        <div className='w-full '>
                            {/* <button onClick={() => router.back()}>back</button> */}
                            <Image
                                className='rounded-sm '
                                src={currentDisplayimage}
                                width={5000000}
                                height={5000000}
                                alt=''
                            />
                        </div>
                        <div className='flex items-center mt-3 gap-x-3 w-full '>
                            {
                                currentProduct?.images?.map((image: string, index: number) => {
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
                    <div className='lg:w-[60%] '>
                        <div className='p-3 md:block hidden'><BreadGrum category={currentProduct.category} /></div>
                        <div className='p-3 flex flex-col gap-y-3'>
                            <h1 className='text-xl capitalize font-semibold leading-[30px]'>{currentProduct.title}</h1>
                            <span className=' flex items-center gap-x-2'> {
                                Array(4).fill("4").map(rating => {
                                    return <svg key={rating} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 text-yellow-400">
                                        <path fillRule="evenodd" d="M8 1.75a.75.75 0 0 1 .692.462l1.41 3.393 3.664.293a.75.75 0 0 1 .428 1.317l-2.791 2.39.853 3.575a.75.75 0 0 1-1.12.814L7.998 12.08l-3.135 1.915a.75.75 0 0 1-1.12-.814l.852-3.574-2.79-2.39a.75.75 0 0 1 .427-1.318l3.663-.293 1.41-3.393A.75.75 0 0 1 8 1.75Z" clipRule="evenodd" />
                                    </svg>

                                }
                                )
                            }</span>

                            <p className='capitalize'>Brand : {currentProduct.brand}</p>

                            <p className='text-2xl text-[#2562E7] font-semibold'>৳ {currentProduct.stringPrice}</p>

                            <div className='flex items-center gap-x-8'>
                                <span>Quantity</span>
                                <div className='flex items-center gap-x-8'>
                                    <button className='w-[40px] h-[40px] flex items-center justify-center text-lg font-semibold rounded-sm cursor-pointer bg-[#1D1D1D] disabled:cursor-default  disabled:bg-gray-400'
                                        disabled={quantity > 1 ? false : true}
                                        onClick={() => {
                                            setQuantity(prev => prev - 1)
                                            updateQuantity("decrement", currentProduct.id)

                                        }}
                                    >-</button>
                                    <span>{quantity}</span>
                                    <button className='w-[40px] h-[40px] flex items-center justify-center text-lg font-semibold rounded-sm cursor-pointer bg-[#1D1D1D] '
                                        onClick={() => {
                                            setQuantity(prev => prev + 1)
                                            updateQuantity("increment", currentProduct.id)
                                        }}
                                    >+</button>
                                </div>
                            </div>

                            <div className='flex  gap-x-10 items-center relative mt-5'>
                                {/* <button className='w-[170px] bg-[#2562E7] p-3 rounded-sm capitalize'
                            onClick={() => {
                                addToCart(currentProduct)
                            }}
                        >add to cart</button> */}

                                {
                                    isProudctInCart() ? <button className='w-[220px] bg-orange-400 p-3 rounded-sm capitalize'
                                        onClick={() => {
                                            removeFromCart(currentProduct.id)
                                            setQuantity(1)
                                        }}
                                    >remove from CART </button> : <button className='w-[170px] bg-[#2562E7] p-3 rounded-sm capitalize'
                                        onClick={() => {
                                            addToCart(currentProduct)

                                        }}
                                    >add to cart</button>
                                }

                                {/* <button className='w-[170px] bg-[#D0611E] p-3 rounded-sm capitalize'>buy now</button> */}

                            </div>
                            <div>
                                <p>{currentProduct.description}</p>
                            </div>

                        </div>
                    </div>
                </>
            }
        </div>
    )
}

export default ProductDetails