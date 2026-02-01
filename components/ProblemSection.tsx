'use client'

import { motion, useAnimationFrame, useMotionValue } from 'framer-motion'
import { useEffect, useRef, useState, type MouseEvent } from 'react'

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

type Bounds = { width: number; height: number }

type MissileConfig = {
  id: number
  left: number
  top: number
  width: number
  height: number
  speed: number
  turnRate: number
  className: string
}

type PointerState = { x: number; y: number; active: boolean }

function normalizeAngle(angle: number) {
  let a = angle
  while (a > Math.PI) a -= Math.PI * 2
  while (a < -Math.PI) a += Math.PI * 2
  return a
}

function MissileRect({
  config,
  bounds,
  pointerRef,
}: {
  config: MissileConfig
  bounds: Bounds
  pointerRef: React.MutableRefObject<PointerState>
}) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotate = useMotionValue(0)
  const state = useRef({
    initialized: false,
    pos: { x: 0, y: 0 },
    angle: 0,
  })

  useEffect(() => {
    if (!bounds.width || !bounds.height) return
    const posX = bounds.width * config.left
    const posY = bounds.height * config.top
    const angle = (Math.PI * 2 * (config.id + 1)) / 5
    state.current = {
      initialized: true,
      pos: { x: posX, y: posY },
      angle,
    }
    x.set(posX)
    y.set(posY)
    rotate.set((angle * 180) / Math.PI)
  }, [bounds.width, bounds.height, config.id, config.left, config.top, x, y, rotate])

  useAnimationFrame((_, delta) => {
    if (!bounds.width || !bounds.height || !state.current.initialized) return
    const dt = Math.min(delta / 1000, 0.05)
    const current = state.current
    const pointer = pointerRef.current
    const speed = config.speed
    const maxTurn = config.turnRate * dt

    const targetX = pointer.active ? pointer.x : current.pos.x + Math.cos(current.angle) * 120
    const targetY = pointer.active ? pointer.y : current.pos.y + Math.sin(current.angle) * 120

    const desiredAngle = Math.atan2(targetY - current.pos.y, targetX - current.pos.x)
    const diff = normalizeAngle(desiredAngle - current.angle)
    const turn = Math.max(-maxTurn, Math.min(maxTurn, diff))
    current.angle = normalizeAngle(current.angle + turn)

    const vx = Math.cos(current.angle) * speed
    const vy = Math.sin(current.angle) * speed
    current.pos.x += vx * dt
    current.pos.y += vy * dt

    const padX = config.width / 2 + 10
    const padY = config.height / 2 + 10
    const margin = 260
    const marginTop = 420
    const minX = -margin + padX
    const maxX = bounds.width + margin - padX
    const minY = -marginTop + padY
    const maxY = bounds.height + margin - padY

    if (current.pos.x < minX) {
      current.pos.x = minX
      current.angle = normalizeAngle(Math.PI - current.angle)
    }
    if (current.pos.x > maxX) {
      current.pos.x = maxX
      current.angle = normalizeAngle(Math.PI - current.angle)
    }
    if (current.pos.y < minY) {
      current.pos.y = minY
      current.angle = normalizeAngle(-current.angle)
    }
    if (current.pos.y > maxY) {
      current.pos.y = maxY
      current.angle = normalizeAngle(-current.angle)
    }

    x.set(current.pos.x)
    y.set(current.pos.y)
    rotate.set((current.angle * 180) / Math.PI + 180)
  })

  return (
    <motion.div
      className={config.className}
      style={{ x, y, rotate }}
    />
  )
}

export default function ProblemSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null)
  const [bounds, setBounds] = useState({ width: 0, height: 0 })
  const pointerRef = useRef<PointerState>({ x: 0, y: 0, active: false })

  useEffect(() => {
    const updateBounds = () => {
      if (!sectionRef.current) return
      const rect = sectionRef.current.getBoundingClientRect()
      setBounds({ width: rect.width, height: rect.height })
    }
    updateBounds()
    window.addEventListener('resize', updateBounds)
    return () => window.removeEventListener('resize', updateBounds)
  }, [])

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    if (!sectionRef.current) return
    const rect = sectionRef.current.getBoundingClientRect()
    pointerRef.current = {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
      active: true,
    }
  }

  const handleMouseLeave = () => {
    pointerRef.current = { ...pointerRef.current, active: false }
  }

  const missileConfigs: MissileConfig[] = [
    {
      id: 0,
      left: 0.1,
      top: 0.18,
      width: 224,
      height: 40,
      speed: 70,
      turnRate: 0.8,
      className:
        'pointer-events-none absolute z-10 h-10 w-56 -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-[linear-gradient(120deg,rgba(56,189,248,0.55),rgba(14,116,144,0.3),transparent)] blur-lg shadow-[0_0_30px_rgba(56,189,248,0.25)]',
    },
    {
      id: 1,
      left: 0.78,
      top: 0.46,
      width: 176,
      height: 48,
      speed: 62,
      turnRate: 0.7,
      className:
        'pointer-events-none absolute z-10 h-12 w-44 -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-[linear-gradient(120deg,rgba(125,211,252,0.5),rgba(56,189,248,0.28),transparent)] blur-lg shadow-[0_0_26px_rgba(125,211,252,0.22)]',
    },
    {
      id: 2,
      left: 0.22,
      top: 0.78,
      width: 256,
      height: 36,
      speed: 58,
      turnRate: 0.75,
      className:
        'pointer-events-none absolute z-10 h-9 w-64 -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-[linear-gradient(120deg,rgba(56,189,248,0.5),rgba(14,116,144,0.26),transparent)] blur-lg shadow-[0_0_28px_rgba(56,189,248,0.22)]',
    },
  ]

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative py-32 px-6 overflow-hidden bg-[#04070d]"
    >
      <div className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.55),rgba(2,6,23,0.9))]" />
      {missileConfigs.map((config) => (
        <MissileRect
          key={config.id}
          config={config}
          bounds={bounds}
          pointerRef={pointerRef}
        />
      ))}
      <div className="relative z-10 mx-auto max-w-4xl">
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
