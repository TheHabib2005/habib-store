import Loading from '@/components/Loading';
import { ProductsTYPE } from '@/constant-type';
import { axiosInstance, delay } from '@/helpers';
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
    const q = params.get("q");

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
    if (q) {
        query.title = { $regex: q, $options: "i" }
    }

    console.log(query);

    const fetchApi = async () => {
        try {
            setIsLoading(true);
            const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/api/products`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ query, sort })
            });

            const data = await response.json();
            setApiResponse(data);
            setProductsData(data.data)
            setIsLoading(false);
        } catch (error) {
            console.log("e", error);
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
