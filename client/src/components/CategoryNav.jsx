import React from 'react';
import { Search, X } from 'lucide-react';

export const OFFICIAL_CATEGORIES_LIST = [
  { id: 'All', name: 'All Dishes', icon: '✨' },
  { id: 'THE DESI WOK', name: 'The Desi Wok', icon: '🍜' },
  { id: 'SIGNATURE INDIAN CURRIES', name: 'Signature Curries', icon: '🍛' },
  { id: 'BOMBAY STREET BITES', name: 'Bombay Street Bites', icon: '🥘' },
  { id: 'BOMBAY TOAST & SANDWICHES', name: 'Bombay Toast & Sandwiches', icon: '🥪' },
  { id: 'MASALA CRUNCH CLUB', name: 'Masala Crunch Club', icon: '🍟' },
  { id: 'NAAN-SENSE (INDIAN BREAD)', name: 'Naan-Sense (Breads)', icon: '🫓' },
  { id: 'PIZZA WITH A TWIST (12")', name: 'Pizza with a Twist (12")', icon: '🍕' },
  { id: 'RICE & BIRYANI', name: 'Rice & Biryani', icon: '🍚' },
  { id: 'ROLLS, WRAPS & FRANKIES', name: 'Rolls, Wraps & Frankies', icon: '🌯' },
];

export default function CategoryNav({
  activeCategory,
  setActiveCategory,
  searchQuery,
  setSearchQuery,
  filterVeganOnly,
  setFilterVeganOnly,
  filterVegOnly,
  setFilterVegOnly,
  filterSpicyOnly,
  setFilterSpicyOnly,
  filterGlutenFriendlyOnly,
  setFilterGlutenFriendlyOnly,
}) {
  const hasActiveFilters = filterVeganOnly || filterVegOnly || filterSpicyOnly || filterGlutenFriendlyOnly;

  return (
    <div id="menu" className="w-full bg-[#121212]/95 backdrop-blur-md sticky top-[104px] z-30 pt-3 pb-2 border-b border-stone-800 scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
        {/* Search Bar & Dietary Filter Pills */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
          {/* Search bar */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search dishes (e.g. Manchurian, Pav Bhaji, Biryani, Pizza)..."
              className="w-full pl-9 pr-8 py-2 bg-zinc-900 border border-zinc-800 rounded-lg text-xs sm:text-sm text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-zinc-700 transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-white"
                title="Clear search"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Dietary Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1 md:pb-0">
            {/* Vegan Pill */}
            <button
              onClick={() => setFilterVeganOnly(!filterVeganOnly)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors border flex items-center gap-1 ${
                filterVeganOnly
                  ? 'bg-zinc-800 text-emerald-400 border-zinc-700 font-semibold'
                  : 'bg-zinc-900 text-zinc-400 border-zinc-800 hover:text-zinc-200'
              }`}
            >
              <span>🌱 Vegan</span>
            </button>

            {/* Pure Veg Pill */}
            <button
              onClick={() => setFilterVegOnly(!filterVegOnly)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors border flex items-center gap-1 ${
                filterVegOnly
                  ? 'bg-zinc-800 text-green-400 border-zinc-700 font-semibold'
                  : 'bg-zinc-900 text-zinc-400 border-zinc-800 hover:text-zinc-200'
              }`}
            >
              <span>🥬 Pure Veg</span>
            </button>

            {/* Spice Level Pill */}
            <button
              onClick={() => setFilterSpicyOnly(!filterSpicyOnly)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors border flex items-center gap-1 ${
                filterSpicyOnly
                  ? 'bg-zinc-800 text-red-400 border-zinc-700 font-semibold'
                  : 'bg-zinc-900 text-zinc-400 border-zinc-800 hover:text-zinc-200'
              }`}
            >
              <span>🌶️ Hot &amp; Spicy</span>
            </button>

            {/* Gluten-Friendly Pill */}
            <button
              onClick={() => setFilterGlutenFriendlyOnly(!filterGlutenFriendlyOnly)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors border flex items-center gap-1 ${
                filterGlutenFriendlyOnly
                  ? 'bg-zinc-800 text-sky-400 border-zinc-700 font-semibold'
                  : 'bg-zinc-900 text-zinc-400 border-zinc-800 hover:text-zinc-200'
              }`}
            >
              <span>🌾 Gluten-Friendly</span>
            </button>

            {hasActiveFilters && (
              <button
                onClick={() => {
                  setFilterVeganOnly(false);
                  setFilterVegOnly(false);
                  setFilterSpicyOnly(false);
                  setFilterGlutenFriendlyOnly(false);
                }}
                className="px-2 py-1.5 rounded-lg text-xs text-zinc-400 hover:text-white underline underline-offset-2 whitespace-nowrap font-medium"
              >
                Reset
              </button>
            )}
          </div>
        </div>

        {/* Horizontal Category Navigation Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1.5 no-scrollbar">
          {OFFICIAL_CATEGORIES_LIST.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs whitespace-nowrap transition-colors ${
                  isActive
                    ? 'bg-[#EA580C] text-white font-semibold'
                    : 'bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-zinc-800 font-medium'
                }`}
              >
                <span>{cat.icon}</span>
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
