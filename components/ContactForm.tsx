'use client'

import { useState } from 'react'
import EnquiryActions from './EnquiryActions'

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', interest: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  const inputClass =
    'w-full bg-transparent border border-white/15 focus:border-teal/60 outline-none px-4 py-3.5 font-jost text-sm text-offwhite placeholder:text-offwhite/30 transition-colors'

  return (
    <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
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

      <EnquiryActions pathway="General Enquiry" form={form} />
    </form>
  )
}
