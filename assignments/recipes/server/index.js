import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import router from './routes/recipesRouter.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8082;

// middleware
app.use(cors());
app.use(express.json()); // For parsing JSON bodies
app.use(express.urlencoded({ extended: true })); // For parsing URL-encoded bodies (HTML forms)

// connect to mongodb
const startServer = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log('DB connected');
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error('DB connection failed', err);
    process.exit(1);
  }
};

// start server
startServer();

// routes
app.use('/recipe', router);

// catch-all
app.use((req, res, next) => {
  res.status(404).json({ message: 'Not Found' });
});

// exit server (optional?)
process.on('SIGINT', async () => {
  console.log('Shutting down server...');
  await mongoose.disconnect();
  process.exit(0);
});
