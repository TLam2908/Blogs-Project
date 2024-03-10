import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

export const GET = async (req) => {
    const queryWithViews = {
        take: 4,
        orderBy: {
          views: "desc",
        },
        include: {
          user: true
        }
    };
    try {
        const viewPosts = await prisma.post.findMany(queryWithViews);
        return NextResponse.json(viewPosts, { status: 200 });
    } catch (err) {
        return NextResponse.json(
          { message: "Internal Server Error" },
          { status: 500 }
        );
    }
}