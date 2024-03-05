import React from "react";
import Image from "next/image";
import Menu from "@/components/menu/Menu";
import Comments from "@/components/comments/Comments";
import { error } from "console";

const getData = async (slug) => {
  const res = await fetch(`http://localhost:3000/api/posts/${slug}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw error("Something went wrong");
  }
  const data = await res.json();
  return data;
};

const singlePage = async ({ params }) => {
  const { slug } = params;
  const postData = await getData(slug);

  return (
    <div>
      <div className="flex items-center gap-14">
        <div className="flex-1">
          <h1 className="text-6xl font-bold mb-12 max-2xl:text-[54px] max-xl:text-[48px] max-sm:text-[36px]">
            {postData?.post?.title}
          </h1>
          <div className="flex gap-5 items-center">
            {postData?.post?.user?.image && (
              <div className="w-20 h-20 relative">
                <Image
                  src={postData?.post?.user?.image}
                  alt=""
                  fill
                  className="object-cover rounded-[50%]"
                />
              </div>
            )}
            <div className="flex flex-col text-[#626262] dark:text-[#a6a6a6] text-lg font-normal">
              <span className="font-medium">{postData?.post?.user?.name}</span>
              <span className="text-[14px]">
                {postData?.post?.createAt.substring(0, 10)}
              </span>
            </div>
          </div>
        </div>
        {postData?.post?.img && (
          <div className="flex-1 relative h-[350px] max-lg:hidden">
            <Image
              sizes="(max-width: 1280px) w-[300px]"
              src={postData.post.img}
              alt=""
              fill
              className="object-cover"
            />
          </div>
        )}
      </div>

      <div className="flex gap-20">
        <div className="basis-3/4 max-lg:basis-full">
          <div
            className="mt-[50px] text-[20px] text-[#626262] dark:text-[#a6a6a6] max-sm:text-[18px]"
            dangerouslySetInnerHTML={{ __html: postData?.post?.desc || "" }}
          ></div>

          <Comments postSlug={slug} />
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default singlePage;
