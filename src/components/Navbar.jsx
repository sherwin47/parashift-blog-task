import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const navLinks = ['Who We Are', 'What We Do', 'Work', 'Join Us'];

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-40 bg-black text-white">
      <div className="mx-auto h-16 max-w-[1220px] px-5 md:px-8 flex items-center justify-between">
        <Link to="/blogs" className="flex items-center text-[34px] font-semibold leading-none tracking-tight">
          <span className="text-[#ff4d4f]">▴</span>
          <span className="ml-1">Parashift</span>
        </Link>

        <div className="hidden lg:flex items-center gap-7 text-[14px] font-medium">
          {navLinks.map((item) => (
            <button key={item} type="button" className="text-white/90 transition-colors hover:text-white">
              {item}
            </button>
          ))}
          <NavLink
            to="/blogs"
            className={({ isActive }) => 
              `transition-colors ${isActive ? 'text-[#ff5f58]' : 'text-white/90 hover:text-white'}`
            }
          >
            Blog
          </NavLink>
          <button type="button" className="text-white/90 transition-colors hover:text-white">
            Let&apos;s Connect
          </button>
          <button
            type="button"
            className="inline-flex items-center gap-2 border border-white/20 bg-white/5 px-3 py-1.5 text-[12px] uppercase tracking-wide"
          >
            EN
            <span className="text-[10px]">▼</span>
          </button>
        </div>

        <div className="lg:hidden">
          <button type="button" className="p-2 text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;