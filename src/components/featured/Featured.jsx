"use client"
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
const Featured = () => {
  const router = useRouter();
  const handleNavigate = () => {
    router.push("/posts/cinque-terre");
  }

  return (
    <div className="my-[30px]">
      <h1 className="text-[70px] 
      max-xl:text-6xl max-lg:text-[50px] max-md:text-5xl max-sm:text-4xl">
        <b>
Embark on a journey of discovery and adventure with our Blog</b>, where we share captivating tales and insightful tips from around the globe.
      </h1>
      <div className="flex my-[60px] items-center gap-[50px]">
        <div className="flex-1 h-[500px] relative 
        max-lg:hidden">
          <Image src="/p1.jpeg" sizes="" alt="" fill className="object-cover"/>
        </div>
        <div className="flex flex-1 flex-col gap-5">
          <h1 className="font-bold text-[50px]
          max-xl:text-4xl max-lg:text-3xl">Cinque Terre</h1>
          <p className="text-[20px] dark:text-[#f0f0f0]">
            The Cinque Terre is a collection of five small, picturesque fishing
            villages on the Italian Riviera. These include Monterosso al Mare,
            Vernazza, Corniglia, Manarola, and Riomaggiore.The land was named
            after its five castles: Monterosso in the east; Vernazza in the
            middle; Corniglia to the west; Manarola to the south; and
            Riomaggiore to the north.
          </p>
          <button className="px-[20px] py-[16px] bg-[#0f172a] dark:bg-white text-white dark:text-black w-max rounded-[5px]" onClick={handleNavigate}>Read more</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
