'use client'

import { motion } from 'framer-motion'

const founderBenefits = [
  {
    title: 'Signal quality',
    description: 'Understand how candidates think before you hire. Reduce false positives from candidates who can solve puzzles but can\'t reason through real problems.',
  },
  {
    title: 'Reduced false positives',
    description: 'Catch candidates who look good on paper but struggle with communication, decision-making, or real-world problem-solving.',
  },
  {
    title: 'Understanding how candidates think',
    description: 'Get insights into problem-solving approach, communication style, and reasoning patterns that matter for your team.',
  },
]

const hrBenefits = [
  {
    title: 'Interview consistency',
    description: 'Every candidate gets the same high-quality interview experience, regardless of who\'s available to conduct it.',
  },
  {
    title: 'Cheating resistance',
    description: 'Live voice interaction makes it significantly harder to game the system compared to async coding tests.',
  },
  {
    title: 'Scalability without losing depth',
    description: 'Scale your interview process without sacrificing the depth of evaluation that comes from real conversation.',
  },
  {
    title: 'Shareable, richer interview signal',
    description: 'Share comprehensive interview insights with hiring managers, including reasoning, communication, and code quality.',
  },
]

export default function WhyItMatters() {
  return (
    <section
      id="benefits"
      aria-labelledby="why-it-matters-title"
      aria-describedby="why-it-matters-summary"
      className="py-32 px-6 bg-black"
    >
      <div className="mx-auto max-w-6xl">
        <motion.h2
          id="why-it-matters-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-semibold text-white mb-16 text-center"
        >
          Why it matters
        </motion.h2>
        <p id="why-it-matters-summary" className="sr-only">
          Benefits for founders and recruiting teams, including higher signal quality,
          consistent interviews, and improved cheating resistance.
        </p>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* For Startup Founders */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-medium text-white">
              For startup founders
            </h3>
            <ul className="space-y-4 list-none p-0 m-0">
              {founderBenefits.map((benefit, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 + 0.2, type: "spring" }}
                    className="w-1.5 h-1.5 rounded-full bg-white mt-2 flex-shrink-0"
                  />
                  <div>
                    <p className="text-white/90 font-medium mb-1">{benefit.title}</p>
                    <p className="text-white/60 text-sm">
                      {benefit.description}
                    </p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          {/* For Recruiting / HR Teams */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-medium text-white">
              For recruiting & HR teams
            </h3>
            <ul className="space-y-4 list-none p-0 m-0">
              {hrBenefits.map((benefit, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 + 0.2, type: "spring" }}
                    className="w-1.5 h-1.5 rounded-full bg-white mt-2 flex-shrink-0"
                  />
                  <div>
                    <p className="text-white/90 font-medium mb-1">{benefit.title}</p>
                    <p className="text-white/60 text-sm">
                      {benefit.description}
                    </p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
