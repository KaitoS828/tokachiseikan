'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import type { ReactNode } from 'react'

interface ParallaxTextProps {
  children: ReactNode
  baseVelocity?: number
}

export const ParallaxText = ({
  children,
  baseVelocity = 100,
}: ParallaxTextProps) => {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 3000], [0, baseVelocity])

  return (
    <motion.div className="parallax-text" style={{ y }}>
      {children}
    </motion.div>
  )
}
