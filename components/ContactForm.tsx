'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle')
  const [form, setForm] = useState({ name: '', email: '', phone: '', interest: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    setTimeout(() => setStatus('sent'), 1200)
  }

  if (status === 'sent') {
    return (
      <div className="text-center py-16">
        <div className="inline-block w-14 h-14 border-2 border-teal rounded-full flex items-center justify-center mb-6 mx-auto">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M5 12l5 5 9-9" stroke="#c9a84c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3 className="font-cormorant text-2xl text-offwhite mb-2">Thank you for your enquiry</h3>
        <p className="font-jost text-sm text-offwhite/55">We will be in touch with you shortly.</p>
      </div>
    )
  }

  const inputClass =
    'w-full bg-transparent border border-white/15 focus:border-teal/60 outline-none px-4 py-3.5 font-jost text-sm text-offwhite placeholder:text-offwhite/30 transition-colors'

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block font-jost text-xs tracking-widest uppercase text-offwhite/40 mb-2">
            Name *
          </label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            placeholder="Your full name"
            className={inputClass}
          />
        </div>
        <div>
          <label className="block font-jost text-xs tracking-widest uppercase text-offwhite/40 mb-2">
            Email *
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            placeholder="your@email.com"
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label className="block font-jost text-xs tracking-widest uppercase text-offwhite/40 mb-2">
          Phone
        </label>
        <input
          type="tel"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="+1 (555) 000-0000"
          className={inputClass}
        />
      </div>

      <div>
        <label className="block font-jost text-xs tracking-widest uppercase text-offwhite/40 mb-2">
          Stone Interest
        </label>
        <textarea
          name="interest"
          value={form.interest}
          onChange={handleChange}
          rows={5}
          placeholder="Tell us about the gemstone you're looking for — species, size, colour, certification preference..."
          className={inputClass + ' resize-none'}
        />
      </div>

      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full py-4 bg-teal hover:bg-teal-light active:bg-teal-dark text-white font-jost text-sm tracking-widest uppercase transition-colors duration-300 disabled:opacity-60"
      >
        {status === 'sending' ? 'Sending…' : 'Send Enquiry'}
      </button>
    </form>
  )
}
