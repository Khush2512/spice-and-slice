import express from 'express';
import MenuItem from '../models/MenuItem.js';

export default function createMenuRouter(io) {
  const router = express.Router();

  // GET /api/menu - Get all menu items grouped or filtered by category
  router.get('/', async (req, res) => {
    try {
      const { category, search, veganOnly, glutenFriendlyOnly } = req.query;
      const filter = {};

      if (category && category !== 'All') {
        filter.category = category;
      }

      if (search) {
        filter.$or = [
          { name: { $regex: search, $options: 'i' } },
          { description: { $regex: search, $options: 'i' } },
        ];
      }

      if (veganOnly === 'true') {
        filter.isVegan = true;
      }

      if (glutenFriendlyOnly === 'true') {
        filter.isGlutenFriendly = true;
      }

      const items = await MenuItem.find(filter).sort({ category: 1, isPopular: -1, name: 1 });
      return res.json({
        success: true,
        count: items.length,
        data: items,
      });
    } catch (error) {
      console.error('Error fetching menu items:', error);
      return res.status(500).json({ success: false, message: 'Server error fetching menu', error: error.message });
    }
  });

  // GET /api/menu/:id - Get a single menu item
  router.get('/:id', async (req, res) => {
    try {
      const item = await MenuItem.findById(req.params.id);
      if (!item) {
        return res.status(404).json({ success: false, message: 'Menu item not found' });
      }
      return res.json({ success: true, data: item });
    } catch (error) {
      console.error('Error fetching menu item:', error);
      return res.status(500).json({ success: false, message: 'Server error', error: error.message });
    }
  });

  // PATCH /api/menu/:id/toggle - Toggle item stock availability (on/off)
  router.patch('/:id/toggle', async (req, res) => {
    try {
      const item = await MenuItem.findById(req.params.id);
      if (!item) {
        return res.status(404).json({ success: false, message: 'Menu item not found' });
      }

      item.isAvailable = req.body.isAvailable !== undefined ? Boolean(req.body.isAvailable) : !item.isAvailable;
      const updatedItem = await item.save();

      // Broadcast real-time stock change to connected clients
      if (io) {
        io.emit('menu:itemUpdated', updatedItem);
        console.log(`[Socket.io] Broadcasted menu:itemUpdated for ${updatedItem.name} (isAvailable: ${updatedItem.isAvailable})`);
      }

      return res.json({
        success: true,
        message: `${updatedItem.name} is now ${updatedItem.isAvailable ? 'In Stock' : 'Marked Sold Out'}`,
        data: updatedItem,
      });
    } catch (error) {
      console.error('Error toggling menu item availability:', error);
      return res.status(500).json({ success: false, message: 'Server error', error: error.message });
    }
  });

  return router;
}
