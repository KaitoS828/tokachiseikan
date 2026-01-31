'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, type ReactNode } from 'react'

interface ImageRevealProps {
  children: ReactNode
  className?: string
  delay?: number
}

export const ImageReveal = ({ children, className = '', delay = 0 }: ImageRevealProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div
        className="absolute inset-0 bg-deep-black z-10"
        initial={{ scaleX: 1 }}
        animate={isInView ? { scaleX: 0 } : { scaleX: 1 }}
        transition={{
          duration: 0.8,
          delay: delay,
          ease: [0.77, 0, 0.175, 1],
        }}
        style={{ transformOrigin: 'right' }}
      />

      <motion.div
        initial={{ scale: 1.3 }}
        animate={isInView ? { scale: 1 } : { scale: 1.3 }}
        transition={{
          duration: 1.2,
          delay: delay,
          ease: [0.33, 1, 0.68, 1],
        }}
      >
        {children}
      </motion.div>
    </div>
  )
}
