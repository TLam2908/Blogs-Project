import React from "react";
import Pagination from "../pagination/Pagination";
import Card from "../card/Card"; 

const getData = async (page, cat) => {
  const res = await fetch(`http://localhost:3000/api/posts?page=${page}&cat=${cat || ""}`, {
    cache: "no-cache",
  });
  
  if (!res.ok) {
    throw new Error("Something went wrong")
  }
  const data = await res.json()
  // console.log(data)
  return data // Add this line to return the fetched data
};


const CardList = async ({page, cat}) => {

  const {posts, count} = await getData(page, cat);  // the name has to be like the name in the getData function
  const POST_PER_PAGE = 4
 
  const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < count
  const hasPrev = POST_PER_PAGE * (page - 1) > 0

  return (
    <div className="basis-3/4 max-lg:basis-full">
      <h1 className="font-bold text-3xl my-12 mx-0">Recent Posts</h1>
      <div>
        {posts?.map((post) => ( // Fix the error by ensuring postData is an array
          <Card post={post} />
        ))}
      </div>
      <Pagination page={page} hasNext={hasNext} hasPrev={hasPrev}/>
    </div>
  );
};



export default CardList;
