import ProductsType from "@/components/ProductTypes";
import Hero from "@/components/views/Hero";
import ProductCarousel from "@/components/views/ProductCarousel";



export default function Home() {
  return (
    <div>
      <Hero/>
      <ProductsType/>
      {/* <ProductCarousel/> */}
    </div>
  )
}
