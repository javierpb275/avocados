import Navbar from '@components/Navbar/Navbar';
import React from 'react';
import styles from './layout.module.css';

type LayoutProps = {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className={styles.container}>
      <Navbar />
      {children}
      <footer>This is the footer</footer>
    </div>
  )
}
