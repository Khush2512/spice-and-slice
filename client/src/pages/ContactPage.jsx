import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  MessageSquare,
  Navigation,
} from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: 'General Inquiry', // 'General Inquiry' | 'Catering Orders' | 'Dietary Advice' | 'Feedback'
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 500);
  };

  return (
    <div className="min-h-screen bg-transparent text-[#F5F5F5] flex flex-col font-sans selection:bg-[#EA580C] selection:text-white">
      {/* Sticky Navigation */}
      <Navbar />

      <main className="flex-1 pb-16">
        {/* Header Hero Banner */}
        <section className="bg-[#161616]/90 backdrop-blur-sm py-8 sm:py-10 px-4 sm:px-6 lg:px-8 border-b border-stone-800">
          <div className="max-w-7xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-400 text-xs font-medium">
              <MapPin className="w-3.5 h-3.5 text-[#EA580C]" />
              <span>Takeaway Collection &bull; Loughborough</span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-bold text-white font-['Outfit'] tracking-tight">
              Contact &amp; Location
            </h1>

            <p className="text-xs sm:text-sm text-[#9CA3AF] max-w-2xl leading-relaxed font-normal">
              We look forward to serving you authentic Indian street food and stone-baked artisan pizzas at <strong>60 Wordsworth Rd, Loughborough, LE11 4LQ</strong>. Call us directly on <strong>07553 343676</strong> for takeaway collection orders, catering inquiries, or dietary advice.
            </p>
          </div>
        </section>

        {/* Contact Details & Inquiry Form Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Column: Contact Cards & Opening Hours */}
            <div className="lg:col-span-5 space-y-4">
              {/* Address Highlight Card */}
              <div className="p-5 rounded-xl bg-[#161616]/95 border border-stone-800 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-[#EA580C]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-zinc-400 block">
                      Takeaway Location
                    </span>
                    <h3 className="text-lg font-bold text-white font-['Outfit']">
                      60 Wordsworth Rd
                    </h3>
                  </div>
                </div>

                <div className="text-xs text-[#9CA3AF] leading-relaxed">
                  <p className="font-semibold text-white">Loughborough, Leicestershire</p>
                  <p>LE11 4LQ, United Kingdom</p>
                </div>

                <div className="pt-1">
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=60+Wordsworth+Rd,+Loughborough+LE11+4LQ"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 py-2 px-3.5 rounded-lg bg-[#EA580C] hover:bg-[#C2410C] text-xs font-semibold text-white transition-colors"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Get Directions on Google Maps</span>
                  </a>
                </div>
              </div>

              {/* Direct Phone & WhatsApp Card */}
              <div className="p-5 rounded-xl bg-[#161616]/95 border border-stone-800 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-[#EA580C]">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-zinc-400 block">
                      Direct Telephone &bull; Orders
                    </span>
                    <a
                      href="tel:+447553343676"
                      className="text-lg font-bold text-white hover:text-orange-400 font-mono transition-colors"
                    >
                      07553 343676
                    </a>
                  </div>
                </div>

                <p className="text-xs text-[#9CA3AF] leading-relaxed">
                  Call our kitchen directly to place takeaway pre-orders, check prep time, or ask about specific allergy requirements.
                </p>

                <div className="pt-1 flex items-center gap-2">
                  <a
                    href="tel:+447553343676"
                    className="flex-1 py-2 px-3 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-xs font-medium text-center text-zinc-200 hover:text-white transition-colors"
                  >
                    Call Now
                  </a>
                  <a
                    href="https://wa.me/447553343676?text=Hello%20Spice%20%26%20Slice!%20I%20have%20an%20inquiry%20regarding%20your%20menu."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2 px-3 rounded-lg bg-emerald-700 hover:bg-emerald-600 text-xs font-medium text-center text-white transition-colors flex items-center justify-center gap-1.5"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>

              {/* Opening Hours Schedule */}
              <div className="p-5 rounded-xl bg-[#161616]/95 border border-stone-800 space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-zinc-800/80">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-[#EA580C]">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-white font-['Outfit']">
                        Kitchen Opening Hours
                      </h3>
                      <span className="text-xs text-zinc-400 font-normal">
                        Hot takeaway collection
                      </span>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[11px] font-semibold bg-emerald-950/80 text-emerald-400 border border-emerald-800/60">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    <span>Open 6 Days</span>
                  </span>
                </div>

                <div className="space-y-1.5 text-xs text-zinc-300 pt-1">
                  <div className="flex justify-between items-center py-1 border-b border-zinc-800/60">
                    <span className="text-zinc-400 font-medium">Monday</span>
                    <span className="font-semibold text-white">12:00 PM – 9:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-1 border-b border-zinc-800/60 bg-zinc-900/40 px-2 -mx-2 rounded">
                    <span className="text-zinc-400 font-medium">Tuesday</span>
                    <span className="font-bold text-rose-400 uppercase tracking-wider text-[11px]">Closed</span>
                  </div>
                  <div className="flex justify-between items-center py-1 border-b border-zinc-800/60">
                    <span className="text-zinc-400 font-medium">Wednesday</span>
                    <span className="font-semibold text-white">12:00 PM – 9:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-1 border-b border-zinc-800/60">
                    <span className="text-zinc-400 font-medium">Thursday</span>
                    <span className="font-semibold text-white">12:00 PM – 9:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-1 border-b border-zinc-800/60">
                    <span className="text-zinc-400 font-medium">Friday</span>
                    <span className="font-semibold text-white">12:00 PM – 9:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-1 border-b border-zinc-800/60">
                    <span className="text-zinc-400 font-medium">Saturday</span>
                    <span className="font-semibold text-white">12:00 PM – 9:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-1">
                    <span className="text-zinc-400 font-medium">Sunday</span>
                    <span className="font-semibold text-white">12:00 PM – 9:00 PM</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-zinc-800/80 text-[11px] text-[#9CA3AF]">
                  Last kitchen orders accepted 15 minutes before closing.
                </div>
              </div>
            </div>

            {/* Right Column: Clean Contact & Catering Inquiry Form */}
            <div className="lg:col-span-7">
              <div className="rounded-xl bg-[#161616]/95 border border-stone-800 p-6 sm:p-7 relative">
                <div className="flex items-center justify-between pb-3.5 border-b border-zinc-800">
                  <div>
                    <h2 className="text-xl font-bold text-white font-['Outfit']">
                      Send Us a Message
                    </h2>
                    <p className="text-xs text-[#9CA3AF] mt-0.5">
                      Have a question regarding party platters, allergen ingredients, or menu recommendations?
                    </p>
                  </div>
                </div>

                {submitted ? (
                  <div className="py-12 text-center space-y-3">
                    <div className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center mx-auto text-emerald-400">
                      <CheckCircle2 className="w-7 h-7" />
                    </div>
                    <h3 className="text-lg font-bold text-white font-['Outfit']">
                      Thank You, {formData.name}!
                    </h3>
                    <p className="text-xs text-[#9CA3AF] max-w-sm mx-auto leading-relaxed">
                      We have received your message regarding <strong>{formData.inquiryType}</strong>. Our team will get back to you promptly!
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-3 px-4 py-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-xs font-medium text-white border border-zinc-800 transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="mt-5 space-y-3.5">
                    {/* Inquiry Type Pill selector */}
                    <div>
                      <label className="text-[11px] font-semibold text-zinc-400 uppercase tracking-wider block mb-1.5">
                        Inquiry Purpose
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        {['General Inquiry', 'Catering Orders', 'Dietary Advice', 'Feedback'].map((type) => (
                          <button
                            type="button"
                            key={type}
                            onClick={() => setFormData({ ...formData, inquiryType: type })}
                            className={`py-1.5 px-2 rounded-lg text-xs font-medium text-center border transition-colors ${
                              formData.inquiryType === type
                                ? 'bg-[#EA580C] text-white border-[#EA580C] font-semibold'
                                : 'bg-zinc-900 text-zinc-400 border-zinc-800 hover:text-white'
                            }`}
                          >
                            {type}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Name & Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div>
                        <label className="text-xs font-medium text-zinc-400 block mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Priya Sharma"
                          className="w-full px-3.5 py-2 bg-zinc-950 border border-zinc-800 rounded-lg text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-700"
                        />
                      </div>

                      <div>
                        <label className="text-xs font-medium text-zinc-400 block mb-1">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="e.g. 07553 343676"
                          className="w-full px-3.5 py-2 bg-zinc-950 border border-zinc-800 rounded-lg text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-700"
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <label className="text-xs font-medium text-zinc-400 block mb-1">
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. priya@example.com"
                        className="w-full px-3.5 py-2 bg-zinc-950 border border-zinc-800 rounded-lg text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-700"
                      />
                    </div>

                    {/* Message Area */}
                    <div>
                      <label className="text-xs font-medium text-zinc-400 block mb-1">
                        Message / Dietary Question / Event Details
                      </label>
                      <textarea
                        rows={4}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="How can we help you? Feel free to ask about party platters, allergen ingredients, or menu recommendations..."
                        className="w-full p-3 bg-zinc-950 border border-zinc-800 rounded-lg text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-700"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full py-2.5 px-5 rounded-lg bg-[#EA580C] hover:bg-[#C2410C] text-white font-semibold text-xs transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
                    >
                      {submitting ? (
                        <span>Sending message...</span>
                      ) : (
                        <>
                          <Send className="w-3.5 h-3.5" />
                          <span>Submit Message to Spice &amp; Slice</span>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* 5. LOCATION & RESPONSIVE GOOGLE MAPS SECTION */}
        <section id="map" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-2">
          <div className="rounded-xl bg-[#161616]/95 border border-stone-800 p-5 sm:p-7 space-y-5">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-zinc-800">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-white font-['Outfit']">
                  Location &amp; Directions
                </h2>
                <p className="text-xs text-[#9CA3AF] mt-0.5">
                  <strong>60 Wordsworth Rd, Loughborough, Leicestershire, LE11 4LQ</strong>
                </p>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=60+Wordsworth+Rd,+Loughborough+LE11+4LQ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2 px-4 rounded-lg bg-[#EA580C] hover:bg-[#C2410C] text-white font-semibold text-xs flex items-center gap-2 transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Open in Google Maps App</span>
                </a>
              </div>
            </div>

            {/* Embedded Responsive Google Map Iframe */}
            <div className="relative w-full rounded-lg overflow-hidden border border-zinc-800 bg-zinc-950">
              <iframe
                title="Spice and Slice Loughborough Google Maps Location"
                src="https://maps.google.com/maps?q=60%20Wordsworth%20Rd%2C%20Loughborough%20LE11%204LQ&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-80 sm:h-96 rounded-lg filter brightness-95"
              />
            </div>

            {/* Local Travel & Parking Tips */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1 text-xs text-zinc-300">
              <div className="p-3.5 rounded-lg bg-zinc-900 border border-zinc-800">
                <strong className="text-white block font-semibold mb-0.5">🚗 Convenient Parking:</strong>
                <p className="text-[#9CA3AF]">
                  Free street parking available along Wordsworth Road and adjacent residential bays for easy takeaway collection.
                </p>
              </div>

              <div className="p-3.5 rounded-lg bg-zinc-900 border border-zinc-800">
                <strong className="text-white block font-semibold mb-0.5">🎓 Campus &amp; Town Proximity:</strong>
                <p className="text-[#9CA3AF]">
                  Just a few minutes drive from Loughborough University campus and Loughborough town centre.
                </p>
              </div>

              <div className="p-3.5 rounded-lg bg-zinc-900 border border-zinc-800">
                <strong className="text-white block font-semibold mb-0.5">📦 Hot Takeaway Pickup:</strong>
                <p className="text-[#9CA3AF]">
                  Call ahead on 07553 343676 with your order. Dishes are prepared fresh to order within 15–20 minutes.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
