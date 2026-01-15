'use client'

import { motion } from 'framer-motion'

export default function ClosingSection() {
  return (
    <section id="demo" className="py-32 px-6 bg-black">
      <div className="mx-auto max-w-3xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-semibold text-white mb-6"
        >
          See how it works
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-xl text-white/60 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          Book a demo to see APADCode in action and learn how it can transform your technical hiring process.
        </motion.p>
        <motion.a
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="mailto:demo@apadcode.com?subject=Demo Request"
          className="inline-block rounded-lg bg-white px-10 py-5 text-lg font-medium text-black transition-all hover:bg-white/90"
        >
          Book a Demo
        </motion.a>
      </div>
    </section>
  )
}
