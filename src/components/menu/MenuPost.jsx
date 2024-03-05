import React from 'react'

const MenuPost = (props) => {
  
  const {viewPosts} = props

  const colorVariants = {
    red: 'bg-red-600',
    yellow: 'bg-yellow-600',
    green: 'bg-green-600',
    blue: 'bg-cyan-600',
    purple: 'bg-purple-600',
    orange: 'bg-orange-600'
  }

  let color
  if (viewPosts.catSlug === "travel") {
    color = "orange"
  } else if (viewPosts.catSlug === "food") {
    color = "green"
  } else if (viewPosts.catSlug === "style") {
    color = "yellow"
  } else if (viewPosts.catSlug === "culture") {
    color = "blue"
  } else if (viewPosts.catSlug === "coding") {
    color = "purple"
  } else {
    color = "red"
  }

  return (
    <div className="flex flex-col gap-1">
    <span className={` text-white rounded-[12px] py-1 px-3 text-center w-max text-[15px] ${colorVariants[color]} capitalize`}>
      {viewPosts.catSlug}
    </span>
    <h3 className="text-[18px] font-semibold text-[#626262] dark:text-[#a6a6a6]">
     {viewPosts.title}
    </h3>
    <div className="text-[13px]">
      <span></span>
      <span className=" text-gray-500">{viewPosts.createAt.substring(0,10)}</span>
    </div>
  </div>
  )
}

export default MenuPost