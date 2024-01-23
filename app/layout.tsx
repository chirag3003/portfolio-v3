import { Inter } from 'next/font/google'

import './globals.css'
import { Toaster } from 'react-hot-toast'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Nextjs 14, TailwindCss Template',
    description:
        'A template for frontend developers created By Chirag Bhalotia',
}

interface RootLayoutProps {
    children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="en">
            <body className={`${inter.className} text-text bg-background dark`}>
                <Navbar />
                {children}
                <Toaster />
            </body>
        </html>
    )
}
