'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Image from 'next/image'
import { ParallaxText } from '@/components/common/ParallaxText'
import { RevealOnScroll } from '@/components/common/RevealOnScroll'
import { ImageReveal } from '@/components/common/ImageReveal'
import { works } from '@/data/content'

export const Works = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="works" className="py-32 md:py-48 relative overflow-hidden">
      <ParallaxText baseVelocity={120}>WORKS</ParallaxText>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <RevealOnScroll>
          <div className="flex items-center gap-4 mb-8">
            <motion.div
              className="h-px bg-deep-black"
              initial={{ width: 0 }}
              whileInView={{ width: 40 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            />
            <p className="text-sm tracking-[0.3em] font-sans">OUR WORKS</p>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.2}>
          <div className="flex justify-between items-end mb-20">
            <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl leading-tight">
              事業内容
            </h2>
            <p className="hidden md:block text-sm text-gray-500 max-w-xs text-right">
              木箱製造のプロフェッショナルとして、多様なニーズにお応えします
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid md:grid-cols-3 gap-8">
          {works.map((work, i) => (
            <motion.div
              key={i}
              className="group interactive relative"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="aspect-[3/4] mb-6 relative overflow-hidden">
                <ImageReveal className="w-full h-full" delay={0.3 + i * 0.15}>
                  <motion.div
                    className="relative w-full h-full"
                    animate={{
                      scale: hoveredIndex === i ? 1.1 : 1,
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    <Image
                      src={work.image}
                      alt={work.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </motion.div>
                </ImageReveal>

                <motion.div
                  className="absolute inset-0 bg-deep-black/60 flex items-end p-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredIndex === i ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div>
                    <motion.div
                      className="w-8 h-px bg-white mb-4"
                      initial={{ width: 0 }}
                      animate={{ width: hoveredIndex === i ? 32 : 0 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                    />
                    <p className="text-white text-sm font-sans leading-relaxed">
                      {work.desc}
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="absolute top-4 right-4 w-12 h-12 bg-off-white flex items-center justify-center"
                  whileHover={{ rotate: 90 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="font-serif text-sm">0{i + 1}</span>
                </motion.div>
              </div>

              <motion.p
                className="text-xs tracking-[0.2em] text-gray-400 mb-2 font-sans"
                animate={{ x: hoveredIndex === i ? 10 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {work.category}
              </motion.p>
              <h3 className="font-serif text-xl md:text-2xl">{work.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
