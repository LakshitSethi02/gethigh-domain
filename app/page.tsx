'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function DomainLandingPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [amount, setAmount] = useState('');
  const [intendedUse, setIntendedUse] = useState('');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleOfferSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    const formData = new FormData();
    formData.append('access_key', '1804ca0e-a42b-42a2-88d9-6fc1307065ca');
    formData.append('subject', '🚨 New Offer Received for gethigh.in!');
    formData.append('from_name', name || 'gethigh.in Offer Bot');
    formData.append('name', name);
    formData.append('email', email);
    formData.append('offer', amount);
    formData.append('intended_use', intendedUse || 'Not specified');
    formData.append('message', message || 'No message provided.');

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });
      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main id="top" className="min-h-screen relative overflow-hidden">
      {/* Background glow */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-[640px] w-[640px] rounded-full bg-grad-start/25 blur-[120px]" />
      <div className="pointer-events-none absolute top-1/3 right-0 h-[480px] w-[480px] rounded-full bg-grad-end/10 blur-[120px]" />

      {/* Header */}
      <header className="relative z-10 border-b border-ink-line">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <a href="#top" className="font-brand text-2xl font-bold text-gradient-brand">
            gethigh.in
          </a>
          <nav className="flex items-center gap-6 sm:gap-8">
            <a
              href="#use-cases"
              className="hidden sm:inline text-sm text-gray-400 hover:text-white transition-colors"
            >
              Use Cases
            </a>
            <a
              href="#offer"
              className="px-5 py-2.5 rounded-full bg-brand-gradient text-white text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              Make an Offer
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative z-10 max-w-4xl mx-auto px-6 pt-20 pb-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 mb-6 text-sm text-gray-400">
            <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
            Available now
          </div>

          <h1 className="font-display uppercase text-6xl sm:text-7xl md:text-8xl leading-[0.95] tracking-tight text-gradient-brand mb-6">
            gethigh.in
          </h1>

          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            A seven-letter, one-word .in domain — ready to transfer today.
          </p>

          <a
            href="#offer"
            className="inline-block px-8 py-4 rounded-full bg-brand-gradient text-white font-semibold hover:opacity-90 transition-opacity"
          >
            Make an Offer
          </a>
        </motion.div>
      </section>

      {/* Use Cases */}
      <section id="use-cases" className="relative z-10 max-w-6xl mx-auto px-6 py-16">
        <h2 className="font-display uppercase text-3xl sm:text-4xl text-center tracking-tight mb-10">
          Use Cases
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-ink-line bg-ink-panel p-6">
            <h3 className="font-display uppercase text-xl tracking-tight text-gradient-brand mb-2">
              Wellness &amp; Culture
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Wellness and elevated-lifestyle brands looking for a short, memorable name.
            </p>
          </div>
          <div className="rounded-2xl border border-ink-line bg-ink-panel p-6">
            <h3 className="font-display uppercase text-xl tracking-tight text-gradient-brand mb-2">
              Gaming &amp; Tech
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Gaming platforms, creator tools, and fast-moving tech products.
            </p>
          </div>
          <div className="rounded-2xl border border-ink-line bg-ink-panel p-6">
            <h3 className="font-display uppercase text-xl tracking-tight text-gradient-brand mb-2">
              Studios &amp; Agencies
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Creative studios and agencies that want a bold, ownable identity.
            </p>
          </div>
        </div>
      </section>

      {/* Offer */}
      <section id="offer" className="relative z-10 max-w-6xl mx-auto px-6 py-20 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="text-sm tracking-[0.2em] uppercase text-gray-400 mb-4">
            Make Your Move
          </p>
          <h2 className="font-display uppercase text-6xl sm:text-7xl md:text-8xl leading-[0.95] tracking-tight text-gradient-brand mb-6">
            Make an Offer
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Serious about gethigh.in? Tell us what you&apos;re thinking. All inquiries stay
            between us.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-[1.3fr_1fr] gap-8 items-start">
          {/* Form card */}
          <div className="rounded-2xl border border-ink-line bg-ink-panel p-8">
            {submitted ? (
              <div className="py-10 text-center">
                <p className="text-lg font-semibold text-white mb-2">Offer sent.</p>
                <p className="text-gray-400 text-sm">
                  We&apos;ve received it and will reply within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleOfferSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-gray-400 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your name"
                      className="w-full px-4 py-3 rounded-xl bg-ink border border-ink-line text-white placeholder-gray-500 focus:outline-none focus:border-grad-mid text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-gray-400 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 rounded-xl bg-ink border border-ink-line text-white placeholder-gray-500 focus:outline-none focus:border-grad-mid text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-gray-400 mb-2">
                    Your Offer (₹ or $)
                  </label>
                  <input
                    type="text"
                    required
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="e.g. $4,500 or ₹3,75,000"
                    className="w-full px-4 py-3 rounded-xl bg-ink border border-ink-line text-white placeholder-gray-500 focus:outline-none focus:border-grad-mid text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-gray-400 mb-2">
                    Intended Use
                  </label>
                  <input
                    type="text"
                    value={intendedUse}
                    onChange={(e) => setIntendedUse(e.target.value)}
                    placeholder="What will you build with gethigh.in?"
                    className="w-full px-4 py-3 rounded-xl bg-ink border border-ink-line text-white placeholder-gray-500 focus:outline-none focus:border-grad-mid text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-gray-400 mb-2">
                    Message (Optional)
                  </label>
                  <textarea
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Anything else we should know?"
                    className="w-full px-4 py-3 rounded-xl bg-ink border border-ink-line text-white placeholder-gray-500 focus:outline-none focus:border-grad-mid text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-3.5 rounded-full bg-brand-gradient text-white font-semibold hover:opacity-90 transition-opacity disabled:opacity-60"
                >
                  {submitting ? 'Sending…' : 'Send Offer'}
                </button>
              </form>
            )}
          </div>

          {/* Side cards */}
          <div className="space-y-6">
            <div className="rounded-2xl border border-ink-line bg-ink-panel p-8 text-center">
              <div className="font-brand text-3xl font-bold text-gradient-brand mb-2">
                gethigh.in
              </div>
              <p className="text-gray-400 text-sm">Premium .in domain — available now</p>
            </div>

            <div className="rounded-2xl border border-ink-line bg-ink-panel p-8">
              <h3 className="font-display uppercase text-lg tracking-tight text-white mb-5">
                Why Act Now
              </h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <span className="flex-shrink-0 h-6 w-6 rounded-full bg-brand-gradient text-white text-xs font-bold flex items-center justify-center">
                    1
                  </span>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Short, one-word .in domains rarely come back on the market once they&apos;re
                    sold.
                  </p>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 h-6 w-6 rounded-full bg-brand-gradient text-white text-xs font-bold flex items-center justify-center">
                    2
                  </span>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Owning a distinctive name early means every future customer finds you at the
                    obvious address.
                  </p>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 h-6 w-6 rounded-full bg-brand-gradient text-white text-xs font-bold flex items-center justify-center">
                    3
                  </span>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Once a serious offer is accepted, this listing closes — early offers get first
                    consideration.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-ink-line">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} gethigh.in. All rights reserved.</p>
          <p>Domain transfer coordinated directly with the buyer once terms are agreed.</p>
        </div>
      </footer>
    </main>
  );
}
