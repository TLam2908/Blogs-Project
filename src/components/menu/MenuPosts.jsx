
import React from "react";
import Link from "next/link";
import Image from "next/image";
import MenuPostBasis from "./MenuPostBasis";

const getFeaturedPosts = async () => {
  const res = await fetch(process.env.API_PATH + `/api/featured`);
  if (!res.ok) {
    throw new Error("An error occurred while fetching the data");
  }
  return res.json();
};

const MenuPosts = async (props) => {
  const data = await getFeaturedPosts();
  return (
    <div className="mt-9 mb-14 flex flex-col gap-9">
      {data.map((featuredPost) => (
        <Link key={featuredPost.id} href={`/posts/${featuredPost.slug}`} className="flex items-center gap-5">
          <div className="basis-1/4 relative aspect-[1/1]">
            <Image
              src={featuredPost.img}
              alt=""
              fill
              className="object-cover rounded-[50%]"
            />
          </div>
            <MenuPostBasis featuredPost={featuredPost}/>
        </Link>
      ))}
    </div>
  );
};

export default MenuPosts;
