"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import React from 'react'

const BreadGrum = () => {
    const path = usePathname();
    let breadGrum = path.split("/").filter(path => path);
    console.log(breadGrum);

    return (
        <div className='flex items-center gap-x-3'>
            <Link href={"/"}>Home</Link>
            {
                breadGrum.map((p) => <p className='flex items-center gap-x-2 capitalize' key={p}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
                    <path fillRule="evenodd" d="M6.22 4.22a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06l-3.25 3.25a.75.75 0 0 1-1.06-1.06L8.94 8 6.22 5.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                </svg>
                    {p}</p>)
            }
        </div>
    )
}

export default BreadGrum