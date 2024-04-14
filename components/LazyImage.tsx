import Image from 'next/image'
import React from 'react'

const LazyImage = ({ src }: { src: string }) => {
    return (
        <Image
            className="w-full object-contain  transition duration-300 ease-in-out group-hover:scale-105 "
            width={1000000}
            height={100000}
            alt=""
            src={
                src
            }
        />
    )
}

export default LazyImage