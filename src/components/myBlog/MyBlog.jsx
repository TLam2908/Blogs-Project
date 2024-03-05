"use client";
import Card from "../card/Card";
const myPosts = async () => {
  const res = await fetch("http://localhost:3000/api/myposts");
  if (!res) {
    throw new Error("Something went wrong");
  }
  return await res.json();
};

const MyBlog = async () => {
  const blogData = await myPosts();
  console.log(blogData);
  return (
    <div className="basis-full">
      {blogData?.map((post) => (
        <Card key={post.id} post={post} />
      ))}
    </div>
  );
};

export default MyBlog;