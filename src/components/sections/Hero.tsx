'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { ParallaxText } from '@/components/common/ParallaxText'
import { ImageReveal } from '@/components/common/ImageReveal'
import { TextReveal } from '@/components/common/TextReveal'
import { images } from '@/data/content'

export const Hero = () => {
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [0, 400], [1, 0])
  const scale = useTransform(scrollY, [0, 400], [1, 0.95])
  const y = useTransform(scrollY, [0, 400], [0, 100])

  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden">
      <ParallaxText baseVelocity={-150}>TOKACHI SEIKAN</ParallaxText>

      <motion.div
        className="max-w-7xl mx-auto px-6 md:px-12 pt-32 pb-20 relative z-10"
        style={{ opacity, scale }}
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <motion.p
              className="text-sm tracking-[0.3em] mb-6 font-sans overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.span
                className="inline-block"
                initial={{ y: 20 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                SINCE 1996 — HIROO, HOKKAIDO
              </motion.span>
            </motion.p>

            <TextReveal
              className="font-serif text-5xl md:text-7xl lg:text-8xl leading-tight mb-8"
              delay={0.4}
            >
              {`未来を、\n包み込む。`}
            </TextReveal>

            <motion.p
              className="text-base md:text-lg leading-relaxed text-gray-600 max-w-md font-sans"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              圧倒的な生産力と職人技を武器に、
              <br />
              北海道・十勝から世界の物流を支える。
            </motion.p>

            <motion.div
              className="mt-12 flex items-center gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              <motion.div
                className="h-px bg-deep-black"
                initial={{ width: 0 }}
                animate={{ width: 60 }}
                transition={{ duration: 0.8, delay: 1.4 }}
              />
              <span className="text-xs tracking-[0.2em] text-gray-500">EST. 1996</span>
            </motion.div>
          </div>

          <motion.div className="relative aspect-[4/5]" style={{ y }}>
            <ImageReveal className="w-full h-full interactive" delay={0.6}>
              <Image
                src={images.hero}
                alt="木箱製造"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </ImageReveal>

            <motion.div
              className="absolute -bottom-6 -left-6 bg-deep-black text-off-white p-6 md:p-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2, duration: 0.6 }}
            >
              <p className="text-3xl md:text-4xl font-serif">30+</p>
              <p className="text-xs tracking-wider mt-1 text-gray-400">YEARS</p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span className="text-xs tracking-[0.2em] font-sans">SCROLL</span>
        <motion.div className="w-px h-12 bg-deep-black/30 relative overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 w-full bg-deep-black"
            animate={{ height: ['0%', '100%', '0%'], top: ['0%', '0%', '100%'] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
