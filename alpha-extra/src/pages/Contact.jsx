import { useState } from 'react';

function Contact({ brandname = 'Alpha Extra' }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;
    setSubmitted(true);
    setName('');
    setEmail('');
    setMessage('');
  }

  return (
    <section className="max-w-4xl mx-auto px-6 py-12 text-slate-900">
      <span className="text-xs font-semibold uppercase tracking-widest text-cyan-600">
        Get In Touch
      </span>
      <h1 className="text-3xl sm:text-4xl font-bold mt-2">
        Contact {brandname}
      </h1>
      <p className="text-slate-600 mt-3 max-w-xl">
        Have a question about our fragrances, custom orders, or feedback? Drop a
        message below.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
        <form
          onSubmit={handleSubmit}
          className="space-y-4 p-6 rounded-2xl border border-slate-200 bg-white shadow-sm"
        >
          <div>
            <label className="block text-sm font-medium mb-1">Your Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:border-cyan-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:border-cyan-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Message</label>
            <textarea
              rows="4"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Write your message..."
              className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:border-cyan-500"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-slate-900 text-white font-semibold text-sm hover:bg-slate-800 transition"
          >
            Send Message
          </button>

          {submitted && (
            <p className="text-sm text-emerald-600 font-medium pt-1">
              Thanks! Your message has been received.
            </p>
          )}
        </form>

        <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50 space-y-4">
          <h2 className="text-xl font-bold">Store & Support</h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            Reach out for fragrance recommendations, order inquiries, or brand
            collaborations with {brandname}.
          </p>
          <div className="text-sm space-y-2 text-slate-700">
            <p>
              <span className="font-semibold">Email:</span> support@alphaextra.com
            </p>
            <p>
              <span className="font-semibold">Hours:</span> Mon – Sat, 10 AM – 8 PM
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;