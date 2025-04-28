'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

export function Navigation() {
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]') // só sections que têm id

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`)
          }
        })
      },
      {
        rootMargin: '0px 0px -70% 0px', // dispara o evento antes da section chegar no topo
        threshold: 0,
      },
    )

    sections.forEach((section) => {
      observer.observe(section)
    })

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section)
      })
    }
  }, [])

  const getLinkClass = (href: string) => {
    return `text-[20px] hover:brightness-90 transition ${
      activeSection === href ? 'border-b-2 border-white' : ''
    }`
  }

  return (
    <div className="hidden md:flex gap-6 font-playfair">
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
    </div>
  )
}
