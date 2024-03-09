import prisma from "@/utils/connect";

export default async function getAllPosts(page, cat) {
    const POST_PER_PAGE = 4;
    const queryWithCatSlug = {
        take: POST_PER_PAGE,
        skip: POST_PER_PAGE * (page - 1),
        where: {
            ...(cat && { catSlug: cat }),
        },
        orderBy: {
            createAt: "desc",
        },
    };
    try {
        const posts = await prisma.post.findMany(queryWithCatSlug)
        const count = await prisma.post.count({ where: queryWithCatSlug.where })
        const allPost = []
        posts.forEach(post => {
            allPost.push({
                id: post.id,
                title: post.title,
                img: post.img,
                catSlug: post.catSlug,
                createAt: post.createAt.toISOString(),
            })
        })
        return { allPost, count }
    } catch (error) {
        console.log(error);
        return null;
    }
}