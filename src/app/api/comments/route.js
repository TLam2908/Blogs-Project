import { NextResponse } from 'next/server'
import prisma from '@/utils/connect'
import { getAuthSession } from '@/utils/auth'
// get all comments

export const GET = async (req) => {
    const session = await getAuthSession()
    if (!session) {
        return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })
    }
    const {searchParams} = new URL(req.url)
    const postSlug = searchParams.get('postSlug')

    try {
        const comments = await prisma.comment.findMany({
            where: {
                ...(postSlug && {postSlug: postSlug})
            },
            include: { user: true }
        })
        return NextResponse.json(comments, {status: 200})
    } catch (error) {
        console.log(error)
        return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 })

    }
}

// create a comment
export const POST = async (req) => {
    const session = await getAuthSession()
    if (!session) {
        return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })
    }
    try {
        const body = await req.json()
        const comment = await prisma.comment.create({
            data: {...body, userEmail: session.user.email}
        })
        return NextResponse.json(comment, { status: 200 })
    } catch (err) {
        console.log(err)
        return NextResponse.json({ message: 'Something went wrong!' }, { status: 500 })
    }
}
 // delete a comment
export const DELETE = async (req) => {
    const session = await getAuthSession()
    if (!session) {
        return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })
    }

    const {searchParams} = new URL(req.url)
    const id = searchParams.get('id')

    try {
        const comment = await prisma.comment.delete({
            where: { id: id, userEmail: session.user.email }
        })
        return NextResponse.json(comment, { status: 200 })
    } catch (err) {
        console.log(err)
        return NextResponse.json({ message: 'Something went wrong!' }, { status: 500 })
    }
}
