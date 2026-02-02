'use client'

import { motion } from 'framer-motion'
import back from '@/assets/back.webp'

export default function Hero() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-title"
      aria-describedby="hero-summary"
      className="relative min-h-screen flex items-center justify-center px-6 pt-32 pb-20 overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${back.src})` }}
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-black/70"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5 animate-pulse"></div>
      
      <div className="mx-auto max-w-4xl text-center relative z-10">
        <motion.h1
          id="hero-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-white mb-6 leading-tight"
        >
          A{" "}
          <span className="inline-flex items-center rounded-xl border border-white/35 bg-gradient-to-br from-white/35 via-white/15 to-white/5 px-3 py-1 text-6xl md:text-7xl lg:text-8xl leading-none tracking-tight text-white shadow-[0_12px_30px_rgba(15,23,42,0.4)] backdrop-blur-xl">
            Live
          </span>{" "}
          <span className="bg-gradient-to-r from-white via-sky-100 to-sky-400 bg-clip-text text-transparent">
            AI Interviewer
          </span>
          .
        </motion.h1>
        <p id="hero-summary" className="sr-only">
          APADCode is a live AI coding interview platform for hiring teams. It evaluates
          how candidates think, communicate, and reason in real time during live coding.
        </p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.9, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="mt-6 flex justify-center"
        >
          <div className="mb-3 flex w-[120%] max-w-none self-center items-center gap-3 px-2">
            <span className="h-px flex-1 bg-gradient-to-r from-transparent via-sky-300/70 to-transparent" />
            <svg
              viewBox="0 0 40 24"
              aria-hidden="true"
              className="h-5 w-10"
            >
              <defs>
                <linearGradient id="jewelSky" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#e0f2fe" stopOpacity="0.95" />
                  <stop offset="50%" stopColor="#7dd3fc" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.25" />
                </linearGradient>
              </defs>
              <g transform="translate(20 12)">
                <polygon
                  points="0,-6 6,0 0,6 -6,0"
                  fill="url(#jewelSky)"
                  stroke="#7dd3fc"
                  strokeOpacity="0.9"
                  strokeWidth="1"
                />
                <polygon
                  points="0,-3.5 3.5,0 0,3.5 -3.5,0"
                  fill="#38bdf8"
                  fillOpacity="0.25"
                  stroke="#7dd3fc"
                  strokeOpacity="0.7"
                  strokeWidth="0.8"
                />
                <polygon
                  points="-9,0 -12,0 -10.5,-2.5"
                  fill="#38bdf8"
                  fillOpacity="0.25"
                  stroke="#7dd3fc"
                  strokeOpacity="0.6"
                  strokeWidth="0.6"
                />
                <polygon
                  points="9,0 12,0 10.5,-2.5"
                  fill="#38bdf8"
                  fillOpacity="0.25"
                  stroke="#7dd3fc"
                  strokeOpacity="0.6"
                  strokeWidth="0.6"
                />
                <circle cx="0" cy="-8" r="1.1" fill="#7dd3fc" fillOpacity="0.8" />
                <circle cx="0" cy="8" r="1.1" fill="#7dd3fc" fillOpacity="0.8" />
              </g>
            </svg>
            <span className="h-px flex-1 bg-gradient-to-r from-transparent via-sky-300/70 to-transparent" />
          </div>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-xl md:text-2xl text-white/60 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          <span className="font-semibold">
            <span className="text-[#2563eb] drop-shadow-[0_0_12px_rgba(59,130,246,0.45)]">
              APAD
            </span>
            <span className="text-white">Code</span>
          </span>{" "}
          conducts real-time voice interviews.
          <br />
          <span className="text-white/90 font-semibold">
            <span className="bg-gradient-to-r from-sky-200 via-white to-sky-300 bg-clip-text text-transparent">
              Live coding
            </span>{" "}
            evaluates how candidates think and communicate — not just whether their code passes tests.
          </span>
        </motion.p>
        <motion.a
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="#demo"
          className="group relative inline-flex items-center justify-center overflow-hidden rounded-md border border-white/20 bg-white/5 px-8 py-4 text-lg font-semibold text-white/95 backdrop-blur-md transition-all hover:border-white/40 hover:bg-white/10"
        >
          <span className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 before:absolute before:inset-0 before:content-[''] before:bg-gradient-to-r before:from-sky-400/20 before:via-transparent before:to-sky-400/20 group-hover:opacity-100" />
          <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/40 opacity-60" />
          <span className="relative">Book a Demo</span>
        </motion.a>
      </div>
    </section>
  )
}
