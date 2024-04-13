import FilterWrapper from "@/components/FilterWrapper";
import ProductContainer from "@/components/ProductContainer";
import React, { FC } from "react";
interface PROPS {
    params: {
        category: string;
    };
}
const Category: FC<PROPS> = ({ params }) => {
    return (
        <section>
            <div className="flex px-4 py-5 min-w-full gap-x-4">
                {/* filter bar */}
                <FilterWrapper />

                {/* product bar */}
                <ProductContainer />
            </div>
        </section>
    );
};

export default Category;
