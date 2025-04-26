'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export function Navigation() {
  const [activeHash, setActiveHash] = useState('')

  const updateHash = () => {
    setActiveHash(window.location.hash)
  }

  useEffect(() => {
    updateHash()

    window.addEventListener('hashchange', updateHash)

    const handleLinkClick = () => {
      setTimeout(updateHash, 0)
    }

    const links = document.querySelectorAll('a[href^="#"]')
    links.forEach((link) => {
      link.addEventListener('click', handleLinkClick)
    })

    return () => {
      window.removeEventListener('hashchange', updateHash)
      links.forEach((link) => {
        link.removeEventListener('click', handleLinkClick)
      })
    }
  }, [])

  const getLinkClass = (href: string) => {
    return `text-[20px] hover:brightness-90 transition ${activeHash === href ? 'border-b-2 border-white' : ''}`
  }

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const href = e.currentTarget.getAttribute('href')
    if (href) {
      setTimeout(() => setActiveHash(href), 0)
    }
  }

  return (
    <div className="flex gap-6 font-playfair">
      <Link
        href="#portfolio"
        className={getLinkClass('#portfolio')}
        onClick={handleNavClick}
      >
        Portfolio
      </Link>
      <Link
        href="#curriculum-vitae"
        className={getLinkClass('#curriculum-vitae')}
        onClick={handleNavClick}
      >
        Curriculum Vitae
      </Link>
      <Link
        href="#gallery"
        className={getLinkClass('#gallery')}
        onClick={handleNavClick}
      >
        Gallery
      </Link>
      <Link
        href="#on-stage"
        className={getLinkClass('#on-stage')}
        onClick={handleNavClick}
      >
        On stage
      </Link>
      <Link
        href="#contact"
        className={getLinkClass('#contact')}
        onClick={handleNavClick}
      >
        Contact
      </Link>
    </div>
  )
}
