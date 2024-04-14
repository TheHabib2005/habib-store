"use client"
import { useParams, usePathname, useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
interface sortOptionProps {
    name: string;
    value: number;
}
const SelectSort = () => {
    const searchParams = useSearchParams();
    const params = new URLSearchParams(searchParams);
    const path = usePathname();
    const router = useRouter()
    const [selectedOption, setSelectedOption] = useState(params.get("sort-by") || "default");
    const [isoptionsOpen, setIsOptionsOpen] = useState(false);
    const [sortOption, setSortOption] = useState<sortOptionProps[]>([
        {
            name: "default",
            value: 0
        },
        {
            name: "low-to-high",
            value: 1
        }, {
            name: "high-to-low",
            value: -1
        },
    ]);



    const handleSelect = (option: sortOptionProps) => {
        let updateSeletedOption = option.name
        setSelectedOption(updateSeletedOption);
        setIsOptionsOpen(false);

        if (selectedOption.length > 0) {
            params.set("sort-by", updateSeletedOption);
            router.replace(`${path}?${params}`)
        } else {
            params.delete("sort-by");
            router.replace(`${path}?${params}`)
        }



    }

    return (
        <div className='relative sm:mt-0 mt-3 w-[180px]'>
            <div className='border border-neutral-600 py-2 px-3 rounded-sm cursor-pointer  text-sm select-none'
                datatype='sort-button'
                onClick={() => setIsOptionsOpen(!isoptionsOpen)}
            >
                Sort By : <span className='capitalize'>{selectedOption}</span>
            </div>
            {isoptionsOpen && <ul className='bg-black flex flex-col gap-y-2 p-2 rounded-sm  w-full absolute top-[120%] z-10 left-0'>
                {
                    sortOption.map((option, index) => {
                        return <li key={index}
                            onClick={() => handleSelect(option)}
                            className={`text-sm capitalize ${selectedOption === option.name ? "bg-[#2563EB] hover:bg-[#2563EB]" : "hover:bg-[#2563EB]"} p-2 cursor-pointer rounded-sm`}>{option.name}</li>
                    })
                }
            </ul>}
        </div>
    )
}

export default SelectSort