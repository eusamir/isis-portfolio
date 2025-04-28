'use client'

import { useState } from 'react'
import { Sidebar } from '../Sidebar'
import { motion, AnimatePresence } from 'framer-motion'


interface SocialLink {
  url: string
  name: string
}

interface SidebarProps {
  socialLinks: SocialLink[]
}


export function Burguer({ socialLinks }: SidebarProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed cursor-pointer top-9 right-4 sm:right-10 md:right-20 z-50 flex flex-col justify-between w-5 sm:w-6 h-5 sm:h-6 p-1 hover:brightness-90 transition"
        aria-label="Toggle menu"
      >
        <span
          className={`block h-0.5 w-[25px] sm:w-[25px] md:w-[30px] bg-white transition-all duration-300 ease-in-out border-r-2 rounded-sm self-end ${
            isOpen ? 'rotate-45 translate-y-[6px] sm:translate-y-[8px]' : ''
          }`}
        />
        <span
          className={`block h-0.5 w-[17px] sm:w-[15px] md:w-[18px] bg-white transition-all duration-300 ease-in-out rounded-sm self-end ${
            isOpen ? 'opacity-0' : ''
          }`}
        />
        <span
          className={`block h-0.5 w-[25px] sm:w-[25px] md:w-[30px] bg-white transition-all duration-300 ease-in-out rounded-sm self-end ${
            isOpen ? '-rotate-45 -translate-y-1 sm:-translate-y-1.5' : ''
          }`}
        />
      </button>

      {isOpen && (
        <AnimatePresence>
        {isOpen && (
          <motion.div
            key="sidebar"
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '100%', opacity: 0 }}
            transition={{ type: 'spring', stiffness: 70, damping: 15 }}
            className="fixed top-0 right-0 h-full w-full sm:w-[300px] md:w-[400px] bg-olive text-white p-4 sm:p-6 z-40 shadow-lg"
          >
            <Sidebar socialLinks={socialLinks} />
          </motion.div>
        )}
      </AnimatePresence>
      )}
    </>
  )
}
