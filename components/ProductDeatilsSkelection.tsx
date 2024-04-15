import React from "react";
import { Skeleton } from "./ui/skeleton";

const ProductDeatilsSkelection = () => {
    return (
        <>
            <div className="lg:w-[40%] p-2">
                <div className=" md:hidden block mb-5  "></div>

                <div className="w-full ">
                    {/* <button onClick={() => router.back()}>back</button> */}
                    <Skeleton className="rounded-sm  w-full h-[500px]" />
                </div>
                <div className="flex items-center mt-3 gap-x-3 w-full ">
                    <Skeleton className="w-[80px] h-[80px] rounded-sm" />
                    <Skeleton className="w-[80px] h-[80px] rounded-sm" />
                    <Skeleton className="w-[80px] h-[80px] rounded-sm" />
                    <Skeleton className="w-[80px] h-[80px] rounded-sm" />
                </div>
            </div>
            <div className="lg:w-[60%]">
                <div className=" md:block hidden"></div>
                <div className=" py-2 flex flex-col gap-5">
                    <Skeleton className="w-full h-[30px] rounded-sm" />
                    <Skeleton className="w-full h-[30px] rounded-sm" />
                    <Skeleton className="w-full h-[30px] rounded-sm" />
                    <Skeleton className="w-full h-[30px] rounded-sm" />
                    <Skeleton className="w-full h-[30px] rounded-sm" />
                    <Skeleton className="w-full h-[30px] rounded-sm" />
                    <Skeleton className="w-full h-[30px] rounded-sm" />
                    <Skeleton className="w-full h-[30px] rounded-sm" />
                    <Skeleton className="w-full h-[30px] rounded-sm" />
                    <div className="flex items-center gap-8">
                        <Skeleton className="w-[200px] h-[80px] rounded-sm" />
                        <Skeleton className="w-[200px] h-[80px] rounded-sm bg-[#252424]" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductDeatilsSkelection;
