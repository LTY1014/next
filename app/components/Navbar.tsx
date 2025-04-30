'use client'

import Link from 'next/link'
import React from 'react'

// 导航链接配置
const navigationLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

// 公司信息配置
const companyInfo = {
  name: 'Company Name',
  logo: '/logo.png', // 如果有logo的话
}

// 导航栏样式配置
const styles = {
  nav: 'bg-white shadow-md w-full',
  container: 'w-full',
  navContainer: 'flex justify-between h-16',
  leftSection: 'flex items-center',
  logoContainer: 'flex-shrink-0 flex items-center pl-10',
  logo: 'text-xl font-bold text-gray-800',
  companyInfo: 'hidden md:block text-sm text-gray-500 ml-8',
  linksContainer: 'hidden sm:ml-6 sm:flex sm:space-x-8',
  link: 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium',
  mobileMenuButton: 'sm:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500',
  mobileMenu: 'sm:hidden',
  mobileMenuContainer: 'pt-2 pb-3 space-y-1',
  mobileLink: 'block pl-3 pr-4 py-2 border-l-4 text-base font-medium',
}

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <div className={styles.navContainer}>
          <div className={styles.leftSection}>
            <div className={styles.logoContainer}>
              <Link href="/" className={styles.logo}>
                {companyInfo.name}
              </Link>
            </div>
            {/*<div className={styles.companyInfo}>*/}
            {/*  <p>Innovative Solutions for Your Business</p>*/}
            {/*</div>*/}
          </div>

          <div className="flex items-center pr-4">
            <div className={styles.linksContainer}>
              {navigationLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={styles.link}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="sm:hidden">
              <button
                type="button"
                className={styles.mobileMenuButton}
                onClick={toggleMobileMenu}
                aria-expanded={isMobileMenuOpen}
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className={`${isMobileMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                <svg
                  className={`${isMobileMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className={styles.mobileMenuContainer}>
          {navigationLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${styles.mobileLink} border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
} 