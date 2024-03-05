import React from "react";
import Link from "next/link";
import Image from "next/image";

const getData = async () => {
  const res = await fetch("http://localhost:3000/api/categories", {
    cache: "no-cache",
  });

  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  return res.json();
};



const CategoryList = async () => {

  const colorVariants = {
    fashion: 'bg-[#da85c731]',
    coding: 'bg-[#5e4fff31]',
    travel: 'bg-[#ff795736]',
    food: 'bg-[#7fb88133]',
    style: 'bg-[#57c4ff31]',
    culture: 'bg-[#ffb04f45]'
  }

  const data = await getData();
  return (
    <div>
      <h1 className="font-bold text-3xl my-12 mx-0">Popular Categories</h1>
      <div className="flex flex-wrap justify-between gap-5">
        {data.map((category) => (
          <Link
            key={category._id}
            href={`/blog?cat=${category.slug}`}
            className={`flex items-center gap-3 w-[15%] h-[80px] justify-center ${colorVariants[category.slug]}  rounded-xl 
            max-xl:w-[20%] max-lg:w-[25%] max-md:w-[45%] max-sm:w-[100%]`}
          >
            {category.img && (
              <Image
                src={category.img}
                alt=""
                width={32}
                height={32}
                className="rounded-[50%] h-[32px] capitalize"
              />
            )}
            {category.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
