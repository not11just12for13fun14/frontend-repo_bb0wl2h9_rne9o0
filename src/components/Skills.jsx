import { motion } from 'framer-motion'
import { Cpu, BrainCircuit, Code2, Cloud, Database, Shield } from 'lucide-react'

const skills = [
  { icon: Cpu, label: 'Systems', items: ['OS', 'Networks', 'Compilers'] },
  { icon: BrainCircuit, label: 'AI/ML', items: ['PyTorch', 'Sklearn', 'NLP'] },
  { icon: Code2, label: 'Frontend', items: ['React', 'Tailwind', 'Vite'] },
  { icon: Cloud, label: 'Cloud', items: ['Docker', 'AWS', 'Vercel'] },
  { icon: Database, label: 'Data', items: ['MongoDB', 'Postgres', 'Redis'] },
  { icon: Shield, label: 'Security', items: ['Auth', 'OWASP', 'JWT'] },
]

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 bg-slate-950">
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Core Skills</h2>
          <p className="mt-2 text-slate-300/80">What I work with</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-gradient-to-tr from-cyan-500/20 via-blue-500/20 to-violet-500/20 p-3 border border-white/10">
                  <s.icon className="h-6 w-6 text-cyan-300" />
                </div>
                <h3 className="text-white font-semibold">{s.label}</h3>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {s.items.map(it => (
                  <span key={it} className="text-xs text-slate-200 bg-white/5 border border-white/10 px-2 py-1 rounded-full">{it}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
