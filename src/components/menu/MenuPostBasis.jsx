import React from 'react'
import Link from 'next/link'

const MenuPostBasis = (props) => {
  const {featuredPost} = props
  
  const colorVariants = {
    red: 'bg-red-600',
    yellow: 'bg-yellow-600',
    green: 'bg-green-600',
    blue: 'bg-cyan-600',
    purple: 'bg-purple-600',
    orange: 'bg-orange-600'
  }

  let color
  if (featuredPost.catSlug === "travel") {
    color = "orange"
  } else if (featuredPost.catSlug === "food") {
    color = "green"
  } else if (featuredPost.catSlug === "style") {
    color = "yellow"
  } else if (featuredPost.catSlug === "culture") {
    color = "blue"
  } else if (featuredPost.catSlug === "coding") {
    color = "purple"
  } else {
    color = "red"
  }

  return (
    <div className="basis-3/4 flex flex-col gap-1" key={featuredPost.id}>
    <span className={` text-white rounded-[12px] py-1 px-3 text-center w-max text-[15px] ${colorVariants[color]} capitalize`}>
      {featuredPost.catSlug}
    </span>
    <h3 className="text-[18px] font-semibold text-[#626262] dark:text-[#a6a6a6]">
      {featuredPost.title}
    </h3>
    <div className="text-[13px]">
      <span>{featuredPost.user.name} - </span>
      <span className=" text-gray-500">{featuredPost.createAt.substring(0, 10)}</span>
    </div>
  </div>
  )
}

export default MenuPostBasis