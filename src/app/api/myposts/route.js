import { NextResponse } from "next/server";
import prisma from "@/utils/connect";
import { getAuthSession } from "@/utils/auth";

export const GET = async (req) => {
    const session = await getAuthSession();
    if (!session) {
        return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const queryWithUserPosts = {
        where: {
            userEmail: session.user.email
        },
        orderBy: {
            createAt: "desc",
        },
    }
    try {
        const userPosts = await prisma.post.findMany(queryWithUserPosts)
        return NextResponse.json( userPosts, { status: 200 });  
    } catch (error) {
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }   
}