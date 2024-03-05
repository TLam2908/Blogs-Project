import { NextResponse } from 'next/server'
import prisma from '@/utils/connect'
 
export const GET = async (request) => {
    try {
        const categories = await prisma.category.findMany()
        return NextResponse.json(categories, {status: 200})
    } catch (error) {
        console.log(error)
        return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 })

    }
}
