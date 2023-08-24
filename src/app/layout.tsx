import Wrapper from '@/components/shared/Wrapper'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import NavBar from '@/components/views/Navbar'
import Footer from '@/components/views/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Wrapper>
        <NavBar/>
        {children}

        <Footer/>
        </Wrapper>
        </body>
    </html>
  )
}
