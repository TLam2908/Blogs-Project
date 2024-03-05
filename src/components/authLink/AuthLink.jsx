"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React, { useState } from "react";

const AuthLink = () => {
  const [open, setOpen] = useState(false);
  const { data: session, status } = useSession();
  return (
    <>
      {status === "authenticated" ? (
        <>
          <Link href="/myposts" className="max-[640px]:hidden">
            MyBlogs
          </Link>

          <Link href="/write" className="max-md:hidden">
            Write
          </Link>
          <span
            className="cursor-pointer max-md:hidden"
            onClick={() => signOut()}
          >
            Logout
          </span>
        </>
      ) : (
        <Link href="/login" className="max-sm:hidden">
          Login
        </Link>
      )}
      <div
        className=" w-5 h-4 flex flex-col justify-between cursor-pointer
    sm:hidden"
        onClick={() => {
          setOpen(!open);
        }}
      >
        {/* sm:hidden means that this div will be hidden if the screen more than 640px */}
        <div className="w-full h-[2px] bg-black dark:bg-[#ddd]"></div>
        <div className="w-full h-[2px] bg-black dark:bg-[#ddd]"></div>
        <div className="w-full h-[2px] bg-black dark:bg-[#ddd]"></div>
      </div>

      {open && (
        <div className="absolute w-full h-full top-[100px] left-0 flex z-[1] flex-col items-center justify-center gap-[50px] text-[36px] bg-white dark:bg-[#0f172a] sm:hidden">
          <Link href="/">Homepage</Link>
          <Link href="/about">About</Link>
          {status === "authenticated" ? (
            <>
              <Link href="/myposts">My Posts</Link>
              <Link href="/write">Write</Link>
              <span className=" cursor-pointer">Logout</span>
            </>
          ) : (
            <Link href="/login">Login</Link>
          )}
        </div>
      )}
    </>
  );
};

export default AuthLink;
