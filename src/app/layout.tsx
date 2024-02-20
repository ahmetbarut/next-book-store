import Footer from '@/components/Footer/Footer'
import './globals.css'
import Header from '@/components/Head/Header'
import { Inter } from 'next/font/google'
import Main from '@/components/Main/MainComponent'
import {Providers} from "./providers";

export const metadata = {
  title: 'Hello World',
  description: 'Generated by create next app',
}

const inter = Inter({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700'],
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
        <html lang="en">
        <body className={inter.className + ' mb-16'}>
        <Header/>
            <Main>
                <Providers>
                  {children}
                </Providers>
            </Main>
        <Footer/>
        </body>
        </html>
  )
}
