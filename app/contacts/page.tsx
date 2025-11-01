"use client"

import { useState } from "react"
import { DealershipHeroHeader } from "@/components/dealership-hero-header"
import { Button } from "@/components/ui/button"

export default function ContactsPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" })
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    setSuccess(false)

    // Simulate network request — replace with real API call
    setTimeout(() => {
      setSubmitting(false)
      setSuccess(true)
      setForm({ name: "", email: "", phone: "", message: "" })
    }, 900)
  }

  return (
    <main className="min-h-screen bg-neutral-900 text-white py-16 px-6 sm:px-12 lg:px-24 flex justify-center items-center">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <section className="space-y-8">
            <DealershipHeroHeader />
            <p className="text-slate-300 max-w-xl">
              Reach out and let us show you how to stop losing leads. Book a demo or send an enquiry
              and we’ll be in touch within one business day.
            </p>
          </section>

          <section className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-10 shadow-2xl my-auto justify-center">
            <h2 className="text-2xl font-semibold mb-2">Contact Sales</h2>
            <p className="text-sm text-slate-300 mb-6">Fill in the form and a member of our team will contact you.</p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <label className="flex flex-col">
                  <span className="text-sm text-slate-300 mb-1">Full name</span>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="bg-transparent border border-white/20 rounded-md px-3 py-2 outline-none focus:border-white/40"
                    placeholder="Jane Doe"
                  />
                </label>

                <label className="flex flex-col">
                  <span className="text-sm text-slate-300 mb-1">Phone</span>
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    className="bg-transparent border border-white/20 rounded-md px-3 py-2 outline-none focus:border-white/40"
                    placeholder="+353 87 123 4567"
                  />
                </label>
              </div>

              <label className="flex flex-col">
                <span className="text-sm text-slate-300 mb-1">Email</span>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="bg-transparent border border-white/20 rounded-md px-3 py-2 outline-none focus:border-white/40"
                  placeholder="you@company.com"
                />
              </label>

              <label className="flex flex-col">
                <span className="text-sm text-slate-300 mb-1">Message</span>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  className="bg-transparent border border-white/20 rounded-md px-3 py-2 outline-none focus:border-white/40 resize-none"
                  placeholder="Tell us a bit about your dealership and what you'd like to achieve..."
                />
              </label>

              <div className="flex flex-col sm:flex-row items-center gap-3 mt-2">
                <Button
                  type="submit"
                  size="lg"
                  className="w-full sm:w-auto bg-white text-black rounded-full px-6 py-3 font-medium hover:scale-105 transition"
                  disabled={submitting}
                >
                  {submitting ? "Sending..." : "Send Enquiry"}
                </Button>

                <button
                  type="button"
                  onClick={() => {
                    setForm({ name: "", email: "", phone: "", message: "" })
                    setSuccess(false)
                  }}
                  className="w-full sm:w-auto text-sm text-slate-300 border border-white/20 rounded-full px-5 py-3 hover:bg-white/5 transition"
                >
                  Reset
                </button>
              </div>

              {success && (
                <div className="mt-3 text-sm text-green-300">
                  Thanks — we received your enquiry and will be in touch soon.
                </div>
              )}

              <p className="text-xs text-slate-400 mt-4">
                By submitting you agree to be contacted by the sales team. We respect your privacy.
              </p>
            </form>
          </section>
        </div>
      </div>
    </main>
  )
}