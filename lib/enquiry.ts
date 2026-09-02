export const CONTACT_EMAIL = 'gems@serendibgemstones.com'
export const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '94702494944'

const FIELD_LABELS: Record<string, string> = {
  name: 'Name',
  email: 'Email',
  phone: 'Phone / WhatsApp',
  country: 'Country',
  gemType: 'Gem Type',
  caratRange: 'Carat Range',
  treatment: 'Treatment Preference',
  budget: 'Budget',
  use: 'Intended Use',
  details: 'Details',
  experience: 'Experience Level',
  preferences: 'Stone Preferences',
  business: 'Business Name',
  supplyType: 'Supply Type',
  stoneTypes: 'Stone Types',
  requirements: 'Requirements',
  lab: 'Certificate Lab',
  stoneType: 'Stone Type',
  questions: 'Questions',
  jewelryType: 'Jewellery Type',
  metal: 'Metal Preference',
  centreStone: 'Centre Stone',
  brief: 'Design Brief',
  interest: 'Stone Interest',
}

function formatBody(pathway: string, form: Record<string, string>): string {
  const lines: string[] = [`Enquiry type: ${pathway}`, '']
  for (const [key, value] of Object.entries(form)) {
    if (!value?.trim()) continue
    lines.push(`${FIELD_LABELS[key] || key}: ${value}`)
  }
  lines.push('', '— Sent from serendibgemstones.com')
  return lines.join('\n')
}

export type EnquiryChannel = 'email' | 'whatsapp'

export function buildEnquiryLink(
  channel: EnquiryChannel,
  pathway: string,
  form: Record<string, string>,
): string {
  const subject = `Website Enquiry — ${pathway}`
  const body = formatBody(pathway, form)
  if (channel === 'whatsapp') {
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`${subject}\n\n${body}`)}`
  }
  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}

export function trackEnquiry(channel: EnquiryChannel, pathway: string) {
  if (typeof window === 'undefined') return
  const w = window as unknown as { gtag?: (...args: unknown[]) => void }
  w.gtag?.('event', 'generate_lead', {
    method: channel,
    enquiry_type: pathway,
  })
}
