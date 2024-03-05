import { NextResponse } from "next/server";
import prisma from "@/utils/connect";
import { getAuthSession } from "@/utils/auth";

// get single post

export const GET = async (req, { params }) => {
  const { slug } = params;

  try {
    const post = await prisma.post.update({
      where: { slug: slug },
      include: { user: true },
      data: { views: { increment: 1 } },
    });
    return NextResponse.json({ post }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
};

export const DELETE = async (req, { params }) => {
  const session = await getAuthSession();
  if (!session) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const deleteComment = await prisma.comment.deleteMany({
    where: { postSlug: params.slug },               
  })

const deletePost = await prisma.post.delete({
    where: { slug: params.slug, userEmail: session.user.email }
})

try {
    const transaction = await prisma.$transaction([deleteComment, deletePost]);
    return NextResponse.json({ message: "Deleted post successfully" }, { status: 200 });
} catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 })
}
};
