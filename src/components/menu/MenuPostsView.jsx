import React from "react";
import Link from "next/link";
import Image from "next/image";
import MenuPost from "./MenuPost";

const getViewPosts = async () => {
  const res = await fetch(`http://localhost:3000/api/views`);
  if (!res.ok) {
    throw new Error("An error occurred while fetching the data");
  }
  return res.json();
};

const MenuPostsView = async () => {
    const data = await getViewPosts();
  return (
    <div className="mt-9 mb-14 flex flex-col gap-9">
      {data.map((viewPosts) => (
        <Link key={viewPosts.id} href={`/posts/${viewPosts.slug}`} className="flex items-center gap-5">
          <div className="basis-1/4 relative aspect-[1/1]">
            <Image
              src={viewPosts.img}
              alt=""
              fill
              className="object-cover rounded-[50%]"
            />
          </div>
            <MenuPost viewPosts={viewPosts}/>
        </Link>
      ))}
    </div>
  );
};

export default MenuPostsView;
