import React from 'react'
import Image from 'next/image'
import Link from "next/link";

export default function author({name, img, designation}) {
  if(!name && !img) return <></>;

  return (
    <div className='author flex py-5'>
        <Image src={"/images/author/author1.png"} width={45} height={50} className="rounded-full" alt="hi"></Image>
        <div className="flex flex-col justify-center px-4">
            <Link href={"/"} className='text-md font-bold text-gray-800 hover:text-gray-600'>{name || "No name"}</Link>
            <span className='text-sm text-gray-500'>{designation || "No designation"}</span> 
        </div>
    </div>
  )
}
