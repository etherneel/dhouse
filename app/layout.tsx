import type { Metadata } from 'next'
import{  Plus_Jakarta_Sans  }from 'next/font/google'
import './globals.css'

// import '@fontsource/plus-jakarta-sans'; // Import the font
const plus_Jakarta_Sans = Plus_Jakarta_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'The BEP20 Token govern by the community.!!',
  
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={plus_Jakarta_Sans.className}>{children}</body>
    </html>
  )
}
