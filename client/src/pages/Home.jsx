import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Utensils,
  Flame,
  Clock,
  MapPin,
  ArrowRight,
  Phone,
  ShieldCheck,
  CheckCircle2,
  Navigation,
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { INITIAL_MENU_ITEMS } from '../data/menuData';
import storeLogo from '../assets/Spice & slice stacked transperant bg.png';

export default function Home() {
  const [featuredDishes, setFeaturedDishes] = useState(() => {
    return INITIAL_MENU_ITEMS.filter((item) => item.isPopular).slice(0, 8);
  });

  // Fetch from backend if live, else keep initialized items
  useEffect(() => {
    async function loadFeatured() {
      try {
        const apiBase = import.meta.env.VITE_API_URL || '';
        const res = await fetch(`${apiBase}/api/menu`);
        if (res.ok) {
          const data = await res.json();
          if (data.success && Array.isArray(data.data) && data.data.length > 0) {
            const popular = data.data.filter((item) => item.isPopular).slice(0, 8);
            setFeaturedDishes(popular.length > 0 ? popular : data.data.slice(0, 8));
          }
        }
      } catch (err) {
        console.warn('Backend unavailable, using local menu data:', err.message);
      }
    }
    loadFeatured();
  }, []);

  return (
    <div className="min-h-screen bg-transparent text-[#F5F5F5] flex flex-col font-sans selection:bg-[#EA580C] selection:text-white">
      {/* Sticky Navigation */}
      <Navbar />

      <main className="flex-1">
        {/* 1. HERO SECTION */}
        <section className="bg-black/25 pt-12 pb-16 sm:pt-16 sm:pb-20 px-4 sm:px-6 lg:px-8 border-b border-stone-800/80">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Left Column: Headline & Action CTAs */}
              <div className="lg:col-span-7 space-y-5">
                {/* Brand Identity Eyebrow */}
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-zinc-900 border border-zinc-800 p-1.5 flex items-center justify-center shrink-0">
                    <img
                      src={storeLogo}
                      alt="Spice & Slice Logo"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#EA580C] block font-['Outfit']">
                      Spice &amp; Slice Loughborough
                    </span>
                    <span className="text-[11px] text-zinc-400">
                      Authentic Indian Street Kitchen · LE11 4LQ
                    </span>
                  </div>
                </div>

                {/* Clean Badges */}
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs font-medium">
                    <span>Loughborough Street Kitchen</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs font-medium">
                    <span>Pure Veg, Vegan &amp; Artisan Slices</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs font-medium">
                    <span>Hot Takeaway Collection</span>
                  </span>
                </div>

                {/* Bold, Clean Headline */}
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight font-['Outfit'] leading-tight">
                  True Flavours of{' '}
                  <span className="text-[#EA580C]">
                    India
                  </span>{' '}
                  in Loughborough
                </h1>

                {/* Subtitle / Food Philosophy */}
                <p className="text-sm sm:text-base text-[#9CA3AF] leading-relaxed max-w-2xl font-normal">
                  Welcome to <strong>Spice &amp; Slice</strong> — an authentic Indian street food takeaway located at <strong>60 Wordsworth Rd, Loughborough, LE11 4LQ</strong>. From Mumbai chaat and high-flame Indo-Chinese wok specialties to slow-cooked signature curries and stone-baked artisan pizzas, we craft every dish fresh to order with pure heritage spices.
                </p>

                {/* Primary Action Buttons */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <Link
                    to="/menu"
                    className="py-3 px-6 rounded-xl bg-[#EA580C] hover:bg-[#C2410C] text-white font-semibold text-sm flex items-center gap-2 transition-colors"
                  >
                    <Utensils className="w-4 h-4" />
                    <span>View Our 62+ Dish Menu</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <Link
                    to="/contact"
                    className="py-3 px-5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-200 font-medium text-sm border border-zinc-800 flex items-center gap-2 transition-colors"
                  >
                    <MapPin className="w-4 h-4 text-[#EA580C]" />
                    <span>Find Location &amp; Hours</span>
                  </Link>
                </div>

                {/* Direct Ordering Notice */}
                <div className="p-4 rounded-xl bg-[#161616]/95 border border-stone-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 max-w-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-[#EA580C] shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-[11px] font-semibold uppercase text-zinc-400 tracking-wider">
                        Takeaway Pre-Orders
                      </h4>
                      <a href="tel:+447553343676" className="text-sm font-bold text-white hover:text-orange-400 font-mono transition-colors">
                        07553 343676
                      </a>
                    </div>
                  </div>
                  <div className="text-xs text-zinc-400 sm:text-right">
                    <span className="text-emerald-400 font-medium block">Fresh Prep: 15–20 Mins</span>
                    <span>Ready for pickup hot</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Visual Highlight Hero Card */}
              <div className="lg:col-span-5">
                <div className="rounded-2xl bg-[#161616]/95 backdrop-blur-sm border border-stone-800 p-6 sm:p-7 space-y-5">
                  {/* Official Storefront Identity Header */}
                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 pb-5 border-b border-zinc-800 text-center sm:text-left">
                    <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-zinc-900 border border-zinc-800 p-2.5 flex items-center justify-center shrink-0">
                      <img
                        src={storeLogo}
                        alt="Spice & Slice — True Flavours of India"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="space-y-1">
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-zinc-900 border border-zinc-800 text-[11px] font-semibold text-zinc-300">
                        <span className="w-2 h-2 rounded-full bg-emerald-500" />
                        <span>Takeaway &amp; Collection</span>
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-white font-['Outfit'] mt-1">
                        Spice &amp; Slice
                      </h3>
                      <p className="text-xs text-[#9CA3AF]">
                        60 Wordsworth Rd, Loughborough LE11 4LQ
                      </p>
                      <span className="text-[11px] text-zinc-400 block font-medium">
                        Pure Veg, Street Food &amp; Artisan Slices
                      </span>
                    </div>
                  </div>

                  {/* Highlights Checklist */}
                  <ul className="space-y-4 text-xs text-zinc-300">
                    <li className="flex items-start gap-3">
                      <span className="text-lg shrink-0">🥘</span>
                      <div>
                        <strong className="text-white block font-semibold text-xs">100% Pure Vegetarian &amp; Vegan Specialists</strong>
                        <span className="text-[#9CA3AF]">Authentic recipes prepared with dedicated utensils, fresh ground masalas, and zero compromise on dietary principles.</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-lg shrink-0">🔥</span>
                      <div>
                        <strong className="text-white block font-semibold text-xs">High-Flame Indo-Chinese Sizzles</strong>
                        <span className="text-[#9CA3AF]">Crispy Veg Manchurian, Chilli Paneer, and Hakka Schezwan noodles wok-tossed with fresh crunchy aromatics.</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-lg shrink-0">🍕</span>
                      <div>
                        <strong className="text-white block font-semibold text-xs">Artisan Stone-Baked Pizzas</strong>
                        <span className="text-[#9CA3AF]">Crispy Italian-style bases topped with vibrant Desi tandoori paneer tikka, fresh herbs, and bubbly mozzarella.</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-lg shrink-0">🛍️</span>
                      <div>
                        <strong className="text-white block font-semibold text-xs">Rapid Takeaway Collection</strong>
                        <span className="text-[#9CA3AF]">Ring ahead on 07553 343676 for fast collection. Food is packaged boiling hot and ready in 15–20 minutes.</span>
                      </div>
                    </li>
                  </ul>

                  {/* Quick Action Footer */}
                  <div className="pt-3 border-t border-zinc-800 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-zinc-400 block">Direct Inquiries:</span>
                      <a href="tel:+447553343676" className="text-xs font-semibold text-white hover:text-orange-400 font-mono">
                        07553 343676
                      </a>
                    </div>
                    <Link
                      to="/contact"
                      className="px-3.5 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-xs font-medium text-zinc-300 hover:text-white border border-zinc-800 transition-colors flex items-center gap-1.5"
                    >
                      <span>Directions</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. FEATURED DISHES HIGHLIGHTS GRID */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-400 text-xs font-medium mb-2">
                <Flame className="w-3.5 h-3.5 text-[#EA580C]" />
                <span>Chef Specials &bull; Most Popular Dishes</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-['Outfit'] tracking-tight">
                Signature Dishes We're Famous For
              </h2>
              <p className="text-xs sm:text-sm text-[#9CA3AF] mt-1 max-w-xl">
                Handcrafted daily from whole spices and authentic recipes. View our structured brochure menu to explore all 62 dishes across 9 official categories.
              </p>
            </div>

            <Link
              to="/menu"
              className="inline-flex items-center gap-2 text-xs font-semibold text-[#EA580C] hover:text-orange-400 transition-colors"
            >
              <span>Explore All 62 Dishes</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Dishes Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {featuredDishes.map((dish) => {
              const price = Number(dish.basePrice || 0);
              return (
                <div
                  key={dish._id || dish.name}
                  className="bg-[#161616]/95 backdrop-blur-sm border border-stone-800 hover:border-stone-700 rounded-xl p-4 flex flex-col justify-between transition-colors"
                >
                  <div>
                    {/* Badges */}
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-[10px] font-semibold uppercase text-zinc-400 bg-zinc-900 px-2 py-0.5 rounded border border-zinc-800">
                        {dish.category}
                      </span>
                      {dish.spiceLevel > 0 && (
                        <span className="text-xs" title={`Spice Level ${dish.spiceLevel}`}>
                          {Array.from({ length: dish.spiceLevel }).map((_, i) => '🌶️').join('')}
                        </span>
                      )}
                    </div>

                    <h3 className="text-base font-bold text-white group-hover:text-orange-400 transition-colors font-['Outfit']">
                      {dish.name}
                    </h3>

                    <p className="text-xs text-[#9CA3AF] mt-1.5 line-clamp-3 leading-relaxed">
                      {dish.description}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-zinc-800/80 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-zinc-500 uppercase font-medium block">Price</span>
                      <span className="text-base font-bold text-white font-['Outfit']">£{price.toFixed(2)}</span>
                    </div>

                    <Link
                      to="/menu"
                      className="px-3 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800 text-xs font-medium transition-colors"
                    >
                      View on Menu
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* 3. STORY & FOOD PHILOSOPHY SECTION */}
        <section className="py-16 bg-[#161616]/90 backdrop-blur-sm border-t border-b border-stone-800 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Left Column: Food Philosophy Visual Cards */}
              <div className="lg:col-span-5 space-y-3.5">
                <div className="rounded-xl bg-[#18181b]/95 border border-stone-800 p-5 space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-xl">
                      🫓
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white font-['Outfit']">
                        Zero Frozen Short-cuts
                      </h4>
                      <p className="text-xs text-zinc-400">Fresh dough, fresh paneer, ground whole spices</p>
                    </div>
                  </div>
                  <p className="text-xs text-[#9CA3AF] leading-relaxed">
                    Unlike standard takeaways using pre-mixed commercial curry pastes and frozen bases, every sauce, tarka tempering, and naan dough at Spice &amp; Slice is prepared fresh in our Loughborough kitchen.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="p-4 rounded-xl bg-[#18181b]/95 border border-stone-800 text-center space-y-0.5">
                    <span className="text-2xl font-bold text-white font-['Outfit'] block">
                      62
                    </span>
                    <span className="text-xs font-semibold text-zinc-300 block">Authentic Dishes</span>
                    <span className="text-[11px] text-zinc-500 block">9 Official Categories</span>
                  </div>

                  <div className="p-4 rounded-xl bg-[#18181b]/95 border border-stone-800 text-center space-y-0.5">
                    <span className="text-2xl font-bold text-white font-['Outfit'] block">
                      15m
                    </span>
                    <span className="text-xs font-semibold text-zinc-300 block">Avg Prep Time</span>
                    <span className="text-[11px] text-zinc-500 block">Boiling Hot Pickup</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Story Text */}
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-400 text-xs font-medium">
                  <span>The Spice &amp; Slice Food Philosophy</span>
                </div>

                <h2 className="text-2xl sm:text-4xl font-bold text-white font-['Outfit'] tracking-tight leading-snug">
                  Born from Real Street Heritage &amp; Culinary Passion
                </h2>

                <p className="text-xs sm:text-sm text-[#9CA3AF] leading-relaxed">
                  Spice &amp; Slice was founded with a singular ambition: bringing authentic, unapologetic Indian street food and stone-baked artisan pizzas to Loughborough.
                </p>

                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  Located at <strong>60 Wordsworth Road, Loughborough</strong>, our kitchen marries two beloved culinary worlds. On one side, high-temperature wok burners produce fiery Hakka noodles, crispy Manchurian, and slow-simmered homestyle curries. On the other side, an artisan stone oven bakes crisp, bubbly pizzas infused with aromatic tandoori spices.
                </p>

                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <Link
                    to="/menu"
                    className="py-2.5 px-5 rounded-xl bg-[#EA580C] hover:bg-[#C2410C] text-white font-semibold text-xs transition-colors"
                  >
                    View Our Full Menu &rarr;
                  </Link>

                  <Link
                    to="/contact"
                    className="py-2.5 px-5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800 text-xs font-medium transition-colors"
                  >
                    Find Our Location (60 Wordsworth Rd)
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. CALL TO ACTION STRIP */}
        <section className="py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="rounded-2xl bg-[#161616]/95 backdrop-blur-sm border border-stone-800 p-8 sm:p-10 text-center space-y-3.5">
            <span className="text-2xl block">🌶️ 🍕</span>
            <h2 className="text-xl sm:text-3xl font-bold text-white font-['Outfit']">
              Ready for Pure Indian Flavours?
            </h2>
            <p className="text-xs sm:text-sm text-[#9CA3AF] max-w-xl mx-auto">
              Call us directly for fast collection at <strong>60 Wordsworth Rd, Loughborough, LE11 4LQ</strong>. Freshly cooked, boiling hot, and packed with authentic street spices.
            </p>
            <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
              <Link
                to="/menu"
                className="py-2.5 px-6 rounded-xl bg-[#EA580C] hover:bg-[#C2410C] text-white font-semibold text-xs transition-colors"
              >
                Browse Full Menu
              </Link>
              <a
                href="tel:+447553343676"
                className="py-2.5 px-5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-200 font-medium text-xs border border-zinc-800 transition-colors flex items-center gap-2"
              >
                <Phone className="w-3.5 h-3.5 text-[#EA580C]" />
                <span>Call Kitchen: 07553 343676</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
