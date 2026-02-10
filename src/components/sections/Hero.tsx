'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { images } from '@/data/content'

export const Hero = () => {
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [0, 400], [1, 0])
  const scale = useTransform(scrollY, [0, 400], [1, 1.05])

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <motion.div
        className="absolute inset-0 bg-gray-900"
        style={{ scale }}
      >
        <Image
          src={images.hero}
          alt="木箱製造"
          fill
          className="object-contain"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/20" />
      </motion.div>

      {/* Center Card */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center px-6"
        style={{ opacity }}
      >
        <motion.div
          className="bg-white/80 backdrop-blur-sm px-12 md:px-20 py-10 md:py-14 text-center max-w-4xl w-full"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {/* Company Name */}
          <motion.div
            className="mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl mb-2">
              十勝製函
            </h1>
            <p className="text-sm tracking-[0.3em] text-gray-600 font-sans">
              TOKACHI SEIKAN
            </p>
          </motion.div>

          {/* Est Year */}
          <motion.p
            className="text-xs tracking-[0.2em] text-gray-500 mb-6 font-sans"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            since 1996
          </motion.p>

          {/* Divider */}
          <motion.div
            className="h-px bg-gray-300 mb-6"
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 0.8, delay: 0.9 }}
          />

          {/* Catchphrase */}
          <motion.h2
            className="font-serif text-2xl md:text-3xl lg:text-4xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            広尾から全国へ。
          </motion.h2>

          {/* Description */}
          <motion.p
            className="mt-6 text-sm md:text-base text-gray-600 leading-relaxed font-sans"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.3 }}
          >
            圧倒的な生産力と職人技を武器に、
            <br />
            北海道・十勝から支える。
          </motion.p>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span className="text-xs tracking-[0.2em] font-sans">SCROLL</span>
        <motion.div className="w-px h-12 bg-white/50 relative overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 w-full bg-white"
            animate={{ height: ['0%', '100%', '0%'], top: ['0%', '0%', '100%'] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
