import { useOtherStore } from "@/zustand/useOtherStore";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { it } from "node:test";
import React, { useEffect, useState } from "react";

const SearchBar = () => {
    const { addRecentSearch, recentSearch, removeSerchHistry } = useOtherStore()
    console.log(recentSearch);

    const searchParams = useSearchParams();
    const params = new URLSearchParams(searchParams);
    const path = usePathname();
    const router = useRouter();
    const [inputValue, setInputValue] = useState(params.get("q") || "");
    const [searchBoxOpen, setSearchBoxOpen] = useState(false);
    const [recentBoxOpen, setRecentBoxOpen] = useState(false);
    const [currentActiveSearchItemIndex, setcurrentActiveSearchItemIndex] = useState(-1)
    const [data, setData] = useState([
        {
            id: 1,
            name: "smartphone"
        },
        {
            id: 2,
            name: "laptops"
        }, {
            id: 3,
            name: "watch"
        }, {
            id: 4,
            name: "t-shirt"
        }, {
            id: 5,
            name: "man-shirt"
        }, {
            id: 6,
            name: "sunglasses"
        }, {
            id: 7,
            name: "face-wash"
        }, {
            id: 8,
            name: "electronic"
        }, {
            id: 9,
            name: "gedgets"
        },
        {
            id: 10,
            name: "watch for man"
        }, {
            id: 11,
            name: "watch for woman"

        }, {
            id: 12,
            name: "watch for child"

        }
    ]);
    const [filterData, setFilterData] = useState(data)




    const handleInputClick = (e: any) => {
        if (e.target.value) {
            setSearchBoxOpen(true);
            setRecentBoxOpen(false);
        } else {
            setRecentBoxOpen(true);
            setSearchBoxOpen(false);
        }
    };

    const handleInputChange = (event: any) => {
        setInputValue(event.target.value);
        if (event.target.value.length > 0) {
            setSearchBoxOpen(true);
            setRecentBoxOpen(false);
        } else {
            setSearchBoxOpen(false);
            setRecentBoxOpen(true);
        }
        setFilterData(data.filter(item => {
            return item.name.toLowerCase().includes(event.target.value.toLowerCase())
        }))
    };


    const handleSearchItemClick = (item: any) => {
        setInputValue(item.name);
        setSearchBoxOpen(false);
        params.set("q", item.name);
        router.replace(`${path}?${params}`)
        setcurrentActiveSearchItemIndex(item.index);
        addRecentSearch({
            value: item.name,
            createAt: new Date().getTime()
        })

    }

    const handleKeyDown = (event: any) => {

        let index = currentActiveSearchItemIndex

        if (event.key === "ArrowUp" || event.key === "ArrowDown" || event.key === "Enter") {

            if (searchBoxOpen) {
                handleSearchBoxKeyDown(event)
            } else {
                handleRecentSearchBoxKeyDown(event)
            }





        }
    }

    const handleSearchBoxKeyDown = (event: any) => {
        let updateCuurentIndex = currentActiveSearchItemIndex
        if (event.key === "ArrowDown") {
            currentActiveSearchItemIndex < filterData.length - 1 ? setcurrentActiveSearchItemIndex(prev => prev + 1) : setcurrentActiveSearchItemIndex(0)
            console.log(updateCuurentIndex);

        }

        else if (event.key === "Enter") {




            if (filterData.length > 0) {
                handleSearchItemClick({
                    name: filterData[updateCuurentIndex || 0].name,
                    index: updateCuurentIndex || 0
                })
            } else {
                params.set("q", inputValue)
                router.replace(`${path}?${params}`)
                addRecentSearch({
                    value: inputValue,
                    createAt: new Date().getTime()
                })

            }
        }

        else {
            updateCuurentIndex > 0 ? setcurrentActiveSearchItemIndex(prev => prev - 1) : setcurrentActiveSearchItemIndex(filterData.length - 1);


        }

    }

    const handleRecentSearchBoxKeyDown = (event: KeyboardEvent) => {
        alert("r")
    }


    useEffect(() => {

        if (params.get("q")) {
            setFilterData(data.filter(item => {
                return item.name.toLowerCase().includes(inputValue.toLowerCase())
            }))
            setcurrentActiveSearchItemIndex(0)
        } else {
            setcurrentActiveSearchItemIndex(-1)

        }


    }, [])




    return (
        <form
            className="w-1/3 relative md:block hidden"
            onSubmit={(e) => {
                e.preventDefault();
            }}
        >
            <input
                type="text"
                placeholder="Search for products..."
                className="text-white p-[8px] px-3 rounded-md bg-transparent border border-neutral-700 focus:border-neutral-500 outline-none min-w-full placeholder:text-neutral-400 placeholder:text-sm"
                onClick={handleInputClick}
                onChange={handleInputChange}
                value={inputValue}
                onKeyDown={handleKeyDown}
            />
            {inputValue.length > 0 ? (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    onClick={(e) => {

                        setInputValue("");
                        setRecentBoxOpen(true);
                        setSearchBoxOpen(false);
                        params.delete("q");
                        router.replace(`${path}?${params}`)

                    }}
                    className="w-4 h-4 absolute right-3 top-[30%]  cursor-pointer text-white"
                >
                    <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
                </svg>
            ) : (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-4 h-4 absolute right-3 top-[30%] text-white"
                >
                    <path
                        fillRule="evenodd"
                        d="M9 3.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11ZM2 9a7 7 0 1 1 12.452 4.391l3.328 3.329a.75.75 0 1 1-1.06 1.06l-3.329-3.328A7 7 0 0 1 2 9Z"
                        clipRule="evenodd"
                    />
                </svg>
            )}

            {searchBoxOpen && filterData.length > 0 && (
                <div className={`absolute z-50 top-[100%] left-0 w-full p-3 mt-3 bg-[#252424] rounded-md flex flex-col gap-y-3 items-start justify-start`}>

                    {
                        filterData.map((item, index) => (


                            <div
                                onClick={() => {
                                    handleSearchItemClick({ name: item.name, id: item.id, index })
                                }}
                                key={item.id} className={` ${currentActiveSearchItemIndex === index ? "bg-blue-600 hover:bg-blue-600" : "bg-[#2c2b2b] hover:bg-primary"} p-3  text-white rounded-md cursor-pointer w-full flex items-center justify-between   `}><span>{item.name}</span>
                            </div>
                        ))
                    }

                </div>
            )}

            {recentBoxOpen && recentSearch.length > 0 && (
                <div className="absolute z-50 top-[100%] left-0 w-full p-3 mt-3 bg-[#252424] rounded-md flex flex-col gap-y-3 items-start justify-start">
                    {
                        recentSearch.map((item: any, index: number) => {
                            return <div key={item.value}
                                onClick={(e) => {

                                    handleSearchItemClick({ name: item.value, index })
                                    setRecentBoxOpen(false)
                                }}
                                className="p-3 bg-[#313030] text-white rounded-md cursor-pointer w-full flex items-center justify-between "><span>{item.value}</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className="w-5 h-5"
                                    onClick={(e) => {
                                        e.stopPropagation()
                                        removeSerchHistry(index)
                                    }}
                                >
                                    <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
                                </svg>
                            </div>
                        })
                    }


                </div>
            )}
        </form>
    );
};

export default SearchBar;
