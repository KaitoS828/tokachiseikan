'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { ParallaxText } from '@/components/common/ParallaxText'
import { RevealOnScroll } from '@/components/common/RevealOnScroll'
import { TextReveal } from '@/components/common/TextReveal'
import { strengths } from '@/data/content'

export const Strength = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])

  return (
    <section
      ref={sectionRef}
      id="strength"
      className="dark-section py-32 md:py-48 relative overflow-hidden"
    >
      <motion.div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            'radial-gradient(ellipse at 50% 50%, rgba(255,255,255,0.1) 0%, transparent 70%)',
          y: backgroundY,
        }}
      />

      <ParallaxText baseVelocity={-80}>STRENGTH</ParallaxText>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <RevealOnScroll>
          <div className="flex items-center gap-4 mb-8">
            <motion.div
              className="h-px bg-gray-600"
              initial={{ width: 0 }}
              whileInView={{ width: 40 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            />
            <p className="text-sm tracking-[0.3em] font-sans text-gray-400">
              OUR STRENGTH
            </p>
          </div>
        </RevealOnScroll>

        <TextReveal
          className="font-serif text-3xl md:text-5xl lg:text-6xl leading-tight mb-20"
          delay={0.2}
        >
          {`他社が真似できない\n3つの強み`}
        </TextReveal>

        <div className="space-y-0">
          {strengths.map((item, i) => (
            <motion.div
              key={i}
              className="group"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 + i * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="grid md:grid-cols-12 gap-8 items-start border-t border-white/10 py-12 relative overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-white/5"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.4 }}
                />

                <div className="md:col-span-2 relative z-10">
                  <motion.span
                    className="text-6xl md:text-8xl font-serif text-white/10 group-hover:text-white/20 transition-colors duration-500"
                    whileHover={{ scale: 1.1 }}
                  >
                    {item.num}
                  </motion.span>
                </div>
                <div className="md:col-span-4 relative z-10">
                  <h3 className="font-serif text-2xl md:text-3xl group-hover:translate-x-2 transition-transform duration-300">
                    {item.title}
                  </h3>
                </div>
                <div className="md:col-span-6 relative z-10">
                  <p className="text-gray-400 leading-loose font-sans group-hover:text-gray-300 transition-colors duration-300">
                    {item.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
