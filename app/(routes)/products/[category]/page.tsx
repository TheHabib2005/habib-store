import React, { FC } from 'react'
interface PROPS {
    params: {
        category: string
    }
}
const Category: FC<PROPS> = ({ params }) => {
    return (
        <div>{params.category}</div>
    )
}

export default Category