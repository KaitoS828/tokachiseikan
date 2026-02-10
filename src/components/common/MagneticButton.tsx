'use client'

import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useRef, type ReactNode, type MouseEvent } from 'react'

interface MagneticButtonProps {
  children: ReactNode
  className?: string
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
}

export const MagneticButton = ({ children, className = '', type = 'button', disabled = false }: MagneticButtonProps) => {
  const ref = useRef<HTMLButtonElement>(null)

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const springConfig = { damping: 15, stiffness: 150 }
  const springX = useSpring(x, springConfig)
  const springY = useSpring(y, springConfig)

  const handleMouseMove = (e: MouseEvent<HTMLButtonElement>) => {
    if (!ref.current) return

    const rect = ref.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    const deltaX = (e.clientX - centerX) * 0.3
    const deltaY = (e.clientY - centerY) * 0.3

    x.set(deltaX)
    y.set(deltaY)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.button
      ref={ref}
      type={type}
      disabled={disabled}
      className={`interactive ${className}`}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.button>
  )
}
