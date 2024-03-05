import React from "react";
import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
    <div
      className="flex mt-14 py-5 justify-between text-[#626262] dark:text-[#a6a6a6] items-center 
    max-md:flex-col max-md:gap-14 max-sm:text-[15px]"
    >
      <div className="flex-1 flex flex-col gap-4">
        <div className="flex gap-3 items-center">
          <Image
            src="/Logo.png"
            alt="logo"
            width={90}
            height={90}
            className="rounded-[50%]"
          />
          <h1 className="font-bold text-3xl max-sm:text-2xl">Blog</h1>
        </div>
        <p className="font-normal text-[18px] cursor-default">
          Welcome to Blog, your go-to destination for insightful
          articles, captivating stories, and thought-provoking discussions.
          Whether you're a seasoned reader or just discovering the world of
          blogging, we're thrilled to have you here. At Blog, we believe
          in the power of words to inspire, educate, and connect people from all
          walks of life. Our diverse team of writers brings a wealth of
          knowledge and expertise to cover a wide range of topics.
        </p>
        <div className="flex mt-3 gap-3">
          <Image src="/facebook.png" alt="facebook" height={24} width={24} />
          <Image src="/instagram.png" alt="instagram" height={24} width={24} />
          <Image src="/tik-tok.png" alt="tiktok" height={24} width={24} />
          <Image src="/youtube.png" alt="youtube" height={24} width={24} />
          <p className="cursor-default">@Copyright by TLam</p>
        </div>
      </div>
      <div
        className="flex flex-1 justify-end gap-[100px]
       max-lg:gap-[50px] max-md:w-[100%] max-md:justify-between max-sm:text-[15px]"
      >
        <div className="flex flex-col gap-3 font-normal">
          <span className="font-bold">Links</span>
          <Link href="/">Homepage</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/myposts">My Blogs</Link>
          <Link href="/about">About</Link>
        </div>
        <div className="flex flex-col gap-3 font-normal">
          <span className="font-bold">Tags</span>
          <Link href="/">Style</Link>
          <Link href="/">Fashion</Link>
          <Link href="/">Coding</Link>
          <Link href="/">Travel</Link>
        </div>
        <div className="flex flex-col gap-3 font-normal">
          <span className="font-bold">Social</span>
          <Link href="https://www.facebook.com/">Facebook</Link>
          <Link href="https://www.instagram.com/">Instagram</Link>
          <Link href="https://www.tiktok.com/">Tiktok</Link>
          <Link href="https://www.youtube.com/">Youtube</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
