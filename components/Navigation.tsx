'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import logo from '@/assets/logo-s.png'

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-colors ${
        scrolled ? 'border-white/10 bg-black/90' : 'border-white/5 bg-black/80'
      } backdrop-blur-sm`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3"
          >
            <Image
              src={logo}
              alt="APADCode"
              width={48}
              height={48}
              priority
              className="h-12 w-auto"
            />
            <span className="text-xl font-semibold tracking-wide">
              <span className="text-[#2563eb] drop-shadow-[0_0_12px_rgba(59,130,246,0.45)]">
                APAD
              </span>
              <span className="text-white">Code</span>
            </span>
          </motion.div>
          <div className="flex items-center gap-3">
            <motion.a
              href="#demo"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center border border-white/40 bg-white/15 px-5 py-2 text-sm font-semibold text-white/90 backdrop-blur-md transition-colors hover:border-white/70 hover:bg-white/25 hover:text-white"
            >
              Book a Demo
            </motion.a>
            <motion.a
              href="#register"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center border border-white/25 bg-white/5 px-5 py-2 text-sm font-medium text-white/80 backdrop-blur-md transition-colors hover:border-white/60 hover:bg-white/15 hover:text-white"
            >
              Register
            </motion.a>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}
