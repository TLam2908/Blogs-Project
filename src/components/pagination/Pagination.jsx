"use client"
import React from 'react'
import { useRouter } from 'next/navigation'


const Pagination = ({page, hasNext, hasPrev}) => {

  const router = useRouter()
  return (
    <div className="flex justify-between">
      <button className="w-[100px] cursor-pointer bg-red-500 text-white p-3 disabled:bg-red-900 disabled:cursor-not-allowed hover:bg-black" disabled={!hasPrev} onClick={() => router.push(`?page=${page - 1}`)}>Previous</button>
      <button className="w-[100px] cursor-pointer bg-red-500 text-white p-3 disabled:bg-red-900 disabled:cursor-not-allowed hover:bg-black" disabled={!hasNext} onClick={() => router.push(`?page=${page + 1}`)}>Next</button>
    </div>
  )
}

export default Pagination