import prisma from "@/utils/connect";
export default async function getFeaturedPosts() {
    try {
        const featuredPosts = await prisma.post.findMany({
            where: {
                isFeatured: true
            },
            include: { user: true }
        });
        const featuredPostsData = []
        featuredPosts.forEach(post => {
            featuredPostsData.push({
                id: post.id,
                title: post.title,
                slug: post.slug,
                createAt: post.createAt.toISOString(),
                catSlug: post.catSlug,
                img: post.img,
                name: post.user.name,
            })
        });
        return featuredPostsData;   
    } catch (error) {
        console.log(error);
        return null;
    }
}