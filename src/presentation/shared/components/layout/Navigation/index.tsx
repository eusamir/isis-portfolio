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
          // Escolher a seção com maior área visível
          const mostVisibleSection = visibleSections.reduce((max, entry) =>
            entry.intersectionRatio > max.intersectionRatio ? entry : max,
          )
          setActiveSection(`#${mostVisibleSection.target.id}`)
        }
      },
      {
        rootMargin: '0px 0px -50% 0px', // melhora um pouco o ponto de ativação
        threshold: Array.from({ length: 101 }, (_, i) => i / 100), // 0, 0.01, 0.02, ..., 1
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
