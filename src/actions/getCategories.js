import prisma from '@/utils/connect'

export default async function getCategories() {
    try {
        const categories = await prisma.category.findMany()
        return categories
    } catch (error) {
        console.log(error)
        return null
    }
}