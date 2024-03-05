import Image from "next/image";
import React from "react";
import Link from "next/link";
import ToggleButton from "../toggleButton/ToggleButton";
import AuthLink from "../authLink/AuthLink";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center h-[100px]">
      <div
        className="flex gap-3 flex-1
        max-lg:hidden">
        <Image src="/facebook.png" alt="facebook" height={24} width={24} />
        <Image src="/instagram.png" alt="instagram" height={24} width={24} />
        <Image src="/tik-tok.png" alt="tiktok" height={24} width={24}/>
        <Image src="/youtube.png" alt="youtube" height={24} width={24} />
      </div>
      <div
        className=" flex-1 text-center font-bold text-[36px] 
        max-xl:text-[32px] max-lg:text-left max-md:text-2xl cursor-default">
        Blog
      </div>
      <div
        className="flex gap-5 flex-1 text-xl items-center justify-end
        max-xl:text-lg max-xl:gap-[15px]">
        <ToggleButton />
        <Link href="/" className="max-[640px]:hidden">Homepage</Link>
        <Link href="/about" className="max-[640px]:hidden">About</Link>
        <AuthLink />
      </div>
    </div>
  );
};

export default Navbar;
