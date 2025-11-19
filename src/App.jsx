import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <CTA />
      <Contact />
      <Footer />
    </div>
  )
}

function About() {
  return (
    <section id="about" className="relative py-24 bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(600px_200px_at_0%_10%,rgba(56,189,248,0.12),transparent),radial-gradient(600px_200px_at_100%_10%,rgba(167,139,250,0.12),transparent)]" />
      <div className="relative mx-auto max-w-5xl px-6">
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">About Me</h2>
            <p className="mt-3 text-slate-300/85 leading-relaxed">
              I’m a computer science student focused on building polished, performant products. My interests span
              full‑stack web, AI/ML, systems, and developer tooling. I enjoy turning complex problems into simple,
              delightful experiences with clean design and smooth interactions.
            </p>
            <p className="mt-3 text-slate-300/85 leading-relaxed">
              Recently, I’ve explored generative AI apps, real‑time collaboration, and scalable APIs. Outside of coding,
              I mentor peers, contribute to open source, and experiment with 3D/creative coding.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-white font-semibold">Highlights</h3>
            <ul className="mt-3 space-y-2 text-slate-200/90 text-sm">
              <li>• Hackathon finalist (x3)</li>
              <li>• Published research poster on ML interpretability</li>
              <li>• Teaching assistant for Data Structures</li>
              <li>• Open‑source contributor</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

function CTA() {
  return (
    <section className="relative py-20">
      <div className="absolute inset-0 bg-[radial-gradient(600px_200px_at_50%_-10%,rgba(34,197,94,0.12),transparent)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] p-8 text-center">
          <h3 className="text-2xl sm:text-3xl font-semibold text-white">Looking for Spring/Summer internships</h3>
          <p className="mt-2 text-slate-300/85">I love collaborating with teams that care about craft and impact.</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a href="#projects" className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-blue-500 to-indigo-500 px-5 py-3 text-white font-medium shadow-lg shadow-blue-500/25">
              See my work
            </a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-lg border border-white/10 px-5 py-3 text-slate-200 hover:bg-white/10 transition">
              Contact me
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-slate-950/80">
      <div className="mx-auto max-w-7xl px-6 py-10 text-sm text-slate-400">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} CS Portfolio. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#home" className="hover:text-white">Top</a>
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default App
