"use client"
import { smartPhoneBrandList } from '@/utils/constant'
import React, { useState } from 'react'

const BrandLists = () => {
    const [brandLists, setBrandLists] = useState(smartPhoneBrandList);
    const [isListOpen, setIsListOpen] = useState(true);
    return (
        <>
            <div className=''>

                <div className='my-5  border-t  border-neutral-700 px-4 py-3 select-none'>
                    <div className='flex items-center justify-between cursor-pointer'
                    // onClick={() => setIsListOpen(!isListOpen)}
                    >
                        <h1>Choose Brand</h1>
                        {/* {
                            isListOpen ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                            </svg>
                                : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                </svg>
                        } */}
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
                            <path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" />
                        </svg>


                    </div>
                    {
                        isListOpen && <ul className='flex flex-col gap-y-3 my-3 px-2'>
                            {/* rendering a brands list */}
                            {
                                brandLists.map(brand => {
                                    return <label htmlFor={brand.name} key={brand.id}
                                        className='flex items-center gap-x-4 cursor-pointer'
                                    >
                                        <input type="checkbox" checked={brand.isChecked} name={brand.name} id={brand.name} />
                                        <span className='capitalize'>{brand.name}</span>
                                    </label>
                                })
                            }
                        </ul>
                    }
                </div>
            </div>
        </>
    )
}

export default BrandLists