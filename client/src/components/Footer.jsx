import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Clock, MessageSquare, Navigation, Sparkles } from 'lucide-react';
import storeLogo from '../assets/Spice & slice stacked transperant bg.png';

export default function Footer() {
  return (
    <footer className="bg-zinc-950/95 backdrop-blur-md border-t border-stone-800 pt-16 pb-12 px-4 sm:px-6 lg:px-8 text-xs text-zinc-400">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-zinc-900">
        {/* Col 1: Brand & Bio */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-zinc-900 border border-zinc-800 p-1.5 flex items-center justify-center shrink-0">
              <img
                src={storeLogo}
                alt="Spice & Slice Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <span className="text-xl font-black text-white font-['Outfit'] tracking-tight block">
                SPICE <span className="text-[#EA580C]">&amp;</span> SLICE
              </span>
              <span className="text-[10px] font-bold text-orange-400 uppercase tracking-widest">
                Loughborough
              </span>
            </div>
          </div>

          <p className="text-xs text-zinc-400 leading-relaxed">
            True Flavours of India in Loughborough. Pure vegetarian and vegan street food, high-flame Indo-Chinese, slow-simmered homestyle curries, and stone-baked artisan pizzas. Fresh takeaway collection.
          </p>

          <div className="flex items-center gap-3 pt-1">
            <a
              href="https://wa.me/447553343676?text=Hello%20Spice%20%26%20Slice!%20I%20have%20an%20inquiry%20regarding%20your%20menu."
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-xl bg-zinc-900 hover:bg-emerald-600 text-zinc-300 hover:text-white border border-zinc-800 flex items-center justify-center transition-colors"
              title="Chat on WhatsApp"
            >
              <MessageSquare className="w-4 h-4" />
            </a>
            <a
              href="tel:+447553343676"
              className="w-9 h-9 rounded-xl bg-zinc-900 hover:bg-[#EA580C] text-zinc-300 hover:text-white border border-zinc-800 flex items-center justify-center transition-colors"
              title="Call Kitchen: 07553 343676"
            >
              <Phone className="w-4 h-4" />
            </a>
            <a
              href="https://www.google.com/maps/search/?api=1&query=60+Wordsworth+Rd,+Loughborough+LE11+4LQ"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-xl bg-zinc-900 hover:bg-amber-600 text-zinc-300 hover:text-white border border-zinc-800 flex items-center justify-center transition-colors"
              title="Find on Maps"
            >
              <Navigation className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Col 2: Quick Links */}
        <div className="space-y-3">
          <h4 className="text-sm font-black text-white uppercase tracking-wider font-['Outfit']">
            Explore Menu &amp; Info
          </h4>
          <ul className="space-y-2 text-xs font-semibold">
            <li>
              <Link to="/" className="text-zinc-400 hover:text-orange-400 transition-colors">
                Home Overview
              </Link>
            </li>
            <li>
              <Link to="/menu" className="text-zinc-400 hover:text-orange-400 transition-colors">
                View Full 62 Dish Menu
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-zinc-400 hover:text-orange-400 transition-colors">
                Contact &amp; Location (Map)
              </Link>
            </li>
            <li>
              <Link to="/menu#allergens" className="text-zinc-400 hover:text-orange-400 transition-colors">
                Dietary &amp; Allergen Transparency
              </Link>
            </li>
          </ul>
        </div>

        {/* Col 3: Opening Hours */}
        <div className="space-y-3">
          <h4 className="text-sm font-black text-white uppercase tracking-wider font-['Outfit']">
            Opening Hours
          </h4>
          <div className="space-y-1.5 text-xs text-zinc-300">
            <div className="flex justify-between py-0.5 border-b border-zinc-900">
              <span className="text-zinc-400">Monday:</span>
              <span className="font-semibold text-white">12:00 PM – 9:00 PM</span>
            </div>
            <div className="flex justify-between py-0.5 border-b border-zinc-900">
              <span className="text-zinc-400">Tuesday:</span>
              <span className="font-bold text-rose-400 uppercase tracking-wide text-[11px]">Closed</span>
            </div>
            <div className="flex justify-between py-0.5 border-b border-zinc-900">
              <span className="text-zinc-400">Wednesday:</span>
              <span className="font-semibold text-white">12:00 PM – 9:00 PM</span>
            </div>
            <div className="flex justify-between py-0.5 border-b border-zinc-900">
              <span className="text-zinc-400">Thursday:</span>
              <span className="font-semibold text-white">12:00 PM – 9:00 PM</span>
            </div>
            <div className="flex justify-between py-0.5 border-b border-zinc-900">
              <span className="text-zinc-400">Friday:</span>
              <span className="font-semibold text-white">12:00 PM – 9:00 PM</span>
            </div>
            <div className="flex justify-between py-0.5 border-b border-zinc-900">
              <span className="text-zinc-400">Saturday:</span>
              <span className="font-semibold text-white">12:00 PM – 9:00 PM</span>
            </div>
            <div className="flex justify-between py-0.5 border-b border-zinc-900">
              <span className="text-zinc-400">Sunday:</span>
              <span className="font-semibold text-white">12:00 PM – 9:00 PM</span>
            </div>
            <p className="text-[11px] text-emerald-400 font-medium pt-1 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span>Open 6 Days (Tue Closed) &bull; Hot Takeaway</span>
            </p>
          </div>
        </div>

        {/* Col 4: Address & Phone */}
        <div className="space-y-3">
          <h4 className="text-sm font-black text-white uppercase tracking-wider font-['Outfit']">
            Loughborough Location
          </h4>
          <div className="space-y-2.5 text-xs text-zinc-300">
            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
              <span>
                <strong>60 Wordsworth Rd</strong><br />
                Loughborough, Leicestershire<br />
                LE11 4LQ, United Kingdom
              </span>
            </div>

            <div className="flex items-center gap-2.5 pt-1">
              <Phone className="w-4 h-4 text-amber-400 shrink-0" />
              <a href="tel:+447553343676" className="font-mono text-white hover:text-orange-400 font-bold">
                07553 343676
              </a>
            </div>

            <div className="pt-2">
              <a
                href="https://www.google.com/maps/search/?api=1&query=60+Wordsworth+Rd,+Loughborough+LE11+4LQ"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block py-1.5 px-3 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-[11px] text-zinc-300 hover:text-white border border-zinc-800 transition-colors"
              >
                Google Maps Directions ↗
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar: Copyright & Location Note */}
      <div className="max-w-7xl mx-auto pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-zinc-500">
        <p>
          &copy; {new Date().getFullYear()} Spice &amp; Slice Loughborough. Authentic Indian Street Food &amp; Artisan Slices.
        </p>

        <div className="flex items-center gap-2 text-zinc-400 font-medium">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>Fresh Takeaway Collection at 60 Wordsworth Rd, LE11 4LQ</span>
        </div>
      </div>
    </footer>
  );
}
