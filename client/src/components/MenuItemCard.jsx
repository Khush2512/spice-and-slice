import React from 'react';
import { Sparkles, CheckCircle2, ShieldCheck } from 'lucide-react';

// Comprehensive allergen definitions matching UK Food Standards and Spice & Slice kitchen integrity
const ALLERGEN_MAP = {
  Gluten: { label: 'Wheat', fullLabel: 'Wheat / Gluten', icon: '🌾' },
  Wheat: { label: 'Wheat', fullLabel: 'Wheat / Gluten', icon: '🌾' },
  Dairy: { label: 'Milk', fullLabel: 'Milk / Dairy', icon: '🥛' },
  Milk: { label: 'Milk', fullLabel: 'Milk / Dairy', icon: '🥛' },
  Nuts: { label: 'Nuts', fullLabel: 'Tree Nuts / Peanuts', icon: '🥜' },
  Peanuts: { label: 'Nuts', fullLabel: 'Tree Nuts / Peanuts', icon: '🥜' },
  Soy: { label: 'Soy', fullLabel: 'Soy', icon: '🫘' },
  Soya: { label: 'Soy', fullLabel: 'Soy', icon: '🫘' },
  Sesame: { label: 'Sesame', fullLabel: 'Sesame', icon: '🌱' },
  Mustard: { label: 'Mustard', fullLabel: 'Mustard', icon: '🌿' },
  Celery: { label: 'Celery', fullLabel: 'Celery', icon: '🥬' },
  Sulphites: { label: 'Sulphites', fullLabel: 'Sulphites', icon: '🍷' },
};

/**
 * MenuItemCard — Clean, matte brochure dish card.
 * Displays title, description, authentic standard price, dietary tags, and comprehensive allergen trust badges.
 * ZERO cart buttons, buy icons, discount strikethroughs, or glowing effects.
 */
export default function MenuItemCard({ item }) {
  const isAvailable = item.isAvailable !== false;
  const price = Number(item.basePrice || 0);

  // Normalize allergen list to avoid duplicates (e.g., Gluten -> Wheat)
  const normalizedAllergens = React.useMemo(() => {
    if (!item.allergens || !Array.isArray(item.allergens)) return [];
    const seen = new Set();
    const result = [];
    item.allergens.forEach((alg) => {
      const match = ALLERGEN_MAP[alg] || {
        label: alg,
        fullLabel: alg,
        icon: '⚠️',
      };
      if (!seen.has(match.label)) {
        seen.add(match.label);
        result.push(match);
      }
    });
    return result;
  }, [item.allergens]);

  return (
    <article
      className={`relative bg-[#161616]/95 backdrop-blur-sm border ${
        isAvailable
          ? 'border-stone-800 hover:border-stone-700'
          : 'border-stone-800/40 opacity-60'
      } rounded-xl p-4 sm:p-5 flex flex-col justify-between transition-colors`}
    >
      {/* Top: Badges & Dietary Tags */}
      <div>
        <div className="flex items-center justify-between gap-2 mb-2.5">
          <div className="flex items-center gap-1.5 flex-wrap">
            {item.isPopular && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-semibold bg-zinc-900 text-amber-400 border border-zinc-800">
                <Sparkles className="w-2.5 h-2.5" /> Chef's Signature
              </span>
            )}

            {item.isVegan ? (
              <span className="inline-flex items-center gap-0.5 px-2 py-0.5 rounded text-[10px] font-medium bg-zinc-900 text-emerald-400 border border-zinc-800">
                🌱 Vegan
              </span>
            ) : item.isVegetarian ? (
              <span className="inline-flex items-center gap-0.5 px-2 py-0.5 rounded text-[10px] font-medium bg-zinc-900 text-green-400 border border-zinc-800">
                🥬 Pure Veg
              </span>
            ) : null}

            {item.isGlutenFriendly && (
              <span className="inline-flex items-center gap-0.5 px-2 py-0.5 rounded text-[10px] font-medium bg-zinc-900 text-sky-400 border border-zinc-800">
                🌾 Gluten-Friendly
              </span>
            )}
          </div>

          {/* Spice Level Indicator */}
          {item.spiceLevel > 0 && (
            <div
              className="flex items-center shrink-0 cursor-default"
              title={`Spice rating: ${item.spiceLevel} of 3`}
            >
              {Array.from({ length: item.spiceLevel }).map((_, i) => (
                <span key={i} className="text-xs">🌶️</span>
              ))}
            </div>
          )}
        </div>

        {/* Title */}
        <h3 className="text-base font-bold text-white font-['Outfit']">
          {item.name}
        </h3>

        {/* Description */}
        <p className="text-xs text-[#9CA3AF] mt-1.5 leading-relaxed font-normal">
          {item.description || 'Authentic traditional recipe prepared fresh to order in our Loughborough kitchen.'}
        </p>

        {/* Allergen Trust Badges */}
        <div className="mt-3.5 pt-2.5 border-t border-zinc-800/60">
          <div className="flex items-center gap-1.5 mb-1.5">
            <ShieldCheck className="w-3 h-3 text-zinc-500" />
            <span className="text-[10px] text-zinc-500 uppercase font-semibold tracking-wider">
              Allergens:
            </span>
          </div>

          {normalizedAllergens.length > 0 ? (
            <div className="flex items-center gap-1.5 flex-wrap">
              {normalizedAllergens.map((alg) => (
                <span
                  key={alg.label}
                  className="inline-flex items-center gap-1 text-[10px] font-medium px-1.5 py-0.5 rounded border border-zinc-800 bg-zinc-900 text-zinc-300"
                  title={`Contains ${alg.fullLabel}`}
                >
                  <span>{alg.icon}</span>
                  <span>{alg.label}</span>
                </span>
              ))}
            </div>
          ) : (
            <span className="inline-flex items-center gap-1 text-[10px] font-medium text-zinc-400 bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded">
              ✓ No Major Allergens Reported
            </span>
          )}
        </div>

        {/* Option Variations (View-Only Specifications) */}
        {item.options && item.options.length > 0 && (
          <div className="mt-2 pt-2 border-t border-zinc-800/40 flex flex-wrap gap-1.5">
            {item.options.map((opt) => (
              <span
                key={opt.name}
                className="text-[10px] font-medium bg-zinc-900 text-zinc-400 px-2 py-0.5 rounded border border-zinc-800"
              >
                <strong className="text-zinc-300">{opt.name}:</strong>{' '}
                {opt.choices.map((c) => c.name.split(' ')[0]).join(' · ')}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Bottom: Clear Authentic Pricing Display (Zero Purchase / Cart Buttons) */}
      <div className="mt-4 pt-3 border-t border-zinc-800 flex items-center justify-between gap-3">
        <div>
          <span className="text-[10px] text-zinc-500 uppercase font-medium block">
            Takeaway Price
          </span>
          <span className="text-lg font-bold text-white font-['Outfit']">
            £{price.toFixed(2)}
          </span>
        </div>

        <div>
          {!isAvailable ? (
            <span className="px-2 py-1 rounded bg-zinc-900 border border-zinc-800 text-zinc-500 text-[11px] font-medium">
              Sold Out
            </span>
          ) : (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800 text-zinc-300 text-[11px] font-medium">
              <CheckCircle2 className="w-3 h-3 text-emerald-500" />
              <span>Takeaway</span>
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
