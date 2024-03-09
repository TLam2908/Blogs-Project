import prisma from "@/utils/connect";
export default async function getSinglePost(slug) {
    try {
        const getPost = prisma.post.findUnique({
            where: { slug: slug },
            include: { user: true },
            
        });
        const postViewUpdate = prisma.post.update({
            where: { slug: slug },
            data: { views: { increment: 1 } },
        });
        const singlePost = await prisma.$transaction([getPost, postViewUpdate]);
        const singlePostData = {
            id: singlePost[0].id,
            title: singlePost[0].title,
            slug: singlePost[0].slug,
            desc: singlePost[0].desc,
            createAt: singlePost[0].createAt.toISOString(),
            catSlug: singlePost[0].catSlug,
            img: singlePost[0].img,
            views: singlePost[0].views,
            user: {
                name: singlePost[0].user.name,
                email: singlePost[0].user.email,
                image: singlePost[0].user.image,
            },
        };
        return singlePostData;
    } catch (error) {
        console.log(error);
        return null;
    }
}