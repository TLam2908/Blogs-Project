import React from "react";
import Link from "next/link";
import { error } from "console";

const getData = async () => {
  const res = await fetch("http://localhost:3000/api/categories", {
    cache: "no-cache"
  })
  if (!res.ok) {
    throw new Error ("Something went wrong")
  }
  const data = res.json()
  return data
}

const MenuCategories = async () => {

  const categories = await getData()

  return (
      <div className="flex flex-wrap gap-5 mt-9 mb-[60px]">
        {categories.map((category) => (
             <Link
             href={`/blog?cat=${category.slug}`}
             className={`bg-[${category.color}] rounded-xl px-4 py-6 text-[15px]`}
           >
             {category.title}
           </Link>
        ))}
      </div>
  );
};

export default MenuCategories;
