'use client'

import { motion } from 'framer-motion'

export default function ValuePillars() {
  const pillars = [
    {
      title: 'Live AI interviewer',
      description: 'Voice-based interviewer that explains problems, listens, and responds in real time. Candidates speak their thoughts while coding, creating a natural interview flow.',
    },
    {
      title: 'Adaptive follow-up questions',
      description: "Questions evolve dynamically based on the candidate's thinking and approach. The AI probes deeper into their reasoning, tests edge cases they might miss, and explores alternative solutions.",
    },
    {
      title: 'Holistic evaluation beyond code',
      description: 'Evaluates reasoning, communication, decision-making, and behavior in addition to code. You get a complete picture of how someone thinks, not just whether they can solve a puzzle.',
    },
  ]

  return (
    <section
      id="how-it-works"
      aria-labelledby="value-pillars-title"
      aria-describedby="value-pillars-summary"
      className="py-32 px-6 bg-gradient-to-b from-black/95 to-black"
    >
      <div className="mx-auto max-w-6xl">
        <motion.h2
          id="value-pillars-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-semibold text-white mb-4 text-center"
        >
          How APADCode works
        </motion.h2>
        <p id="value-pillars-summary" className="sr-only">
          Live AI interviewer, adaptive follow-up questions, and holistic evaluation
          beyond code tests.
        </p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center text-white/60 mb-16 max-w-2xl mx-auto"
        >
          Three core capabilities that make this fundamentally different from coding tests.
        </motion.p>
        
        <ol className="grid md:grid-cols-3 gap-8 list-none p-0 m-0">
          {pillars.map((pillar, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="p-8 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition-colors"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 + 0.2, type: "spring" }}
                className="text-2xl font-semibold text-white mb-4"
              >
                {String(index + 1).padStart(2, '0')}
              </motion.div>
              <h3 className="text-xl font-medium text-white mb-3">
                {pillar.title}
              </h3>
              <p className="text-white/60 leading-relaxed">
                {pillar.description}
              </p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  )
}
