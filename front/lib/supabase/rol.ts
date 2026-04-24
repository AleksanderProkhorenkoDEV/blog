import { ProfileSummary } from "../../types/user";
import prisma from "../prisma/prisma"
import { createClient } from "./server";

export const getProfile = async (): Promise<ProfileSummary | null> => {
    const user = await getUserSession()

    if (!user) return null

    const profile: ProfileSummary | null = await prisma.profile.findUnique({
        where: { id: user.id },
        select: {
            email: true,
            role: true,
        },
    })

    return profile;
}

const getUserSession = async () => {
    const supabase = await createClient()

    const {
        data: { user },
        error,
    } = await supabase.auth.getUser()

    if (error || !user) return null

    return user
}