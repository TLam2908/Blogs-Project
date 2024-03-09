import { getAuthSession } from '@/utils/auth';
import prisma from '@/utils/connect';

export default async function getCurrentUser() {
    try {
        const session = await getAuthSession();         
        if (!session?.user?.email) {
            return null;
        }
        const user = await prisma.user.findUnique({
            where: {
                email: session.user.email
            }
        });
        if (!user) {
            return null;
        }
        return user
    } catch (error) {
        console.log(error);
        return null;
    }
}