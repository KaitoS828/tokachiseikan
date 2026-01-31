'use client'

import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { Send } from 'lucide-react'
import { ParallaxText } from '@/components/common/ParallaxText'
import { RevealOnScroll } from '@/components/common/RevealOnScroll'
import { MagneticButton } from '@/components/common/MagneticButton'
import { TextReveal } from '@/components/common/TextReveal'
import type { FormData } from '@/types'

export const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    tel: '',
    message: '',
  })
  const [focusedField, setFocusedField] = useState<string | null>(null)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    alert('お問い合わせありがとうございます。\n内容を確認の上、ご連絡いたします。')
    setFormData({ name: '', email: '', tel: '', message: '' })
  }

  return (
    <section
      id="contact"
      className="dark-section py-32 md:py-48 relative overflow-hidden"
    >
      <ParallaxText baseVelocity={80}>CONTACT</ParallaxText>

      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">
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
              CONTACT
            </p>
          </div>
        </RevealOnScroll>

        <TextReveal
          className="font-serif text-3xl md:text-5xl lg:text-6xl leading-tight mb-8"
          delay={0.2}
        >
          お問い合わせ
        </TextReveal>

        <RevealOnScroll delay={0.3}>
          <p className="text-gray-400 mb-16 font-sans">
            製品に関するご質問、お見積もりのご依頼など、
            <br />
            お気軽にお問い合わせください。
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={0.4}>
          <form onSubmit={handleSubmit} className="space-y-12">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <motion.label
                  className="text-sm mb-4 block font-sans transition-colors duration-300"
                  animate={{ color: focusedField === 'name' ? '#fff' : '#9ca3af' }}
                >
                  お名前 <span className="text-red-400">*</span>
                </motion.label>
                <input
                  type="text"
                  required
                  className="form-input text-white interactive bg-transparent"
                  placeholder="山田 太郎"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField(null)}
                />
              </div>
              <div>
                <motion.label
                  className="text-sm mb-4 block font-sans transition-colors duration-300"
                  animate={{ color: focusedField === 'email' ? '#fff' : '#9ca3af' }}
                >
                  メールアドレス <span className="text-red-400">*</span>
                </motion.label>
                <input
                  type="email"
                  required
                  className="form-input text-white interactive bg-transparent"
                  placeholder="info@example.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                />
              </div>
            </div>

            <div>
              <motion.label
                className="text-sm mb-4 block font-sans transition-colors duration-300"
                animate={{ color: focusedField === 'tel' ? '#fff' : '#9ca3af' }}
              >
                電話番号
              </motion.label>
              <input
                type="tel"
                className="form-input text-white interactive bg-transparent"
                placeholder="090-1234-5678"
                value={formData.tel}
                onChange={(e) =>
                  setFormData({ ...formData, tel: e.target.value })
                }
                onFocus={() => setFocusedField('tel')}
                onBlur={() => setFocusedField(null)}
              />
            </div>

            <div>
              <motion.label
                className="text-sm mb-4 block font-sans transition-colors duration-300"
                animate={{ color: focusedField === 'message' ? '#fff' : '#9ca3af' }}
              >
                お問い合わせ内容 <span className="text-red-400">*</span>
              </motion.label>
              <textarea
                required
                rows={6}
                className="form-input text-white resize-none interactive bg-transparent"
                placeholder="ご用件をご記入ください"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                onFocus={() => setFocusedField('message')}
                onBlur={() => setFocusedField(null)}
              />
            </div>

            <MagneticButton
              type="submit"
              className="w-full md:w-auto px-16 py-5 bg-white text-deep-black font-sans text-sm tracking-[0.2em] hover:bg-gray-200 transition-colors flex items-center justify-center gap-3 group"
            >
              <span>送信する</span>
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <Send size={16} />
              </motion.span>
            </MagneticButton>
          </form>
        </RevealOnScroll>
      </div>
    </section>
  )
}
