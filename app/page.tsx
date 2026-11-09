'use client';

import { FormEvent, useRef, useState } from 'react';

const useCases = [
  { number: '01', title: 'Music & culture', description: 'A home for the next festival, independent label, or creative community.', tags: 'EVENTS / MUSIC / CULTURE' },
  { number: '02', title: 'Adventure & outdoors', description: 'Take the name to new heights with travel, experiences, or outdoor gear.', tags: 'TRAVEL / EXPERIENCES / OUTDOORS' },
  { number: '03', title: 'Lifestyle & creativity', description: 'Build a distinctive identity for a studio, lifestyle label, or creator platform.', tags: 'LIFESTYLE / DESIGN / CREATORS' },
];

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d={diagonal ? 'M6 18 18 6M6 6h12v12' : 'M4 12h16m-6-6 6 6-6 6'} /></svg>;
}

export default function DomainLandingPage() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [enquiryType, setEnquiryType] = useState('buy');
  const sending = useRef(false);
  const feedback = useRef<HTMLDivElement>(null);

  async function handleOfferSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (sending.current) return;
    const fields = new FormData(event.currentTarget);
    if (fields.get('company_website')) return;
    const name = String(fields.get('name') || '').trim();
    const email = String(fields.get('email') || '').trim();
    const amount = Number(fields.get('amount'));
    if (!name || !email || !Number.isFinite(amount) || amount <= 0) {
      setError('Please enter your name, email and an offer greater than zero.');
      return;
    }
    sending.current = true;
    setSubmitting(true);
    setError('');
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 15000);
    const payload = new FormData();
    payload.append('access_key', '1804ca0e-a42b-42a2-88d9-6fc1307065ca');
    const renting = fields.get('enquiry_type') === 'rent';
    payload.append('subject', renting ? 'New rental enquiry for gethigh.in' : 'New purchase offer for gethigh.in');
    payload.append('enquiry_type', renting ? 'Rent' : 'Buy');
    payload.append('from_name', name);
    payload.append('name', name);
    payload.append('email', email);
    payload.append('offer', `${fields.get('currency')} ${amount}${renting ? ' per month' : ''}`);
    payload.append('intended_use', String(fields.get('intended_use') || '').trim() || 'Not specified');
    payload.append('message', String(fields.get('message') || '').trim() || 'No message provided.');
    payload.append('botcheck', '');
    try {
      const response = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: payload, signal: controller.signal });
      const result = await response.json();
      if (!response.ok || result.success !== true) throw new Error('Offer not accepted');
      setSubmitted(true);
      requestAnimationFrame(() => feedback.current?.focus());
    } catch (cause) {
      const timedOut = cause instanceof Error && cause.name === 'AbortError';
      setError(timedOut
        ? 'We could not confirm delivery in time. Your details are still here. Please try again; a retry may send the offer twice.'
        : 'We could not confirm your offer was sent. Your details are still here. Please try again.');
    } finally {
      clearTimeout(timeout);
      sending.current = false;
      setSubmitting(false);
    }
  }

  return (
    <main id="top" className="site-shell">
      <a className="skip-link" href="#offer">Skip to offer form</a>
      <header className="site-header page-width">
        <a href="#top" aria-label="gethigh.in home" className="wordmark">gethigh<span>.in</span></a>
        <nav aria-label="Main navigation"><a className="nav-secondary" href="#possibilities">The possibilities</a><a className="nav-cta" href="#offer">Let’s talk <Arrow diagonal /></a></nav>
      </header>
      <section className="hero page-width" aria-labelledby="hero-title">
        <div className="hero-topline"><span className="eyebrow"><span className="status-dot" /> AVAILABLE TO BUY OR RENT</span><span className="edition">ONE NAME. YOUR NEXT CHAPTER.</span></div>
        <h1 id="hero-title" className="domain-title">gethigh<span>.in</span></h1>
        <div className="hero-bottom">
          <div><p className="hero-statement">A name with<br />room to rise.</p><p className="hero-description">Two familiar words. Seven letters. A bold .in address for whatever you build next.</p></div>
          <div className="acquisition-card"><span className="eyebrow muted">THE DOMAIN IS THE OPPORTUNITY</span><p>Your idea.<br />This address.</p><a href="#offer" className="button button-primary">Make an offer <Arrow diagonal /></a><span className="card-note">Buy outright or rent. Speak directly with the owner.</span></div>
        </div>
        <div className="domain-facts" aria-label="Domain highlights"><span><b>07</b> letters before the dot</span><span><b>.in</b> India’s country-code domain</span><span><b>02</b> familiar English words</span></div>
      </section>
      <section id="possibilities" className="section-pad page-width" aria-labelledby="possibilities-title">
        <div className="section-heading"><span className="eyebrow muted">01 / THE POSSIBILITIES</span><h2 id="possibilities-title">One name.<br /><span className="muted">Many directions.</span></h2><p>Make it mean something of your own. Here are a few places to start.</p></div>
        <div className="use-case-grid">{useCases.map(item => <article className="use-case" key={item.number}><div className="case-top"><span>{item.number}</span><Arrow diagonal /></div><h3>{item.title}</h3><p>{item.description}</p><span className="case-tags">{item.tags}</span></article>)}</div>
      </section>
      <section className="section-pad page-width" aria-labelledby="process-title">
        <div className="section-heading"><span className="eyebrow muted">02 / THE PROCESS</span><h2 id="process-title">From first hello<br /><span className="muted">to your next move.</span></h2></div>
        <ol className="process-grid"><li><span>01</span><h3>Start the conversation</h3><p>Share your offer and a little about what you have in mind.</p></li><li><span>02</span><h3>Agree on the details</h3><p>Discuss a purchase price or monthly rent, payment arrangements and next steps directly with the owner.</p></li><li><span>03</span><h3>Get started</h3><p>Once terms are agreed, coordinate the domain transfer for a purchase or domain setup for a rental.</p></li></ol>
      </section>
      <section id="offer" className="offer-section section-pad page-width" aria-labelledby="offer-title">
        <div className="offer-intro"><span className="eyebrow muted">03 / YOUR NEXT CHAPTER</span><h2 id="offer-title">Good things<br />start with<br /><span className="accent">a conversation.</span></h2><p>Interested in buying or renting gethigh.in? Send an enquiry directly to the owner. Purchase and rental terms are discussed individually. This form does not take payment.</p><div className="offer-domain"><span className="status-dot" /> gethigh.in <span>Available to buy or rent</span></div></div>
        <div className="offer-card">
          {submitted ? <div ref={feedback} tabIndex={-1} role="status" className="success-panel"><span className="success-icon" aria-hidden="true">✓</span><h3>Your enquiry is on its way.</h3><p>Your enquiry was submitted successfully. The owner can reply to the email address you provided.</p><a className="text-link" href="#top">Back to the top <Arrow /></a></div> : <form onSubmit={handleOfferSubmit} aria-busy={submitting}>
            <h3>Buy or rent the domain</h3><p className="form-intro">Required fields are marked with an asterisk.</p>
            <fieldset disabled={submitting} className="form-fields">
              <div><label htmlFor="enquiry-type">I’m interested in *</label><select id="enquiry-type" name="enquiry_type" value={enquiryType} onChange={(event) => setEnquiryType(event.target.value)} required><option value="buy">Buying the domain</option><option value="rent">Renting the domain</option></select></div>
              <div className="form-row"><div><label htmlFor="name">Your name *</label><input id="name" name="name" autoComplete="name" required maxLength={100} placeholder="Full name" /></div><div><label htmlFor="email">Email address *</label><input id="email" name="email" type="email" autoComplete="email" required maxLength={254} placeholder="you@company.com" /></div></div>
              <div><label htmlFor="amount">{enquiryType === 'rent' ? 'Your monthly rental offer *' : 'Your purchase offer *'}</label><div className="amount-row"><select name="currency" id="currency" aria-label="Offer currency" defaultValue="INR"><option value="INR">INR ₹</option><option value="USD">USD $</option></select><input id="amount" name="amount" type="number" min="0.01" step="0.01" required placeholder="Enter amount" inputMode="decimal" /></div></div>
              <div><label htmlFor="intended-use">What would you build? <span>Optional</span></label><input id="intended-use" name="intended_use" maxLength={300} placeholder="A brand, an experience, something new…" /></div>
              <div><label htmlFor="message">Anything else? <span>Optional</span></label><textarea id="message" name="message" rows={3} maxLength={3000} placeholder="Your questions or a little about your plans" /></div>
              <div className="honeypot" aria-hidden="true"><label htmlFor="company-website">Leave this empty</label><input id="company-website" name="company_website" tabIndex={-1} autoComplete="off" /></div>
            </fieldset>
            {error && <p role="alert" className="form-error">{error}</p>}
            <button className="button button-primary submit-button" type="submit" disabled={submitting}>{submitting ? 'Sending your enquiry…' : 'Send enquiry'}<Arrow diagonal /></button>
            <p className="form-note">Your details are sent to the owner through Web3Forms to respond to your enquiry.</p>
          </form>}
        </div>
      </section>
      <section className="faq-section page-width" aria-labelledby="faq-title"><h2 className="eyebrow muted" id="faq-title">A FEW THINGS TO KNOW</h2><div className="faq-list"><details><summary>What is included in the sale?</summary><p>The gethigh.in domain name. A business, trademark, customer base or other assets are not included.</p></details><details><summary>Can I rent the domain instead of buying it?</summary><p>Yes. gethigh.in is available for rent as well as purchase. Choose renting in the enquiry form and suggest a monthly amount. Rental duration, permitted use, payment and setup arrangements are agreed separately with the owner. Renting does not transfer ownership.</p></details><details><summary>Does submitting an enquiry commit me to a purchase or rental?</summary><p>No. Your enquiry starts a conversation. Price, duration, payment and other terms are discussed and agreed separately.</p></details><details><summary>How will the domain be transferred?</summary><p>The owner and buyer agree on the process before proceeding. The exact steps and timing depend on the registrars and any transfer restrictions at that time.</p></details></div></section>
      <footer className="site-footer page-width"><a href="#top" className="wordmark">gethigh<span>.in</span></a><p>A little name. A lot of possibility.</p><span>© {new Date().getFullYear()} gethigh.in</span></footer>
    </main>
  );
}

