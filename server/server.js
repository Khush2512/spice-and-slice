import express from 'express';
import http from 'http';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import createMenuRouter from './routes/menu.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const server = http.createServer(app);

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/spice_and_slice';

// Middleware
const allowedOrigins = process.env.CLIENT_URL
  ? [process.env.CLIENT_URL, 'http://localhost:5173', 'http://localhost:3000']
  : true;

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
  })
);
app.use(express.json());

// Mount routes — menu only (brochure mode, no ordering)
app.use('/api/menu', createMenuRouter(null));

// Health check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    service: 'Spice & Slice — Brochure API',
    address: '60 Wordsworth Rd, Loughborough LE11 4LQ',
    telephone: '07553 343676',
    mongoStatus: mongoose.connection.readyState === 1 ? 'connected' : 'disconnected',
    environment: process.env.NODE_ENV || 'development',
    timestamp: new Date().toISOString(),
  });
});

// Production: Serve static client build if client/dist exists (Monolithic / Render / Railway option)
const clientDistPath = path.resolve(__dirname, '../client/dist');
if (fs.existsSync(clientDistPath)) {
  app.use(express.static(clientDistPath));
  app.get('*', (req, res, next) => {
    if (req.path.startsWith('/api')) return next();
    res.sendFile(path.join(clientDistPath, 'index.html'));
  });
}

// Connect to MongoDB and start server
async function startServer() {
  try {
    console.log(`Connecting to MongoDB at: ${MONGO_URI.replace(/\/\/[^:]+:[^@]+@/, '//***:***@')}`);
    await mongoose.connect(MONGO_URI);
    console.log('MongoDB connected (spice_and_slice)');
  } catch (error) {
    console.warn('MongoDB connection notice (brochure fallback available):', error.message);
  }

  server.listen(PORT, () => {
    console.log(`🌶️  Spice & Slice Brochure API running → http://localhost:${PORT}`);
  });
}

startServer();

export { app, server };
