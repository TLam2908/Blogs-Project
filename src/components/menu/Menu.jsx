import React from "react";
import MenuPosts from "./MenuPosts";
import MenuCategories from "./MenuCategories";
import MenuPostsView from "./MenuPostsView";

const Menu = () => {
  return (
    <div className="basis-1/4 flex-2 mt-[50px]
    max-lg:hidden">
      <div>
        <h2 className="text-gray-400 text-base font-normal">{"What's hot"}</h2>
        <h1 className="text-3xl font-medium">Most Popular</h1>
        <MenuPostsView />

        <h2 className="text-gray-400 text-base font-normal">
          {"Discover by topic"}
        </h2>
        <h1 className="text-3xl font-medium">Categories</h1>
        <MenuCategories />

        <h2 className="text-gray-400 text-base font-normal">
          {"Chosen by edit"}
        </h2>
        <h1 className="text-3xl font-medium">Editers Pick</h1>
        <MenuPosts/>
      </div>
    </div>
  );
};

export default Menu;
