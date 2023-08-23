"use client"
import {RxHamburgerMenu} from "react-icons/rx"
import {IoMdClose} from "react-icons/io"
import Logo from "@/components/assets/images/Logo.webp"
import Image from "next/image"
import { FiShoppingCart } from "react-icons/fi"
import { BiSearch } from "react-icons/bi"
import { HiOutlineChevronDown } from "react-icons/hi"
import { NavbarArray, NavbarItemType } from "@/components/utils/NavbarArrayAndTypes"
import Link from "next/link"
import DropDown from "./subComponents/DropDown"
import MobileNavbar from "./subComponents/MobileNavbar"
import {useState} from "react"


export default function NavBar() {
    const [isNavOpen, setisNavOpen] = useState<boolean>(false)
  return (
    <div className="sticky top-0 z-50 bg-opacityDownColor backdrop-blur-lg">
          <div className=" py-4 flex justify-between items-center">
        <Link href={'/'} className="w-36 flex shrink-0">
        <Image width={500} height={500} src={Logo} alt="LOgo"/>
        </Link>
        
        <div className="hidden md:flex justify-between items-center space-x-4 ">
       <ul className=" space-x-4 font-medium text-lg flex">
        {NavbarArray.map((item:NavbarItemType,index :number)=>(
            <li key={index} className="flex items-center relative rounded-sm px-3 py-1 hover:bg-gray-100 cursor-pointer group">
                <Link href={'/'}>{item.label}</Link>
                {item.isDropDown ? <HiOutlineChevronDown className="mt-1 -rotate-180 group-hover:rotate-0 duration-300" size={15} /> : ""}
                {item.isDropDown && <div className={`invisible group-hover:visible absolute top-8 left-0 py-2 px-6 bg-gray-100 font-light min-w-[7.8rem]`}>
                 <DropDown item={item} /></div>}
            </li>
            
        ))}
       </ul>

       <div className="border flex items-center bg-white text-gray-600 pl-3 rounded-md" >
                    <BiSearch/>
                    <input type="text" 
                     className="focus:outline-none pl-1 pr-5 py-1 w-80 rounded-r-md"
                    placeholder="Search in Our Store"/>
                </div>
                <div className="h-11 w-11 bg-gray-100 rounded-full flex justify-center items-center relative">
            <div className="flex-shrink-0 absolute top-1 right-1 bg-red-500 text-xs font-light w-4 h-4 rounded-full flex justify-center items-center">0</div>
            <FiShoppingCart size={18} />
          </div>
          </div>

          {/* /////////////////  */}
          <div onClick={()=>setisNavOpen(!isNavOpen)}>
      {
        isNavOpen?
        <div  className="flex lg:hidden">
        <IoMdClose size={25}/>
      </div>
          :
          <div className="flex lg:hidden">
            <RxHamburgerMenu size={25}/>
          </div>
          }
          </div>
    </div>
    {
      isNavOpen && <MobileNavbar/>
    }
    </div>
  )
}
