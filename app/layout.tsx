import './globals.css'
import Navbar from '@/components/Navbar'
import { Rubik } from 'next/font/google'

export const metadata = {
  title: 'Najwa Tahir',
  description: 'Najwa Tahir Portfolio Website',
}

const rubik = Rubik({
  subsets: ['latin'],
  variable: '--font-rubik',
  weight: '400',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${rubik.variable}`}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
