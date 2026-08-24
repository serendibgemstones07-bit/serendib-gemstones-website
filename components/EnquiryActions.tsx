'use client'

import { buildEnquiryLink, trackEnquiry } from '@/lib/enquiry'

type Props = {
  pathway: string
  form: Record<string, string>
  disabled?: boolean
  primaryLabel?: string
}

export default function EnquiryActions({ pathway, form, disabled, primaryLabel = 'Send Enquiry' }: Props) {
  const send = (channel: 'email' | 'whatsapp') => {
    trackEnquiry(channel, pathway)
    window.location.href = buildEnquiryLink(channel, pathway, form)
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      <button
        type="submit"
        disabled={disabled}
        onClick={(e) => { e.preventDefault(); send('email') }}
        className="w-full py-4 bg-teal hover:bg-teal-light text-white font-jost text-sm tracking-widest uppercase transition-colors disabled:opacity-60"
      >
        {primaryLabel} · Email
      </button>
      <button
        type="button"
        disabled={disabled}
        onClick={() => send('whatsapp')}
        className="w-full py-4 bg-[#25D366] hover:bg-[#20b858] text-white font-jost text-sm tracking-widest uppercase transition-colors disabled:opacity-60"
      >
        Send via WhatsApp
      </button>
    </div>
  )
}
