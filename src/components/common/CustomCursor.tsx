'use client'

import { useState, useEffect } from 'react'

export const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const isMobile = window.matchMedia('(max-width: 768px)').matches
    if (isMobile) return

    setIsVisible(true)

    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseEnter = () => setIsHovering(true)
    const handleMouseLeave = () => setIsHovering(false)

    window.addEventListener('mousemove', updatePosition)

    const addListeners = () => {
      const interactiveElements = document.querySelectorAll(
        'a, button, input, textarea, .interactive'
      )
      interactiveElements.forEach((el) => {
        el.addEventListener('mouseenter', handleMouseEnter)
        el.addEventListener('mouseleave', handleMouseLeave)
      })
    }

    addListeners()

    const observer = new MutationObserver(addListeners)
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      window.removeEventListener('mousemove', updatePosition)
      observer.disconnect()
    }
  }, [])

  if (!isVisible) return null

  return (
    <>
      <div
        className={`custom-cursor ${isHovering ? 'hovering' : ''}`}
        style={{
          left: position.x - 10,
          top: position.y - 10,
        }}
      />
      <div
        className="cursor-dot"
        style={{
          left: position.x - 3,
          top: position.y - 3,
        }}
      />
    </>
  )
}
