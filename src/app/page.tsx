import ProductsType from "@/components/views/ProductTypes";
import Hero from "@/components/views/Hero";
import ProductCarousel from "@/components/views/ProductCarousel";
import result from "postcss/lib/result";
import {resultType} from "@/components/utils/ProductsDataArrayAndType"
import Jewellary from "@/components/views/Jewellary";
import NewsLetter from "@/components/views/NewsLetter";
async function fetchAllProductsData (){
  
  let res = await fetch(`https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2023-08-23/data/query/production?query=*[_type == "products"]`,{
    next: {
      revalidate: 60
    }
  })
  
  if(!res.ok){
        throw new Error("failed to fetch")
  }
  return res.json();
}


export default async function Home() {
  let {result}:resultType=await fetchAllProductsData();
  return (
    <div>
      <Hero/>
      <ProductsType/>
      <ProductCarousel ProductData={result}/>
      <Jewellary/>
      <NewsLetter/>
    </div>
  )
}
