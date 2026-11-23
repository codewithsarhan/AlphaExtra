import { NavLink } from 'react-router-dom';

function getLinkClass({ isActive }) {
  return isActive
    ? 'text-cyan-400 font-semibold border-b-2 border-cyan-400 pb-1'
    : 'text-slate-300 hover:text-white transition';
}

function Navbar({ brandname }) {
  return (
    <header className="flex justify-between items-center px-6 py-4 bg-slate-900 text-white">
      <h2 className="text-xl font-bold tracking-wide text-cyan-400 m-0">
        {brandname}
      </h2>

      <nav className="flex items-center gap-6">
        <NavLink to="/" end className={getLinkClass}>
          Home
        </NavLink>
        <NavLink to="/about" className={getLinkClass}>
          About
        </NavLink>
        <NavLink to="/contact" className={getLinkClass}>
          contact
        </NavLink>
      </nav>
    </header>
  );
}

export default Navbar;