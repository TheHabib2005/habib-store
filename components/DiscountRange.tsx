"use client"
import React, { useState } from 'react'

const DiscountRange = () => {
    const [discountRangeList, setDiscountRangeList] = useState([
        {
            id: Math.round(Math.random() * 20),
            name: "10% and above",
            isChecked: false,
            value: 10,
        },
        {
            id: Math.round(Math.random() * 20),
            name: "20% and above",
            isChecked: false,
            value: 20,
        }, {
            id: Math.round(Math.random() * 20),
            name: "30% and above",
            isChecked: false,
            value: 30,
        }, {
            id: Math.round(Math.random() * 20),
            name: "40% and above",
            isChecked: false,
            value: 40,
        }, {
            id: Math.round(Math.random() * 20),
            name: "50% and above",
            isChecked: false,
            value: 50,
        }, {
            id: Math.round(Math.random() * 20),
            name: "60% and above",
            isChecked: false,
            value: 60,
        }, {
            id: Math.round(Math.random() * 20),
            name: "70% and above",
            isChecked: false,
            value: 70,
        }, {
            id: Math.round(Math.random() * 20),
            name: "80% and above",
            isChecked: false,
            value: 80,
        },
        {
            id: Math.round(Math.random() * 20),
            name: "90% and above",
            isChecked: false,
            value: 90,
        },
    ])
    return (
        <div className='my-5  border-t  border-neutral-700 px-4 py-3 select-none'>
            <div className='flex items-center justify-between cursor-pointer'
            >
                <h1>Dicounts Range</h1>



            </div>
            {
                <ul className='flex flex-col gap-y-3 my-3 px-2'>
                    {/* rendering a brands list */}
                    {
                        discountRangeList.map(item => {
                            return <label htmlFor={item.name} key={item.id}
                                className='flex items-center gap-x-4 cursor-pointer'
                            >
                                <input type="checkbox" checked={item.isChecked} name={item.name} id={item.name} />
                                <span className='capitalize'>{item.name}</span>
                            </label>
                        })
                    }
                </ul>
            }
        </div>
    )
}

export default DiscountRange