'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

export function Navigation() {
  const [activeSection, setActiveSection] = useState('')

  console.log(activeSection)

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries.filter((entry) => entry.isIntersecting)

        if (visibleSections.length > 0) {
          // Ordena as seções pela maior porcentagem visível
          const mostVisibleSection = visibleSections.sort(
            (a, b) => b.intersectionRatio - a.intersectionRatio,
          )[0]

          setActiveSection(`#${mostVisibleSection.target.id}`)
        }
      },
      {
        rootMargin: '0px 0px -20% 0px', // Menor margem para ser mais preciso
        threshold: [0, 0.25, 0.5, 0.75, 1], // Diferentes estágios de visibilidade
      },
    )

    sections.forEach((section) => observer.observe(section))

    return () => sections.forEach((section) => observer.unobserve(section))
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
