"use client"
import FetchProducts from '@/hooks/useFetchProducts'
import React, { useEffect, useState } from 'react'

const Error = () => {
    const { error } = FetchProducts()
    const [data, setData] = useState()

    useEffect(() => {
        if (error) {
            setData(error)
        }
    }, [])

    return (
        <div>error</div>
    )
}

export default Error