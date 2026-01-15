'use client'

import { motion } from 'framer-motion'

const problems = [
  {
    title: 'Static questions',
    description: 'Same problems for everyone. No adaptation to how candidates think or approach solutions.',
  },
  {
    title: 'Missing signal',
    description: 'Code passes or fails, but you learn nothing about reasoning, communication, or decision-making.',
  },
  {
    title: 'Easy to game',
    description: 'Async tests can be shared, solved with help, or completed by someone else entirely.',
  },
]

export default function ProblemSection() {
  return (
    <section className="py-32 px-6 bg-black">
      <div className="mx-auto max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-semibold text-white mb-12 text-center"
        >
          The problem with traditional platforms
        </motion.h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="p-6 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition-colors"
            >
              <h3 className="text-xl font-medium text-white mb-3">
                {problem.title}
              </h3>
              <p className="text-white/60 leading-relaxed">
                {problem.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
