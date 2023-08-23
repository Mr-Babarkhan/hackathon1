import React, { FC } from 'react'
import { oneProductType } from '../utils/ProductsDataArrayAndType'
import { urlForImage } from '../../../sanity/lib/image'
import imageUrlBuilder from '@sanity/image-url'
import Image from 'next/image'
import { client } from '@/lib/SanityClient'
import Link from 'next/link'




const builder = imageUrlBuilder(client);

function urlFor(source: any) {
  return builder.image(source)
}

const Card:FC<{singleProductData:oneProductType}> = ({singleProductData}) => {
  return (
    <div className='max-w-sm min-w-[24rem] space-y-3 hover:scale-110 duration-300 select-none'>
        <div className='relative w-full'>
          <div className='absolute inset-0 z-10' />
        <Image  width={500} height={500} src={urlFor(singleProductData.image[0]).width(1000).height(1000).url()} alt={singleProductData.image[0].alt} />  
        </div>
       <div className='space-y-1 text-gray-600 font-semibold text-lg select-none'>
       <Link href={`/catalog/${singleProductData.slug.current}`}>
                    <h6>{singleProductData.productName}</h6>
                    <p>${singleProductData.price}</p>
                </Link>
       </div> 
    </div>
  )
}

export default Card