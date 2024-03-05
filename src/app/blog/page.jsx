import CardList from "@/components/cardList/CardList";
import Menu from "@/components/menu/Menu";
import React from "react";

const blogPage = ({searchParams}) => {

  const page = parseInt(searchParams.page) || 1
  const {cat} = searchParams

  return (
    <div>
      <h1 className="bg-orange-500 text-white font-bold text-[40px] text-center rounded-lg px-2 py-3 capitalize">{cat} Blogs</h1>
      <div className="flex gap-14">
        <CardList page={page} cat={cat}/>
        <Menu />
      </div>
    </div>
  );
};

export default blogPage;
