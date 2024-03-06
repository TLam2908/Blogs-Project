
import React from "react";
import Link from "next/link";

const getData = async () => {
  const res = await fetch(process.env.API_PATH + "/api/categories", {
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
             key={category.id}
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
