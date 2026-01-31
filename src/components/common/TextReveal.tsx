'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

interface TextRevealProps {
  children: string
  className?: string
  delay?: number
}

export const TextReveal = ({ children, className = '', delay = 0 }: TextRevealProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const lines = children.split('\n')

  return (
    <div ref={ref} className={className}>
      {lines.map((line, lineIndex) => (
        <div key={lineIndex} className="overflow-hidden">
          <motion.div
            initial={{ y: '100%' }}
            animate={isInView ? { y: 0 } : { y: '100%' }}
            transition={{
              duration: 0.8,
              delay: delay + lineIndex * 0.1,
              ease: [0.77, 0, 0.175, 1],
            }}
          >
            {line}
          </motion.div>
        </div>
      ))}
    </div>
  )
}
