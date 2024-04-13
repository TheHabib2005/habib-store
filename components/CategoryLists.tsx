"use client"
import { CategoryDataLists } from '@/ProductData'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

const CategoryLists = () => {
    const [categoryList] = useState(CategoryDataLists)
    return (
        <section>
            <h1 className='md:mt-10 mt-5 2xl:text-2xl md:text-xl capitalize font-semibold text-center'>popular categories</h1>
            <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 lg:py-10 py-7 px-4'>
                {
                    categoryList.map(category => {
                        return (
                            <Link href={`/product/${category.path}/`} key={category.id}>
                                <div className='w-full h-[200px] py-5 bg-[#252424] rounded-md flex flex-col gap-5 items-center justify-center'>
                                    <Image
                                        src={category.imageUrl}
                                        width={100}
                                        height={100}
                                        alt='image'
                                    />
                                    <p className='text-[16px] 2xl:text-lg font-semibold text-white capitalize '>{category.name}</p>
                                </div>
                            </Link>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default CategoryLists