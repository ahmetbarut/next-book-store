import './globals.css'
import Header from '@/components/Head/Header'
import TopCategories from '@/components/Home/TopCategories'
import Newsletter from '@/components/Main/Newsletter'
import RelatedProducts from '@/components/Main/RelatedProducts'
import Slider from '@/components/Slider/Slider'
import { Inter } from 'next/font/google'
RelatedProducts
export const metadata = {
  title: 'Hello World',
  description: 'Generated by create next app',
}

const inter = Inter({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700'],
})

export default function RootLayout({ children, }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className + ' mb-16'}>
        <Header />
        <Slider />
        <TopCategories />
        <Newsletter />
        <RelatedProducts />
        {children}
      </body>
    </html>
  )
}
