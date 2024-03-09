import prisma from "@/utils/connect";
import getCurrentUser from "./getCurrentUser";

export default async function getUserComments(req, postSlug) {
    try {
        const session = await getCurrentUser();
        if (!session) {
            return null;
        }
        const takePostSlug = postSlug

        const comments = await prisma.comment.findMany({
            where: {
                ...(takePostSlug && {takePostSlug: takePostSlug})
            },
            include: { user: true }  
        })
        const commentsData = []
        comments.forEach(comment => {
            commentsData.push({
                id: comment.id,
                desc: comment.desc,
                createAt: comment.createAt.toISOString(),
                postSlug: comment.postSlug,
                userName: comment.user.name,
                userImage: comment.user.image
            })
        });
        return commentsData;
    } catch (error) {
        console.log(error);
        return null;
    }
}