import Image from 'next/image'
import React from 'react'

const LazyImage = () => {
    return (
        <Image
            className="w-full object-contain  transition duration-300 ease-in-out group-hover:scale-105 "
            width={1000000}
            height={100000}
            alt=""
            src={
                "https://static-01.daraz.com.bd/p/defb4a1f8dd811c6f099a97c90fb2c15.jpg_750x750.jpg_.webp"
            }
        />
    )
}

export default LazyImage