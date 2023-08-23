import { HeroGirl } from "@/components/assets"
import Image from "next/image"
import { BsCart2 } from "react-icons/bs"
import Bazar from "@/components/assets/images/Bazaar.webp"
import Versace from "@/components/assets/images/Versace.webp"
import Bustle from "@/components/assets/images/Bustle.webp"
import Instyle from "@/components/assets/images/Instyle.webp"
const Hero = () => {
  const btnText = "Start\n shopping";
  return (
    <div className="py-5 flex justify-between items-center px-2">
    {/* right side */}
    <div className="space-y-6 max-w-sm">
        <button
            aria-label="redirect the user to sale page"
            className="rounded-md bg-primaryWhite text-blue-900 bg-[#e1edff] font-medium px-4 py-2"
        >
            Sale 70%
        </button>
        <h1 className="text-4xl md:text-6xl text-gray-800 font-bold">An Industrial Take on Streetwear</h1>
        <p className="text-gray-700">Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits.</p>
        <button
            aria-label="redirect the user to sale page"
            className="flex gap-3 items-center rounded-sm text-lg ring-1 ring-slate-800 bg-gray-800 text-white font-semibold py-3 px-5"
        >
            <BsCart2 />
            <p className="whitespace-pre leading-4">
                {btnText}
            </p>
        </button>
        <div className="flex gap-4 flex-wrap">
            <div className="w-14 md:w-28">
                <Image width={100} height={100} src={Bazar} alt="bazaar" />
            </div>
            <div className="w-14 md:w-28">
                <Image width={100} height={100} src={Versace} alt="baztel" />
            </div>
            <div className="w-14 md:w-28">
                <Image width={100} height={100} src={Bustle} alt="versase" />
            </div>
            <div className="w-14 md:w-28">
                <Image width={100} height={100} src={Instyle} alt="in style" />
            </div>
        </div>
    </div>

    {/* left side */}
    <div className="hidden md:flex bg-primary rounded-full">
        <Image src={HeroGirl} alt="heroimg" />
    </div>
</div>
  )
}

export default Hero