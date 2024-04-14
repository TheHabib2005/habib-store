import { ProductsTYPE } from '@/constant-type';
import { axiosInstance } from '@/helpers';
import axios from 'axios';
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const FetchProducts = (category?: string) => {
    const [isLoading, setIsLoading] = useState(false);
    const [apiResponse, setApiResponse] = useState({});
    const [productsData, setProductsData] = useState<ProductsTYPE[]>([]);
    const [error, setError] = useState<any>();
    const searchParams = useSearchParams()
    const params = new URLSearchParams(searchParams);
    const brand = params.get("brands")?.split(" ");
    const sortby = params.get("sort-by");
    console.log(category);

    let sort: any = {};

    if (sortby === "low-to-high") {
        sort.price = 1
    }
    if (sortby === "high-to-low") {
        sort.price = -1
    }
    if (sortby === "default") {
        sort = {}
    }

    const query: any = {

    };

    if (category) {
        query.category = category;
    }
    if (brand) {
        query.brand = { $in: brand }
    }


    const fetchApi = async () => {
        try {
            setIsLoading(true);
            const response = await axiosInstance.post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products`, { query, sort });

            setApiResponse(response.data);
            setProductsData(response.data.data)
            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
            setError(error)
        }
    }


    useEffect(() => {
        fetchApi()
    }, [params.toString()]);


    return { isLoading, productsData, error }
}

export default FetchProducts