import { Link } from 'react-router-dom';

function Home({ brandname = 'Alpha Extra' }) {
  return (
    <main className="max-w-5xl mx-auto px-6 py-12 text-slate-900">
      <section className="rounded-2xl bg-slate-900 text-white p-8 sm:p-12">
        <span className="inline-block text-xs font-semibold uppercase tracking-widest text-cyan-400">
          Signature Fragrance Collection
        </span>
        <h1 className="text-3xl sm:text-5xl font-bold mt-3 leading-tight">
          Step Into Bold Presence With {brandname}
        </h1>
        <p className="text-slate-300 mt-4 max-w-2xl leading-relaxed">
          Discover crisp daily sprays, deep woody evening blends, and modern
          scents crafted for everyday confidence.
        </p>

        <div className="flex flex-wrap gap-4 mt-8">
          <Link
            to="/experience"
            className="px-5 py-3 rounded-lg bg-cyan-400 text-slate-950 font-semibold text-sm hover:bg-cyan-300 transition"
          >
            Explore Experience
          </Link>
          <Link
            to="/about"
            className="px-5 py-3 rounded-lg border border-slate-700 text-white font-semibold text-sm hover:border-slate-500 transition"
          >
            About {brandname}
          </Link>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold">Featured Blends</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">
          <div className="p-6 rounded-xl border border-slate-200 bg-white shadow-sm">
            <h3 className="font-semibold text-lg">Alpha Citrus</h3>
            <p className="text-sm text-slate-600 mt-2">
              Fresh bergamot and clean citrus opening for daytime energy.
            </p>
          </div>

          <div className="p-6 rounded-xl border border-slate-200 bg-white shadow-sm">
            <h3 className="font-semibold text-lg">Extra Oud</h3>
            <p className="text-sm text-slate-600 mt-2">
              Rich oud and warm spice notes made for evening outings.
            </p>
          </div>

          <div className="p-6 rounded-xl border border-slate-200 bg-white shadow-sm">
            <h3 className="font-semibold text-lg">Midnight Amber</h3>
            <p className="text-sm text-slate-600 mt-2">
              Smooth amber and woody base with a calm, lasting trail.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;