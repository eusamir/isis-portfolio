'use client'

import { InstagramLogo, TiktokLogo, GoogleLogo, MessengerLogo } from '@phosphor-icons/react'
import { useEffect, useState } from 'react'
import Link from 'next/link'

interface SocialLink {
  url: string
  name: string
}

interface SidebarProps {
  socialLinks: SocialLink[]
}

export function Sidebar({ socialLinks }: SidebarProps) {
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`)
          }
        })
      },
      { rootMargin: '0px 0px -20% 0px', threshold: 0.1 },
    )

    sections.forEach((section) => observer.observe(section))

    return () => sections.forEach((section) => observer.unobserve(section))
  }, [])

  const getIcon = (name: string) => {
    switch (name) {
      case 'instagram':
        return <InstagramLogo size={25} color="#5A5F51" weight="bold" />
      case 'tiktok':
        return <TiktokLogo size={25} color="#5A5F51" weight="bold" />
      case 'email':
        return <GoogleLogo size={25} color="#5A5F51" weight="bold" />
      case 'messenger':
        return <MessengerLogo size={25} color="#5A5F51" weight="bold" />
      default:
        return null
    }
  }

  const getLinkClass = (href: string) => {
    return `text-lg font-medium hover:brightness-90 transition ${
      activeSection === href ? 'border-b-2 border-white' : ''
    }`
  }

  return (
    <div className="h-full flex flex-col justify-between">
      <div>
        <div className="flex items-center gap-2 mb-10 mt-4">
          {/* ... */}
        </div>
        <nav className="flex flex-col gap-6 font-playfair">
          <Link href="#portfolio" className={getLinkClass('#portfolio')}>Portfolio</Link>
          <Link href="#gallery" className={getLinkClass('#gallery')}>Gallery</Link>
          <Link href="#curriculum-vitae" className={getLinkClass('#curriculum-vitae')}>Curriculum Vitae</Link>
          <Link href="#on-stage" className={getLinkClass('#on-stage')}>On stage</Link>
        </nav>
      </div>
      <div>
        <hr className="my-10" />
        <div className="flex gap-4 justify-center mb-10">
          {socialLinks.map((social, idx) =>
            social.url ? (
              <a
                key={idx}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="bg-white p-3 rounded-full hover:scale-110 transition cursor-pointer">
                  {getIcon(social.name)}
                </div>
              </a>
            ) : null
          )}
        </div>
      </div>
    </div>
  )
}
