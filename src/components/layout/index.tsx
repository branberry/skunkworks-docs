"use client"
import { HeaderContextProvider } from "../header/header-context"

interface RootLayoutProps {
    children: React.ReactNode;
}

export const RootLayout = ({ children }: RootLayoutProps) => (
    <HeaderContextProvider>
        {children}
    </HeaderContextProvider>
)