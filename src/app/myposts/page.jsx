// "use client";
import MyBlog from "../../components/myBlog/MyBlog";
const MyPosts =  ({searchParams}) => {
  const page = parseInt(searchParams.page) || 1
  return (
    <div className="flex flex-col gap-20">
      <h1 className="bg-orange-500 text-white font-bold text-[40px] text-center rounded-lg px-2 py-3 mt-4 capitalize">
        My Blogs
      </h1>
      <MyBlog />
    </div>
  );
};

export default MyPosts;
