import prisma from "@/utils/connect";

export default async function getViewPosts() {
    try {
        const posts = await prisma.post.findMany({
            take: 4,
            orderBy: {
                views: "desc"
            },
            include: { user: true }
        });
        const postsData = []
        posts.forEach(post => {
            postsData.push({
                id: post.id,
                title: post.title,
                slug: post.slug,
                createAt: post.createAt.toISOString(),
                catSlug: post.catSlug,
                img: post.img,
                name: post.user.name,
            })
        });
        return postsData;   
    } catch (error) {
        console.log(error);
        return null;
    }
}