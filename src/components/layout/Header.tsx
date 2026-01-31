'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useScrollPosition } from '@/hooks/useScrollPosition'
import { navItems } from '@/data/content'

export const Header = () => {
  const { isScrolled } = useScrollPosition()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-off-white/90 backdrop-blur-md py-4' : 'py-6'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <a
          href="#"
          className="font-serif text-xl md:text-2xl tracking-wider interactive"
        >
          十勝製函
        </a>

        <nav className="hidden md:flex items-center gap-10">
          {navItems.map((item, i) => (
            <a
              key={i}
              href={item.href}
              className="text-sm tracking-wider hover:opacity-60 transition-opacity interactive"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          className="md:hidden interactive"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="メニュー"
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span
              className={`block h-px bg-deep-black transition-all duration-300 ${
                menuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`block h-px bg-deep-black transition-all duration-300 ${
                menuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block h-px bg-deep-black transition-all duration-300 ${
                menuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </div>
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-off-white"
          >
            <nav className="flex flex-col items-center py-8 gap-6">
              {navItems.map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  className="text-lg tracking-wider interactive"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
