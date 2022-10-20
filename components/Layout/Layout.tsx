import Navbar from '@components/Navbar/Navbar'
import React from 'react'

type LayoutProps = {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div>
      <Navbar />
      {children}
      <footer>This is the footer</footer>
      <style jsx>{`
        div {
          background: salmon;
        }
      `}</style>
    </div>
  )
}
