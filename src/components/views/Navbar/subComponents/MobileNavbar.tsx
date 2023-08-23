import React from 'react'
import { FiShoppingCart } from "react-icons/fi"
import Link from "next/link"
import { NavbarArray, NavbarItemType } from '@/components/utils/NavbarArrayAndTypes'
import { HiOutlineChevronDown } from 'react-icons/hi'

export default function MobileNavbar() {
  return (
    <div>
      <div className="flex flex-col">
        <div className="h-11 w-11 bg-gray-100 rounded-full flex justify-center items-center relative">
          <div className="absolute top-1 right-1 bg-red-500 text-xs font-light w-4 h-4 rounded-full flex justify-center items-center">0</div>
          <FiShoppingCart size={18} />
        </div>
        {NavbarArray.map((item: NavbarItemType, index: number) => (
          <div key={index} className="flex justify-between px-4 space-y-3">
            <li className='list-none hover:bg-gray-500'><Link href={item.href}>{item.label}</Link></li>
            {item.isDropDown ? <HiOutlineChevronDown className="mt-1 -rotate-180 group-hover:rotate-0 duration-300" size={15} /> : ""}
          </div>
        ))}
      </div>
    </div>
  )
}
