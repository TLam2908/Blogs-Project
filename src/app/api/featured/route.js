import prisma from '@/utils/connect';
import { NextResponse } from 'next/server'

export const GET = async (req) => {
    const queryWithFeatured = {
        where: {
            isFeatured: true
        }
    }
    try {
        const featuredPosts = await prisma.post.findMany(queryWithFeatured);
        return NextResponse.json(featuredPosts, { status: 200 });
    } catch (error) {
        console.log(error)
        return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 })
    }
}