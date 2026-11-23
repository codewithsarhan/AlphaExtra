function About({ brandname = 'Alpha Extra' }) {
  return (
    <section className="max-w-5xl mx-auto px-6 py-12 text-slate-900">
      <div className="max-w-2xl">
        <span className="text-xs font-semibold uppercase tracking-widest text-cyan-600">
          About The Brand
        </span>
        <h1 className="text-3xl sm:text-4xl font-bold mt-2">
          Crafted for Presence, Built for Everyday Confidence
        </h1>
        <p className="text-slate-600 mt-4 leading-relaxed">
          {brandname} was created with a simple focus: bold, memorable
          fragrances that feel refined without being overwhelming. From crisp
          daily wear to rich evening notes, every blend is made to leave a
          lasting impression.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
        <div className="p-6 rounded-xl border border-slate-200 bg-white shadow-sm">
          <h2 className="font-semibold text-lg">Long-Lasting Scents</h2>
          <p className="text-sm text-slate-600 mt-2">
            Balanced compositions designed to stay noticeable from morning hours
            through evening plans.
          </p>
        </div>

        <div className="p-6 rounded-xl border border-slate-200 bg-white shadow-sm">
          <h2 className="font-semibold text-lg">Layered Notes</h2>
          <p className="text-sm text-slate-600 mt-2">
            Thoughtful opening freshness paired with warm woody, spicy, and
            amber undertones.
          </p>
        </div>

        <div className="p-6 rounded-xl border border-slate-200 bg-white shadow-sm">
          <h2 className="font-semibold text-lg">Modern Simplicity</h2>
          <p className="text-sm text-slate-600 mt-2">
            Clean presentation and everyday versatility for work, casual outings,
            and special occasions.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;