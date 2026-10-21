import React from 'react';
import { AlertTriangle, ShieldCheck, Phone } from 'lucide-react';

const ALLERGEN_ITEMS = [
  {
    code: 'GLU',
    name: 'Gluten / Wheat',
    icon: '🌾',
    commonIn: 'Naans, Pav Buns, Noodles, Spring Rolls, Samosa pastry, Pizzas',
  },
  {
    code: 'MLK',
    name: 'Milk / Dairy',
    icon: '🥛',
    commonIn: 'Paneer dishes, Butter Naan, Pav Bhaji butter, Cheese Toast, Pizzas, Kofta',
  },
  {
    code: 'NUT',
    name: 'Tree Nuts & Peanuts',
    icon: '🥜',
    commonIn: 'Dabeli (Peanuts), Makhani Gravy, Malai Kofta, Dum Biryani',
  },
  {
    code: 'SOY',
    name: 'Soy / Soya',
    icon: '🫘',
    commonIn: 'Manchurian sauce, Chilli Paneer, Fried Rice, Hakka Noodles, Soya Mince',
  },
  {
    code: 'SES',
    name: 'Sesame',
    icon: '🌱',
    commonIn: 'Chinese bhel, Spring rolls, Veg Kolhapuri coconut-sesame masala',
  },
  {
    code: 'MUS',
    name: 'Mustard',
    icon: '🌿',
    commonIn: 'Tarka Dal sizzle, Mogo Chilli tempering, Mumbai Vada batter',
  },
  {
    code: 'CEL',
    name: 'Celery',
    icon: '🥬',
    commonIn: 'Indo-Chinese sauces, Schezwan wok seasonings',
  },
  {
    code: 'SUL',
    name: 'Sulphites',
    icon: '🍷',
    commonIn: 'Piri-piri chip seasoning',
  },
];

export default function AllergenMatrix() {
  return (
    <section id="allergens" className="py-14 bg-[#161616]/90 backdrop-blur-sm border-t border-b border-stone-800 px-4 sm:px-6 lg:px-8 mt-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-400 text-xs font-medium mb-2">
            <ShieldCheck className="w-3.5 h-3.5 text-[#EA580C]" />
            <span>Food Safety &amp; Dietary Transparency</span>
          </div>
          <h2 className="text-xl sm:text-3xl font-bold text-white font-['Outfit']">
            Allergen &amp; Dietary Advisory
          </h2>
          <p className="text-xs sm:text-sm text-[#9CA3AF] mt-1.5">
            Every dish at Spice &amp; Slice is cooked fresh to order with pure authentic spices. We take food sensitivities and dietary principles with the highest integrity.
          </p>
        </div>

        {/* Allergen Matrix Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {ALLERGEN_ITEMS.map((allg) => (
            <div
              key={allg.code}
              className="p-3.5 rounded-xl bg-[#18181b] border border-zinc-800 flex items-start gap-3"
            >
              <span className="text-xl p-1.5 rounded-lg bg-zinc-900 border border-zinc-800 shrink-0">
                {allg.icon}
              </span>
              <div>
                <div className="flex items-center gap-1.5">
                  <h3 className="text-xs font-semibold text-white">{allg.name}</h3>
                  <span className="text-[10px] font-bold px-1 rounded bg-zinc-900 text-zinc-400 border border-zinc-800">
                    {allg.code}
                  </span>
                </div>
                <p className="text-[11px] text-[#9CA3AF] mt-1 leading-snug">
                  {allg.commonIn}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer Notice Banner */}
        <div className="mt-6 p-4 rounded-xl bg-[#18181b] border border-zinc-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-4 h-4 text-[#EA580C] shrink-0 mt-0.5" />
            <div className="text-xs text-zinc-300 space-y-0.5">
              <p className="font-semibold text-white">
                Kitchen Allergy Advisory:
              </p>
              <p className="text-[#9CA3AF] leading-relaxed">
                Although we operate dedicated preparation methods for Vegan and Gluten-Friendly items, our kitchen environment handles wheat flour, dairy paneer, tree nuts, and mustard seeds. If you have an acute allergy, please advise our duty chef directly before ordering.
              </p>
            </div>
          </div>

          <a
            href="tel:+447553343676"
            className="shrink-0 px-3.5 py-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-zinc-800 font-medium text-xs flex items-center gap-1.5 transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#EA580C]" />
            <span>Speak to Chef (07553 343676)</span>
          </a>
        </div>
      </div>
    </section>
  );
}
