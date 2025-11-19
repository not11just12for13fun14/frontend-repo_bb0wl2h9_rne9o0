import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send } from 'lucide-react'

export default function Contact() {
  const [status, setStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    try {
      // Placeholder handler – connects later if backend is requested
      await new Promise(r => setTimeout(r, 800))
      setStatus('Thanks! Your message was “sent”.')
    } catch (e) {
      setStatus('Something went wrong. Try again?')
    }
  }

  return (
    <section id="contact" className="relative py-24 bg-slate-950">
      <div className="relative mx-auto max-w-4xl px-6">
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Let’s Connect</h2>
          <p className="mt-2 text-slate-300/80">Have an opportunity or just want to chat? I’d love to hear from you.</p>
        </div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-sm text-slate-300 mb-1">Name</label>
              <input required className="w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50" placeholder="Ada Lovelace" />
            </div>
            <div>
              <label className="block text-sm text-slate-300 mb-1">Email</label>
              <input required type="email" className="w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50" placeholder="ada@cs.edu" />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm text-slate-300 mb-1">Message</label>
              <textarea required rows={4} className="w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50" placeholder="Tell me about your project or role..." />
            </div>
          </div>
          <div className="mt-4 flex items-center gap-3">
            <button className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-500 px-5 py-3 text-white font-medium shadow-lg shadow-blue-500/25">
              <Send className="h-4 w-4" /> Send
            </button>
            <span className="text-sm text-slate-300">{status}</span>
          </div>
        </motion.form>
      </div>
    </section>
  )
}
