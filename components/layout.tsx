import { ReactNode } from 'react'
import Header from './header'

export default function Layout({ children }: {children: ReactNode}) {
  return (
    <div className='flex flex-col md:container md:mx-auto min-h-screen bg-transparent'>
      <Header />
      <main className='grow md:rounded-b-md pb-12 bg-neutral-50 dark:bg-neutral-800'>{children}</main>
    </div>
  )
}