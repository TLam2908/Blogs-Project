"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import useSWR from "swr";
import { useSession } from "next-auth/react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const fetcher = async (url) => {
  const res = await fetch(url);
  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.message);
  }
  return data;
};

const Comments = ({ postSlug }) => {
  const router = useRouter();
  const { status } = useSession();
  const { data, mutate, isLoading } = useSWR(
    `/api/comments?postSlug=${postSlug}`,
    fetcher
  );

  const [desc, setDesc] = useState("");
  const handleSubmit = async () => {
    await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({ desc, postSlug }),
    });
    setDesc("");
    mutate();
  };

  const deletePost = async () => {
    const res = await fetch(`/api/posts/${postSlug}`, {
      method: "DELETE"
    })
    if (!res.ok) {
      toast.error("You can't delete this post")
      return 
    } else {
      toast.success("Post deleted successfully")
      router.push("/")
    }
  }

  return (
    <>
      <div className="mt-[50px]">
        <h1 className="text-3xl font-medium">Comments</h1>
        {status === "authenticated" ? (
          <div className="flex gap-9 items-center justify-center">
            <textarea
              className="w-full h-[100px] mt-5 border-2 border-gray-300 rounded-lg p-3"
              placeholder="Add a comment"
              onChange={(e) => setDesc(e.target.value)}
              value={desc}
            ></textarea>
            <button
              className=" px-5 py-4 text-white bg-lime-700 font-bold rounded-md"
              onClick={handleSubmit}
            >
              Send
            </button>
          </div>
        ) : (
          <Link className="font-medium mt-2" href="/login">
            Login to write comments
          </Link>
        )}
        <div className="mt-[50px] gap-14">
          {isLoading
            ? "Loading..."
            : data?.map((item) => (
                <div className="mb-[50px]" key={item.id}>
                  <div className="flex gap-5 items-center mb-5">
                    <div className="w-20 h-20 relative">
                      {item?.user?.image && (
                        <Image
                          src={item.user.image}
                          alt=""
                          fill
                          className="object-cover rounded-[50%]"
                        />
                      )}
                    </div>
                    <div className="flex flex-col text-[#626262] dark:text-[#a6a6a6] text-lg font-normal">
                      <span className=" font-medium">{item.user.name}</span>
                      <span className="text-[14px]">
                        {item.createAt.substring(0, 10)}
                      </span>
                    </div>
                  </div>
                  <p className="text-[#626262] dark:text-[#a6a6a6] text-[18px]">
                    {item.desc}
                  </p>
                </div>
              ))}
        </div>
      </div>
      <button
        className="bg-[#1a8917] text-white px-5 py-3 rounded-lg mt-10"
        onClick={deletePost}
      >
        Delete Post
      </button>
    </>
  );
};

export default Comments;
