'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { ParallaxText } from '@/components/common/ParallaxText'
import { RevealOnScroll } from '@/components/common/RevealOnScroll'
import { ImageReveal } from '@/components/common/ImageReveal'
import { TextReveal } from '@/components/common/TextReveal'
import { images } from '@/data/content'

export const Concept = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  const imageY = useTransform(scrollYProgress, [0, 1], [100, -100])

  return (
    <section
      ref={sectionRef}
      id="concept"
      className="py-32 md:py-48 relative overflow-hidden"
    >
      <ParallaxText baseVelocity={100}>CONCEPT</ParallaxText>

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
            <p className="text-sm tracking-[0.3em] font-sans">CONCEPT</p>
          </div>
        </RevealOnScroll>

        <TextReveal
          className="font-serif text-3xl md:text-5xl lg:text-6xl leading-tight mb-12 max-w-4xl"
          delay={0.2}
        >
          {`単なる「箱屋」ではない。\n地域を支える\nインフラ企業として。`}
        </TextReveal>

        <div className="grid md:grid-cols-2 gap-16 mt-20">
          <motion.div style={{ y: imageY }}>
            <ImageReveal className="aspect-[4/3] interactive relative" delay={0.3}>
              <Image
                src={images.concept}
                alt="職人の技術"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </ImageReveal>
          </motion.div>

          <RevealOnScroll delay={0.4}>
            <div className="flex flex-col justify-center">
              <div className="space-y-6">
                <p className="text-base md:text-lg leading-loose text-gray-700 font-sans">
                  平成8年、廃業した営業所を引き継ぐ形で創業。
                  北海道・十勝地方で唯一の港町である広尾町から、
                  水産物流を「梱包資材」で支え続けてきました。
                </p>
                <p className="text-base md:text-lg leading-loose text-gray-700 font-sans">
                  職人の技術と最新の自動化ラインを融合させ、
                  伝統から革新へ。木箱の新たな可能性を 切り拓いています。
                </p>
              </div>

              <div className="grid grid-cols-2 gap-8 mt-12 pt-12 border-t border-gray-200">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <p className="text-4xl md:text-5xl font-serif">4,000</p>
                  <p className="text-sm text-gray-500 mt-2">箱 / 日</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <p className="text-4xl md:text-5xl font-serif">100%</p>
                  <p className="text-sm text-gray-500 mt-2">自社完結</p>
                </motion.div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  )
}
