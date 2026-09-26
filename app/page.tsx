'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function DomainLandingPage() {
  const [offerModalOpen, setOfferModalOpen] = useState(false);
  const [amount, setAmount] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleOfferSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    const formData = new FormData();
    formData.append('access_key', '1804ca0e-a42b-42a2-88d9-6fc1307065ca');
    formData.append('subject', '🚨 New Offer Received for gethigh.in!');
    formData.append('from_name', 'gethigh.in Offer Bot');
    formData.append('email', email);
    formData.append('amount', `$${amount}`);
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

  const handleBuyNowClick = () => {
    // Pre-fills the asking price and opens the modal to capture their email
    setAmount('4500');
    setOfferModalOpen(true);
  };

  return (
    <main className="min-h-screen flex flex-col justify-between relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <header className="w-full max-w-7xl mx-auto px-6 py-6 flex justify-between items-center z-10">
        <span className="font-mono text-sm tracking-widest text-emerald-400 uppercase font-semibold">
          // Domain Acquisition
        </span>
        <button
          onClick={() => { setAmount(''); setOfferModalOpen(true); }}
          className="text-xs uppercase tracking-wider font-medium px-4 py-2 rounded-full border border-neutral-800 hover:border-emerald-500/50 transition-colors"
        >
          Contact Owner
        </button>
      </header>

      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Available For Immediate Transfer
          </div>

          <h1 className="text-6xl md:text-8xl font-black tracking-tight mb-6 bg-gradient-to-b from-white via-neutral-200 to-neutral-500 bg-clip-text text-transparent">
            gethigh.in
          </h1>

          <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            A commanding, memorable `.in` digital asset primed for modern wellness brands, high-performance tech ventures, lifestyle startups, and digital creators.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={handleBuyNowClick}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-emerald-500 text-neutral-950 font-bold hover:bg-emerald-400 transition-all shadow-lg shadow-emerald-500/20"
            >
              Buy It Now ($4,500)
            </button>
            <button
              onClick={() => { setAmount(''); setOfferModalOpen(true); }}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-neutral-900 border border-neutral-800 font-medium hover:border-neutral-700 transition-all"
            >
              Make an Offer
            </button>
          </div>
        </motion.div>
      </section>

      {/* Use Cases Grid */}
      <section className="max-w-6xl mx-auto px-6 py-16 z-10 w-full">
        <h2 className="text-sm font-mono tracking-widest text-neutral-500 uppercase mb-8 text-center">
          Ideal Vertical Applications
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800/80 backdrop-blur-sm">
            <h3 className="font-semibold text-lg mb-2 text-emerald-400">Wellness & CBD</h3>
            <p className="text-neutral-400 text-sm">Perfect brand moniker for premium functional wellness, herbal extracts, and lifestyle botanicals.</p>
          </div>
          <div className="p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800/80 backdrop-blur-sm">
            <h3 className="font-semibold text-lg mb-2 text-emerald-400">Next-Gen Tech</h3>
            <p className="text-neutral-400 text-sm">High-recall identity for gaming portals, audio streaming collectives, or high-velocity creator apps.</p>
          </div>
          <div className="p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800/80 backdrop-blur-sm">
            <h3 className="font-semibold text-lg mb-2 text-emerald-400">Agency & Culture</h3>
            <p className="text-neutral-400 text-sm">Bold digital identity for creative studios, streetwear lines, and experiential event organizers.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full max-w-7xl mx-auto px-6 py-8 border-t border-neutral-900 flex flex-col sm:flex-row justify-between items-center text-xs text-neutral-500 z-10">
        <p>&copy; {new Date().getFullYear()} gethigh.in. All rights reserved.</p>
        <p className="mt-2 sm:mt-0">Secure escrow transfer via trusted registrars.</p>
      </footer>

      {/* Offer / Contact Modal */}
      {offerModalOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-neutral-900 border border-neutral-800 w-full max-w-md rounded-2xl p-6 relative shadow-2xl"
          >
            <button
              onClick={() => {
                setOfferModalOpen(false);
                setSubmitted(false); // reset state if they close and reopen
              }}
              className="absolute top-4 right-4 text-neutral-400 hover:text-white"
            >
              ✕
            </button>

            <h3 className="text-xl font-bold mb-2">Secure this Domain</h3>
            <p className="text-neutral-400 text-sm mb-6">Enter your details below. We will reply to your email within 24 hours.</p>

            {submitted ? (
              <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-center text-sm font-medium">
                Success! Your message has been sent directly to the owner. We will be in touch shortly.
              </div>
            ) : (
              <form onSubmit={handleOfferSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-neutral-400 mb-1">Offer Amount (USD)</label>
                  <input
                    type="number"
                    required
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="e.g. 4500"
                    className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-neutral-800 text-white focus:outline-none focus:border-emerald-500 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-neutral-400 mb-1">Your Email Address</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-neutral-800 text-white focus:outline-none focus:border-emerald-500 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-neutral-400 mb-1">Message (Optional)</label>
                  <textarea
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Any notes regarding the transfer process..."
                    className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-neutral-800 text-white focus:outline-none focus:border-emerald-500 text-sm resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-3 rounded-xl bg-emerald-500 text-neutral-950 font-bold hover:bg-emerald-400 transition-all text-sm"
                >
                  {submitting ? 'Sending securely...' : 'Submit Inquiry'}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </main>
  );
}
