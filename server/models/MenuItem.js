import mongoose from 'mongoose';

const optionChoiceSchema = new mongoose.Schema({
  name: { type: String, required: true },
  priceModifier: { type: Number, default: 0 },
}, { _id: false });

const optionGroupSchema = new mongoose.Schema({
  name: { type: String, required: true }, // e.g. "Preparation" or "Pizza Size"
  type: { type: String, enum: ['SINGLE_CHOICE', 'MULTI_CHOICE'], default: 'SINGLE_CHOICE' },
  required: { type: Boolean, default: true },
  choices: [optionChoiceSchema],
}, { _id: false });

const menuItemSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  category: {
    type: String,
    required: true,
    enum: [
      'THE DESI WOK',
      'SIGNATURE INDIAN CURRIES',
      'BOMBAY STREET BITES',
      'BOMBAY TOAST & SANDWICHES',
      'MASALA CRUNCH CLUB',
      'NAAN-SENSE (INDIAN BREAD)',
      'PIZZA WITH A TWIST (12")',
      'RICE & BIRYANI',
      'ROLLS, WRAPS & FRANKIES',
    ],
  },
  description: { type: String, default: '' },
  basePrice: { type: Number, required: true, min: 0 },
  spiceLevel: { type: Number, default: 1, min: 0, max: 3 }, // 0: Mild, 1: Medium, 2: Spicy, 3: Extra Hot
  isVegetarian: { type: Boolean, default: true },
  isVegan: { type: Boolean, default: false },
  isGlutenFriendly: { type: Boolean, default: false },
  allergens: [{ type: String }], // 'Gluten', 'Dairy', 'Soy', 'Nuts', 'Mustard', 'Sesame'
  isAvailable: { type: Boolean, default: true },
  isPopular: { type: Boolean, default: false },
  imageUrl: { type: String, default: '' },
  options: [optionGroupSchema],
}, {
  timestamps: true,
});

export const MenuItem = mongoose.model('MenuItem', menuItemSchema);
export default MenuItem;
