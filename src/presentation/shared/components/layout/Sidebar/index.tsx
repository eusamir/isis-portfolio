'use client'

import {
  Globe,
  CaretDown,
  InstagramLogo,
  TiktokLogo,
  GoogleLogo,
  MessengerLogo,
} from '@phosphor-icons/react/dist/ssr'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export function Sidebar() {
  const [activeHash, setActiveHash] = useState('')

  const updateHash = () => {
    setActiveHash(window.location.hash)
  }

  useEffect(() => {
    updateHash()
    window.addEventListener('hashchange', updateHash)

    const handleLinkClick = () => setTimeout(updateHash, 0)

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
    return `text-lg font-medium hover:brightness-90 transition ${
      activeHash === href ? 'border-b-2 border-white' : ''
    }`
  }

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const href = e.currentTarget.getAttribute('href')
    if (href) {
      setTimeout(() => setActiveHash(href), 0)
    }
  }

  return (
    <div className="h-full flex flex-col justify-between">
      <div>
        <div className="flex items-center gap-2 mb-10 mt-4">
          <Globe size={25} />
          <h1 className="text-2xl font-medium">English</h1>
          <CaretDown size={25} className="ml-1" />
        </div>
        <nav className="flex flex-col gap-6 font-playfair">
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
        </nav>
      </div>
      <div>
        <hr className="my-10" />
        <div className="flex gap-4 justify-center mb-10">
          {[InstagramLogo, TiktokLogo, GoogleLogo, MessengerLogo].map(
            (Icon, idx) => (
              <div
                key={idx}
                className="bg-white p-3 rounded-full hover:scale-110 transition cursor-pointer"
              >
                <Icon size={25} color="#5A5F51" weight="bold" />
              </div>
            ),
          )}
        </div>
      </div>
    </div>
  )
}
