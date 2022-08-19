import { ReactNode } from 'react'
import { Header } from './header'
import { Footer } from './footer'

type LayoutProps = {
    children: ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className='flex flex-col md:container md:mx-auto min-h-screen bg-transparent'>
      <Header />
      <main className='grow md:rounded-b-md pb-12 bg-background dark:bg-background-dark'>{children}</main>
      <Footer />
    </div>
  )
}