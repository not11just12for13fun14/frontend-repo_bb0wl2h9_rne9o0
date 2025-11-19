import { useState, useEffect } from 'react'
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navItem = (href, label) => (
    <a
      key={href}
      href={href}
      onClick={() => setOpen(false)}
      className="text-slate-200 hover:text-white/90 transition-colors px-3 py-2 rounded-md text-sm font-medium"
    >
      {label}
    </a>
  )

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all ${scrolled ? 'backdrop-blur-xl bg-slate-900/60 border-b border-white/10' : 'bg-transparent'}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-blue-500 via-cyan-400 to-violet-500 shadow-lg" />
            <span className="text-white font-semibold tracking-tight">CS Portfolio</span>
          </a>

          <nav className="hidden md:flex items-center gap-2">
            {navItem('#about', 'About')}
            {navItem('#projects', 'Projects')}
            {navItem('#skills', 'Skills')}
            {navItem('#contact', 'Contact')}
          </nav>

          <div className="hidden md:flex items-center gap-2">
            <a href="https://github.com/" target="_blank" className="p-2 rounded-md hover:bg-white/5 text-slate-200">
              <Github className="h-5 w-5" />
            </a>
            <a href="https://www.linkedin.com/" target="_blank" className="p-2 rounded-md hover:bg-white/5 text-slate-200">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="#contact" className="ml-2 inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-sm font-medium shadow-lg shadow-blue-500/25">
              <Mail className="h-4 w-4" /> Contact
            </a>
          </div>

          <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-md text-white hover:bg-white/10">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-slate-900/80 backdrop-blur-xl">
          <div className="px-4 py-3 flex flex-col">
            {navItem('#about', 'About')}
            {navItem('#projects', 'Projects')}
            {navItem('#skills', 'Skills')}
            {navItem('#contact', 'Contact')}
            <div className="flex items-center gap-3 pt-2">
              <a href="https://github.com/" target="_blank" className="p-2 rounded-md hover:bg-white/5 text-slate-200">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/" target="_blank" className="p-2 rounded-md hover:bg-white/5 text-slate-200">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#contact" className="ml-auto inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-sm font-medium shadow-lg shadow-blue-500/25">
                <Mail className="h-4 w-4" /> Contact
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
