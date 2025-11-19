import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

const projects = [
  {
    title: 'Realtime Chat',
    description: 'Socket-powered chat app with rooms, typing indicators, and message persistence.',
    tags: ['React', 'Node', 'Socket.IO'],
    link: '#',
    github: '#',
  },
  {
    title: 'AI Notes',
    description: 'Semantic search and summarization for your notes using embeddings and LLMs.',
    tags: ['FastAPI', 'Pinecone', 'OpenAI'],
    link: '#',
    github: '#',
  },
  {
    title: 'Portfolio Engine',
    description: 'A CMS-like generator that turns a JSON file into a beautiful portfolio.',
    tags: ['Vite', 'Tailwind', 'Framer Motion'],
    link: '#',
    github: '#',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(600px_200px_at_10%_-20%,rgba(56,189,248,0.15),transparent),radial-gradient(600px_200px_at_90%_-20%,rgba(167,139,250,0.15),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Featured Projects</h2>
          <p className="mt-2 text-slate-300/80">Things I’ve built recently</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, idx) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] p-5 hover:border-white/20"
            >
              <div className="h-36 rounded-lg bg-gradient-to-tr from-cyan-500/20 via-blue-500/20 to-violet-500/20 mb-4" />
              <h3 className="text-white font-semibold text-lg">{p.title}</h3>
              <p className="mt-1 text-slate-300/80 text-sm">{p.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map(t => (
                  <span key={t} className="text-xs text-cyan-200/80 bg-cyan-500/10 border border-cyan-400/20 px-2 py-1 rounded-full">{t}</span>
                ))}
              </div>
              <div className="mt-4 flex items-center gap-2">
                <a href={p.link} className="inline-flex items-center gap-1 text-sm text-slate-200 hover:text-white">
                  <ExternalLink className="h-4 w-4" /> Live
                </a>
                <a href={p.github} className="inline-flex items-center gap-1 text-sm text-slate-200 hover:text-white">
                  <Github className="h-4 w-4" /> Code
                </a>
              </div>
              <div className="pointer-events-none absolute -inset-1 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-violet-500/10" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
