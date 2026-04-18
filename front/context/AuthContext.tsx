'use client'

import React, { createContext, useContext, useState } from "react"
import { ProfileSummary } from "../types/user"

// 1. Nuevo tipo
interface AuthContextType {
    profile: ProfileSummary | null
    logOut: () => void
    login: (profile: ProfileSummary) => void
}

// 2. Actualizar el createContext
const AuthContext = createContext<AuthContextType | null>(null)

interface Props {
    children: React.ReactNode,
    initialData: ProfileSummary | null,
}

export const AuthProvider = ({ children, initialData }: Props) => {

    const [profileState, setProfileState] = useState<ProfileSummary | null>(initialData)

    const logOut = () => {
        setProfileState(null)
    }

    const login = (profile: ProfileSummary) => {
        setProfileState(profile)
    }

    return (
        <AuthContext.Provider value={{ profile: profileState, logOut, login }}>
            {children}
        </AuthContext.Provider>
    )
}

// 3. Actualizar el tipo de retorno
export function useAuth(): AuthContextType {
    const context = useContext(AuthContext)
    if (!context) throw new Error("useAuth must be used within an AuthProvider")

    return context
}