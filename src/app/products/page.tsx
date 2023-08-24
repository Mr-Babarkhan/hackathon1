"use client"
import React, { useState, useEffect } from "react";
import BASE_PATH_FORAPI from "@/components/shared/BasePath";
import AllProductsCompo from "@/components/AllProduct";

async function fetchAllProductData() {
    try {
        const res = await fetch(`${BASE_PATH_FORAPI}/api/products?start=0&end=4`);
        if (!res.ok) {
            throw new Error(`Failed to fetch Data. Server returned ${res.status} ${res.statusText}`);
        }
        return res.json();
    } catch (error:any) {
        throw new Error(`Failed to fetch data: ${error.message}`);
    }
}

const Products = () => {
    const [produtcData, setProductData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const data = await fetchAllProductData();
                setProductData(data);
            } catch (error:any) {
                setError(error.message);
            }
        }

        fetchData();
    }, []);

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!produtcData) {
        return <div>Loading...</div>;
    }

    return <AllProductsCompo ProdutcData={produtcData} />;
};

export default Products;
