
import Card from "../card/Card";
import getUserPosts from "@/actions/getUserPosts";
// const myPosts = async () => {
//   const res = await fetch(process.env.API_PATH + "/api/myposts");
//   if (!res) {
//     throw new Error("Something went wrong");
//   }
//   return await res.json();
// };
const MyBlog = async () => {
  const blogData = await getUserPosts();
  return (
    <div className="basis-full">
      {blogData?.map((post) => (
        <Card key={post.id} post={post} />
      ))}
    </div>
  );
};

export default MyBlog;