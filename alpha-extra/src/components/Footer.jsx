import { Link } from 'react-router-dom';

function Footer({ brandname = 'Alpha Extra' }) {
  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800 mt-12">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-center sm:text-left">
          <h3 className="text-lg font-bold text-cyan-400">{brandname}</h3>
          <p className="text-xs text-slate-400 mt-1">
            Signature fragrances crafted to stand out.
          </p>
        </div>

        <nav className="flex items-center gap-6 text-sm">
          <Link to="/" className="hover:text-white transition">
            Home
          </Link>
          <Link to="/about" className="hover:text-white transition">
            About
          </Link>
          <Link to="/experience" className="hover:text-white transition">
            Experience
          </Link>
        </nav>

        <p className="text-xs text-slate-500">
          © {new Date().getFullYear()} {brandname}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;