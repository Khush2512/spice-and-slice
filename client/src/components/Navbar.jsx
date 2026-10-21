import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, MapPin, Menu, X, ArrowUpRight, Utensils } from 'lucide-react';
import storeLogo from '../assets/Spice & slice stacked transperant bg.png';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Our Menu', path: '/menu' },
    { name: 'Find Us & Contact', path: '/contact' },
  ];

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#121212]/95 backdrop-blur-md border-b border-stone-800">
      {/* Top Location & Direct Phone Strip */}
      <div className="bg-[#18181b]/95 border-b border-stone-800/80 py-1.5 px-4 text-xs font-medium text-zinc-400 flex items-center justify-between">
        <div className="hidden lg:flex items-center gap-2">
          <MapPin className="w-3.5 h-3.5 text-[#EA580C]" />
          <span className="text-zinc-300">60 Wordsworth Rd, Loughborough LE11 4LQ</span>
        </div>

        <div className="flex items-center justify-center gap-2 mx-auto lg:mx-0">
          <span className="w-1.5 h-1.5 rounded-full bg-[#EA580C]" />
          <span className="text-zinc-300 font-semibold tracking-wide">
            AUTHENTIC INDIAN STREET FOOD &amp; ARTISAN PIZZAS · TAKEAWAY COLLECTION
          </span>
        </div>

        <div className="hidden sm:flex items-center gap-3">
          <a
            href="tel:+447553343676"
            className="flex items-center gap-1.5 text-zinc-300 hover:text-white transition-colors font-mono"
          >
            <Phone className="w-3.5 h-3.5 text-[#EA580C]" />
            <span>07553 343676</span>
          </a>
        </div>
      </div>

      {/* Main Nav Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 sm:h-20 flex items-center justify-between gap-4">
        {/* Brand */}
        <Link to="/" className="flex items-center gap-3 cursor-pointer group py-1" aria-label="Spice & Slice Home">
          <img
            src={storeLogo}
            alt="Spice & Slice"
            className="h-10 sm:h-12 w-10 sm:w-12 object-contain shrink-0"
          />
          <div>
            <div className="flex items-center gap-2">
              <span className="text-lg sm:text-xl font-bold tracking-tight text-white font-['Outfit']">
                SPICE <span className="text-[#EA580C]">&amp;</span> SLICE
              </span>
              <span className="hidden md:inline-flex items-center px-2 py-0.5 rounded text-[10px] font-semibold bg-zinc-900 text-zinc-400 border border-zinc-800 uppercase tracking-wider">
                Loughborough
              </span>
            </div>
            <p className="text-[11px] text-zinc-400 font-normal hidden sm:block">
              True Flavours of India · 60 Wordsworth Rd, LE11 4LQ
            </p>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`transition-colors relative py-1 ${
                isActive(link.path)
                  ? 'text-white font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#EA580C] after:rounded-full'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Mobile Direct 1-Tap Call CTA */}
          <a
            href="tel:+447553343676"
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-xl bg-zinc-900 text-zinc-300 hover:text-white border border-stone-800"
            aria-label="Call kitchen: 07553 343676"
            title="Call kitchen: 07553 343676"
          >
            <Phone className="w-4 h-4 text-[#EA580C]" />
          </a>

          {/* Phone CTA */}
          <a
            href="tel:+447553343676"
            className="hidden lg:flex items-center gap-1.5 px-3 py-2 rounded-xl bg-zinc-900 text-zinc-300 hover:text-white border border-stone-800 hover:border-zinc-700 transition-colors text-xs font-mono font-medium"
            title="Call kitchen: 07553 343676"
          >
            <Phone className="w-3.5 h-3.5 text-[#EA580C]" />
            <span>07553 343676</span>
          </a>

          {/* View Menu CTA */}
          <Link
            to="/menu"
            className="hidden sm:inline-flex items-center gap-1.5 py-2 px-4 rounded-xl bg-[#EA580C] hover:bg-[#C2410C] text-white font-semibold text-xs transition-colors"
          >
            <Utensils className="w-3.5 h-3.5" />
            <span>View Full Menu</span>
          </Link>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-zinc-900 text-zinc-400 hover:text-white border border-stone-800"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#18181b] border-b border-zinc-800 px-4 pt-3 pb-6 space-y-3">
          <div className="flex items-center gap-3 pb-3 border-b border-zinc-800">
            <img
              src={storeLogo}
              alt="Spice & Slice Logo"
              className="h-10 w-10 object-contain shrink-0"
            />
            <div>
              <div className="text-sm font-bold text-white font-['Outfit']">
                SPICE <span className="text-[#EA580C]">&amp;</span> SLICE
              </div>
              <div className="text-[11px] text-zinc-400">
                60 Wordsworth Rd, LE11 4LQ
              </div>
            </div>
          </div>

          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`py-2.5 px-3 rounded-lg text-sm font-medium flex items-center justify-between ${
                  isActive(link.path)
                    ? 'bg-zinc-900 text-white font-semibold border border-zinc-800'
                    : 'text-zinc-400 hover:bg-zinc-900 hover:text-white'
                }`}
              >
                <span>{link.name}</span>
                {isActive(link.path) && <span className="text-[#EA580C] text-xs font-bold">•</span>}
              </Link>
            ))}
          </div>

          <div className="pt-3 border-t border-zinc-800 space-y-2">
            <Link
              to="/menu"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-2.5 px-4 rounded-xl bg-[#EA580C] text-white font-semibold text-xs flex items-center justify-center gap-2"
            >
              <Utensils className="w-4 h-4" />
              <span>Browse Full 62 Dish Menu</span>
            </Link>

            <a
              href="tel:+447553343676"
              className="w-full py-2.5 px-4 rounded-xl bg-zinc-900 text-zinc-300 border border-zinc-800 text-xs font-medium flex items-center justify-center gap-2"
            >
              <Phone className="w-3.5 h-3.5 text-[#EA580C]" />
              <span>Call Kitchen: 07553 343676</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
