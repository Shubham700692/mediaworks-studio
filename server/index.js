require("dotenv").config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');


const contactRouter = require('./routes/contact');

const app = express();
const PORT = process.env.PORT || 5000;



mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log("Database Connected Successfully"))
  .catch((err) => console.log("Database Connection Failed", err));

// Middleware
app.use(cors({ origin: process.env.CLIENT_URL || 'http://localhost:3000' }));
app.use(express.json());
console.log("MONGO:", process.env.MONGODB_URI);
// API Routes
const buildPath = path.join(__dirname, '../client/build');
app.use(express.static(buildPath));
app.use('/api/contact', contactRouter);


// Health check
app.get('/api/health', (req, res) => res.json({ status: 'ok', time: new Date() }));

// Serve React build in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
 app.get('*', (req, res) => {
  res.sendFile(path.join(buildPath, 'index.html'), (err) => {
    if (err) {
      // If index.html is missing, send a JSON error instead of letting it crash
      res.status(500).json({ error: "Frontend build files missing on server." });
    }
  });
});
}


app.listen(PORT, () => console.log(`🎬 MediaWorks server running on port ${PORT}`));
