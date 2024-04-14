"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import React, { FC } from 'react'
interface Props {
    category?: string
}
const BreadGrum: FC<Props> = ({ category }) => {
    const path = usePathname();
    let breadGrum = path.split("/").filter(path => path);


    return (
        <div className='flex items-center gap-3 flex-wrap'>
            <Link href={"/"}>Home</Link>
            {
                breadGrum.map((bread) => <p className='flex items-center gap-x-2 capitalize' key={bread}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
                    <path fillRule="evenodd" d="M6.22 4.22a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06l-3.25 3.25a.75.75 0 0 1-1.06-1.06L8.94 8 6.22 5.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                </svg>
                    {
                        bread === category ? <Link href={`/products/${category}`}>{bread}</Link> : bread
                    }  </p>)
            }
        </div>
    )
}

export default BreadGrum