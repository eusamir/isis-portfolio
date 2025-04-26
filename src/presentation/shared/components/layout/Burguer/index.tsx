'use client'

import { useState } from 'react'
import { Sidebar } from '../Sidebar'

export function Burguer() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-9 right-20 z-50 flex flex-col justify-between w-6 h-6 p-1 focus:outline-none cursor-pointer hover:brightness-90 transition"
        aria-label="Toggle menu"
      >
        <span
          className={`block h-0.5 w-[30px] bg-white transition-all duration-300 ease-in-out border-r-2 rounded-sm self-end  ${
            isOpen ? 'rotate-45 translate-y-[8px]' : ''
          }`}
        />
        <span
          className={`block h-0.5 w-[18px] bg-white transition-all duration-300 ease-in-out rounded-sm self-end ${
            isOpen ? 'opacity-0' : ''
          }`}
        />
        <span
          className={`block h-0.5 w-[30px] bg-white transition-all duration-300 ease-in-out rounded-sm self-end ${
            isOpen ? '-rotate-45 -translate-y-1.5' : ''
          }`}
        />
      </button>

      {isOpen && (
        <div className="fixed top-0 right-10 h-full w-[400px] bg-olive text-white p-6 z-auto shadow-lg">
          <Sidebar />
        </div>
      )}
    </>
  )
}
