import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const navLinks = ['Who We Are', 'What We Do', 'Work', 'Join Us'];
const navHref = {
  'Who We Are': 'https://www.parashifttech.com/about-us',
  'What We Do': 'https://www.parashifttech.com/services',
  Work: 'https://www.parashifttech.com/work',
  'Join Us': 'https://www.parashifttech.com/careers',
};


const ACCENT = '#E34C38';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [language, setLanguage] = useState('EN');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 w-full border-b transition-[background-color,backdrop-filter,border-color,box-shadow,color] duration-300 ease-out ${
        scrolled
          ? 'border-white/20 bg-white/70 text-neutral-900 shadow-[0_1px_0_rgba(0,0,0,0.04)] backdrop-blur-lg backdrop-saturate-150'
          : 'border-transparent bg-black text-white'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-[1220px] items-center justify-between px-5 md:px-8">
        <Link
          to="/blogs"
          className={`flex items-center text-[34px] font-semibold leading-none tracking-tight transition-colors ${
            scrolled ? 'text-neutral-900' : 'text-white'
          }`}
        >
          <span className="relative mr-1 inline-flex h-[22px] w-[22px] items-end justify-start">
            <span
              className="absolute bottom-0 left-0 h-0 w-0 border-b-[18px] border-l-[10px] border-r-[10px] border-b-[#f5a623] border-l-transparent border-r-transparent"
              aria-hidden
            />
            <span
              className="absolute bottom-0 left-[6px] h-0 w-0 border-b-[14px] border-l-[8px] border-r-[8px] border-b-[#E34C38] border-l-transparent border-r-transparent"
              aria-hidden
            />
          </span>
          <span className="ml-0.5">Parashift.</span>
        </Link>

        <div className="hidden items-center gap-7 text-[14px] font-medium lg:flex">
          {navLinks.map((item) => (
            <a
              key={item}
              href={navHref[item]}
              target="_blank"
              rel="noreferrer"
              className={`relative inline-flex items-center gap-1 transition-colors ${
                scrolled
                  ? 'text-neutral-800 hover:text-neutral-950'
                  : 'text-white/90 hover:text-white'
              }`}
            >
              {item}
              {item === 'What We Do' && (
                <svg className="h-3 w-3 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              )}
            </a>
          ))}
          <NavLink
            to="/blogs"
            style={({ isActive }) => (isActive ? { color: ACCENT } : undefined)}
            className={({ isActive }) =>
              `transition-colors ${
                isActive
                  ? ''
                  : scrolled
                    ? 'text-neutral-800 hover:text-neutral-950'
                    : 'text-white/90 hover:text-white'
              }`
            }
          >
            Blog
          </NavLink>
          <a
            href="mailto:hello@parashifttech.com"
            className={`transition-colors ${
              scrolled ? 'text-neutral-800 hover:text-neutral-950' : 'text-white/90 hover:text-white'
            }`}
          >
            Let&apos;s Connect
          </a>
          <button
            type="button"
            onClick={() => setLanguage((prev) => (prev === 'EN' ? 'AR' : 'EN'))}
            className={`inline-flex items-center gap-2 px-3 py-1.5 text-[12px] uppercase tracking-wide transition-colors ${
              scrolled
                ? 'border border-neutral-200/80 bg-white/50 text-neutral-900 backdrop-blur-sm'
                : 'border border-white/20 bg-white/5 text-white'
            }`}
          >
            {language}
            <svg className="h-3 w-3 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>

        <div className="lg:hidden">
          <button
            type="button"
            onClick={() => setShowMobileMenu((prev) => !prev)}
            className={`p-2 ${scrolled ? 'text-neutral-900' : 'text-white'}`}
            aria-label="Toggle menu"
            aria-expanded={showMobileMenu}
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
      {showMobileMenu && (
        <div className={`border-t px-5 pb-5 pt-4 lg:hidden ${scrolled ? 'border-neutral-200 bg-white text-neutral-900' : 'border-white/20 bg-black text-white'}`}>
          <div className="flex flex-col gap-4 text-sm">
            {navLinks.map((item) => (
              <a key={item} href={navHref[item]} target="_blank" rel="noreferrer" className="w-fit">
                {item}
              </a>
            ))}
            <NavLink to="/blogs" onClick={() => setShowMobileMenu(false)} className="w-fit">
              Blog
            </NavLink>
            <a href="mailto:hello@parashifttech.com" className="w-fit">Let&apos;s Connect</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
