"use client"
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const DiscountRange = () => {
    const [discountRangeList, setDiscountRangeList] = useState([
        {
            id: Math.round(Math.random() * 20),
            name: "10% and above",
            isChecked: false,
            value: "10",
        },
        {
            id: Math.round(Math.random() * 20),
            name: "20% and above",
            isChecked: false,
            value: "20",
        }, {
            id: Math.round(Math.random() * 20),
            name: "30% and above",
            isChecked: false,
            value: "30",
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
    ]);


    const searchParams = useSearchParams();
    const params = new URLSearchParams(searchParams);
    const path = usePathname();
    const router = useRouter();
    const [selectedDiscountOption, setSelectedDiscountOption] = useState(params.get("discount") || "")

    // const [selectedBrand, setSelectedBrand] = useState<any[]>(
    //     params.get("discounts")?.split(" ") || []
    // );
    // params.get("discount") ||


    // const handleChange = (

    //     e: any,
    //     discount: any,
    //     index: number
    // ) => {

    //     let updateDiscountList = [...discountRangeList];
    //     if (e.target.checked === true) {
    //         updateDiscountList[index].isChecked = true;
    //     } else {
    //         updateDiscountList[index].isChecked = false;
    //     }

    //     setDiscountRangeList(updateDiscountList);
    //     let me = updateDiscountList.filter((b) => {
    //         if (b.isChecked === true) {
    //             return b.value
    //         }
    //     });
    //     let selectDiscountOption = me.map((b) => b.value);
    //     console.log(selectDiscountOption);

    //     setSelectedBrand(selectDiscountOption);
    //     if (selectDiscountOption.length > 0) {
    //         params.set("discounts", selectDiscountOption.join(" "));
    //         router.replace(`${path}?${params}`);
    //     } else {
    //         params.delete("discounts");
    //         router.replace(`${path}?${params}`);
    //     }
    // };
    // const updateState = () => {
    //     let updateDiscountList = [...discountRangeList];

    //     updateDiscountList.map((discount, index) => {
    //         if (selectedBrand.includes(discount.value)) {
    //             updateDiscountList[index].isChecked = true;
    //         } else {
    //             updateDiscountList[index].isChecked = false;
    //         }
    //     });
    //     setDiscountRangeList(updateDiscountList);
    // };
    // useEffect(() => {
    //     updateState();
    // }, []);


    const handleChange = (option: any) => {
        let updateselectedOption = option.value
        setSelectedDiscountOption(updateselectedOption)
        if (updateselectedOption !== "") {
            params.set("discount", `${updateselectedOption}`);
            router.replace(`${path}?${params}`);
        } else {
            params.delete("discount");
            router.replace(`${path}?${params}`);
        }
    }


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
                        discountRangeList.map((item) => {
                            return <label htmlFor={item.name} key={item.id}
                                className='flex items-center gap-x-4 cursor-pointer'
                            >
                                <input onClick={() => {
                                    handleChange(item)
                                }} type="checkbox" checked={item.value === selectedDiscountOption} name={item.name} id={item.name} />
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