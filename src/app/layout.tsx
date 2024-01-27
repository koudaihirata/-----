import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header_Login from '@/components/header/Login'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ミライ投票',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>
      <Header_Login/>
        {children}
      </body>
    </html>
  )
}
