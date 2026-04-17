'use client'

import React, { createContext, useContext, useState } from "react"
import { ProfileSummary } from "../types/user"

const AuthContext = createContext<ProfileSummary | null>(null)

interface Props {
    children: React.ReactNode,
    initialData: ProfileSummary | null,
}

export const AuthProvider = ({ children, initialData }: Props) => {

    const [profileState] = useState<ProfileSummary | null>(initialData)

    return (
        <AuthContext.Provider value={profileState}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth(): ProfileSummary | null {
    const context = useContext(AuthContext)

    return context
}