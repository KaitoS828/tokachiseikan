'use client'

import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { Concept } from '@/components/sections/Concept'
import { Strength } from '@/components/sections/Strength'
import { Works } from '@/components/sections/Works'
import { Challenge } from '@/components/sections/Challenge'
import { Company } from '@/components/sections/Company'
import { Contact } from '@/components/sections/Contact'
import { ScrollProgress } from '@/components/common/ScrollProgress'
import { LoadingScreen } from '@/components/common/LoadingScreen'

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      {!isLoading && (
        <>
          <ScrollProgress />
          <Header />
          <main>
            <Hero />
            <Concept />
            <Strength />
            <Works />
            <Challenge />
            <Company />
            <Contact />
          </main>
          <Footer />
        </>
      )}
    </>
  )
}
