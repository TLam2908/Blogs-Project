import prisma from "@/utils/connect";
import getCurrentUser from "./getCurrentUser";

export default async function getUserPosts() {
    try {
        const user = await getCurrentUser();
        if (!user) {
            return null;
        }
        const userPosts = await prisma.post.findMany({
            where: {
                userEmail: user.email
            },
            orderBy: {
                createAt: "desc"
            }
        });
        const posts = []
        userPosts.forEach(post => {
            posts.push({
                id: post.id,
                title: post.title,
                slug: post.slug,
                createAt: post.createAt.toISOString(),
                catSlug: post.catSlug,
                img: post.img
            })
        });
        return posts
    } catch (error) {
        console.log(error);
        return null;
    }
}