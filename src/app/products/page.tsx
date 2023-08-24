import BASE_PATH_FORAPI from "@/components/shared/BasePath"
import AllProductsCompo from "@/components/AllProduct";

async function fetchAllProductData() {
    let res = await fetch(`${BASE_PATH_FORAPI}/api/products?start=0&end=10`)
    if (!res.ok) {
        throw new Error("Failed to fetch Data ")
    }
    return res.json();
};


const Products = async () => {
    const produtcData = await fetchAllProductData()
    console.log(produtcData)
    return (
        <AllProductsCompo ProdutcData={produtcData} />
    )
}

export default Products