import React from "react";
import Image from "next/image";
import Link from "next/link";


const Card = ({post}) => {
  return (
    <div className="flex gap-[50px] items-center mb-12" key={post._id}>
      {post.img && <div className="flex-1 h-[350px] relative max-lg:hidden">
        <Image src={`${post.img}`} alt="" fill sizes="(max-width: 1280px) w-[300px]" className="object-cover" />
      </div>}
      <div className="flex-1 flex flex-col gap-5">
        <div>
          <span className=" text-gray-400">{post.createAt.substring(0,10)} - {" "}</span>
          <span className="text-red-500 font-medium capitalize">{post.catSlug}</span>
        </div>
        <Link href={`/posts/${post.slug}`} className="cursor-pointer">
          <h1 className="text-[40px] font-bold">{post.title}</h1>
        </Link>
        <Link href={`/posts/${post.slug}`} className="cursor-pointer border-b-2 border-solid border-red-300 w-max py-1 px-0">Read More</Link>
      </div>
    </div>
  );
};

export default Card;
