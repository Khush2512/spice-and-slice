import React, { useState, useEffect, useMemo } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CategoryNav from '../components/CategoryNav';
import MenuItemCard from '../components/MenuItemCard';
import AllergenMatrix from '../components/AllergenMatrix';
import { Phone, Clock, MapPin, AlertCircle } from 'lucide-react';
import { INITIAL_MENU_ITEMS, OFFICIAL_CATEGORIES } from '../data/menuData';

export default function MenuPage() {
  const [menuItems, setMenuItems] = useState(INITIAL_MENU_ITEMS);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Filters & State
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [filterVeganOnly, setFilterVeganOnly] = useState(false);
  const [filterVegOnly, setFilterVegOnly] = useState(false);
  const [filterSpicyOnly, setFilterSpicyOnly] = useState(false);
  const [filterGlutenFriendlyOnly, setFilterGlutenFriendlyOnly] = useState(false);

  // Fetch menu from backend if available (sync real-time availability/updates)
  useEffect(() => {
    async function loadMenu() {
      try {
        const apiBase = import.meta.env.VITE_API_URL || '';
        const res = await fetch(`${apiBase}/api/menu`);
        if (res.ok) {
          const data = await res.json();
          if (data.success && Array.isArray(data.data) && data.data.length > 0) {
            setMenuItems(data.data);
          }
        }
      } catch (err) {
        console.warn('Backend menu fetch warning (using verified local menuData):', err.message);
      }
    }
    loadMenu();
  }, []);

  // Filtered menu calculation
  const filteredMenuItems = useMemo(() => {
    return menuItems.filter((item) => {
      // Category filter
      if (activeCategory !== 'All' && item.category !== activeCategory) {
        return false;
      }
      // Search filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = item.name?.toLowerCase().includes(q);
        const matchesDesc = item.description?.toLowerCase().includes(q);
        const matchesCat = item.category?.toLowerCase().includes(q);
        if (!matchesName && !matchesDesc && !matchesCat) return false;
      }
      // Vegan filter
      if (filterVeganOnly && !item.isVegan) {
        return false;
      }
      // Pure Veg filter
      if (filterVegOnly && !item.isVegetarian) {
        return false;
      }
      // Spice level filter (Level 2 or 3)
      if (filterSpicyOnly && (!item.spiceLevel || item.spiceLevel < 2)) {
        return false;
      }
      // Gluten-friendly filter
      if (filterGlutenFriendlyOnly && !item.isGlutenFriendly) {
        return false;
      }
      return true;
    });
  }, [
    menuItems,
    activeCategory,
    searchQuery,
    filterVeganOnly,
    filterVegOnly,
    filterSpicyOnly,
    filterGlutenFriendlyOnly,
  ]);

  // Group strictly by the 9 official categories in predetermined order
  const groupedCategories = useMemo(() => {
    if (activeCategory !== 'All' || searchQuery.trim()) {
      return null;
    }
    const groups = {};
    // Pre-initialize strictly in official order
    OFFICIAL_CATEGORIES.forEach((cat) => {
      groups[cat] = [];
    });

    filteredMenuItems.forEach((item) => {
      if (groups[item.category]) {
        groups[item.category].push(item);
      } else {
        if (!groups[item.category]) groups[item.category] = [];
        groups[item.category].push(item);
      }
    });

    // Remove empty categories if any filters are active
    const cleanGroups = {};
    OFFICIAL_CATEGORIES.forEach((cat) => {
      if (groups[cat] && groups[cat].length > 0) {
        cleanGroups[cat] = groups[cat];
      }
    });

    return cleanGroups;
  }, [filteredMenuItems, activeCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-transparent text-[#F5F5F5] flex flex-col font-sans selection:bg-[#EA580C] selection:text-white">
      {/* Sticky Navigation */}
      <Navbar />

      <main className="flex-1 pb-16">
        {/* Menu Hero Header */}
        <section className="bg-[#161616]/90 backdrop-blur-sm py-8 sm:py-10 px-4 sm:px-6 lg:px-8 border-b border-stone-800">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-400 text-xs font-medium">
                <span>62 Authentic Handcrafted Dishes</span>
              </div>
              <h1 className="text-2xl sm:text-4xl font-bold text-white font-['Outfit'] tracking-tight">
                Authentic Takeaway Menu
              </h1>
              <p className="text-xs sm:text-sm text-[#9CA3AF] max-w-xl font-normal leading-relaxed">
                Explore our view-only culinary showcase: sizzling Indo-Chinese wok specialties, Mumbai street chaat, slow-simmered curries, fresh naans, and stone-baked pizzas across 9 official categories. Freshly prepared to order in Loughborough.
              </p>
            </div>

            {/* Quick Takeaway Info Box */}
            <div className="p-3.5 rounded-xl bg-[#161616]/95 border border-stone-800 text-xs space-y-1.5 shrink-0">
              <div className="flex items-center gap-2 text-zinc-300 font-medium">
                <Clock className="w-4 h-4 text-[#EA580C]" />
                <span>Takeaway Prep: 15–20 Mins</span>
              </div>
              <div className="flex items-center gap-2 text-zinc-400">
                <MapPin className="w-4 h-4 text-zinc-500" />
                <span>60 Wordsworth Rd, Loughborough LE11 4LQ</span>
              </div>
              <div className="flex items-center gap-2 text-zinc-300">
                <Phone className="w-4 h-4 text-emerald-500" />
                <a href="tel:+447553343676" className="hover:text-white font-mono font-medium">
                  07553 343676
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Sticky Category Tabs & Search Bar */}
        <CategoryNav
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          filterVeganOnly={filterVeganOnly}
          setFilterVeganOnly={setFilterVeganOnly}
          filterVegOnly={filterVegOnly}
          setFilterVegOnly={setFilterVegOnly}
          filterSpicyOnly={filterSpicyOnly}
          setFilterSpicyOnly={setFilterSpicyOnly}
          filterGlutenFriendlyOnly={filterGlutenFriendlyOnly}
          setFilterGlutenFriendlyOnly={setFilterGlutenFriendlyOnly}
        />

        {/* Menu Items Grid Showcase */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          {loading ? (
            <div className="py-20 text-center">
              <div className="w-10 h-10 border-2 border-[#EA580C] border-t-transparent rounded-full animate-spin mx-auto mb-3" />
              <h3 className="text-base font-semibold text-white">Loading Menu...</h3>
            </div>
          ) : filteredMenuItems.length === 0 ? (
            <div className="py-20 text-center bg-[#161616]/95 rounded-2xl border border-stone-800 p-8 max-w-md mx-auto">
              <span className="text-3xl block mb-2">🔍</span>
              <h3 className="text-base font-bold text-white">No dishes matched your filters</h3>
              <p className="text-xs text-zinc-400 mt-1">
                Try clearing your search query or resetting dietary filters to view all dishes.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('All');
                  setFilterVeganOnly(false);
                  setFilterVegOnly(false);
                  setFilterSpicyOnly(false);
                  setFilterGlutenFriendlyOnly(false);
                }}
                className="mt-4 px-4 py-2 rounded-lg bg-[#EA580C] text-white text-xs font-semibold hover:bg-[#C2410C] transition-colors"
              >
                Show All Dishes
              </button>
            </div>
          ) : groupedCategories ? (
            /* Grouped strictly by 9 official categories in exact order */
            <div className="space-y-12">
              {Object.entries(groupedCategories).map(([categoryName, items], idx) => (
                <section key={categoryName} id={categoryName.replace(/[^a-zA-Z0-9]+/g, '-').toLowerCase()} className="space-y-4 scroll-mt-36">
                  <div className="flex items-center justify-between border-b border-zinc-800 pb-2.5">
                    <div className="flex items-center gap-2.5">
                      <span className="w-6 h-6 rounded bg-zinc-900 border border-zinc-800 text-zinc-400 flex items-center justify-center text-xs font-bold">
                        {idx + 1}
                      </span>
                      <h2 className="text-xl sm:text-2xl font-bold text-white font-['Outfit'] tracking-tight">
                        {categoryName}
                      </h2>
                    </div>
                    <span className="text-xs text-zinc-400 font-medium bg-zinc-900 px-2 py-0.5 rounded border border-zinc-800">
                      {items.length} {items.length === 1 ? 'Dish' : 'Dishes'}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {items.map((item) => (
                      <MenuItemCard key={item._id || item.name} item={item} />
                    ))}
                  </div>
                </section>
              ))}
            </div>
          ) : (
            /* Single filtered list (active category or active search query) */
            <div>
              <div className="flex items-center justify-between mb-5 pb-2 border-b border-zinc-800">
                <h2 className="text-xl font-bold text-white font-['Outfit']">
                  {activeCategory === 'All' ? `Search Results ("${searchQuery}")` : activeCategory}
                </h2>
                <span className="text-xs text-zinc-400 font-medium bg-zinc-900 px-2.5 py-0.5 rounded border border-zinc-800">
                  Showing {filteredMenuItems.length} dishes
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {filteredMenuItems.map((item) => (
                  <MenuItemCard key={item._id || item.name} item={item} />
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Allergen Trust Matrix Section */}
        <AllergenMatrix />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
