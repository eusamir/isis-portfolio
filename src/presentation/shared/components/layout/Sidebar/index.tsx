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
      {
        rootMargin: '0px 0px -70% 0px',
        threshold: 0,
      },
    )

    sections.forEach((section) => observer.observe(section))

    return () => {
      sections.forEach((section) => observer.unobserve(section))
    }
  }, [])

  const getLinkClass = (href: string) => {
    return `text-lg font-medium hover:brightness-90 transition ${
      activeSection === href ? 'border-b-2 border-white' : ''
    }`
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
          <Link href="#portfolio" className={getLinkClass('#portfolio')}>
            Portfolio
          </Link>
          <Link href="#gallery" className={getLinkClass('#gallery')}>
            Gallery
          </Link>
          <Link
            href="#curriculum-vitae"
            className={getLinkClass('#curriculum-vitae')}
          >
            Curriculum Vitae
          </Link>
          <Link href="#on-stage" className={getLinkClass('#on-stage')}>
            On stage
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
