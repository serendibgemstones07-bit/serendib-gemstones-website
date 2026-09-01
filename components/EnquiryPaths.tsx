'use client'

import { useState } from 'react'
import EnquiryActions from './EnquiryActions'

type Pathway =
  | 'select'
  | 'find-gemstone'
  | 'investment'
  | 'jeweller'
  | 'certificate'
  | 'custom-jewellery'

const pathways: { id: Pathway; title: string; subtitle: string; icon: string }[] = [
  { id: 'find-gemstone', title: 'Find Me a Gemstone', subtitle: 'Tell us your requirements and we\'ll source suitable options', icon: '◇' },
  { id: 'investment', title: 'Investment Consultation', subtitle: 'Guidance on gemstones as an alternative asset class', icon: '▲' },
  { id: 'jeweller', title: 'Jeweller / Trade Supply', subtitle: 'Bulk supply, calibrated stones, and trade partnerships', icon: '⬡' },
  { id: 'certificate', title: 'Certificate Review', subtitle: 'Help understanding a laboratory report you already have', icon: '☰' },
  { id: 'custom-jewellery', title: 'Custom Jewellery', subtitle: 'Commission a bespoke piece around a certified stone', icon: '✦' },
]

const inputClass =
  'w-full bg-transparent border border-white/15 focus:border-teal/60 outline-none px-4 py-3.5 font-jost text-sm text-offwhite placeholder:text-offwhite/30 transition-colors'

const selectClass =
  'w-full bg-transparent border border-white/15 focus:border-teal/60 outline-none px-4 py-3.5 font-jost text-sm text-offwhite transition-colors appearance-none'

const labelClass = 'block font-jost text-xs tracking-widest uppercase text-offwhite/40 mb-2'

function BaseFields({ form, onChange }: { form: Record<string, string>; onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
      <div>
        <label className={labelClass}>Name *</label>
        <input type="text" name="name" value={form.name || ''} onChange={onChange} required placeholder="Your full name" className={inputClass} />
      </div>
      <div>
        <label className={labelClass}>Email *</label>
        <input type="email" name="email" value={form.email || ''} onChange={onChange} required placeholder="your@email.com" className={inputClass} />
      </div>
      <div>
        <label className={labelClass}>Phone / WhatsApp</label>
        <input type="tel" name="phone" value={form.phone || ''} onChange={onChange} placeholder="+94 77 000 0000" className={inputClass} />
      </div>
      <div>
        <label className={labelClass}>Country</label>
        <input type="text" name="country" value={form.country || ''} onChange={onChange} placeholder="Where are you based?" className={inputClass} />
      </div>
    </div>
  )
}

function useFormState() {
  const [form, setForm] = useState<Record<string, string>>({})
  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  return { form, onChange }
}

function FindGemstoneForm() {
  const { form, onChange } = useFormState()
  return (
    <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
      <BaseFields form={form} onChange={onChange} />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className={labelClass}>Gem Type</label>
          <select name="gemType" value={form.gemType || ''} onChange={onChange} className={selectClass}>
            <option value="">Select a gemstone</option>
            <option>Blue Sapphire</option>
            <option>Padparadscha Sapphire</option>
            <option>Pink Sapphire</option>
            <option>Yellow Sapphire</option>
            <option>Star Sapphire</option>
            <option>Ruby</option>
            <option>Alexandrite</option>
            <option>Cat&apos;s Eye</option>
            <option>Spinel</option>
            <option>Other / Not Sure</option>
          </select>
        </div>
        <div>
          <label className={labelClass}>Carat Range</label>
          <select name="caratRange" value={form.caratRange || ''} onChange={onChange} className={selectClass}>
            <option value="">Preferred size</option>
            <option>Under 1 carat</option>
            <option>1 – 2 carats</option>
            <option>2 – 5 carats</option>
            <option>5 – 10 carats</option>
            <option>10+ carats</option>
            <option>Not sure</option>
          </select>
        </div>
        <div>
          <label className={labelClass}>Treatment Preference</label>
          <select name="treatment" value={form.treatment || ''} onChange={onChange} className={selectClass}>
            <option value="">Any preference?</option>
            <option>Unheated only</option>
            <option>Heated is fine</option>
            <option>No preference</option>
          </select>
        </div>
        <div>
          <label className={labelClass}>Budget Range (USD)</label>
          <select name="budget" value={form.budget || ''} onChange={onChange} className={selectClass}>
            <option value="">Approximate budget</option>
            <option>Under $1,000</option>
            <option>$1,000 – $5,000</option>
            <option>$5,000 – $15,000</option>
            <option>$15,000 – $50,000</option>
            <option>$50,000+</option>
            <option>Prefer not to say</option>
          </select>
        </div>
      </div>
      <div>
        <label className={labelClass}>Intended Use</label>
        <select name="use" value={form.use || ''} onChange={onChange} className={selectClass}>
          <option value="">What is the stone for?</option>
          <option>Engagement ring</option>
          <option>Jewellery piece</option>
          <option>Investment / collection</option>
          <option>Gift</option>
          <option>Resale / trade</option>
          <option>Other</option>
        </select>
      </div>
      <div>
        <label className={labelClass}>Additional Details</label>
        <textarea name="details" value={form.details || ''} onChange={onChange} rows={4} placeholder="Preferred colour, shape, certification, or any other requirements..." className={inputClass + ' resize-none'} />
      </div>
      <EnquiryActions pathway="Find Me a Gemstone" form={form} primaryLabel="Submit Request" />
    </form>
  )
}

function InvestmentForm() {
  const { form, onChange } = useFormState()
  return (
    <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
      <BaseFields form={form} onChange={onChange} />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className={labelClass}>Investment Budget (USD)</label>
          <select name="budget" value={form.budget || ''} onChange={onChange} className={selectClass}>
            <option value="">Approximate budget</option>
            <option>$5,000 – $15,000</option>
            <option>$15,000 – $50,000</option>
            <option>$50,000 – $100,000</option>
            <option>$100,000+</option>
            <option>Prefer not to say</option>
          </select>
        </div>
        <div>
          <label className={labelClass}>Experience Level</label>
          <select name="experience" value={form.experience || ''} onChange={onChange} className={selectClass}>
            <option value="">Your gemstone experience</option>
            <option>First-time buyer</option>
            <option>Some experience</option>
            <option>Experienced collector</option>
            <option>Trade professional</option>
          </select>
        </div>
      </div>
      <div>
        <label className={labelClass}>Stone Preferences</label>
        <textarea name="preferences" value={form.preferences || ''} onChange={onChange} rows={4} placeholder="Types of stones you're interested in, preferred origins, minimum carat weight, certification requirements..." className={inputClass + ' resize-none'} />
      </div>
      <EnquiryActions pathway="Investment Consultation" form={form} primaryLabel="Request Consultation" />
    </form>
  )
}

function JewellerForm() {
  const { form, onChange } = useFormState()
  return (
    <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
      <BaseFields form={form} onChange={onChange} />
      <div>
        <label className={labelClass}>Business Name</label>
        <input type="text" name="business" value={form.business || ''} onChange={onChange} placeholder="Your company or studio name" className={inputClass} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className={labelClass}>Supply Type</label>
          <select name="supplyType" value={form.supplyType || ''} onChange={onChange} className={selectClass}>
            <option value="">What do you need?</option>
            <option>Calibrated parcels</option>
            <option>Loose certified stones</option>
            <option>Matched pairs / sets</option>
            <option>Custom sourcing</option>
            <option>Regular supply arrangement</option>
          </select>
        </div>
        <div>
          <label className={labelClass}>Stone Types</label>
          <input type="text" name="stoneTypes" value={form.stoneTypes || ''} onChange={onChange} placeholder="e.g. Blue sapphire, ruby, mixed" className={inputClass} />
        </div>
      </div>
      <div>
        <label className={labelClass}>Requirements</label>
        <textarea name="requirements" value={form.requirements || ''} onChange={onChange} rows={4} placeholder="Quantities, sizes, quality grade, frequency of orders, any specific requirements..." className={inputClass + ' resize-none'} />
      </div>
      <EnquiryActions pathway="Jeweller / Trade Supply" form={form} primaryLabel="Submit Trade Enquiry" />
    </form>
  )
}

function CertificateForm() {
  const { form, onChange } = useFormState()
  return (
    <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
      <BaseFields form={form} onChange={onChange} />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className={labelClass}>Certificate Lab</label>
          <select name="lab" value={form.lab || ''} onChange={onChange} className={selectClass}>
            <option value="">Which laboratory?</option>
            <option>GIA</option>
            <option>GRS</option>
            <option>Gubelin</option>
            <option>SSEF</option>
            <option>AGL</option>
            <option>Other / Unknown</option>
          </select>
        </div>
        <div>
          <label className={labelClass}>Stone Type</label>
          <input type="text" name="stoneType" value={form.stoneType || ''} onChange={onChange} placeholder="e.g. Blue sapphire" className={inputClass} />
        </div>
      </div>
      <div>
        <label className={labelClass}>What would you like to know?</label>
        <textarea name="questions" value={form.questions || ''} onChange={onChange} rows={4} placeholder="Describe what you'd like help understanding on the certificate — treatment comments, origin determination, colour grade, anything you're unsure about..." className={inputClass + ' resize-none'} />
      </div>
      <p className="font-jost text-xs text-offwhite/30 leading-relaxed">
        This is a free educational service. We help you understand what a laboratory report says — we do not independently verify or authenticate certificates.
      </p>
      <EnquiryActions pathway="Certificate Review" form={form} primaryLabel="Submit for Review" />
    </form>
  )
}

function CustomJewelleryForm() {
  const { form, onChange } = useFormState()
  return (
    <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
      <BaseFields form={form} onChange={onChange} />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className={labelClass}>Jewellery Type</label>
          <select name="jewelryType" value={form.jewelryType || ''} onChange={onChange} className={selectClass}>
            <option value="">What piece?</option>
            <option>Engagement ring</option>
            <option>Ring (other)</option>
            <option>Pendant / Necklace</option>
            <option>Earrings</option>
            <option>Bracelet</option>
            <option>Other</option>
          </select>
        </div>
        <div>
          <label className={labelClass}>Metal Preference</label>
          <select name="metal" value={form.metal || ''} onChange={onChange} className={selectClass}>
            <option value="">Preferred metal</option>
            <option>18K White Gold</option>
            <option>18K Yellow Gold</option>
            <option>18K Rose Gold</option>
            <option>Platinum</option>
            <option>Not sure</option>
          </select>
        </div>
        <div>
          <label className={labelClass}>Centre Stone</label>
          <input type="text" name="centreStone" value={form.centreStone || ''} onChange={onChange} placeholder="e.g. Blue sapphire, 2-3ct, unheated" className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>Budget (USD)</label>
          <select name="budget" value={form.budget || ''} onChange={onChange} className={selectClass}>
            <option value="">Total budget</option>
            <option>Under $3,000</option>
            <option>$3,000 – $10,000</option>
            <option>$10,000 – $25,000</option>
            <option>$25,000+</option>
          </select>
        </div>
      </div>
      <div>
        <label className={labelClass}>Design Brief</label>
        <textarea name="brief" value={form.brief || ''} onChange={onChange} rows={4} placeholder="Describe your vision — style, occasion, any reference images or inspiration you have in mind..." className={inputClass + ' resize-none'} />
      </div>
      <EnquiryActions pathway="Custom Jewellery" form={form} primaryLabel="Start Consultation" />
    </form>
  )
}

const forms: Record<Pathway, React.FC | null> = {
  'select': null,
  'find-gemstone': FindGemstoneForm,
  'investment': InvestmentForm,
  'jeweller': JewellerForm,
  'certificate': CertificateForm,
  'custom-jewellery': CustomJewelleryForm,
}

export default function EnquiryPaths() {
  const [active, setActive] = useState<Pathway>('select')
  const ActiveForm = forms[active]

  return (
    <div>
      {active === 'select' ? (
        <div className="space-y-3">
          <p className="font-cormorant text-2xl text-offwhite font-semibold mb-6">How can we help?</p>
          {pathways.map((p) => (
            <button
              key={p.id}
              onClick={() => setActive(p.id)}
              className="w-full flex items-start gap-4 p-5 border border-white/8 hover:border-teal/30 bg-dark-card hover:bg-dark transition-all text-left group"
            >
              <span className="font-cormorant text-2xl text-teal/50 group-hover:text-teal transition-colors mt-0.5 shrink-0 w-8 text-center">{p.icon}</span>
              <div>
                <p className="font-cormorant text-lg text-offwhite font-semibold group-hover:text-teal-light transition-colors">{p.title}</p>
                <p className="font-jost text-xs text-offwhite/40 mt-0.5">{p.subtitle}</p>
              </div>
            </button>
          ))}
        </div>
      ) : (
        <div>
          <button
            onClick={() => setActive('select')}
            className="flex items-center gap-2 font-jost text-xs text-teal/60 hover:text-teal tracking-wider uppercase mb-6 transition-colors"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M9 2L4 7l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            Back to options
          </button>
          <p className="font-cormorant text-2xl text-offwhite font-semibold mb-6">
            {pathways.find(p => p.id === active)?.title}
          </p>
          {ActiveForm && <ActiveForm />}
        </div>
      )}
    </div>
  )
}
