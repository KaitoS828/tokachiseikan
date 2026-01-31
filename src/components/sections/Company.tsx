'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ParallaxText } from '@/components/common/ParallaxText'
import { RevealOnScroll } from '@/components/common/RevealOnScroll'
import { companyInfo, images } from '@/data/content'

export const Company = () => {
  return (
    <section id="company" className="py-32 md:py-48 relative overflow-hidden">
      <ParallaxText baseVelocity={-100}>COMPANY</ParallaxText>

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
            <p className="text-sm tracking-[0.3em] font-sans">COMPANY</p>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.2}>
          <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl leading-tight mb-20">
            会社概要
          </h2>
        </RevealOnScroll>

        <div className="grid md:grid-cols-2 gap-16">
          <RevealOnScroll delay={0.3}>
            <div className="aspect-[4/3] image-card interactive relative">
              <Image
                src={images.company}
                alt="北海道の風景"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.4}>
            <dl className="space-y-8">
              {companyInfo.map((item, i) => (
                <div key={i} className="border-b border-gray-200 pb-6">
                  <dt className="text-sm text-gray-500 mb-2 font-sans">
                    {item.label}
                  </dt>
                  <dd className="text-lg font-sans whitespace-pre-line">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  )
}
