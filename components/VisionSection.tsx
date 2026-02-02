'use client'

import { motion } from 'framer-motion'

const visionStatements = [
  'As AI writes more code, interviews must measure judgment, not syntax.',
  'Communication and reasoning matter more than whether someone can memorize algorithms.',
  'APADCode evaluates the skills that actually matter for building real products.',
]

export default function VisionSection() {
  return (
    <section
      id="vision"
      aria-labelledby="vision-title"
      aria-describedby="vision-summary"
      className="py-32 px-6 bg-gradient-to-b from-black to-black/95"
    >
      <div className="mx-auto max-w-4xl text-center">
        <motion.h2
          id="vision-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-semibold text-white mb-8"
        >
          The future of technical hiring
        </motion.h2>
        <p id="vision-summary" className="sr-only">
          The future of hiring focuses on judgment, communication, and real-world
          reasoning rather than memorized algorithms.
        </p>
        <div className="space-y-6 text-lg text-white/70 leading-relaxed">
          {visionStatements.map((statement, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: index === 2 ? 0.6 : 0.7, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={index === 2 ? 'text-white/60 italic' : ''}
            >
              {statement}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  )
}
