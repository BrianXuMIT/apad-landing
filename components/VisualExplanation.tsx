'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

function AnimatedWaveform() {
  const bars = [2, 4, 6, 8, 12, 8, 6, 4, 3, 5, 7, 9, 11, 9, 7, 5]
  const gradients = [
    'from-sky-500 via-cyan-400 to-emerald-300',
    'from-fuchsia-500 via-purple-400 to-sky-400',
    'from-amber-400 via-orange-400 to-rose-400',
  ]
  
  return (
    <div className="flex items-end justify-center gap-1.5 h-16">
      {bars.map((height, i) => (
        <motion.div
          key={i}
          className={`w-1.5 rounded-full bg-gradient-to-t ${gradients[i % gradients.length]} shadow-[0_0_14px_rgba(56,189,248,0.55)]`}
          initial={{ height: 4 }}
          animate={{
            height: [height * 4, (height * 1.5) * 4, height * 4],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            delay: i * 0.1,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}

function AnimatedCodeEditor() {
  const [visibleLines, setVisibleLines] = useState(0)
  const totalLines = 8

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleLines(prev => {
        if (prev < totalLines) {
          return prev + 1
        }
        return prev
      })
    }, 300)

    return () => clearInterval(interval)
  }, [])

  const codeStructure = [
    { text: 'def ', color: 'text-purple-400', indent: 0 },
    { text: 'find_max', color: 'text-blue-400', indent: 0 },
    { text: '(arr):', color: 'text-white/60', indent: 0 },
    { text: '    if ', color: 'text-purple-400', indent: 1 },
    { text: 'not arr:', color: 'text-white/60', indent: 1 },
    { text: '        return ', color: 'text-purple-400', indent: 2 },
    { text: 'None', color: 'text-orange-400', indent: 2 },
    { text: '    max_val ', color: 'text-yellow-400', indent: 1 },
    { text: '= arr[', color: 'text-white/60', indent: 1 },
    { text: '0', color: 'text-green-400', indent: 1 },
    { text: ']', color: 'text-white/60', indent: 1 },
    { text: '    for ', color: 'text-purple-400', indent: 1 },
    { text: 'val ', color: 'text-yellow-400', indent: 1 },
    { text: 'in ', color: 'text-purple-400', indent: 1 },
    { text: 'arr:', color: 'text-yellow-400', indent: 1 },
    { text: '        if ', color: 'text-purple-400', indent: 2 },
    { text: 'val ', color: 'text-yellow-400', indent: 2 },
    { text: '> ', color: 'text-white/60', indent: 2 },
    { text: 'max_val:', color: 'text-yellow-400', indent: 2 },
    { text: '            max_val ', color: 'text-yellow-400', indent: 3 },
    { text: '= ', color: 'text-white/60', indent: 3 },
    { text: 'val', color: 'text-yellow-400', indent: 3 },
    { text: '    return ', color: 'text-purple-400', indent: 1 },
    { text: 'max_val', color: 'text-yellow-400', indent: 1 },
  ]

  const lines = [
    ['def ', 'find_max', '(arr):'],
    ['    if ', 'not arr:'],
    ['        return ', 'None'],
    ['    max_val ', '= arr[', '0', ']'],
    ['    for ', 'val ', 'in ', 'arr:'],
    ['        if ', 'val ', '> ', 'max_val:'],
    ['            max_val ', '= ', 'val'],
    ['    return ', 'max_val'],
  ]

  const colors = [
    ['text-purple-400', 'text-blue-400', 'text-white/60'],
    ['text-purple-400', 'text-white/60'],
    ['text-purple-400', 'text-orange-400'],
    ['text-yellow-400', 'text-white/60', 'text-green-400', 'text-white/60'],
    ['text-purple-400', 'text-yellow-400', 'text-purple-400', 'text-yellow-400'],
    ['text-purple-400', 'text-yellow-400', 'text-white/60', 'text-yellow-400'],
    ['text-yellow-400', 'text-white/60', 'text-yellow-400'],
    ['text-purple-400', 'text-yellow-400'],
  ]

  return (
    <div className="bg-[#010409] rounded border border-white/5 p-4 font-mono text-sm">
      <div className="flex items-center gap-2 mb-3 text-white/40 text-xs">
        <span>main.py</span>
        <motion.span
          className="w-2 h-2 rounded-full bg-green-500"
          animate={{ opacity: [1, 0.3, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      </div>
      <div className="space-y-1 text-white/80">
        {lines.map((line, lineIndex) => (
          <motion.div
            key={lineIndex}
            initial={{ opacity: 0, x: -10 }}
            animate={{ 
              opacity: lineIndex < visibleLines ? 1 : 0,
              x: lineIndex < visibleLines ? 0 : -10
            }}
            transition={{ duration: 0.3 }}
            className="flex whitespace-pre"
          >
            {line.map((part, partIndex) => (
              <span key={partIndex} className={colors[lineIndex]?.[partIndex] || 'text-white/80'}>
                {part}
              </span>
            ))}
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default function VisualExplanation() {
  const ratings = [
    { label: 'Code-quality', value: 4 },
    { label: 'Communication', value: 5 },
    { label: 'Critical thinking', value: 4 },
    { label: 'Testing discipline', value: 3 },
    { label: 'Code correctness', value: 4 },
  ]

  return (
    <section
      id="live-coding"
      aria-labelledby="visual-explanation-title"
      aria-describedby="visual-explanation-summary"
      className="py-32 px-6 bg-gradient-to-b from-black to-black/95"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 id="visual-explanation-title" className="text-3xl md:text-4xl font-semibold text-white">
              Real-time conversation meets Live Coding
            </h2>
            <p id="visual-explanation-summary" className="sr-only">
              Live AI interviewer explains problems, listens to candidates, and adapts
              follow-up questions while they code in a live editor.
            </p>
            <p className="text-lg text-white/60 leading-relaxed">
              The AI interviewer speaks with candidates through voice, explains problems, 
              listens to their reasoning, and adapts follow-up questions in real time. 
              All while they code in a live editor.
            </p>
            <p className="text-sm text-white/50 italic">
              This is not an async test. It's a live, adaptive interview.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative bg-[#0d1117] rounded-lg border border-white/10 p-6"
          >
            {/* Voice Waveform Animation */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <motion.div
                  className="w-2 h-2 rounded-full bg-green-500"
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
                <span className="text-sm text-white/60">AI Interviewer speaking...</span>
              </div>
              <AnimatedWaveform />
            </div>

            {/* Code Editor + Ratings */}
            <div className="flex flex-col gap-4 lg:flex-row lg:items-stretch">
              <div className="flex-1 min-w-0">
                <AnimatedCodeEditor />
              </div>
              <div className="w-full lg:w-auto rounded border border-white/10 bg-white/5 p-3 flex flex-col justify-between gap-2">
                {ratings.map((rating) => (
                  <div key={rating.label} className="flex flex-col gap-0.5">
                    <span className="text-[10px] leading-none text-white/70 tracking-[0.1em] uppercase">
                      {rating.label}
                    </span>
                    <div className="flex items-center gap-1 text-sm leading-none">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <span
                          key={index}
                          className={index < rating.value ? 'text-amber-300' : 'text-white/20'}
                        >
                          ★
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
