import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden bg-slate-950">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/20 via-slate-950/60 to-slate-950 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-32 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200 backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            Open to internships & research roles
          </div>
          <h1 className="mt-6 text-4xl sm:text-6xl font-bold tracking-tight text-white">
            Hi, I’m <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">a CS Student</span>
          </h1>
          <p className="mt-4 text-lg text-slate-200/80">
            I build modern web apps, explore AI/ML, and love converting ideas into interactive experiences.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#projects" className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-blue-500 to-indigo-500 px-5 py-3 text-white font-medium shadow-lg shadow-blue-500/25">
              View Projects
            </a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-lg border border-white/10 px-5 py-3 text-slate-200 hover:bg-white/10 transition">
              Get in touch
            </a>
          </div>
        </motion.div>
      </div>

      <AnimatedGrid />
    </section>
  )
}

function AnimatedGrid() {
  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-0">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative h-32 overflow-hidden rounded-2xl border border-white/10 bg-slate-900/50">
          <div className="absolute inset-0 opacity-[0.15]" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '24px 24px'
          }} />
          <motion.div
            initial={{ x: '-10%' }}
            animate={{ x: '10%' }}
            transition={{ repeat: Infinity, repeatType: 'reverse', duration: 6, ease: 'easeInOut' }}
            className="absolute -inset-x-10 -bottom-10 h-24 bg-gradient-to-r from-cyan-500/30 via-blue-500/30 to-violet-500/30 blur-2xl"
          />
        </div>
      </div>
    </div>
  )
}
