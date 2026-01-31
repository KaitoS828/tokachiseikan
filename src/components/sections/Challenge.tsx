'use client'

import Image from 'next/image'
import { RevealOnScroll } from '@/components/common/RevealOnScroll'
import { images } from '@/data/content'

export const Challenge = () => {
  return (
    <section className="py-32 md:py-48 bg-gray-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <RevealOnScroll>
            <div>
              <p className="text-sm tracking-[0.3em] mb-8 font-sans text-gray-500">
                CHALLENGE
              </p>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-tight mb-8">
                伝統から革新へ。
                <br />
                新たな市場を切り拓く。
              </h2>
              <p className="text-base md:text-lg leading-loose text-gray-600 font-sans">
                魚の不漁、赤潮、コロナ禍—。
                外部要因で本業が打撃を受ける中、
                私たちは木箱製造の精密な技術をダウンサイジングし、
                「ミニチュア木箱」という新たな商品を生み出しました。
              </p>
              <p className="text-base md:text-lg leading-loose text-gray-600 mt-6 font-sans">
                従来の「漁協向けの資材屋」から、
                「全国へ広尾を届けるメーカー」へ。
                逆境を力に変え、進化を続けます。
              </p>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.3}>
            <div className="aspect-square image-card interactive relative">
              <Image
                src={images.challenge}
                alt="新たな挑戦"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  )
}
